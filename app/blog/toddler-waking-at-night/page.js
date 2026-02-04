import Link from 'next/link'

export const metadata = {
  title: 'Toddler Waking at Night? 7 Reasons Why & How to Stop It (2025)',
  description:
    'Your toddler was sleeping through the night — now they are up again. Learn the 7 most common reasons toddlers wake at night and the proven strategies to get everyone sleeping again.',
  keywords:
    'toddler waking at night, toddler night wakings, why is my toddler waking up at night, toddler waking up crying, toddler not sleeping through the night',
  alternates: { canonical: '/blog/toddler-waking-at-night' },
  openGraph: {
    title: 'Toddler Waking at Night? 7 Reasons & How to Stop It',
    description: 'The 7 most common causes of toddler night wakings and what to do about each one.',
    url: 'https://www.thesleepregressionsolution.com/blog/toddler-waking-at-night',
    type: 'article',
  },
}

export default function ToddlerWakingAtNight() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why does my toddler keep waking up at night?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The most common causes are sleep associations (needing a parent to fall back asleep), sleep regressions linked to developmental milestones, schedule issues (too much or too little daytime sleep), nighttime fears or nightmares, discomfort from teething or illness, environmental disruptions, and separation anxiety.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it normal for a 2 year old to wake up at night?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Occasional night wakings are normal at any age. However, if your 2 year old is waking multiple times every night, it typically indicates a sleep association, schedule issue, or the 2 year sleep regression. With consistent strategies, most toddlers return to sleeping through the night within 1-2 weeks.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I get my toddler to sleep through the night?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Focus on three things: ensure they fall asleep independently at bedtime (without you present), optimise their daytime schedule so they have the right amount of sleep pressure, and respond consistently to night wakings with brief reassurance rather than extended engagement.',
        },
      },
    ],
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Toddler Waking at Night? 7 Reasons Why & How to Stop It',
    author: { '@type': 'Person', name: 'Marli Benjamin' },
    publisher: { '@type': 'Organization', name: 'The Sleep Regression Solution' },
    datePublished: '2025-02-04',
    dateModified: '2025-02-04',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <article className="max-w-3xl mx-auto px-4 py-12 md:py-20">
        <nav className="text-sm text-brand-charcoal/50 mb-8">
          <Link href="/" className="hover:text-brand-teal">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-brand-teal">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-brand-charcoal/70">Toddler Waking at Night</span>
        </nav>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-charcoal mb-6 leading-tight">
          Toddler Waking at Night? 7 Reasons Why &amp; How to Stop It
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-brand-charcoal/60 mb-8 border-b border-gray-200 pb-6">
          <span>By <strong className="text-brand-charcoal">Marli Benjamin</strong></span>
          <span>•</span>
          <span>Updated February 2025</span>
          <span>•</span>
          <span>10 min read</span>
        </div>

        <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-xl p-6 mb-10">
          <p className="font-semibold text-brand-charcoal mb-2">🆓 Free Download: Sleep Regression Survival Checklist</p>
          <p className="text-brand-charcoal/70 text-sm mb-3">Diagnose the cause and take action — even at 3 AM.</p>
          <Link href="/free" className="inline-block bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold text-sm py-2 px-5 rounded-lg transition-colors">
            Get the Free Checklist →
          </Link>
        </div>

        <div className="prose prose-lg max-w-none text-brand-charcoal/80 leading-relaxed">
          <p>
            Your toddler used to sleep through the night. Then, suddenly, they didn't. Maybe they're crying out at 2 AM. Maybe they're appearing at your bedside at midnight. Maybe they're wide awake at 4:30, ready to start the day.
          </p>
          <p>
            Night wakings are one of the most exhausting parts of parenting a toddler — partly because you thought this phase was over, and partly because the solutions that worked when they were a baby no longer apply. A toddler who wakes at night needs a different approach than an infant.
          </p>
          <p>
            Here are the 7 most common reasons your toddler is waking at night, and exactly what to do about each one.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            1. Sleep Associations
          </h2>
          <p>
            This is the number one cause of persistent night wakings at any age. If your toddler falls asleep with you rocking them, lying next to them, or holding their hand, they'll need that same condition to fall <em>back</em> asleep when they naturally wake between sleep cycles during the night.
          </p>
          <p>
            Everyone — adults and children — wakes briefly between sleep cycles. The difference is that an independent sleeper rolls over and falls back asleep. A toddler with a sleep association wakes up, realises the conditions have changed (you've left), and calls out for you to restore them.
          </p>
          <p>
            <strong>The fix:</strong> Work on independent sleep onset at bedtime. When your toddler can fall asleep without you present at the start of the night, they'll be able to fall back asleep independently when they wake between cycles. This is the single most impactful change you can make.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            2. Sleep Regressions
          </h2>
          <p>
            If the night wakings started suddenly after a period of good sleep, a developmental regression is likely. The major toddler regressions hit around <Link href="/blog/18-month-sleep-regression" className="text-brand-teal hover:underline">18 months</Link>, <Link href="/blog/2-year-sleep-regression" className="text-brand-teal hover:underline">2 years</Link>, and <Link href="/blog/3-year-sleep-regression" className="text-brand-teal hover:underline">3 years</Link>, each driven by different developmental milestones.
          </p>
          <p>
            <strong>The fix:</strong> Maintain your existing routines and boundaries. Offer extra comfort during the day but avoid creating new sleep dependencies at night. Most regressions resolve within 2-4 weeks if you stay consistent.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            3. Schedule Issues
          </h2>
          <p>
            Both <em>too much</em> and <em>too little</em> daytime sleep can cause night wakings. A toddler who naps too long or too late won't have enough sleep pressure at bedtime, leading to a late bedtime and fragmented overnight sleep. A toddler who is overtired from skipping naps produces cortisol, which acts like adrenaline and leads to restless, disrupted sleep.
          </p>
          <p>
            <strong>The fix:</strong> Audit the schedule. For most toddlers on one nap, ensure at least 4.5-5 hours between the end of the nap and bedtime. If your child has dropped their nap, move bedtime earlier to compensate.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            4. Nighttime Fears
          </h2>
          <p>
            From around age 2, toddlers develop an imagination that can make the dark feel threatening. By age 3, fears become more specific — monsters, "bad guys," and characters from stories. These fears are genuine and can cause your child to wake in genuine distress.
          </p>
          <p>
            <strong>The fix:</strong> Validate briefly, then reassure with confidence. "I understand the dark can feel scary. You're safe. I'm right next door." A dim nightlight and a comfort object help. Avoid elaborate monster-checking rituals, which confirm the fear is justified.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            5. Discomfort: Teething, Illness, or Pain
          </h2>
          <p>
            Teething (especially molars at 18 months and 2 years), ear infections, colds, and growing pains can all wake your toddler. These wakings are usually accompanied by genuine distress and may resolve when the physical cause passes.
          </p>
          <p>
            <strong>The fix:</strong> Treat the underlying discomfort. Offer pain relief as recommended by your paediatrician. Provide extra comfort — but try to avoid starting new sleep habits (like co-sleeping or rocking to sleep) that will persist after the illness passes.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            6. Environmental Factors
          </h2>
          <p>
            A room that's too warm, too cold, too bright, or too noisy can disrupt sleep. Toddlers are also sensitive to changes — a new house, a new bed, rearranged furniture, or even a different sound machine can trigger wakings.
          </p>
          <p>
            <strong>The fix:</strong> Keep the room cool (18-20°C / 65-68°F), dark (blackout curtains), and consistent. White noise can mask household sounds and create a familiar sleep cue.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            7. Hunger or Thirst
          </h2>
          <p>
            Toddlers go through growth spurts, and some genuinely wake hungry — especially if dinner was early or they didn't eat well. Thirst is also common, particularly in warm weather or heated rooms.
          </p>
          <p>
            <strong>The fix:</strong> Offer a balanced bedtime snack 30 minutes before the routine starts (something with protein and complex carbs — banana with nut butter, cheese and crackers). Keep a sippy cup of water accessible in their cot or on their nightstand.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            How to Respond to Night Wakings
          </h2>
          <p>
            Whatever the cause, your response to night wakings matters as much as addressing the root cause. The goal is to provide just enough reassurance without turning the waking into an event worth repeating.
          </p>
          <p>
            <strong>Wait briefly.</strong> Give your toddler 1-2 minutes before responding. Many toddlers fuss briefly between sleep cycles and will resettle on their own if given the chance.
          </p>
          <p>
            <strong>Keep it boring.</strong> If you do go in, keep the lights off, your voice low, and your interaction minimal. "You're okay. It's night time. I love you. Back to sleep." Then leave.
          </p>
          <p>
            <strong>Be consistent.</strong> Do the same thing every time, every night. Inconsistency (sometimes staying, sometimes leaving, sometimes bringing them to your bed) teaches your toddler that persistence pays off.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 my-6">
            <div>
              <h3 className="font-bold text-brand-charcoal mb-2">Why does my toddler keep waking up at night?</h3>
              <p>The most common causes are sleep associations (needing your presence to fall back asleep), developmental regressions, schedule issues, nighttime fears, teething or illness, environmental disruptions, and hunger.</p>
            </div>
            <div>
              <h3 className="font-bold text-brand-charcoal mb-2">Is it normal for a 2 year old to wake up at night?</h3>
              <p>Occasional wakings are normal. Frequent, nightly wakings typically indicate a solvable problem — usually a sleep association or schedule issue. With consistent strategies, most toddlers return to sleeping through within 1-2 weeks.</p>
            </div>
            <div>
              <h3 className="font-bold text-brand-charcoal mb-2">How do I get my toddler to sleep through the night?</h3>
              <p>Focus on three things: teach them to fall asleep independently at bedtime, optimise their daytime schedule, and respond to night wakings with brief, boring consistency.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-brand-teal/10 to-brand-coral/10 rounded-2xl p-8 my-12 text-center">
            <h2 className="text-2xl font-bold text-brand-charcoal mb-3">Ready to End the Night Wakings?</h2>
            <p className="text-brand-charcoal/70 mb-6">
              Our age-specific DREAM Method guides give you the complete system — including night-by-night plans, response scripts, and schedule templates tailored to your child's developmental stage.
            </p>
            <Link href="/#products" className="inline-block bg-brand-coral hover:bg-brand-coral-dark text-white font-bold text-lg py-3 px-8 rounded-lg transition-colors mr-4">
              View the Guides
            </Link>
            <Link href="/#bundle" className="inline-block bg-brand-charcoal hover:bg-brand-charcoal/90 text-white font-bold text-lg py-3 px-8 rounded-lg transition-colors">
              Get All 4 — $69.99
            </Link>
          </div>

          {/* Related */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <h3 className="font-bold text-brand-charcoal mb-4">Related Guides</h3>
            <ul className="space-y-2 text-brand-teal">
              <li><Link href="/blog/toddler-bedtime-routine" className="hover:underline">The Perfect Toddler Bedtime Routine: Step-by-Step Guide</Link></li>
              <li><Link href="/blog/18-month-sleep-regression" className="hover:underline">18 Month Sleep Regression: Signs, Causes & How to Fix It</Link></li>
              <li><Link href="/blog/2-year-sleep-regression" className="hover:underline">2 Year Sleep Regression: Why It Happens & What to Do</Link></li>
              <li><Link href="/blog/3-year-sleep-regression" className="hover:underline">3 Year Sleep Regression: Nightmares, Nap Dropping & How to Cope</Link></li>
            </ul>
          </div>
        </div>
      </article>
    </>
  )
}
