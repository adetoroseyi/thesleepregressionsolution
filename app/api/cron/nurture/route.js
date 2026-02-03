import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { EMAIL_SEQUENCE, getEmailHtml } from '../../../lib/email-sequence.js'

const resend = new Resend(process.env.RESEND_API_KEY)
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

// This endpoint is called by Vercel Cron every hour
// It checks which subscribers are due for their next email and sends it

export async function GET(request) {
  // Verify cron secret to prevent unauthorized access
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const now = new Date()
    let totalSent = 0
    let errors = []

    // Get all active subscribers who haven't purchased and haven't unsubscribed
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

    // Check which subscribers have already purchased (exclude them)
    const subscriberEmails = subscribers.map(s => s.email)
    const { data: buyers } = await supabaseAdmin
      .from('customers')
      .select('email')
      .in('email', subscriberEmails)

    const buyerEmails = new Set((buyers || []).map(b => b.email))

    // Process each non-buyer subscriber
    for (const subscriber of subscribers) {
      // Skip if they've purchased
      if (buyerEmails.has(subscriber.email)) {
        continue
      }

      const subscribedAt = new Date(subscriber.subscribed_at)
      const hoursSinceSignup = (now - subscribedAt) / (1000 * 60 * 60)

      // Get emails already sent to this subscriber
      const { data: sentEmails } = await supabaseAdmin
        .from('sent_nurture_emails')
        .select('email_id')
        .eq('subscriber_email', subscriber.email)

      const sentEmailIds = new Set((sentEmails || []).map(e => e.email_id))

      // Find the next email to send
      for (const email of EMAIL_SEQUENCE) {
        // Skip if already sent
        if (sentEmailIds.has(email.id)) {
          continue
        }

        // Check if enough time has passed
        if (hoursSinceSignup >= email.delayHours) {
          try {
            // Send the email
            const html = getEmailHtml(email.id, subscriber.first_name || 'there')
            
            if (!html) {
              console.error(`No template found for email: ${email.id}`)
              continue
            }

            const { error: sendError } = await resend.emails.send({
              from: 'Marli <hello@thesleepregressionsolution.com>',
              to: subscriber.email,
              subject: email.subject,
              html: html,
            })

            if (sendError) {
              console.error(`Failed to send ${email.id} to ${subscriber.email}:`, sendError)
              errors.push({ email: subscriber.email, emailId: email.id, error: sendError })
              continue
            }

            // Record that we sent this email
            await supabaseAdmin
              .from('sent_nurture_emails')
              .insert({
                subscriber_email: subscriber.email,
                email_id: email.id,
                sent_at: now.toISOString(),
              })

            totalSent++
            console.log(`Sent ${email.id} to ${subscriber.email}`)

            // Only send one email per subscriber per cron run
            break
          } catch (err) {
            console.error(`Error processing ${email.id} for ${subscriber.email}:`, err)
            errors.push({ email: subscriber.email, emailId: email.id, error: err.message })
          }
        }

        // If this email isn't due yet, no later ones will be either
        break
      }
    }

    return Response.json({
      message: `Cron completed`,
      sent: totalSent,
      errors: errors.length,
      processedSubscribers: subscribers.length,
      excludedBuyers: buyerEmails.size,
    })

  } catch (error) {
    console.error('Cron error:', error)
    return Response.json({ error: error.message }, { status: 500 })
  }
}
