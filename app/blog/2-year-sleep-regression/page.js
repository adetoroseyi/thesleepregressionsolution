import Link from 'next/link'

export const metadata = {
  title: '2 Year Sleep Regression: Why It Happens & What to Do (2025 Guide)',
  description:
    'Is your 2 year old suddenly fighting bedtime, waking at night, or refusing naps? Learn why the 2 year sleep regression happens, how long it lasts, and the gentle step-by-step DREAM Method to end bedtime battles for good.',
  keywords:
    '2 year sleep regression, 2 year old not sleeping, 2 year old waking at night, toddler bedtime battles, 2 year old fighting sleep, 2 year old sleep regression how long',
  alternates: {
    canonical: '/blog/2-year-sleep-regression',
  },
  openGraph: {
    title: '2 Year Sleep Regression: Why It Happens & What to Do',
    description:
      'The complete guide to the 2 year old sleep regression. Understand the causes, know what to expect, and get the proven gentle method to restore peaceful bedtimes.',
    url: 'https://www.thesleepregressionsolution.com/blog/2-year-sleep-regression',
    type: 'article',
  },
}

export default function TwoYearSleepRegression() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does the 2 year sleep regression last?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The 2 year sleep regression typically lasts 2 to 6 weeks. With consistent routines and firm but loving boundaries, many families see improvement within 1 to 2 weeks. Without intervention, new habits formed during the regression can extend sleep problems for months.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is my 2 year old suddenly fighting bedtime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'At 2 years old, toddlers experience a surge in independence, imagination, and fear of missing out (FOMO). They now understand that life continues after they go to bed, and they want to be part of it. New fears of the dark and monsters can also make their bedroom feel scary.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should my 2 year old still be napping?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Most 2 year olds still need one daytime nap of 1 to 2.5 hours. Nap refusal during the regression does not mean they are ready to drop the nap entirely. Most children are not truly ready to drop naps until age 3 or later. Eliminating naps too early leads to overtiredness, which makes night sleep worse.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it normal for a 2 year old to wake up at night?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Occasional night waking is normal, but frequent wakings during the 2 year regression are typically caused by developmental changes, new fears, boundary testing, or schedule issues. With a consistent approach, most 2 year olds return to sleeping through the night within a few weeks.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should I move my 2 year old to a toddler bed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ideally, wait until closer to age 3 if your child is safe in their cot. Transitioning during a sleep regression adds another disruption and often makes sleep worse. If your child is climbing out of the cot and it is a safety concern, then the transition should be made with a consistent bedtime routine in place.',
        },
      },
    ],
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '2 Year Sleep Regression: Why It Happens & What to Do',
    author: { '@type': 'Person', name: 'Marli Benjamin' },
    publisher: {
      '@type': 'Organization',
      name: 'The Sleep Regression Solution',
      url: 'https://www.thesleepregressionsolution.com',
    },
    datePublished: '2025-02-04',
    dateModified: '2025-02-04',
    description:
      'Complete guide to the 2 year sleep regression — causes, signs, duration, bedtime battles, and the proven DREAM Method to restore peaceful nights.',
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
          <span className="text-brand-charcoal/70">2 Year Sleep Regression</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-charcoal mb-6 leading-tight">
          2 Year Sleep Regression: Why It Happens &amp; What to Do About It
        </h1>

        {/* Meta line */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-brand-charcoal/60 mb-8 border-b border-gray-200 pb-6">
          <span>By <strong className="text-brand-charcoal">Marli Benjamin</strong></span>
          <span>•</span>
          <span>Updated February 2025</span>
          <span>•</span>
          <span>13 min read</span>
        </div>

        {/* Lead Magnet CTA - Top */}
        <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-xl p-6 mb-10">
          <p className="font-semibold text-brand-charcoal mb-2">
            🆓 Free Download: Sleep Regression Survival Checklist
          </p>
          <p className="text-brand-charcoal/70 text-sm mb-3">
            A one-page action plan you can start tonight — even at the end of the longest day.
          </p>
          <Link
            href="/free"
            className="inline-block bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold text-sm py-2 px-5 rounded-lg transition-colors"
          >
            Get the Free Checklist →
          </Link>
        </div>

        {/* Intro */}
        <div className="prose prose-lg max-w-none text-brand-charcoal/80 leading-relaxed">
          <p>
            "One more story. I need water. There's a monster. I need a wee. My blanket is wrong. Mummy, don't go."
          </p>
          <p>
            If bedtime in your house has become an hour-long negotiation with a tiny person who seems to have trained as a barrister, welcome to the <strong>2 year sleep regression</strong>. It's real, it's exhausting, and it's nothing like the regressions you've dealt with before.
          </p>
          <p>
            Unlike the 18-month regression, which is largely driven by separation anxiety and physical development, the 2 year regression introduces something new: a toddler who is smarter, more verbal, more imaginative, and far more determined to stay awake. They're not just struggling to sleep — they're actively <em>negotiating</em> their way out of it.
          </p>
          <p>
            The good news? It's temporary, it's developmentally normal, and with the right approach, most families get through it within a couple of weeks. In this guide, I'll explain exactly what's going on and give you the proven method I've used with over 2,000 families to end bedtime battles and restore peaceful nights.
          </p>

          {/* Table of Contents */}
          <div className="bg-brand-cream rounded-xl p-6 my-8">
            <p className="font-bold text-brand-charcoal mb-3">In This Guide:</p>
            <ol className="space-y-1 text-brand-charcoal/70 list-decimal list-inside">
              <li><a href="#what-is-it" className="text-brand-teal hover:underline">What Is the 2 Year Sleep Regression?</a></li>
              <li><a href="#signs" className="text-brand-teal hover:underline">Signs Your 2 Year Old Is in a Sleep Regression</a></li>
              <li><a href="#causes" className="text-brand-teal hover:underline">Why It Happens: The Perfect Storm at Age 2</a></li>
              <li><a href="#how-long" className="text-brand-teal hover:underline">How Long Does the 2 Year Sleep Regression Last?</a></li>
              <li><a href="#vs-18-month" className="text-brand-teal hover:underline">How It Differs from the 18 Month Regression</a></li>
              <li><a href="#how-to-fix" className="text-brand-teal hover:underline">How to Fix It: The DREAM Method for 2 Year Olds</a></li>
              <li><a href="#bedtime-battles" className="text-brand-teal hover:underline">Ending Bedtime Battles and Stalling</a></li>
              <li><a href="#night-fears" className="text-brand-teal hover:underline">Handling Nighttime Fears and Imagination</a></li>
              <li><a href="#naps" className="text-brand-teal hover:underline">Should Your 2 Year Old Still Be Napping?</a></li>
              <li><a href="#toddler-bed" className="text-brand-teal hover:underline">The Toddler Bed Question</a></li>
              <li><a href="#mistakes" className="text-brand-teal hover:underline">6 Mistakes That Make It Worse</a></li>
              <li><a href="#faq" className="text-brand-teal hover:underline">FAQ</a></li>
            </ol>
          </div>

          {/* Section 1 */}
          <h2 id="what-is-it" className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            What Is the 2 Year Sleep Regression?
          </h2>
          <p>
            The 2 year sleep regression is a period when a toddler who was previously sleeping well suddenly starts resisting bedtime, waking during the night, refusing naps, or waking too early in the morning. It typically occurs between 22 months and 2.5 years, though the timing varies from child to child.
          </p>
          <p>
            Like all sleep regressions, it's driven by developmental changes — but this one has a uniquely frustrating flavour. Your 2 year old isn't just waking because their brain is developing. They're waking because they've developed <em>opinions</em>, <em>fears</em>, and an impressive ability to stall.
          </p>
          <p>
            The regression is temporary. Sleep skills don't disappear. But without a consistent response, the temporary disruption can become a long-term habit — which is why understanding what's happening and how to respond is so important.
          </p>

          {/* Section 2 */}
          <h2 id="signs" className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            Signs Your 2 Year Old Is in a Sleep Regression
          </h2>
          <p>
            The 2 year regression looks different from earlier ones. Here are the most common signs:
          </p>
          <ol className="space-y-4 my-6">
            <li>
              <strong className="text-brand-charcoal">Bedtime stalling and negotiation.</strong> "One more story," "I need water," "my tummy hurts," "I need another cuddle." Your toddler has developed an arsenal of delay tactics and deploys them expertly every single night.
            </li>
            <li>
              <strong className="text-brand-charcoal">Night wakings with call-outs.</strong> Unlike the crying of earlier regressions, your 2 year old may now call for you by name, request specific things, or simply get out of bed and appear in your room.
            </li>
            <li>
              <strong className="text-brand-charcoal">Nap refusal.</strong> They spend the entire nap time singing, talking, or playing instead of sleeping. Or they scream in protest the moment you mention the word "nap."
            </li>
            <li>
              <strong className="text-brand-charcoal">New fears at bedtime.</strong> Suddenly they're afraid of the dark, convinced there are monsters, or anxious about shadows. These fears are developmentally appropriate but can be intensely disruptive.
            </li>
            <li>
              <strong className="text-brand-charcoal">Early morning wakings.</strong> They're up at 5 AM — awake, alert, and ready for the day when nobody else is.
            </li>
            <li>
              <strong className="text-brand-charcoal">Increased defiance during the bedtime routine.</strong> Refusing pyjamas, running away during tooth-brushing, throwing loveys out of the cot, or going completely rigid when you try to lay them down.
            </li>
          </ol>

          {/* Section 3 */}
          <h2 id="causes" className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            Why the 2 Year Sleep Regression Happens
          </h2>
          <p>
            Several developmental shifts converge around age 2, and together they create the perfect conditions for disrupted sleep.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Fear of Missing Out (FOMO)</h3>
          <p>
            This is the single biggest driver of the 2 year regression, and it's the one that makes it so different from earlier disruptions. Before this age, your toddler's world was limited to their immediate experience — when they were in their room sleeping, that was their whole reality.
          </p>
          <p>
            Now, they understand that life continues after they go to bed. They know you're in the other room. They know their sibling is still awake. They know there are things happening that they're missing. And they want to be part of it. This awareness is a genuine cognitive leap — but it makes bedtime feel like a punishment rather than a routine.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">The Imagination Explosion</h3>
          <p>
            Around age 2, your toddler's imagination comes alive. This is wonderful during the day — imaginative play, pretend games, creative exploration. But at night, in a dark room, that same imagination creates shadows that look like monsters, sounds that feel threatening, and a general sense that the bedroom isn't safe.
          </p>
          <p>
            These fears are not manipulative. They're a genuine developmental milestone. Your toddler's brain has become sophisticated enough to imagine things that aren't there — but it hasn't yet developed the ability to distinguish imagination from reality.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">The Drive for Independence and Control</h3>
          <p>
            Two year olds are famous for wanting control. "I do it myself" is their motto. Bedtime is one of the few moments in the day when they have almost no control — you decide when, where, and how they sleep. For a toddler who has spent the entire day asserting their independence, this sudden loss of autonomy can trigger fierce resistance.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">The Language Explosion</h3>
          <p>
            At 2, your toddler's vocabulary is growing rapidly. They can now articulate requests, protests, and emotional needs in ways they couldn't before. This gives them powerful new tools for bedtime negotiation — and they will use every single one of them.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Life Transitions</h3>
          <p>
            Many big changes tend to cluster around age 2: a new sibling, starting nursery or daycare, potty training, moving to a toddler bed, or even a house move. Any of these can independently disrupt sleep. When they coincide with the developmental regression, the impact is amplified.
          </p>

          {/* Section 4 */}
          <h2 id="how-long" className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            How Long Does the 2 Year Sleep Regression Last?
          </h2>
          <p>
            The purely developmental component of the regression typically lasts <strong>2 to 6 weeks</strong>. Some families get through it in as little as 10 to 14 days.
          </p>
          <p>
            However — and this is the critical part — the habits formed <em>during</em> the regression can outlast the regression itself. If you start lying with your toddler until they fall asleep, bringing them into your bed, or giving in to "one more story" every night, those patterns can persist for months after the developmental trigger has passed.
          </p>
          <p>
            The key distinction is between the regression (temporary and developmental) and the habits (your response, which you control). Families who maintain consistent boundaries while offering comfort and reassurance almost always see faster resolution.
          </p>

          {/* Section 5 */}
          <h2 id="vs-18-month" className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            How the 2 Year Regression Differs from the 18 Month Regression
          </h2>
          <p>
            If you've already been through the <Link href="/blog/18-month-sleep-regression" className="text-brand-teal hover:underline">18 month sleep regression</Link>, you might expect the 2 year version to be similar. It's not. Here's what's different:
          </p>
          <p>
            The 18 month regression is primarily driven by separation anxiety and the beginning of boundary testing. At 2, separation anxiety has largely diminished — but it's been replaced by something more complex: a toddler who can reason, negotiate, and manipulate the situation. They're not crying because they're scared you've left. They're calling you back because they've figured out that "I need water" works every single time.
          </p>
          <p>
            The other major difference is fear. At 18 months, fears are relatively simple — the dark, being alone. At 2, the imagination adds layers: monsters, "bad guys," specific characters from books or screens, and abstract anxieties that they can now verbally express.
          </p>
          <p>
            This means the approach needs to shift. At 18 months, the emphasis is on reassurance and attachment. At 2, the emphasis is on <strong>giving controlled choices, addressing fears with empathy, and holding firm boundaries with love</strong>.
          </p>

          {/* CTA - Mid-article */}
          <div className="bg-brand-coral/5 border border-brand-coral/20 rounded-xl p-6 my-10 text-center">
            <p className="font-bold text-brand-charcoal text-lg mb-2">
              Need the Complete Night-by-Night Plan?
            </p>
            <p className="text-brand-charcoal/70 mb-4">
              The 2-Year Sleep Regression Blueprint includes the full DREAM Method adapted for 2 year olds, word-for-word scripts for every stalling tactic, a fear management toolkit, and a printable bedtime routine chart.
            </p>
            <Link
              href="/#products"
              className="inline-block bg-brand-coral hover:bg-brand-coral-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Get the 2-Year Guide — $24.99
            </Link>
          </div>

          {/* Section 6 */}
          <h2 id="how-to-fix" className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            How to Fix the 2 Year Sleep Regression: The DREAM Method
          </h2>
          <p>
            The DREAM Method works for every regression, but at age 2, each step needs to be adapted to your toddler's new cognitive abilities.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">D — Decode: Understand the Root Cause</h3>
          <p>
            Is your toddler stalling because they want control? Are they genuinely afraid? Is their nap too long or too late, leaving them undertired at bedtime? Or are they overtired from dropping a nap too early? Spend 48 hours auditing their sleep — track bedtimes, wake times, nap length, and behaviour. The pattern will reveal the primary driver.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">R — Reset: Build a Predictable Wind-Down</h3>
          <p>
            Your bedtime routine should be 20 to 30 minutes and follow the exact same sequence every night: bath, pyjamas, teeth, two books, one song, goodnight phrase, lights out. Predictability is your strongest weapon against stalling because your toddler knows exactly what comes next — and that "next" is non-negotiable.
          </p>
          <p>
            A critical addition at this age: the "bedtime warning." Give a 10-minute warning before the routine starts. "In 10 minutes, we're going to start getting ready for bed." Then a 5-minute warning. Then: "It's time." This gives your toddler a sense of transition rather than an abrupt change.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">E — Emotionally Connect: Fill the Cup Before Bed</h3>
          <p>
            Two year olds who feel connected and secure during the day are less likely to desperately seek connection at bedtime. Build in 15 minutes of focused, one-on-one time before the bedtime routine — no phone, no distractions, just you and your child doing whatever they want to do.
          </p>
          <p>
            For nighttime fears, validate the feeling without reinforcing the fear. "I understand the shadows look scary. You're safe in your room. Your teddy is here, your nightlight is on, and Mummy and Daddy are right next door." Avoid elaborate monster-checking rituals — they confirm that there's something to be afraid of.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">A — Adapt: Give Controlled Choices</h3>
          <p>
            This is the game-changer for 2 year olds. Instead of removing all control (which triggers resistance), offer two acceptable choices throughout the routine: "Do you want the blue pyjamas or the red pyjamas?" "Do you want to read this book or that book?" "Do you want Mummy or Daddy to tuck you in?"
          </p>
          <p>
            By the time they get into bed, they've made four or five decisions. Their need for control has been satisfied. The one decision they don't get to make? Whether or not they go to bed.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">M — Master: Hold the Boundary</h3>
          <p>
            After the routine is complete and you've said goodnight, the boundary is set. If your toddler calls out, respond once with a brief, calm reassurance: "You're okay. It's sleep time. I love you." After that, don't engage further. Every additional response teaches them that persistence is rewarded.
          </p>
          <p>
            This is hard. It may be the hardest part of parenting a 2 year old. But every night you hold the boundary, the protests get shorter. Most families see a dramatic reduction in stalling within 3 to 5 nights of consistent follow-through.
          </p>

          {/* Section 7 */}
          <h2 id="bedtime-battles" className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            Ending Bedtime Battles and Stalling
          </h2>
          <p>
            Bedtime stalling is the hallmark of the 2 year regression, and it works because parents are generous, loving people who want their children to feel heard. Your toddler has figured out that "I need water" gets a response. "I'm scared" gets a longer response. "I need a wee" gets you back in the room.
          </p>
          <p>
            The solution isn't to ignore genuine needs — it's to pre-empt them. Build everything into the routine: water on the nightstand, one last toilet trip, a nightlight already on, their comfort object already in bed. Then, when the requests start after lights out, you can confidently say: "You already have your water. You already went to the toilet. Everything is ready. It's sleep time now."
          </p>
          <p>
            One technique that works brilliantly at this age: the <strong>"bedtime pass."</strong> Give your toddler one physical card or token. They can use it once after lights out for one request — a hug, a glass of water, whatever they choose. Once it's used, it's gone. This gives them a sense of control while setting a clear limit. Many parents are amazed at how quickly this stops the endless call-backs.
          </p>

          {/* Section 8 */}
          <h2 id="night-fears" className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            Handling Nighttime Fears and Imagination
          </h2>
          <p>
            At 2, nighttime fears are genuine. Your toddler's brain has developed the ability to imagine things that aren't there, but it hasn't yet developed the ability to reason those fears away. Dismissing their fears ("There are no monsters, go back to sleep") doesn't help. Neither does elaborate validation ("Let me check every corner for monsters") — that confirms the threat is real.
          </p>
          <p>
            The middle ground is brief, warm acknowledgement followed by a statement of safety:
          </p>
          <p className="bg-brand-cream rounded-lg p-4 italic">
            "I know the dark can feel scary sometimes. You're completely safe. Your room is your special place. Teddy is here with you, and Mummy and Daddy are right next door. Nothing scary can get in. I love you. Goodnight."
          </p>
          <p>
            Practical tools that help: a dim nightlight (red or amber tones, not blue), a comfort object they've chosen themselves, and a "magic" element like "special sleepy spray" (a spray bottle of water with a drop of lavender) that they can spray around their room before bed.
          </p>

          {/* Section 9 */}
          <h2 id="naps" className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            Should Your 2 Year Old Still Be Napping?
          </h2>
          <p>
            <strong>Yes.</strong> This is one of the most important messages in this entire guide. When a 2 year old starts refusing naps, many parents assume they're ready to drop them. In the vast majority of cases, they're not.
          </p>
          <p>
            Most children aren't genuinely ready to drop their nap until age 3 or later. A 2 year old who fights naps is usually doing so because of FOMO and the desire for control — not because they don't need the sleep.
          </p>
          <p>
            Dropping the nap too early leads to chronic overtiredness. Overtired toddlers produce more cortisol, which acts like adrenaline. This makes them wired, hyperactive, and harder to settle at bedtime. It also leads to more night wakings and earlier morning wake-ups. In other words, eliminating the nap to "fix" night sleep almost always backfires.
          </p>
          <p>
            What you may need to adjust is the nap <em>timing</em>. At 2, the nap should fall around 12:30 to 1:00 PM, and last 1 to 2 hours. Ensure there are at least 4.5 to 5 hours between the end of the nap and bedtime. If the nap is too long or too late, it will push bedtime later and increase resistance.
          </p>

          {/* Section 10 */}
          <h2 id="toddler-bed" className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            The Toddler Bed Question
          </h2>
          <p>
            Many parents wonder whether now is the time to move their 2 year old from a cot to a toddler bed. My advice: <strong>if they're not climbing out, don't switch yet</strong>.
          </p>
          <p>
            The cot provides physical boundaries that support sleep. Removing those boundaries during a regression — when your toddler is already testing limits — adds another variable to an already chaotic situation. The result is usually a toddler who gets out of bed repeatedly, turning bedtime from a 30-minute routine into a 2-hour ordeal.
          </p>
          <p>
            If your toddler is climbing out of the cot and it's a safety concern, make the transition — but do it with a clear plan. Set up a consistent "back to bed" protocol: every time they get out, calmly and silently walk them back. No conversation, no engagement. The first night might require 20 or 30 returns. By night 3 or 4, most toddlers have got the message.
          </p>

          {/* Section 11 */}
          <h2 id="mistakes" className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            6 Mistakes That Make the 2 Year Sleep Regression Worse
          </h2>
          <ol className="space-y-4 my-6">
            <li>
              <strong className="text-brand-charcoal">Giving in to "just one more."</strong> Every time you add one more story, one more hug, or one more glass of water after the routine is done, you teach your toddler that the routine isn't really over. Tomorrow, they'll ask for two more.
            </li>
            <li>
              <strong className="text-brand-charcoal">Dropping the nap too early.</strong> A 2 year old refusing naps is not the same as a 2 year old who doesn't need naps. Keep offering the nap. If they don't sleep, make it quiet rest time.
            </li>
            <li>
              <strong className="text-brand-charcoal">Switching to a toddler bed during the regression.</strong> Adding a major transition on top of a regression compounds the problem. Wait until sleep has stabilised if possible.
            </li>
            <li>
              <strong className="text-brand-charcoal">Elaborate monster-hunting rituals.</strong> Checking under the bed, spraying "monster repellent" in every corner, and opening cupboards to prove they're empty sends the message that monsters <em>could</em> be real. Keep your reassurance brief and confident.
            </li>
            <li>
              <strong className="text-brand-charcoal">Engaging in bedtime negotiations.</strong> Your toddler is testing whether the rules are firm. If you debate, justify, or reason with them after lights out, you've already lost. State the boundary once, then disengage.
            </li>
            <li>
              <strong className="text-brand-charcoal">Inconsistency between parents.</strong> If one parent gives an extra story and the other doesn't, your toddler will always escalate with the softer parent. Get on the same page with your partner before implementing any changes.
            </li>
          </ol>

          {/* FAQ Section */}
          <h2 id="faq" className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 my-6">
            <div>
              <h3 className="font-bold text-brand-charcoal mb-2">How long does the 2 year sleep regression last?</h3>
              <p>
                Typically 2 to 6 weeks. With consistent routines and boundaries, many families resolve it within 10 to 14 days. Without intervention, habits formed during the regression can extend sleep problems for months.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-brand-charcoal mb-2">Why is my 2 year old suddenly fighting bedtime?</h3>
              <p>
                At 2, toddlers develop a strong sense of FOMO — they know life continues after bedtime and they want to be part of it. Combined with a drive for independence and the ability to negotiate verbally, bedtime becomes the perfect battleground for asserting control.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-brand-charcoal mb-2">Should my 2 year old still be napping?</h3>
              <p>
                Yes. Most 2 year olds need one nap of 1 to 2.5 hours. Nap refusal during the regression doesn't mean they're ready to drop it — most children don't truly outgrow naps until age 3 or later. Dropping naps too early worsens night sleep.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-brand-charcoal mb-2">Is it normal for my 2 year old to be afraid of the dark?</h3>
              <p>
                Completely normal. At 2, your toddler's imagination has developed enough to create scary scenarios, but they don't yet have the cognitive ability to reason those fears away. A dim nightlight, a comfort object, and brief, confident reassurance are the best responses.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-brand-charcoal mb-2">When should I move my 2 year old to a toddler bed?</h3>
              <p>
                If they're safe in their cot and not climbing out, wait — ideally until closer to age 3. If they are climbing out, make the transition with a clear "back to bed" protocol and avoid doing it in the middle of a regression if possible.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-brand-charcoal mb-2">My 2 year old keeps getting out of bed. What do I do?</h3>
              <p>
                Use the silent return method: every time they get out of bed, calmly walk them back without conversation or engagement. The first few nights may require many returns, but consistency pays off quickly — most toddlers respond within 3 to 5 nights.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-brand-teal/10 to-brand-coral/10 rounded-2xl p-8 my-12 text-center">
            <h2 className="text-2xl font-bold text-brand-charcoal mb-3">
              Ready to End the Bedtime Battles?
            </h2>
            <p className="text-brand-charcoal/70 mb-2">
              This article covers the essentials, but the <strong>2-Year Sleep Regression Blueprint</strong> gives you the complete implementation plan, word-for-word scripts for every stalling tactic, a fear management toolkit, the bedtime pass system, and a printable routine chart.
            </p>
            <p className="text-brand-charcoal/70 mb-6">
              Over 2,000 families have used the DREAM Method to transform bedtime — most see a dramatic reduction in stalling within 3 to 5 nights.
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
              <li><Link href="/blog/3-year-sleep-regression" className="hover:underline">3 Year Sleep Regression: Nightmares, Nap Dropping & How to Cope</Link></li>
              <li className="text-brand-charcoal/50 italic">More guides coming soon — sign up for our <Link href="/free" className="text-brand-teal hover:underline">free checklist</Link> to be notified.</li>
            </ul>
          </div>
        </div>
      </article>
    </>
  )
}
