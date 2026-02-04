import Link from 'next/link'

export const metadata = {
  title: '3 Year Sleep Regression: Nightmares, Nap Dropping & How to Cope (2025)',
  description:
    'Is your 3 year old suddenly waking at night, refusing naps, or having nightmares? Learn why the 3 year sleep regression happens, how to handle the nap-to-quiet-time transition, and the proven DREAM Method to restore peaceful sleep.',
  keywords:
    '3 year sleep regression, 3 year old not sleeping, 3 year old nightmares, 3 year old dropping nap, 3 year old waking at night, preschooler sleep regression',
  alternates: {
    canonical: '/blog/3-year-sleep-regression',
  },
  openGraph: {
    title: '3 Year Sleep Regression: Nightmares, Nap Dropping & How to Cope',
    description:
      'The complete guide to the 3 year old sleep regression — nightmares, nap transitions, night terrors, and the gentle method to get through it all.',
    url: 'https://www.thesleepregressionsolution.com/blog/3-year-sleep-regression',
    type: 'article',
  },
}

export default function ThreeYearSleepRegression() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does the 3 year sleep regression last?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The 3 year sleep regression typically lasts 2 to 4 weeks. However, if it coincides with dropping the nap, the adjustment period for the new schedule can take 4 to 6 weeks. Consistency with routines and an earlier bedtime during the transition help speed recovery.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is my 3 year old ready to drop their nap?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Signs your 3 year old is ready to drop their nap include: consistently taking 30+ minutes to fall asleep at nap time, napping well but then not falling asleep until 9 PM or later at bedtime, skipping naps entirely without becoming overtired by late afternoon, and showing this pattern for at least 2 to 3 weeks consistently. Most children drop naps between ages 2.5 and 3.5.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a nightmare and a night terror?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nightmares happen during REM sleep (usually the second half of the night), and your child wakes up scared but aware and able to describe the dream. Night terrors happen during deep non-REM sleep (usually the first few hours), and your child may scream, thrash, or appear terrified but is actually still asleep and will not remember the episode. Nightmares need comfort; night terrors need you to stay nearby without waking the child.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much sleep does a 3 year old need?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The American Academy of Pediatrics recommends 10 to 13 hours of total sleep per 24 hours for children aged 3 to 5. For a 3 year old who no longer naps, this means bedtime needs to be early enough to allow 11 to 12 hours of overnight sleep, typically around 7:00 to 7:30 PM.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is my 3 year old suddenly afraid of the dark?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'At age 3, your child has developed a sophisticated imagination and the ability to create vivid mental scenarios. However, they cannot yet fully distinguish between imagination and reality. This cognitive development, combined with increased exposure to stories, characters, and the wider world, can create genuine fears around darkness, monsters, and being alone.',
        },
      },
    ],
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '3 Year Sleep Regression: Nightmares, Nap Dropping & How to Cope',
    author: { '@type': 'Person', name: 'Marli Benjamin' },
    publisher: {
      '@type': 'Organization',
      name: 'The Sleep Regression Solution',
      url: 'https://www.thesleepregressionsolution.com',
    },
    datePublished: '2025-02-04',
    dateModified: '2025-02-04',
    description:
      'Complete guide to the 3 year sleep regression — nightmares, night terrors, nap-to-quiet-time transition, and the DREAM Method for preschooler sleep.',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-12 md:py-20">
        {/* Breadcrumb */}
        <nav className="text-sm text-brand-charcoal/50 mb-8">
          <Link href="/" className="hover:text-brand-teal">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-brand-teal">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-brand-charcoal/70">3 Year Sleep Regression</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-charcoal mb-6 leading-tight">
          3 Year Sleep Regression: Nightmares, Nap Dropping &amp; How to Cope
        </h1>

        {/* Meta line */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-brand-charcoal/60 mb-8 border-b border-gray-200 pb-6">
          <span>By <strong className="text-brand-charcoal">Marli Benjamin</strong></span>
          <span>•</span>
          <span>Updated February 2025</span>
          <span>•</span>
          <span>14 min read</span>
        </div>

        {/* Lead Magnet CTA - Top */}
        <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-xl p-6 mb-10">
          <p className="font-semibold text-brand-charcoal mb-2">
            🆓 Free Download: Sleep Regression Survival Checklist
          </p>
          <p className="text-brand-charcoal/70 text-sm mb-3">
            A one-page action plan covering all regression ages — start tonight.
          </p>
          <Link
            href="/free"
            className="inline-block bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold text-sm py-2 px-5 rounded-lg transition-colors"
          >
            Get the Free Checklist →
          </Link>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-brand-charcoal/80 leading-relaxed">
          <p>
            You thought the sleep regressions were behind you. You'd survived the 18-month regression, white-knuckled your way through the 2-year bedtime battles, and finally — <em>finally</em> — your child was sleeping through the night again.
          </p>
          <p>
            Then your 3 year old started waking up screaming about monsters. Or they lie in bed for an hour singing to themselves because they're "not tired." Or naps vanished overnight, leaving behind a meltdown-prone child by 4 PM and a bedtime that's somehow harder than ever.
          </p>
          <p>
            Welcome to the <strong>3 year sleep regression</strong> — the last major regression in your child's early sleep journey. It's different from every regression that came before, because this time it's not just about development. It's about the fundamental shift from toddler sleep to preschooler sleep: the end of naps, the rise of complex fears, and a mind that's now sophisticated enough to dream vivid dreams and worry about what's lurking in the dark.
          </p>
          <p>
            In this guide, I'll walk you through exactly what's happening, why it's happening, and the step-by-step approach I've used with over 2,000 families to navigate this final frontier of toddler sleep.
          </p>

          {/* Table of Contents */}
          <div className="bg-brand-cream rounded-xl p-6 my-8">
            <p className="font-bold text-brand-charcoal mb-3">In This Guide:</p>
            <ol className="space-y-1 text-brand-charcoal/70 list-decimal list-inside">
              <li><a href="#what-is-it" className="text-brand-teal hover:underline">What Is the 3 Year Sleep Regression?</a></li>
              <li><a href="#signs" className="text-brand-teal hover:underline">Signs Your 3 Year Old Is in a Sleep Regression</a></li>
              <li><a href="#causes" className="text-brand-teal hover:underline">Why It Happens: What's Different at Age 3</a></li>
              <li><a href="#how-long" className="text-brand-teal hover:underline">How Long Does the 3 Year Sleep Regression Last?</a></li>
              <li><a href="#nap-transition" className="text-brand-teal hover:underline">The Nap-to-Quiet-Time Transition</a></li>
              <li><a href="#nightmares" className="text-brand-teal hover:underline">Nightmares vs Night Terrors: What to Do</a></li>
              <li><a href="#how-to-fix" className="text-brand-teal hover:underline">How to Fix It: The DREAM Method for 3 Year Olds</a></li>
              <li><a href="#staying-in-bed" className="text-brand-teal hover:underline">Getting Your 3 Year Old to Stay in Bed</a></li>
              <li><a href="#mistakes" className="text-brand-teal hover:underline">5 Mistakes That Make It Worse</a></li>
              <li><a href="#faq" className="text-brand-teal hover:underline">FAQ</a></li>
            </ol>
          </div>

          {/* Section 1 */}
          <h2 id="what-is-it" className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            What Is the 3 Year Sleep Regression?
          </h2>
          <p>
            The 3 year sleep regression is typically the last major sleep disruption in the toddler and preschool years. It occurs between approximately 2.5 and 3.5 years of age and is characterised by a combination of sleep resistance, night wakings, nightmares, and — most significantly — the transition away from daytime naps.
          </p>
          <p>
            What makes this regression distinct from earlier ones is that it's less about a single developmental leap and more about a <em>convergence</em> of major changes. Your child's sleep needs are genuinely shifting, their cognitive abilities have reached a level where fear and imagination play a significant role, and many big life transitions (preschool, potty training, new beds, new siblings) tend to cluster around this age.
          </p>
          <p>
            The good news: this is the final frontier. Once you navigate this regression and settle into a nap-free routine, your child's sleep typically stabilises for years to come.
          </p>

          {/* Section 2 */}
          <h2 id="signs" className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            Signs Your 3 Year Old Is in a Sleep Regression
          </h2>
          <ol className="space-y-4 my-6">
            <li>
              <strong className="text-brand-charcoal">Nap refusal or inconsistency.</strong> Some days they nap, some days they don't. Or they lie in their room chatting, singing, and playing for the entire nap period without sleeping.
            </li>
            <li>
              <strong className="text-brand-charcoal">Taking forever to fall asleep at bedtime.</strong> They're in bed by 7:30 but not actually asleep until 9:00. They may seem genuinely not tired — and if they napped late, they may not be.
            </li>
            <li>
              <strong className="text-brand-charcoal">Night wakings with fear or distress.</strong> They wake up crying, calling out about bad dreams, or appearing at your bedside claiming there are monsters in their room.
            </li>
            <li>
              <strong className="text-brand-charcoal">Repeated bed escapes.</strong> They get out of bed constantly — for water, for the toilet, to tell you something, to ask a question, to show you a toy.
            </li>
            <li>
              <strong className="text-brand-charcoal">Early morning wakings.</strong> Up before 6 AM, wide awake and ready to start the day.
            </li>
            <li>
              <strong className="text-brand-charcoal">Late-afternoon meltdowns.</strong> If the nap has been dropped or shortened, you'll often see emotional dysregulation by 4 or 5 PM — tantrums, tearfulness, and irritability that comes from overtiredness.
            </li>
            <li>
              <strong className="text-brand-charcoal">New or intensified fears.</strong> Fear of the dark, fear of being alone, fear of specific characters or creatures. These fears may seem irrational to you but are very real to your child.
            </li>
          </ol>

          {/* Section 3 */}
          <h2 id="causes" className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            Why the 3 Year Sleep Regression Happens
          </h2>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Changing Sleep Needs: The End of Naps</h3>
          <p>
            This is the single biggest factor in the 3 year regression. Between 2.5 and 3.5 years, most children begin transitioning away from their daytime nap. Their total sleep need drops, and if they nap during the day, they simply don't have enough sleep pressure to fall asleep easily at bedtime.
          </p>
          <p>
            The transition doesn't happen overnight, though. For weeks or even months, your child will be in a frustrating in-between state: too tired to skip the nap, but napping pushes bedtime too late. This inconsistency is at the heart of most 3-year-old sleep problems.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">A Sophisticated Imagination</h3>
          <p>
            By age 3, your child's imagination is remarkably developed. They can create elaborate scenarios, engage in detailed pretend play, and — crucially — generate vivid mental images of things that frighten them. Unlike at age 2, where fears were relatively vague (the dark, shadows), a 3 year old's fears are specific: monsters with names, "bad guys" from stories, things that could be hiding in particular places.
          </p>
          <p>
            This same imagination fuels nightmares, which become much more common at this age. Your child can now dream in narrative — and remember those dreams upon waking, which can make them reluctant to go back to sleep.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Life Transitions Clustering Together</h3>
          <p>
            Age 3 is a milestone age in many families. Starting preschool or nursery, potty training, transitioning from a cot to a big bed, welcoming a new sibling — any one of these changes can disrupt sleep. When multiple transitions happen simultaneously, the impact compounds.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Increased Independence and Verbal Ability</h3>
          <p>
            Your 3 year old can now hold full conversations, make complex requests, and reason their way through arguments. This makes bedtime negotiations more sophisticated than ever. They don't just say "I'm not tired" — they explain <em>why</em> they're not tired and present compelling counterarguments to your bedtime rules.
          </p>

          {/* Section 4 */}
          <h2 id="how-long" className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            How Long Does the 3 Year Sleep Regression Last?
          </h2>
          <p>
            The purely developmental regression typically lasts <strong>2 to 4 weeks</strong>. However, if the regression coincides with dropping the nap — which it often does — the full adjustment period can stretch to 4 to 6 weeks as your child's body adapts to the new schedule.
          </p>
          <p>
            The key variable, as with every regression, is your response. If you maintain consistency, move bedtime earlier to compensate for the lost nap, and avoid creating new sleep dependencies, the transition is much smoother. If new habits form (lying with them until they fall asleep, letting them come into your bed at 3 AM), those habits can persist long after the regression itself has passed.
          </p>

          {/* Section 5 */}
          <h2 id="nap-transition" className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            The Nap-to-Quiet-Time Transition
          </h2>
          <p>
            This is often the most confusing part of the 3 year regression, because parents can't tell whether their child is in a regression or simply outgrowing their nap. Here's how to distinguish:
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Signs They're Ready to Drop the Nap</h3>
          <p>
            Your child is likely ready to drop the nap if, for at least 2 to 3 weeks consistently, they show one or more of these patterns: they take 30+ minutes to fall asleep at nap time, they nap well but then don't fall asleep at bedtime until 9 PM or later, they skip naps entirely without becoming desperately overtired by late afternoon, or their night sleep is being disrupted by daytime naps (waking early, taking ages to settle at bedtime).
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">How to Make the Transition</h3>
          <p>
            Don't go cold turkey. Instead, gradually transition nap time into "quiet time" — a 45 to 60 minute period after lunch where your child stays in their room with books, puzzles, or quiet toys. They don't have to sleep, but they do have to rest. This gives their body a midday break and preserves your sanity.
          </p>
          <p>
            Critically, <strong>move bedtime earlier</strong> during the transition. If bedtime was previously 7:30 PM with a nap, you may need to temporarily shift it to 6:30 or even 6:00 PM. A 3 year old who has been awake since 7 AM without a nap needs to be in bed by 7:00 PM at the latest to avoid an overtiredness spiral. As they adjust over 2 to 4 weeks, you can gradually push bedtime back to 7:00-7:30 PM.
          </p>
          <p>
            Expect occasional "crash naps" during the transition — some days they'll need to nap, especially after particularly active or stimulating days. That's perfectly normal. If they do nap, keep it short (30-45 minutes max) and early enough that it doesn't wreck bedtime.
          </p>

          {/* CTA - Mid-article */}
          <div className="bg-brand-coral/5 border border-brand-coral/20 rounded-xl p-6 my-10 text-center">
            <p className="font-bold text-brand-charcoal text-lg mb-2">
              Need the Full Nap Transition Plan?
            </p>
            <p className="text-brand-charcoal/70 mb-4">
              The 3-Year Sleep Regression Playbook includes the complete nap-to-quiet-time transition guide, a nightmare management toolkit, the "Worry Eater" technique for bedtime fears, and a week-by-week schedule adjustment plan.
            </p>
            <Link
              href="/#products"
              className="inline-block bg-brand-coral hover:bg-brand-coral-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Get the 3-Year Guide — $24.99
            </Link>
          </div>

          {/* Section 6 */}
          <h2 id="nightmares" className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            Nightmares vs Night Terrors: What to Do About Each
          </h2>
          <p>
            These are two very different things, and they require very different responses. Understanding the difference will save you a lot of confusion at 2 AM.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Nightmares</h3>
          <p>
            Nightmares are scary dreams that happen during REM sleep, typically in the second half of the night. Your child wakes up genuinely frightened, fully aware, and able to tell you what scared them ("There was a big dog chasing me"). They'll want comfort and may be reluctant to go back to sleep.
          </p>
          <p>
            <strong>What to do:</strong> Go to them. Offer brief, calm reassurance. "That was a scary dream, but it's over now. You're safe in your room. Mummy and Daddy are right here." Don't dismiss the fear — validate it, then redirect. "What would you like to dream about instead? Let's think about going to the beach." Stay for a minute or two, then return to your room.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Night Terrors</h3>
          <p>
            Night terrors happen during deep non-REM sleep, usually in the first 2 to 3 hours after falling asleep. They look terrifying — your child may scream, thrash around, sit up with eyes wide open, appear panicked or confused — but they are actually still completely asleep. They will not recognise you, will not respond to comfort, and will not remember the episode in the morning.
          </p>
          <p>
            <strong>What to do:</strong> Don't try to wake them. Don't restrain them unless they're at risk of hurting themselves. Stay nearby, keep them safe, and wait for it to pass (usually 5 to 15 minutes). Night terrors are far more distressing for you than for your child. If they happen frequently, look for patterns — they're often linked to overtiredness, so an earlier bedtime can help reduce their frequency.
          </p>

          {/* Section 7 */}
          <h2 id="how-to-fix" className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            How to Fix the 3 Year Sleep Regression: The DREAM Method
          </h2>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">D — Decode: What's Actually Driving the Problem?</h3>
          <p>
            At age 3, there are more potential causes than at any earlier regression. Spend a few days auditing the situation: Is the nap too long or too late, making them undertired at bedtime? Are they overtired from dropping the nap too abruptly? Are fears or nightmares the primary issue? Is a life transition (preschool, new sibling, potty training) creating anxiety? Are they getting out of bed because they can, not because they need to? The root cause determines your strategy.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">R — Reset: Create the "Big Kid" Routine</h3>
          <p>
            At 3, your child is ready for a more grown-up bedtime routine — and framing it that way can be powerful. "Now that you're a big kid, here's your big kid bedtime routine." The routine should be 20 to 30 minutes and involve genuine wind-down: bath or wash, teeth, pyjamas, two books, a brief chat about the best parts of the day, your goodnight phrase, lights out.
          </p>
          <p>
            Two additions that work brilliantly at this age: a <strong>"worry dump"</strong> — a brief moment where they can tell you anything that's on their mind before sleep, so they don't need to call you back — and a <strong>toddler clock</strong> that shows them when it's OK to get up in the morning using colours or images they can understand.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">E — Emotionally Connect: Address the Fears</h3>
          <p>
            Fear management is central to the 3 year regression in a way it wasn't at earlier ages. The "Worry Eater" technique works well: give your child a small stuffed animal or decorated box that "eats" their worries. Before bed, they whisper or draw their worry and feed it to the Worry Eater, who holds onto it so they don't have to.
          </p>
          <p>
            For fears of the dark specifically, a dim nightlight (amber or red, not blue or white — blue wavelengths suppress melatonin) provides reassurance without disrupting sleep quality. Let your child choose their own nightlight — the sense of control reduces anxiety.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">A — Adapt: Adjust the Schedule</h3>
          <p>
            The AAP recommends 10 to 13 hours of total sleep per day for 3 to 5 year olds. If your child has dropped their nap, all of that sleep needs to come at night. Do the maths: if they wake at 6:30 AM and need 11.5 hours, bedtime needs to be 7:00 PM.
          </p>
          <p>
            Also consider what happens in the hour before bed. Screen time is particularly disruptive at this age — the content can fuel nighttime fears, and the blue light suppresses melatonin. Aim for screen-free time for at least 1 hour before bed, ideally 2.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">M — Master: Empower Independence</h3>
          <p>
            The long-term goal at this age is to help your child develop genuine sleep confidence — not just compliance. Celebrate their successes: "You stayed in bed all night! That's so grown up." Use a simple reward system if needed — a sticker chart where they earn a sticker for each night they stay in bed, with a small reward after a set number of stickers.
          </p>
          <p>
            Frame sleep as something they <em>get</em> to do, not something they <em>have</em> to do. "Your body does amazing things while you sleep — that's when you grow taller and your brain saves all the fun things you learned today."
          </p>

          {/* Section 8 */}
          <h2 id="staying-in-bed" className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            Getting Your 3 Year Old to Stay in Bed
          </h2>
          <p>
            By age 3, most children are in a toddler bed or big bed, which means they have the freedom to get out. And they will use it. Repeatedly.
          </p>
          <p>
            The <strong>silent return method</strong> remains the most effective approach. Every time your child gets out of bed, calmly walk them back without conversation, without engagement, without emotion. The first time, you can say: "It's bedtime. Back to bed." After that, no words at all. Just a calm, silent return.
          </p>
          <p>
            Night one might require 15 to 30 returns. Night two, usually 10 to 15. By night three or four, most children have understood that getting out of bed doesn't lead to attention, conversation, or entertainment — it just leads to being silently walked back.
          </p>
          <p>
            The "bedtime pass" system also works well at this age. Give your child one pass per night. They can use it for one approved reason — a hug, a drink, a toilet trip. Once it's used, it's gone. In the morning, if the pass is still unused, they get bonus praise or a small reward. This gives them a sense of agency while maintaining a clear boundary.
          </p>

          {/* Section 9 */}
          <h2 id="mistakes" className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            5 Mistakes That Make the 3 Year Sleep Regression Worse
          </h2>
          <ol className="space-y-4 my-6">
            <li>
              <strong className="text-brand-charcoal">Keeping the nap too long.</strong> A child who naps for 2 hours and then lies awake until 9 PM doesn't have a bedtime problem — they have a nap problem. If your child is still napping, cap it at 60 to 90 minutes and make sure it ends by 2:00 PM.
            </li>
            <li>
              <strong className="text-brand-charcoal">Not moving bedtime earlier when the nap drops.</strong> This is the single most common mistake. When the nap disappears, bedtime must move earlier — at least temporarily. A 3 year old who has been awake for 12 hours will be deeply overtired, leading to worse night sleep, not better.
            </li>
            <li>
              <strong className="text-brand-charcoal">Screen time before bed.</strong> At age 3, children are especially vulnerable to the combined impact of blue light (which suppresses melatonin) and stimulating content (which feeds nighttime fears). An exciting or scary scene from an afternoon cartoon can become a nightmare at midnight.
            </li>
            <li>
              <strong className="text-brand-charcoal">Lying with them until they fall asleep.</strong> This is incredibly tempting when your child is scared, and it's not harmful as an occasional one-off. But as a nightly habit, it creates a dependency — your child cannot fall asleep (or fall <em>back</em> asleep) without you physically present.
            </li>
            <li>
              <strong className="text-brand-charcoal">Making too many changes at once.</strong> Starting preschool, potty training, removing the dummy, and transitioning to a big bed all in the same month is a recipe for sleep chaos. Space out major transitions by at least 3 to 4 weeks where possible.
            </li>
          </ol>

          {/* FAQ Section */}
          <h2 id="faq" className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 my-6">
            <div>
              <h3 className="font-bold text-brand-charcoal mb-2">How long does the 3 year sleep regression last?</h3>
              <p>
                The regression itself typically lasts 2 to 4 weeks. If it coincides with dropping the nap, the full adjustment can take 4 to 6 weeks. Moving bedtime earlier and staying consistent with routines speeds the process.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-brand-charcoal mb-2">Is my 3 year old ready to drop their nap?</h3>
              <p>
                Look for consistent signs over 2 to 3 weeks: they take 30+ minutes to fall asleep for naps, napping pushes bedtime past 8:30-9:00 PM, or they skip naps without becoming overtired by late afternoon. Most children drop naps between 2.5 and 3.5 years, though some keep napping occasionally until age 4 or 5.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-brand-charcoal mb-2">What's the difference between a nightmare and a night terror?</h3>
              <p>
                Nightmares happen during REM sleep (second half of the night) — your child wakes up, is aware, and can describe the dream. Offer comfort and reassurance. Night terrors happen during deep sleep (first few hours) — your child appears awake but is actually still asleep, won't recognise you, and won't remember it. Stay nearby but don't try to wake them.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-brand-charcoal mb-2">How much sleep does a 3 year old need?</h3>
              <p>
                The AAP recommends 10 to 13 hours per day. For a child who no longer naps, aim for 11 to 12 hours overnight. This usually means a bedtime between 6:30 and 7:30 PM depending on wake time.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-brand-charcoal mb-2">My 3 year old keeps getting out of bed. What should I do?</h3>
              <p>
                Use the silent return method: walk them back to bed calmly and without conversation each time. It may take 15 to 30 returns on night one, but most children respond within 3 to 5 nights. A "bedtime pass" system can also help by giving them one sanctioned reason to get up.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-brand-charcoal mb-2">Why is my 3 year old suddenly afraid of the dark?</h3>
              <p>
                At 3, your child's imagination is sophisticated enough to create detailed scary scenarios, but their brain hasn't yet developed the ability to fully distinguish imagination from reality. A dim amber nightlight, a chosen comfort object, and brief confident reassurance are the most effective responses.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-brand-teal/10 to-brand-coral/10 rounded-2xl p-8 my-12 text-center">
            <h2 className="text-2xl font-bold text-brand-charcoal mb-3">
              Ready to Navigate the Final Regression?
            </h2>
            <p className="text-brand-charcoal/70 mb-2">
              This article covers the essentials, but the <strong>3-Year Sleep Regression Playbook</strong> gives you the complete nap transition plan, a nightmare management toolkit, the "Worry Eater" system, a quiet-time activity guide, and a printable family sleep plan.
            </p>
            <p className="text-brand-charcoal/70 mb-6">
              Over 2,000 families have used the DREAM Method — this is the final chapter of your sleep regression journey.
            </p>
            <Link
              href="/#products"
              className="inline-block bg-brand-coral hover:bg-brand-coral-dark text-white font-bold text-lg py-3 px-8 rounded-lg transition-colors mr-4"
            >
              Get the Guide — $24.99
            </Link>
            <Link
              href="/#bundle"
              className="inline-block bg-brand-charcoal hover:bg-brand-charcoal/90 text-white font-bold text-lg py-3 px-8 rounded-lg transition-colors"
            >
              Or Get All 4 Guides — $69.99
            </Link>
          </div>

          {/* Related posts */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <h3 className="font-bold text-brand-charcoal mb-4">Related Guides</h3>
            <ul className="space-y-2 text-brand-teal">
              <li><Link href="/blog/18-month-sleep-regression" className="hover:underline">18 Month Sleep Regression: Signs, Causes & How to Fix It</Link></li>
              <li><Link href="/blog/2-year-sleep-regression" className="hover:underline">2 Year Sleep Regression: Why It Happens & What to Do</Link></li>
              {/* Uncomment as you publish */}
              {/* <li><Link href="/blog/when-to-drop-nap" className="hover:underline">When Should Your Toddler Drop Their Nap? The Complete Checklist</Link></li> */}
              {/* <li><Link href="/blog/toddler-nightmares" className="hover:underline">Toddler Nightmares vs Night Terrors: A Parent's Guide</Link></li> */}
              <li className="text-brand-charcoal/50 italic">More guides coming soon — sign up for our <Link href="/free" className="text-brand-teal hover:underline">free checklist</Link> to be notified.</li>
            </ul>
          </div>
        </div>
      </article>
    </>
  )
}
