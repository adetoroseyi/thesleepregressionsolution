import Link from 'next/link'

export const metadata = {
  title: 'The Perfect Toddler Bedtime Routine: A Step-by-Step Guide (2025)',
  description:
    'Build a calming toddler bedtime routine that actually works. Step-by-step guide with timing, scripts, and a free printable routine chart for ages 1-4.',
  keywords:
    'toddler bedtime routine, bedtime routine for toddlers, toddler bedtime schedule, bedtime routine chart, how to get toddler to sleep',
  alternates: { canonical: '/blog/toddler-bedtime-routine' },
  openGraph: {
    title: 'The Perfect Toddler Bedtime Routine: Step-by-Step Guide',
    description: 'A calming 20-minute bedtime routine that works for toddlers aged 1-4. Includes timing, scripts, and troubleshooting.',
    url: 'https://www.thesleepregressionsolution.com/blog/toddler-bedtime-routine',
    type: 'article',
  },
}

export default function ToddlerBedtimeRoutine() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a good bedtime routine for a toddler?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A good toddler bedtime routine lasts 20 to 30 minutes and follows the same steps in the same order every night: bath or wash, pyjamas and teeth, 2 books, a brief connection moment (like recapping the day), a goodnight phrase, then lights out. Predictability is the key — toddlers feel safe when they know exactly what comes next.',
        },
      },
      {
        '@type': 'Question',
        name: 'What time should a toddler go to bed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most toddlers do best with a bedtime between 7:00 and 8:00 PM. The ideal time depends on their age, whether they still nap, and when they wake in the morning. A toddler who has dropped their nap will need an earlier bedtime (6:30-7:00 PM) to prevent overtiredness.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long should a toddler bedtime routine be?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Aim for 20 to 30 minutes. Shorter than 15 minutes does not give your toddler enough time to wind down. Longer than 30 minutes gives them too many opportunities to stall and negotiate. Consistency in length matters as much as consistency in steps.',
        },
      },
    ],
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Perfect Toddler Bedtime Routine: A Step-by-Step Guide',
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
          <span className="text-brand-charcoal/70">Toddler Bedtime Routine</span>
        </nav>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-charcoal mb-6 leading-tight">
          The Perfect Toddler Bedtime Routine: A Step-by-Step Guide
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-brand-charcoal/60 mb-8 border-b border-gray-200 pb-6">
          <span>By <strong className="text-brand-charcoal">Marli Benjamin</strong></span>
          <span>•</span>
          <span>Updated February 2025</span>
          <span>•</span>
          <span>9 min read</span>
        </div>

        <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-xl p-6 mb-10">
          <p className="font-semibold text-brand-charcoal mb-2">🆓 Free Download: Sleep Regression Survival Checklist</p>
          <p className="text-brand-charcoal/70 text-sm mb-3">Includes a printable bedtime routine chart you can stick on the wall tonight.</p>
          <Link href="/free" className="inline-block bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold text-sm py-2 px-5 rounded-lg transition-colors">
            Get the Free Checklist →
          </Link>
        </div>

        <div className="prose prose-lg max-w-none text-brand-charcoal/80 leading-relaxed">
          <p>
            If there's one thing that makes the biggest difference to toddler sleep — bigger than any gadget, supplement, or sleep training method — it's the bedtime routine. A consistent, calming routine is the foundation that everything else builds on.
          </p>
          <p>
            Whether you're dealing with an <Link href="/blog/18-month-sleep-regression" className="text-brand-teal hover:underline">18 month sleep regression</Link>, a <Link href="/blog/2-year-sleep-regression" className="text-brand-teal hover:underline">2 year old fighting bedtime</Link>, or a <Link href="/blog/3-year-sleep-regression" className="text-brand-teal hover:underline">3 year old who negotiates like a lawyer</Link>, the routine is your anchor. Here's exactly how to build one that works.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            Why Routines Work So Well for Toddlers
          </h2>
          <p>
            Toddlers live in a world that mostly happens <em>to</em> them. Adults decide when they eat, what they wear, where they go. A bedtime routine gives them something they crave: predictability. When they know exactly what comes next, they feel safe — and safe toddlers resist sleep far less than anxious ones.
          </p>
          <p>
            Research consistently shows that children with a consistent bedtime routine fall asleep faster, wake less during the night, and sleep longer overall. The routine itself acts as a series of cues that signal to your toddler's brain: sleep is coming. By the time you reach the final step, their body is already winding down.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            The Ideal Toddler Bedtime Routine (20-30 Minutes)
          </h2>
          <p>
            This routine works for toddlers from about 12 months through to age 4. You'll adapt the details as they grow, but the structure stays the same.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Step 1: The Warning (5-10 minutes before)</h3>
          <p>
            Don't spring bedtime on your toddler. Give them a 10-minute warning, then a 5-minute warning. "In 10 minutes, we're going to start getting ready for bed." This is especially important from age 2 onwards, when your toddler has a strong sense of autonomy and resents abrupt transitions.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Step 2: Bath or Wash (5-7 minutes)</h3>
          <p>
            A warm bath signals to your toddler's body that it's time to wind down. The slight drop in body temperature after getting out of the bath naturally promotes drowsiness. If a bath isn't practical every night, a warm face-and-hands wash works too. The key is consistency — same step, same time.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Step 3: Pyjamas and Teeth (3-5 minutes)</h3>
          <p>
            For toddlers aged 2+, offer a choice: "Do you want the dinosaur pyjamas or the stripy ones?" This satisfies their need for control without derailing the routine. Brush teeth together — making it part of the flow rather than a separate battle.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Step 4: Two Books (5-7 minutes)</h3>
          <p>
            Two. Not one, not three, not "one more." Set the expectation from the beginning: "We're going to read two books tonight." Let them choose which two. This is another controlled choice that prevents the "just one more" negotiation. Read calmly and slowly — this is a wind-down, not a performance.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Step 5: Connection Moment (2-3 minutes)</h3>
          <p>
            This is the secret weapon of the routine. After books, spend a brief moment talking about the day. "What was your favourite part of today? What are you looking forward to tomorrow?" For older toddlers (2.5+), this is also the "worry dump" — a chance to voice anything that's on their mind so they don't need to call you back later.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Step 6: Goodnight Phrase + Lights Out</h3>
          <p>
            End with the same phrase every night. "Goodnight, sleep tight, I love you. See you in the morning." Then lights out (nightlight stays on if needed). This phrase becomes a Pavlovian cue — over time, your toddler's body begins winding down the moment they hear it.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            Timing by Age
          </h2>
          <p>
            The right bedtime depends on your child's age and whether they're still napping:
          </p>
          <div className="bg-brand-cream rounded-xl p-6 my-6">
            <p><strong>12-18 months (2 naps):</strong> Bedtime 7:00-7:30 PM. Total sleep need ~13-14 hours.</p>
            <p className="mt-2"><strong>18 months - 2.5 years (1 nap):</strong> Bedtime 7:00-7:30 PM. Ensure 4-5 hours between end of nap and bedtime.</p>
            <p className="mt-2"><strong>2.5-3.5 years (dropping nap):</strong> Bedtime 6:30-7:00 PM on no-nap days. On nap days, bedtime can be 7:30 PM.</p>
            <p className="mt-2"><strong>3.5+ years (no nap):</strong> Bedtime 7:00-7:30 PM. Total overnight sleep need ~11-12 hours.</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            What to Do When the Routine Gets Derailed
          </h2>
          <p>
            Toddlers will test the routine. That's their job. Here's how to handle the most common disruptions:
          </p>

          <p className="mt-6">
            <strong>"One more book!"</strong> — "We read our two books. Tomorrow night you can pick two different ones. Now it's time for our goodnight."
          </p>
          <p className="mt-4">
            <strong>"I'm not tired!"</strong> — "You don't have to be tired. You just have to be in bed. Your body will do the rest." Don't debate whether they're tired. That's a negotiation you can't win.
          </p>
          <p className="mt-4">
            <strong>"I need water / the toilet / a different teddy."</strong> — Pre-empt everything. Water on the nightstand. Last toilet trip built into the routine. Their chosen comfort object already in bed. Then you can say: "Everything is ready. It's sleep time."
          </p>
          <p className="mt-4">
            <strong>Running away during the routine.</strong> — Stay calm. Don't chase. "I'm here when you're ready to continue. We can't read books until pyjamas are on." Wait. They'll come back.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            Bedtime Routine During a Sleep Regression
          </h2>
          <p>
            During a sleep regression, your routine is more important than ever — but it may need small adjustments. If your toddler is going through the <Link href="/blog/18-month-sleep-regression" className="text-brand-teal hover:underline">18 month regression</Link>, you may need to add extra reassurance at the connection step. During the <Link href="/blog/2-year-sleep-regression" className="text-brand-teal hover:underline">2 year regression</Link>, the controlled choices become critical. And during the <Link href="/blog/3-year-sleep-regression" className="text-brand-teal hover:underline">3 year regression</Link>, the worry dump and earlier bedtime are essential.
          </p>
          <p>
            The one thing that stays constant: the structure. Same steps, same order, same length. Every night. Even when it feels like it's not working. Especially when it feels like it's not working. Consistency is what gets you through.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6 my-6">
            <div>
              <h3 className="font-bold text-brand-charcoal mb-2">What is a good bedtime routine for a toddler?</h3>
              <p>A 20-30 minute routine with the same steps every night: advance warning, bath/wash, pyjamas and teeth, two books, a brief connection moment, then your goodnight phrase and lights out. Predictability is the single most important factor.</p>
            </div>
            <div>
              <h3 className="font-bold text-brand-charcoal mb-2">What time should a toddler go to bed?</h3>
              <p>Most toddlers do best between 7:00 and 8:00 PM. If they've dropped their nap, move bedtime earlier to 6:30-7:00 PM. The right time is early enough that they're not overtired but late enough that they have sufficient sleep pressure to fall asleep within 10-15 minutes.</p>
            </div>
            <div>
              <h3 className="font-bold text-brand-charcoal mb-2">How long should a toddler bedtime routine be?</h3>
              <p>20 to 30 minutes. Shorter than 15 minutes doesn't give enough wind-down time. Longer than 30 minutes creates too many opportunities for stalling and power struggles.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-brand-teal/10 to-brand-coral/10 rounded-2xl p-8 my-12 text-center">
            <h2 className="text-2xl font-bold text-brand-charcoal mb-3">Need the Complete Sleep Plan?</h2>
            <p className="text-brand-charcoal/70 mb-6">
              The bedtime routine is step one. Our DREAM Method guides give you the full system — including word-for-word scripts, troubleshooting for every scenario, and week-by-week implementation plans tailored to your child's age.
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
