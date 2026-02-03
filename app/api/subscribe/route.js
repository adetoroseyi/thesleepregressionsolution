import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'

const resend = new Resend(process.env.RESEND_API_KEY)

// Initialize Supabase admin client
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function POST(request) {
  try {
    const body = await request.json()
    const { email, firstName } = body

    console.log('Subscribe request received:', { email, firstName: firstName ? 'provided' : 'missing' })

    // Validate input
    if (!email || !firstName) {
      console.error('Validation failed: missing email or firstName')
      return Response.json(
        { error: 'Email and first name are required' },
        { status: 400 }
      )
    }

    // 1. Save subscriber to Supabase
    try {
      const { data: dbData, error: dbError } = await supabaseAdmin
        .from('email_subscribers')
        .upsert({
          email,
          first_name: firstName,
          source: 'lead_magnet_checklist',
          subscribed_at: new Date().toISOString(),
        }, {
          onConflict: 'email',
        })

      if (dbError) {
        console.error('Supabase save error:', dbError)
      } else {
        console.log('Subscriber saved to Supabase:', email)
      }
    } catch (dbErr) {
      console.error('Supabase exception:', dbErr.message)
    }

    // 2. Determine checklist URL
    const checklistUrl = process.env.CHECKLIST_PDF_URL || 'https://www.thesleepregressionsolution.com/downloads/sleep-regression-checklist.pdf'
    console.log('Using checklist URL:', checklistUrl)

    // 3. Send the welcome email with the checklist
    console.log('Attempting to send email via Resend to:', email)
    
    const { data, error } = await resend.emails.send({
      from: 'Marli <hello@thesleepregressionsolution.com>',
      to: email,
      subject: '🎁 Your Sleep Regression Survival Checklist is here!',
      html: `
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
            <p style="font-size: 18px;">Hi ${firstName}! 👋</p>
            
            <p>Thank you for downloading the <strong>Sleep Regression Survival Checklist</strong>. I know how exhausting this phase can be, and I'm so glad you're taking steps to get your sleep back.</p>
            
            <div style="background: #FDF8F5; border-radius: 12px; padding: 24px; margin: 24px 0; text-align: center;">
              <p style="font-weight: bold; font-size: 18px; color: #2C3E50; margin-bottom: 16px;">📥 Download Your Checklist</p>
              <a href="${checklistUrl}" 
                 style="display: inline-block; background: #E07A5F; color: white; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: bold; font-size: 16px;">
                Download PDF Now →
              </a>
              <p style="font-size: 12px; color: #666; margin-top: 12px;">If the button doesn't work, copy this link: ${checklistUrl}</p>
            </div>
            
            <h2 style="color: #4A9BA8; font-size: 20px; margin-top: 32px;">Here's what to do next:</h2>
            
            <ol style="padding-left: 20px;">
              <li style="margin-bottom: 12px;"><strong>Print the checklist</strong> (or save it to your phone) so it's ready for tonight.</li>
              <li style="margin-bottom: 12px;"><strong>Read through the "Night 1 Action Plan"</strong> — it takes just 5 minutes.</li>
              <li style="margin-bottom: 12px;"><strong>Implement one change tonight</strong> and see how your little one responds.</li>
            </ol>
            
            <div style="background: #f0f9f4; border-left: 4px solid #6BAA75; padding: 16px; margin: 24px 0;">
              <p style="margin: 0; font-style: italic;">💡 <strong>Quick tip:</strong> The checklist works best when both parents (or all caregivers) are on the same page. Share it with your partner!</p>
            </div>
            
            <h2 style="color: #4A9BA8; font-size: 20px; margin-top: 32px;">Need more help?</h2>
            
            <p>The checklist is a great starting point, but if you want the complete system — including the full DREAM Method, age-specific scripts, and printable trackers — check out our comprehensive guides:</p>
            
            <div style="text-align: center; margin: 24px 0;">
              <a href="https://www.thesleepregressionsolution.com" 
                 style="display: inline-block; background: #4A9BA8; color: white; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: bold;">
                View the Complete Guides →
              </a>
            </div>
            
            <p>You've got this, ${firstName}. Peaceful nights are closer than you think. 💙</p>
            
            <p>
              Rooting for you,<br>
              <strong>Marli</strong><br>
              <span style="color: #666;">The Sleep Regression Solution</span>
            </p>
          </div>
          
          <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px; font-size: 12px; color: #666; text-align: center;">
            <p>You're receiving this because you signed up for the Sleep Regression Survival Checklist.</p>
            <p>
              <a href="https://www.thesleepregressionsolution.com" style="color: #4A9BA8;">Visit Website</a> • 
              <a href="https://www.thesleepregressionsolution.com/privacy" style="color: #4A9BA8;">Privacy Policy</a>
            </p>
            <p>© 2025 The Sleep Regression Solution</p>
          </div>
          
        </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend API error:', JSON.stringify(error))
      return Response.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      )
    }

    console.log('Email sent successfully to:', email, 'messageId:', data?.id)

    return Response.json({ 
      success: true, 
      message: 'Checklist sent successfully!' 
    })

  } catch (error) {
    console.error('Subscribe error:', error.message, error.stack)
    return Response.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}
