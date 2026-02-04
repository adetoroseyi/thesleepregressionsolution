import Link from 'next/link'

export const metadata = {
  title: 'When Do Toddlers Stop Napping? Signs, Ages & How to Transition (2025)',
  description:
    'Is your toddler ready to drop their nap? Learn the signs, the ideal age, and the step-by-step quiet time transition plan that prevents overtired meltdowns.',
  keywords:
    'when do toddlers stop napping, toddler dropping nap, when to stop nap, toddler nap transition, toddler refuses nap, quiet time toddler',
  alternates: { canonical: '/blog/when-do-toddlers-stop-napping' },
  openGraph: {
    title: 'When Do Toddlers Stop Napping? Signs & How to Transition',
    description: 'The complete guide to knowing when your toddler is ready to drop their nap, and the gentle transition plan that actually works.',
    url: 'https://www.thesleepregressionsolution.com/blog/when-do-toddlers-stop-napping',
    type: 'article',
  },
}

export default function WhenDoToddlersStopNapping() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'At what age do toddlers stop napping?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most toddlers drop their nap between ages 2.5 and 3.5. Some continue napping occasionally until age 4 or 5. There is wide individual variation — the key is watching your child for signs of readiness rather than following a rigid age guideline.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know my toddler is ready to drop the nap?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Signs they are ready include: consistently taking 30+ minutes to fall asleep at nap time, napping well but then staying awake past 8:30-9:00 PM at bedtime, skipping naps without becoming overtired by late afternoon, and showing this pattern for at least 2-3 consecutive weeks.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is quiet time and how do I set it up?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Quiet time replaces the nap with a 45-60 minute rest period after lunch. Your child stays in their room with quiet activities (books, puzzles, colouring) but does not have to sleep. It gives their body a midday break and maintains the boundary of a rest period, which helps prevent overtired meltdowns in the late afternoon.',
        },
      },
    ],
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'When Do Toddlers Stop Napping? Signs, Ages & How to Transition',
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
          <span className="text-brand-charcoal/70">When Do Toddlers Stop Napping?</span>
        </nav>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-charcoal mb-6 leading-tight">
          When Do Toddlers Stop Napping? Signs, Ages &amp; the Quiet Time Transition
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
          <p className="text-brand-charcoal/70 text-sm mb-3">Includes a nap-readiness checklist and quiet time setup guide.</p>
          <Link href="/free" className="inline-block bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold text-sm py-2 px-5 rounded-lg transition-colors">
            Get the Free Checklist →
          </Link>
        </div>

        <div className="prose prose-lg max-w-none text-brand-charcoal/80 leading-relaxed">
          <p>
            Few transitions in toddlerhood cause more confusion than the nap drop. Your child starts refusing naps, and you're left wondering: are they ready to stop napping, or is this just a phase? Get it right, and the transition is smooth. Get it wrong, and you end up with an overtired, melting-down child who's harder to manage than ever.
          </p>
          <p>
            This guide will help you know exactly when your toddler is ready, how to make the transition, and what to replace the nap with so everyone stays sane.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            When Do Most Toddlers Stop Napping?
          </h2>
          <p>
            Most children drop their last nap between <strong>2.5 and 3.5 years</strong> of age. However, there's wide individual variation. Some children stop napping at 2, while others continue napping regularly until age 4 or beyond. The AAP recommends 10-13 hours of total sleep per day for 3-5 year olds, which can include a nap — or not.
          </p>
          <p>
            What matters far more than age is your child's behaviour. A 2.5 year old who consistently refuses to nap and is fine until bedtime is probably ready. A 3.5 year old who naps happily and still sleeps well at night still needs their nap.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            Signs Your Toddler Is Ready to Drop the Nap
          </h2>
          <p>
            Look for these signs <strong>consistently over 2-3 weeks</strong> (not just a few days):
          </p>
          <ol className="space-y-4 my-6">
            <li>
              <strong className="text-brand-charcoal">They take 30+ minutes to fall asleep at nap time.</strong> They're lying there chatting, singing, or playing — genuinely not tired enough to sleep.
            </li>
            <li>
              <strong className="text-brand-charcoal">They nap fine but bedtime becomes a disaster.</strong> They nap from 1-3 PM but then can't fall asleep at bedtime until 9 or 9:30 PM. The nap is stealing from night sleep.
            </li>
            <li>
              <strong className="text-brand-charcoal">They skip the nap and are fine until bedtime.</strong> They're not melting down at 4 PM. They're reasonably pleasant through dinner and the bedtime routine.
            </li>
            <li>
              <strong className="text-brand-charcoal">They're at least 2.5 years old.</strong> Before 2.5, nap refusal is almost always a regression, not a sign of readiness. Most children under 2.5 still need daytime sleep even if they fight it.
            </li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            Signs Your Toddler Is NOT Ready (It's a Regression)
          </h2>
          <p>
            Don't drop the nap if:
          </p>
          <ol className="space-y-4 my-6">
            <li>
              <strong className="text-brand-charcoal">They're under 2.5.</strong> The <Link href="/blog/2-year-sleep-regression" className="text-brand-teal hover:underline">2 year sleep regression</Link> often includes nap refusal, but it's temporary. Keep offering the nap.
            </li>
            <li>
              <strong className="text-brand-charcoal">They fall apart by late afternoon.</strong> If they skip the nap and become a tantrum machine by 4 PM, they still need it. They're refusing for FOMO, not because they don't need the sleep.
            </li>
            <li>
              <strong className="text-brand-charcoal">It's been less than 2 weeks.</strong> Toddlers go through temporary phases of nap resistance. Wait at least 2-3 weeks of consistent refusal before concluding they're done.
            </li>
            <li>
              <strong className="text-brand-charcoal">A major change just happened.</strong> New sibling, starting nursery, moving house — nap disruption linked to life transitions is temporary and doesn't mean the nap should go.
            </li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            How to Drop the Nap: The Step-by-Step Transition
          </h2>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Week 1-2: Shorten and Shift</h3>
          <p>
            Don't go cold turkey. Start by capping the nap at 45-60 minutes (set an alarm) and making sure it happens before 2 PM. This reduces the nap's interference with bedtime while still giving your child a midday rest.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Week 2-3: Alternate Days</h3>
          <p>
            Move to napping every other day. On no-nap days, replace the nap with quiet time (more on this below). On nap days, keep it short. Watch how your child handles the no-nap days — if they're managing well, you can start dropping more nap days.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Week 3-4: Quiet Time Replaces Nap</h3>
          <p>
            Transition fully to quiet time. Your child rests in their room for 45-60 minutes after lunch but doesn't have to sleep. If they happen to fall asleep on particularly tiring days, that's fine — let them sleep for 30-45 minutes max.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">The Critical Step: Move Bedtime Earlier</h3>
          <p>
            This is the step most parents miss, and it's the one that makes or breaks the transition. When the nap drops, your child needs more overnight sleep to compensate. Move bedtime 30-60 minutes earlier than it was during the napping phase.
          </p>
          <p>
            A child who used to nap from 1-3 PM and go to bed at 7:30 PM now needs to be in bed by 6:30-7:00 PM. As they adjust over 2-4 weeks, you can gradually push bedtime back to 7:00-7:30 PM.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            How to Set Up Quiet Time
          </h2>
          <p>
            Quiet time is not a punishment. It's a rest period that replaces the nap and gives your child (and you) a midday break. Here's how to make it work:
          </p>
          <p className="mt-4">
            <strong>When:</strong> After lunch, at the time the nap used to happen. Usually around 12:30-1:00 PM.
          </p>
          <p className="mt-4">
            <strong>How long:</strong> 45-60 minutes. Use a toddler clock or timer so your child knows when it's over.
          </p>
          <p className="mt-4">
            <strong>Where:</strong> In their bedroom, with the door closed or a gate up. The room should be dim but not dark (this isn't sleep time).
          </p>
          <p className="mt-4">
            <strong>Activities:</strong> Books, puzzles, colouring, quiet toys. No screens — the point is rest, and screens are stimulating. Rotate the activities weekly to keep it interesting.
          </p>
          <p className="mt-4">
            <strong>The rule:</strong> "You don't have to sleep, but you do have to stay in your room and play quietly until the clock turns green." Frame it as a positive: "This is your special quiet time."
          </p>

          {/* CTA */}
          <div className="bg-brand-coral/5 border border-brand-coral/20 rounded-xl p-6 my-10 text-center">
            <p className="font-bold text-brand-charcoal text-lg mb-2">Need the Complete Nap Transition Plan?</p>
            <p className="text-brand-charcoal/70 mb-4">
              The <Link href="/blog/3-year-sleep-regression" className="text-brand-teal hover:underline">3-Year Sleep Regression Playbook</Link> includes the full week-by-week nap transition guide, quiet time activity planner, and schedule adjustment templates.
            </p>
            <Link href="/#products" className="inline-block bg-brand-coral hover:bg-brand-coral-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Get the 3-Year Guide — $24.99
            </Link>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            Common Problems During the Transition
          </h2>
          <p>
            <strong>The 4 PM meltdown.</strong> This is completely normal during the first 1-2 weeks. Your child's body is adjusting to a longer awake period. The earlier bedtime is your best weapon here. Also try a small snack around 3:30 PM and some calm activities (not screen time) between 4 and 5 PM.
          </p>
          <p className="mt-4">
            <strong>They fall asleep during quiet time.</strong> If it happens occasionally, it's fine — they needed it. If it happens every day, they may not actually be ready to drop the nap yet. Go back to a shortened nap for another few weeks and try again.
          </p>
          <p className="mt-4">
            <strong>Night sleep gets worse.</strong> This usually means bedtime isn't early enough. Move it 15-30 minutes earlier and see if it improves. Overtired children sleep worse, not better — it's counterintuitive but consistently true.
          </p>
          <p className="mt-4">
            <strong>They refuse quiet time entirely.</strong> Treat it like any other boundary. "You don't have to sleep, but you do need to stay in your room." Use the silent return method if they leave. Most children accept quiet time within 3-5 days of consistent enforcement.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 my-6">
            <div>
              <h3 className="font-bold text-brand-charcoal mb-2">At what age do toddlers stop napping?</h3>
              <p>Most drop their nap between 2.5 and 3.5 years. Some continue napping occasionally until 4-5. Watch for readiness signs rather than following a fixed age.</p>
            </div>
            <div>
              <h3 className="font-bold text-brand-charcoal mb-2">My 2 year old is refusing naps. Should I stop offering?</h3>
              <p>No. At 2, nap refusal is almost always part of the <Link href="/blog/2-year-sleep-regression" className="text-brand-teal hover:underline">2 year sleep regression</Link>, not a sign they don't need the nap. Keep offering it. If they don't sleep, treat it as quiet rest time.</p>
            </div>
            <div>
              <h3 className="font-bold text-brand-charcoal mb-2">What is quiet time and how do I set it up?</h3>
              <p>Quiet time is a 45-60 minute rest period in their room after lunch, with books and quiet toys. They don't have to sleep. Use a toddler clock so they know when it's over. It preserves the midday rest boundary and prevents overtired late-afternoon behaviour.</p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-brand-teal/10 to-brand-coral/10 rounded-2xl p-8 my-12 text-center">
            <h2 className="text-2xl font-bold text-brand-charcoal mb-3">Get the Complete Sleep Solution</h2>
            <p className="text-brand-charcoal/70 mb-6">Our guides cover every stage — from the first regression at 18 months through the nap transition and beyond.</p>
            <Link href="/#bundle" className="inline-block bg-brand-coral hover:bg-brand-coral-dark text-white font-bold text-lg py-3 px-8 rounded-lg transition-colors">
              Get All 4 Guides — $69.99
            </Link>
          </div>

          {/* Related */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <h3 className="font-bold text-brand-charcoal mb-4">Related Guides</h3>
            <ul className="space-y-2 text-brand-teal">
              <li><Link href="/blog/3-year-sleep-regression" className="hover:underline">3 Year Sleep Regression: Nightmares, Nap Dropping & How to Cope</Link></li>
              <li><Link href="/blog/toddler-bedtime-routine" className="hover:underline">The Perfect Toddler Bedtime Routine: Step-by-Step Guide</Link></li>
              <li><Link href="/blog/toddler-waking-at-night" className="hover:underline">Toddler Waking at Night? 7 Reasons & How to Stop It</Link></li>
              <li><Link href="/blog/2-year-sleep-regression" className="hover:underline">2 Year Sleep Regression: Why It Happens & What to Do</Link></li>
            </ul>
          </div>
        </div>
      </article>
    </>
  )
}
