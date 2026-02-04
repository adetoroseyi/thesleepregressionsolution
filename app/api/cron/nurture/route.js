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

    const subscriberEmails = subscribers.map(s => s.email)
    const { data: buyers } = await supabaseAdmin
      .from('customers')
      .select('email')
      .in('email', subscriberEmails)

    const buyerEmails = new Set((buyers || []).map(b => b.email))

    for (const subscriber of subscribers) {
      if (buyerEmails.has(subscriber.email)) continue

      const subscribedAt = new Date(subscriber.subscribed_at)
      const hoursSinceSignup = (now - subscribedAt) / (1000 * 60 * 60)

      const { data: sentEmails } = await supabaseAdmin
        .from('sent_nurture_emails')
        .select('email_id')
        .eq('subscriber_email', subscriber.email)

      const sentEmailIds = new Set((sentEmails || []).map(e => e.email_id))

      for (const email of EMAIL_SEQUENCE) {
        if (sentEmailIds.has(email.id)) continue

        if (hoursSinceSignup >= email.delayHours) {
          try {
            const html = getEmailHtml(email.id, subscriber.first_name || 'there')
            if (!html) { console.error(`No template: ${email.id}`); continue }

            const { error: sendError } = await resend.emails.send({
              from: 'Marli <hello@thesleepregressionsolution.com>',
              to: subscriber.email,
              subject: email.subject,
              html: html,
            })

            if (sendError) {
              errors.push({ email: subscriber.email, emailId: email.id, error: sendError })
              continue
            }

            await supabaseAdmin.from('sent_nurture_emails').insert({
              subscriber_email: subscriber.email,
              email_id: email.id,
              sent_at: now.toISOString(),
            })

            totalSent++
            console.log(`Sent ${email.id} to ${subscriber.email}`)
            break
          } catch (err) {
            errors.push({ email: subscriber.email, emailId: email.id, error: err.message })
          }
        }
        break
      }
    }

    return Response.json({ message: 'Cron completed', sent: totalSent, errors: errors.length })
  } catch (error) {
    console.error('Cron error:', error)
    return Response.json({ error: error.message }, { status: 500 })
  }
}
