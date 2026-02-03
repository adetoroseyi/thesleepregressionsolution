// Email sequence definitions
// Each email has a delay (in hours) from the initial signup

export const EMAIL_SEQUENCE = [
  // Email 1 is sent immediately by the subscribe API - not included here
  
  {
    id: 'decode',
    delayHours: 24,
    subject: 'Why your toddler is REALLY fighting sleep',
    previewText: "It's not what you think...",
  },
  {
    id: 'mistake',
    delayHours: 72,
    subject: 'The #1 mistake that makes sleep regressions WORSE',
    previewText: 'Almost every parent does this (I did too)',
  },
  {
    id: 'quick-win',
    delayHours: 120,
    subject: 'Try this 10-minute trick before bed tonight',
    previewText: 'It stopped our bedtime battles completely',
  },
  {
    id: 'offer',
    delayHours: 168,
    subject: 'Your 7-day plan to a sleeping toddler (it\'s time)',
    previewText: 'Everything you need, in one place',
  },
  {
    id: 'social-proof',
    delayHours: 216,
    subject: '"By night 4, she slept through for the first time ever"',
    previewText: 'What 3 mums wish they\'d known sooner',
  },
  {
    id: 'final-nudge',
    delayHours: 288,
    subject: 'One last thing before I stop emailing about this',
    previewText: 'I wanted to make sure you saw this',
  },
]

export function getEmailHtml(emailId, firstName) {
  const siteUrl = 'https://www.thesleepregressionsolution.com'
  
  const templates = {
    'decode': `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.7; color: #2C3E50; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #4A9BA8;">
    <h1 style="color: #4A9BA8; margin: 0; font-size: 22px;">The Sleep Regression Solution</h1>
  </div>
  <div style="padding: 30px 0;">
    <p>Hi ${firstName},</p>
    <p>How did last night go? If it was rough, I want you to know — it's not your fault.</p>
    <p>Here's something most parents don't realize: there are actually <strong>3 completely different reasons</strong> your toddler fights sleep, and each one needs a different approach.</p>
    
    <div style="background: #f8f9fa; border-radius: 12px; padding: 20px; margin: 20px 0;">
      <p style="margin-top: 0;"><strong>🧠 Brain development surge</strong> — Their mind is literally rewiring. They're processing new words, skills, and emotions. Their brain won't "turn off" because it's too busy growing.</p>
      <p><strong>😰 Separation anxiety spike</strong> — They've realized you exist when they can't see you. Bedtime means being apart, and that's terrifying.</p>
      <p style="margin-bottom: 0;"><strong>👑 Independence testing</strong> — They've discovered "no" and bedtime is the ultimate power struggle.</p>
    </div>
    
    <p>Most parents treat all three the same way. They either give in (which makes it worse) or get stricter (which triggers meltdowns).</p>
    <p>The DREAM Method matches <strong>specific strategies to each trigger</strong> — so you're not guessing anymore.</p>
    <p>Quick question: Which one sounds most like your toddler? Just hit reply and tell me. I read every email.</p>
    <p>Talk soon,<br><strong>Marli</strong></p>
    <p style="font-size: 14px; color: #666;">P.S. If you found the checklist helpful, the full guides go 10x deeper with night-by-night action plans and word-for-word scripts. <a href="${siteUrl}" style="color: #4A9BA8;">Take a look →</a></p>
  </div>
  <div style="border-top: 1px solid #eee; padding-top: 16px; font-size: 12px; color: #999; text-align: center;">
    <a href="${siteUrl}" style="color: #4A9BA8;">Visit Website</a> • <a href="${siteUrl}/privacy" style="color: #4A9BA8;">Privacy Policy</a><br>© 2025 The Sleep Regression Solution
  </div>
</body>
</html>`,

    'mistake': `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.7; color: #2C3E50; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #4A9BA8;">
    <h1 style="color: #4A9BA8; margin: 0; font-size: 22px;">The Sleep Regression Solution</h1>
  </div>
  <div style="padding: 30px 0;">
    <p>Hi ${firstName},</p>
    <p>Can I be honest with you about something?</p>
    <p>There's one thing almost every exhausted parent does during a sleep regression that actually makes it last <strong>LONGER</strong>. And I don't blame them — I would have done the same thing.</p>
    <p><strong>The mistake: Changing everything at once.</strong></p>
    <p>New bedtime. New routine. New rules. No more rocking. Cry it out. Co-sleeping. Back to rocking. Google at 2 AM. Try something else tomorrow.</p>
    <p>Sound familiar?</p>
    <p>Here's why this backfires: <strong>toddlers are wired to seek patterns.</strong> When everything keeps changing, their stress response goes UP. Their brain can't predict what's happening next, so they fight harder.</p>
    
    <div style="background: #FDF8F5; border-left: 4px solid #E07A5F; padding: 16px 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
      <p style="margin-top: 0; font-weight: bold;">Sarah's story:</p>
      <p style="margin-bottom: 0;">Sarah (mum of a 22-month-old) tried 6 different approaches in 2 weeks. Each one "worked" for one night, then failed. When she followed our Reset phase — picking ONE consistent approach for 5 nights — her son went from waking 4x a night to sleeping through by night 4. The difference wasn't the method. It was the <strong>consistency.</strong></p>
    </div>
    
    <p>That's exactly what the guides are designed for. Instead of random tips, you get a single, clear plan:</p>
    <p>Night 1: Do this → Night 2: Do this → Night 3: Expect this, respond like this → Night 4-5: Watch for these signs → Night 6-7: Celebrate 🎉</p>
    <p>No guessing. No Googling at 3 AM. Just follow the plan.</p>
    
    <div style="text-align: center; margin: 24px 0;">
      <a href="${siteUrl}" style="display: inline-block; background: #4A9BA8; color: white; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: bold;">See the Full Night-by-Night Plan →</a>
    </div>
    
    <p>You deserve to stop guessing,<br><strong>Marli</strong></p>
  </div>
  <div style="border-top: 1px solid #eee; padding-top: 16px; font-size: 12px; color: #999; text-align: center;">
    <a href="${siteUrl}" style="color: #4A9BA8;">Visit Website</a> • <a href="${siteUrl}/privacy" style="color: #4A9BA8;">Privacy Policy</a><br>© 2025 The Sleep Regression Solution
  </div>
</body>
</html>`,

    'quick-win': `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.7; color: #2C3E50; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #4A9BA8;">
    <h1 style="color: #4A9BA8; margin: 0; font-size: 22px;">The Sleep Regression Solution</h1>
  </div>
  <div style="padding: 30px 0;">
    <p>Hi ${firstName},</p>
    <p>I want to give you something you can try <strong>TONIGHT</strong>. It takes 10 minutes and it works whether your toddler is 18 months or 3 years old.</p>
    <p>It's called <strong>"Special Time"</strong> and it's the single most powerful bedtime tool I've ever seen.</p>
    
    <div style="background: #f0f9f4; border-radius: 12px; padding: 20px; margin: 20px 0;">
      <p style="margin-top: 0; font-weight: bold;">Here's how it works:</p>
      <p>Set a timer for 10 minutes. Sit on the floor with your toddler. Let THEM choose what to play. No phones. No instructions. No "good job." Just be fully present.</p>
      <p style="margin-bottom: 0;">When the timer goes off, say: <em>"Special Time is all done for today. I loved playing with you. Now it's time for our bedtime routine."</em></p>
    </div>
    
    <p><strong>Why it works:</strong> Most bedtime battles aren't about sleep. They're about connection. Special Time fills their "connection cup" before bed. When they feel secure, they don't need to fight to keep you there.</p>
    
    <div style="background: #f8f9fa; border-radius: 8px; padding: 16px; margin: 16px 0;">
      <p style="margin-top: 0;"><strong>Emma (mum of twins, age 2):</strong> <em>"I was skeptical. 10 minutes? But the first night, bedtime went from 90 minutes to 25 minutes. I cried."</em></p>
      <p style="margin-bottom: 0;"><strong>James (dad of a 19-month-old):</strong> <em>"By night 3, our son was ASKING to go to bed after Special Time."</em></p>
    </div>
    
    <p>This is just ONE strategy from the DREAM Method. The full guides include 12 connection scripts, the "worry basket" technique, partnership alignment conversations, and printable routine charts.</p>
    
    <div style="text-align: center; margin: 24px 0;">
      <a href="${siteUrl}" style="display: inline-block; background: #E07A5F; color: white; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: bold;">Get the Complete DREAM Method →</a>
    </div>
    
    <p>Try Special Time tonight. You might be surprised.</p>
    <p><strong>Marli</strong></p>
    <p style="font-size: 14px; color: #666;">P.S. The Complete Bundle ($69.99) includes all 4 age-specific guides — that's less than one night of lost productivity costs you.</p>
  </div>
  <div style="border-top: 1px solid #eee; padding-top: 16px; font-size: 12px; color: #999; text-align: center;">
    <a href="${siteUrl}" style="color: #4A9BA8;">Visit Website</a> • <a href="${siteUrl}/privacy" style="color: #4A9BA8;">Privacy Policy</a><br>© 2025 The Sleep Regression Solution
  </div>
</body>
</html>`,

    'offer': `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.7; color: #2C3E50; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #4A9BA8;">
    <h1 style="color: #4A9BA8; margin: 0; font-size: 22px;">The Sleep Regression Solution</h1>
  </div>
  <div style="padding: 30px 0;">
    <p>Hi ${firstName},</p>
    <p>It's been a week since you downloaded the checklist. Let me ask you honestly:</p>
    <p><strong>How many more nights can you do this?</strong></p>
    <p>How many more times can you drag yourself out of bed at 2 AM... sit through a 90-minute bedtime battle... pour another coffee just to function... snap at your partner because you're running on fumes?</p>
    <p>Most sleep regressions last 2-6 weeks. But without the right approach? They can stretch into <strong>months</strong>.</p>
    <p><strong>That doesn't need to be you.</strong></p>
    
    <div style="background: #f8f9fa; border-radius: 12px; padding: 20px; margin: 20px 0;">
      <h3 style="margin-top: 0; color: #4A9BA8;">What's Inside the Guides:</h3>
      <p>📘 <strong>The DREAM Method</strong> — 5-phase system that works for every temperament</p>
      <p>📋 <strong>Night-by-Night Action Plans</strong> — Exact steps for nights 1-7</p>
      <p>🗣️ <strong>Word-for-Word Scripts</strong> — What to say during every scenario</p>
      <p>📊 <strong>Printable Sleep Trackers</strong> — See your progress in black and white</p>
      <p>👶 <strong>Age-Specific Strategies</strong> — Because 18-month-olds and 3-year-olds need different approaches</p>
      <p style="margin-bottom: 0;">📱 <strong>Working Parent Adaptations</strong> — When you've got 45 minutes between pickup and bedtime</p>
    </div>
    
    <div style="background: #FDF8F5; border-radius: 12px; padding: 20px; margin: 20px 0; text-align: center;">
      <p style="font-size: 14px; color: #666; margin-top: 0;">MOST POPULAR</p>
      <h2 style="color: #2C3E50; margin: 8px 0;">The Complete Bundle</h2>
      <p style="font-size: 14px; color: #666;">All 4 Guides — Every regression from 18 months to 4 years</p>
      <p style="font-size: 32px; font-weight: bold; color: #E07A5F; margin: 12px 0;">$69.99</p>
      <p style="font-size: 14px; color: #6BAA75; margin-bottom: 16px;">Save $34.97 vs buying individually</p>
      <a href="${siteUrl}" style="display: inline-block; background: #E07A5F; color: white; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: bold; font-size: 16px;">Get the Complete Bundle →</a>
    </div>
    
    <p style="text-align: center; font-size: 14px; color: #666;">Or <a href="${siteUrl}" style="color: #4A9BA8;">choose a single guide from $24.99</a></p>
    
    <div style="background: #f0f9f4; border-left: 4px solid #6BAA75; padding: 12px 16px; margin: 20px 0;">
      <p style="margin: 0; font-size: 14px;">✅ <strong>14-day guarantee.</strong> Follow the plan, use the sleep tracker, and if you don't see improvement, we'll make it right.</p>
    </div>
    
    <p>You've been surviving. It's time to start sleeping.</p>
    <p><strong>Marli</strong></p>
  </div>
  <div style="border-top: 1px solid #eee; padding-top: 16px; font-size: 12px; color: #999; text-align: center;">
    <a href="${siteUrl}" style="color: #4A9BA8;">Visit Website</a> • <a href="${siteUrl}/privacy" style="color: #4A9BA8;">Privacy Policy</a><br>© 2025 The Sleep Regression Solution
  </div>
</body>
</html>`,

    'social-proof': `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.7; color: #2C3E50; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #4A9BA8;">
    <h1 style="color: #4A9BA8; margin: 0; font-size: 22px;">The Sleep Regression Solution</h1>
  </div>
  <div style="padding: 30px 0;">
    <p>Hi ${firstName},</p>
    <p>I wanted to share something with you today. These are real messages from parents who were exactly where you are right now:</p>
    
    <div style="background: #f8f9fa; border-radius: 12px; padding: 20px; margin: 20px 0; border-left: 4px solid #4A9BA8;">
      <p style="margin-top: 0; font-weight: bold;">Rachel, mum of a 20-month-old:</p>
      <p style="margin-bottom: 0; font-style: italic;">"I was up 5 times a night. I'd tried everything on Google. Nothing worked for more than a day. I bought the 18-month guide on a Wednesday night at 1 AM (obviously). By Saturday night, she slept 7pm to 6am. I sat in the hallway and cried. Happy tears."</p>
    </div>
    
    <div style="background: #f8f9fa; border-radius: 12px; padding: 20px; margin: 20px 0; border-left: 4px solid #E07A5F;">
      <p style="margin-top: 0; font-weight: bold;">Tasha, mum of a 2-year-old:</p>
      <p style="margin-bottom: 0; font-style: italic;">"The bedtime stalling was destroying us. 'One more book. One more water.' Every night was 2 hours. The scripts in the guide were a game-changer. Night 5 was our first 20-minute bedtime in months."</p>
    </div>
    
    <div style="background: #f8f9fa; border-radius: 12px; padding: 20px; margin: 20px 0; border-left: 4px solid #6BAA75;">
      <p style="margin-top: 0; font-weight: bold;">Lauren, working mum of a 3-year-old:</p>
      <p style="margin-bottom: 0; font-style: italic;">"As a nurse working 12-hour shifts, I couldn't function anymore. The Working Parent guide was the first resource that understood my reality. Short routines. Partner handoff scripts. It felt like someone finally got it."</p>
    </div>
    
    <p>Here's what they have in common: <strong>they all waited too long.</strong></p>
    <p>Every one told me the same thing: "I wish I'd found this sooner instead of suffering for weeks."</p>
    <p>Sleep regressions don't fix themselves. They either resolve with the right approach... or they become habits.</p>
    
    <div style="text-align: center; margin: 24px 0;">
      <a href="${siteUrl}" style="display: inline-block; background: #E07A5F; color: white; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: bold;">Don't Wait Another Week →</a>
    </div>
    
    <p>Rooting for you,<br><strong>Marli</strong></p>
    <p style="font-size: 14px; color: #666;">P.S. The Complete Bundle ($69.99) covers every regression from 18 months to 4 years — so you're prepared for whatever comes next. Because there's usually a next one. 😅</p>
  </div>
  <div style="border-top: 1px solid #eee; padding-top: 16px; font-size: 12px; color: #999; text-align: center;">
    <a href="${siteUrl}" style="color: #4A9BA8;">Visit Website</a> • <a href="${siteUrl}/privacy" style="color: #4A9BA8;">Privacy Policy</a><br>© 2025 The Sleep Regression Solution
  </div>
</body>
</html>`,

    'final-nudge': `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.7; color: #2C3E50; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #4A9BA8;">
    <h1 style="color: #4A9BA8; margin: 0; font-size: 22px;">The Sleep Regression Solution</h1>
  </div>
  <div style="padding: 30px 0;">
    <p>Hi ${firstName},</p>
    <p>I'll keep this short.</p>
    <p>I've been sending you tips and strategies for the past 12 days. If things are getting better — that's amazing. Truly. You don't need to buy anything.</p>
    <p>But if you're still in the thick of it... still exhausted... still dreading bedtime... I want to be real with you:</p>
    <p><strong>Free tips can only take you so far.</strong></p>
    <p>A checklist gives you a starting point. But a checklist can't:</p>
    <ul style="line-height: 2;">
      <li>Adapt to YOUR toddler's specific triggers</li>
      <li>Walk you through night-by-night when it gets hard on night 3</li>
      <li>Give you the exact words during a 2 AM meltdown</li>
      <li>Help your partner get on the same page</li>
      <li>Track your progress so you can SEE it working</li>
    </ul>
    <p>That's what the full guides do.</p>
    <p><strong>I won't send you another sales email after this one.</strong> From here, I'll just share occasional sleep tips and parenting resources.</p>
    <p>But if you're ready:</p>
    
    <div style="text-align: center; margin: 24px 0;">
      <a href="${siteUrl}" style="display: inline-block; background: #E07A5F; color: white; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: bold; font-size: 16px;">The Complete Bundle — $69.99 →</a>
      <p style="font-size: 14px; color: #666; margin-top: 8px;">14-day guarantee. Instant download. Works tonight.</p>
    </div>
    
    <p>Whatever you decide, I'm glad you're here.</p>
    <p><strong>Marli</strong></p>
  </div>
  <div style="border-top: 1px solid #eee; padding-top: 16px; font-size: 12px; color: #999; text-align: center;">
    <a href="${siteUrl}" style="color: #4A9BA8;">Visit Website</a> • <a href="${siteUrl}/privacy" style="color: #4A9BA8;">Privacy Policy</a><br>© 2025 The Sleep Regression Solution
  </div>
</body>
</html>`,
  }

  return templates[emailId] || null
}
