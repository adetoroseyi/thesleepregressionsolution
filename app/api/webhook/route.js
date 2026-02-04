import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import crypto from 'crypto'

export const dynamic = 'force-dynamic'

const PRODUCT_FILES = {
  '18-month': {
    name: 'The 18-Month Sleep Regression Survival Guide',
    storagePath: 'ebooks/18_month_sleep_regression_survival_guide.pdf',
  },
  '2-year': {
    name: 'The 2-Year Sleep Regression Blueprint',
    storagePath: 'ebooks/2_year_sleep_regression_blueprint.pdf',
  },
  '3-year': {
    name: 'The 3-Year Sleep Regression Playbook',
    storagePath: 'ebooks/3_year_sleep_regression_playbook.pdf',
  },
  'working-parent': {
    name: 'The Working Parent Sleep Survival Guide',
    storagePath: 'ebooks/working_parent_sleep_survival_guide.pdf',
  },
  'bundle': {
    name: 'The Complete Sleep Regression Solution (All 4 Guides)',
    isBundle: true,
  },
}

const DOWNLOAD_EXPIRY_SECONDS = 15 * 24 * 60 * 60

function getClients() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const resend = new Resend(process.env.RESEND_API_KEY)
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
  return { stripe, resend, supabaseAdmin }
}

export async function POST(request) {
  const { stripe, resend, supabaseAdmin } = getClients()

  const body = await request.text()
  const sig = request.headers.get('stripe-signature')

  let event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message)
    return Response.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    )
  }

  console.log(`Received Stripe event: ${event.type}`)

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object

    try {
      await handleSuccessfulPayment(session, supabaseAdmin, resend)
      console.log('Payment handled successfully')
    } catch (error) {
      console.error('Error handling payment:', error.message, error.stack)
    }
  }

  return Response.json({ received: true })
}

async function handleSuccessfulPayment(session, supabaseAdmin, resend) {
  const customerEmail = session.customer_details?.email
  const customerName = session.customer_details?.name?.split(' ')[0] || 'there'
  const productId = session.metadata?.product_id
  const amountPaid = session.amount_total / 100

  console.log(`Payment received: ${customerEmail}, product: ${productId}, amount: $${amountPaid}`)

  if (!customerEmail) {
    console.error('No customer email found in session')
    return
  }

  if (!productId) {
    console.error('No product ID found in session metadata')
    return
  }

  let customer = null
  try {
    const { data, error } = await supabaseAdmin
      .from('customers')
      .upsert({
        email: customerEmail,
        first_name: customerName,
        stripe_customer_id: session.customer,
        updated_at: new Date().toISOString(),
      }, {
        onConflict: 'email',
      })
      .select()
      .single()

    if (error) {
      console.error('Customer save error:', error)
    } else {
      customer = data
      console.log('Customer saved:', customer.id)
    }
  } catch (err) {
    console.error('Customer save exception:', err)
  }

  let purchaseId = null
  try {
    const { data, error } = await supabaseAdmin
      .from('purchases')
      .insert({
        customer_id: customer?.id,
        product_id: productId,
        stripe_checkout_session_id: session.id,
        stripe_payment_intent_id: session.payment_intent,
        amount: amountPaid,
        currency: session.currency,
        status: 'completed',
      })
      .select()
      .single()

    if (error) {
      console.error('Purchase save error:', error)
    } else {
      purchaseId = data.id
      console.log('Purchase recorded:', purchaseId)
    }
  } catch (err) {
    console.error('Purchase save exception:', err)
  }

  const downloadLinks = await generateDownloadLinks(customerEmail, productId, purchaseId, supabaseAdmin)

  if (!downloadLinks || downloadLinks.length === 0) {
    console.error('Failed to generate download links')
    return
  }

  await sendDeliveryEmail(customerEmail, customerName, productId, downloadLinks, resend)

  if (purchaseId) {
    try {
      await supabaseAdmin
        .from('purchases')
        .update({ email_sent: true })
        .eq('id', purchaseId)
    } catch (err) {
      console.error('Email sent update error:', err)
    }
  }
}

async function generateDownloadLinks(email, productId, purchaseId, supabaseAdmin) {
  const links = []
  const product = PRODUCT_FILES[productId]

  if (!product) {
    console.error('Unknown product ID:', productId)
    return links
  }

  const filesToLink = product.isBundle
    ? ['18-month', '2-year', '3-year', 'working-parent']
    : [productId]

  for (const fileId of filesToLink) {
    const fileInfo = PRODUCT_FILES[fileId]
    
    try {
      const token = crypto.randomBytes(32).toString('hex')
      const expiresAt = new Date(Date.now() + DOWNLOAD_EXPIRY_SECONDS * 1000)

      await supabaseAdmin
        .from('download_tokens')
        .insert({
          purchase_id: purchaseId,
          customer_email: email,
          product_id: fileId,
          token: token,
          expires_at: expiresAt.toISOString(),
        })

      const downloadUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/download?token=${token}`

      links.push({
        name: fileInfo.name,
        url: downloadUrl,
        productId: fileId,
      })

      console.log(`Download link generated for ${fileId}: token=${token.substring(0, 8)}...`)
    } catch (err) {
      console.error(`Error generating link for ${fileId}:`, err)
    }
  }

  return links
}

async function sendDeliveryEmail(email, firstName, productId, downloadLinks, resend) {
  const product = PRODUCT_FILES[productId]

  const productListHtml = downloadLinks.map(link => `
    <div style="background: #f8f9fa; border-radius: 8px; padding: 16px; margin-bottom: 12px;">
      <p style="font-weight: bold; margin: 0 0 8px 0;">${link.name}</p>
      <a href="${link.url}" style="display: inline-block; background: #4A9BA8; color: white; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: bold;">Download PDF →</a>
    </div>
  `).join('')

  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #2C3E50; max-width: 600px; margin: 0 auto; padding: 20px;">
      
      <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #4A9BA8;">
        <h1 style="color: #4A9BA8; margin: 0; font-size: 24px;">The Sleep Regression Solution</h1>
      </div>
      
      <div style="padding: 30px 0;">
        <h2 style="color: #2C3E50;">🎉 Thank You for Your Purchase, ${firstName}!</h2>
        
        <p>You made an amazing decision for your family. Better sleep is just around the corner!</p>
        
        <p>Your ebook${product.isBundle ? 's are' : ' is'} ready to download:</p>
        
        ${productListHtml}
        
        <div style="background: #fff3cd; border-radius: 8px; padding: 12px 16px; margin: 16px 0;">
          <p style="margin: 0; font-size: 14px; color: #856404;">⏰ <strong>Important:</strong> These download links expire in 15 days. Please download and save your files now.</p>
        </div>
        
        <div style="background: #FDF8F5; border-radius: 12px; padding: 20px; margin: 24px 0;">
          <h3 style="color: #E07A5F; margin-top: 0;">📋 Quick Start Guide</h3>
          <ol style="padding-left: 20px; margin-bottom: 0;">
            <li style="margin-bottom: 8px;">Download your PDF${product.isBundle ? 's' : ''} (save to your phone or computer)</li>
            <li style="margin-bottom: 8px;">Read the "Night 1 Action Plan" section first</li>
            <li style="margin-bottom: 8px;">Print the Sleep Tracker from the back of the guide</li>
            <li style="margin-bottom: 8px;">Start tonight — you've got this! 💪</li>
          </ol>
        </div>
        
        <div style="background: #f0f9f4; border-left: 4px solid #6BAA75; padding: 16px; margin: 24px 0;">
          <p style="margin: 0;"><strong>Remember:</strong> Most parents see improvement within 3-5 nights. Stay consistent, trust the process, and don't hesitate to reach out if you need support!</p>
        </div>

        <div style="background: #f8f9fa; border-radius: 8px; padding: 12px 16px; margin: 16px 0;">
          <p style="margin: 0; font-size: 14px; color: #666;">Need to re-download? Simply reply to this email and we'll send fresh download links.</p>
        </div>
        
        <p>
          Wishing you peaceful nights,<br>
          <strong>Marli</strong><br>
          <span style="color: #666;">The Sleep Regression Solution</span>
        </p>
      </div>
      
      <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px; font-size: 12px; color: #666; text-align: center;">
        <p>
          <a href="https://thesleepregressionsolution.com" style="color: #4A9BA8;">Visit Website</a> • 
          <a href="https://thesleepregressionsolution.com/privacy" style="color: #4A9BA8;">Privacy Policy</a>
        </p>
        <p>© 2025 The Sleep Regression Solution</p>
      </div>
      
    </body>
    </html>
  `

  try {
    const { data, error } = await resend.emails.send({
      from: 'Marli <hello@thesleepregressionsolution.com>',
      to: email,
      subject: `🎉 Your ${product.isBundle ? 'Sleep Regression Guides Are' : 'Sleep Regression Guide Is'} Ready to Download!`,
      html: emailHtml,
    })

    if (error) {
      console.error('Resend API error:', JSON.stringify(error))
      throw error
    }

    console.log(`Delivery email sent successfully to ${email}, messageId: ${data?.id}`)
  } catch (error) {
    console.error('Email send failed:', error.message || JSON.stringify(error))
    throw error
  }
}
