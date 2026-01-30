import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const resend = new Resend(process.env.RESEND_API_KEY)

// Initialize Supabase admin client
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

// Product to PDF mapping
const PRODUCT_PDFS = {
  '18-month': {
    name: 'The 18-Month Sleep Regression Survival Guide',
    url: process.env.EBOOK_18_MONTH_URL || 'https://thesleepregressionsolution.com/downloads/18-month-sleep-regression-guide.pdf',
  },
  '2-year': {
    name: 'The 2-Year Sleep Regression Blueprint',
    url: process.env.EBOOK_2_YEAR_URL || 'https://thesleepregressionsolution.com/downloads/2-year-sleep-regression-blueprint.pdf',
  },
  '3-year': {
    name: 'The 3-Year Sleep Regression Playbook',
    url: process.env.EBOOK_3_YEAR_URL || 'https://thesleepregressionsolution.com/downloads/3-year-sleep-regression-playbook.pdf',
  },
  'working-parent': {
    name: 'The Working Parent Sleep Survival Guide',
    url: process.env.EBOOK_WORKING_PARENT_URL || 'https://thesleepregressionsolution.com/downloads/working-parent-sleep-guide.pdf',
  },
  'bundle': {
    name: 'The Complete Sleep Regression Solution (All 4 Guides)',
    isBundle: true,
  },
}

export async function POST(request) {
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

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object

    try {
      await handleSuccessfulPayment(session)
    } catch (error) {
      console.error('Error handling payment:', error)
      // Still return 200 to prevent Stripe from retrying
    }
  }

  return Response.json({ received: true })
}

async function handleSuccessfulPayment(session) {
  const customerEmail = session.customer_details?.email
  const customerName = session.customer_details?.name?.split(' ')[0] || 'there'
  const productId = session.metadata?.product_id
  const amountPaid = session.amount_total / 100 // Convert from cents

  console.log(`Processing payment for ${customerEmail}, product: ${productId}`)

  // 1. Save/update customer in database
  const { data: customer, error: customerError } = await supabaseAdmin
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

  if (customerError) {
    console.error('Error saving customer:', customerError)
  }

  // 2. Record the purchase
  const { error: purchaseError } = await supabaseAdmin
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

  if (purchaseError) {
    console.error('Error recording purchase:', purchaseError)
  }

  // 3. Send delivery email with ebook(s)
  await sendDeliveryEmail(customerEmail, customerName, productId)

  // 4. Update purchase record to mark email as sent
  await supabaseAdmin
    .from('purchases')
    .update({ email_sent: true })
    .eq('stripe_checkout_session_id', session.id)
}

async function sendDeliveryEmail(email, firstName, productId) {
  const product = PRODUCT_PDFS[productId]
  
  let downloadLinks = ''
  let productListHtml = ''

  if (product.isBundle) {
    // Bundle - include all 4 ebooks
    const allProducts = ['18-month', '2-year', '3-year', 'working-parent']
    productListHtml = allProducts.map(id => {
      const p = PRODUCT_PDFS[id]
      return `
        <div style="background: #f8f9fa; border-radius: 8px; padding: 16px; margin-bottom: 12px;">
          <p style="font-weight: bold; margin: 0 0 8px 0;">${p.name}</p>
          <a href="${p.url}" style="display: inline-block; background: #4A9BA8; color: white; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: bold;">Download PDF →</a>
        </div>
      `
    }).join('')
  } else {
    // Single product
    productListHtml = `
      <div style="background: #f8f9fa; border-radius: 8px; padding: 16px; margin-bottom: 12px;">
        <p style="font-weight: bold; margin: 0 0 8px 0;">${product.name}</p>
        <a href="${product.url}" style="display: inline-block; background: #4A9BA8; color: white; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: bold;">Download PDF →</a>
      </div>
    `
  }

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
        
        <p>If you have any questions, just reply to this email. I'm here to help!</p>
        
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
    await resend.emails.send({
      from: 'Marli <hello@thesleepregressionsolution.com>',
      to: email,
      subject: `🎉 Your ${product.isBundle ? 'Sleep Regression Guides Are' : 'Sleep Regression Guide Is'} Ready to Download!`,
      html: emailHtml,
    })
    console.log(`Delivery email sent to ${email}`)
  } catch (error) {
    console.error('Error sending delivery email:', error)
    throw error
  }
}
