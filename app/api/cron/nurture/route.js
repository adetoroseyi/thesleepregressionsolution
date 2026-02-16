import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { EMAIL_SEQUENCE, getEmailHtml } from '../../../../lib/email-sequence.js'

export const dynamic = 'force-dynamic'

export async function GET(request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const now = new Date()
    let totalSent = 0
    let errors = []

    // Fetch active subscribers
    const { data: subscribers, error: subError } = await supabaseAdmin
      .from('email_subscribers')
      .select('*')
      .eq('source', 'lead_magnet_checklist')
      .is('unsubscribed_at', null)

    if (subError) {
      console.error('Error fetching subscribers:', subError)
      return Response.json({ error: 'Failed to fetch subscribers' }, { status: 500 })
    }

    if (!subscribers || subscribers.length === 0) {
      return Response.json({ message: 'No subscribers to process', sent: 0 })
    }

    // Check for buyers to exclude
    const subscriberEmails = subscribers.map(s => s.email)
    const { data: buyers } = await supabaseAdmin
      .from('customers')
      .select('email')
      .in('email', subscriberEmails)

    const buyerEmails = new Set((buyers || []).map(b => b.email))

    for (const subscriber of subscribers) {
      // Skip buyers
      if (buyerEmails.has(subscriber.email)) continue

      const subscribedAt = new Date(subscriber.subscribed_at)
      const hoursSinceSignup = (now - subscribedAt) / (1000 * 60 * 60)

      // Fetch sent emails for this subscriber
      const { data: sentEmails, error: sentError } = await supabaseAdmin
        .from('sent_nurture_emails')
        .select('email_id')
        .eq('subscriber_email', subscriber.email)

      // LOG: Check if the sent emails query is working
      if (sentError) {
        console.error(`Error fetching sent emails for ${subscriber.email}:`, sentError)
        errors.push({ email: subscriber.email, error: 'Failed to fetch sent emails', details: sentError })
        continue // Skip this subscriber if we can't check their history
      }

      const sentEmailIds = new Set((sentEmails || []).map(e => e.email_id))

      // LOG: What we found
      console.log(`Processing ${subscriber.email}: ${hoursSinceSignup.toFixed(1)}h since signup, sent emails: [${[...sentEmailIds].join(', ')}]`)

      for (const email of EMAIL_SEQUENCE) {
        // Skip already sent
        if (sentEmailIds.has(email.id)) continue

        // Check if it's time to send this email
        if (hoursSinceSignup >= email.delayHours) {
          try {
            const html = getEmailHtml(email.id, subscriber.first_name || 'there')
            if (!html) {
              console.error(`No template found for: ${email.id}`)
              continue
            }

            // Send via Resend
            const { error: sendError } = await resend.emails.send({
              from: 'Marli <hello@thesleepregressionsolution.com>',
              to: subscriber.email,
              subject: email.subject,
              html: html,
            })

            if (sendError) {
              console.error(`Resend error for ${email.id} to ${subscriber.email}:`, sendError)
              errors.push({ email: subscriber.email, emailId: email.id, error: sendError })
              continue
            }

            // Record the sent email — WITH error checking
            const { error: insertError } = await supabaseAdmin
              .from('sent_nurture_emails')
              .insert({
                subscriber_email: subscriber.email,
                email_id: email.id,
                sent_at: now.toISOString(),
              })

            if (insertError) {
              console.error(`CRITICAL: Email ${email.id} sent to ${subscriber.email} but failed to record:`, insertError)
              errors.push({ email: subscriber.email, emailId: email.id, error: 'Insert failed', details: insertError })
              // Don't break — this is a critical error we need to know about
            } else {
              console.log(`Successfully sent and recorded ${email.id} to ${subscriber.email}`)
            }

            totalSent++
            break // Only send one email per subscriber per cron run

          } catch (err) {
            console.error(`Unexpected error for ${email.id} to ${subscriber.email}:`, err)
            errors.push({ email: subscriber.email, emailId: email.id, error: err.message })
          }
        } else {
          // This email isn't due yet, and since the sequence is ordered,
          // no later emails will be due either — stop checking
          break
        }
      }
    }

    return Response.json({
      message: 'Cron completed',
      sent: totalSent,
      errors: errors.length,
      errorDetails: errors,
    })

  } catch (error) {
    console.error('Cron error:', error)
    return Response.json({ error: error.message }, { status: 500 })
  }
}
