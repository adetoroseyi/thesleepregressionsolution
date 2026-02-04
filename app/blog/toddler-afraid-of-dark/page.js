import Link from 'next/link'

export const metadata = {
  title: 'Toddler Afraid of the Dark: What to Do (Without Making It Worse)',
  description:
    'Your toddler is suddenly scared of the dark at bedtime. Learn why this happens around age 2-3, which responses help, and which ones accidentally reinforce the fear.',
  keywords:
    'toddler afraid of dark, toddler scared of dark, child afraid of dark bedtime, toddler nightlight, toddler bedtime fears, toddler monsters',
  alternates: { canonical: '/blog/toddler-afraid-of-dark' },
  openGraph: {
    title: 'Toddler Afraid of the Dark: What to Do',
    description: 'Why toddlers develop a fear of the dark, which responses help, and which ones make it worse.',
    url: 'https://www.thesleepregressionsolution.com/blog/toddler-afraid-of-dark',
    type: 'article',
  },
}

export default function ToddlerAfraidOfDark() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Toddler Afraid of the Dark: What to Do (Without Making It Worse)',
    author: { '@type': 'Person', name: 'Marli Benjamin' },
    publisher: { '@type': 'Organization', name: 'The Sleep Regression Solution' },
    datePublished: '2025-02-04',
    dateModified: '2025-02-04',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <article className="max-w-3xl mx-auto px-4 py-12 md:py-20">
        <nav className="text-sm text-brand-charcoal/50 mb-8">
          <Link href="/" className="hover:text-brand-teal">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-brand-teal">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-brand-charcoal/70">Toddler Afraid of the Dark</span>
        </nav>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-charcoal mb-6 leading-tight">
          Toddler Afraid of the Dark: What to Do (Without Making It Worse)
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-brand-charcoal/60 mb-8 border-b border-gray-200 pb-6">
          <span>By <strong className="text-brand-charcoal">Marli Benjamin</strong></span>
          <span>•</span>
          <span>Updated February 2025</span>
          <span>•</span>
          <span>8 min read</span>
        </div>

        <div className="prose prose-lg max-w-none text-brand-charcoal/80 leading-relaxed">
          <p>
            Your toddler used to sleep in the dark without a problem. Now, suddenly, they're terrified. They cling to you at bedtime, cry when you turn off the lights, and insist there are monsters in the corner of their room. It seems to have appeared out of nowhere.
          </p>
          <p>
            It didn't. This fear is actually a sign of <em>healthy</em> cognitive development — your child's imagination has reached a new level. But knowing that doesn't make 2 AM any easier. Here's what's happening and exactly how to respond.
          </p>

          <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-xl p-6 my-8">
            <p className="font-semibold text-brand-charcoal mb-2">🆓 Free: Sleep Regression Survival Checklist</p>
            <p className="text-brand-charcoal/70 text-sm mb-3">Covers bedtime fears, night wakings, and regression recovery — one page, actionable tonight.</p>
            <Link href="/free" className="inline-block bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold text-sm py-2 px-5 rounded-lg transition-colors">
              Get the Free Checklist →
            </Link>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            Why Toddlers Become Afraid of the Dark
          </h2>
          <p>
            Fear of the dark typically emerges between ages 2 and 4, with a peak around age 3. It's driven by a specific developmental milestone: the emergence of imagination.
          </p>
          <p>
            Before age 2, your child's thinking was largely concrete — they dealt with what they could see and touch. But around the second birthday, and accelerating through age 3, their brain becomes capable of creating mental images that aren't based on reality. They can now imagine things that don't exist — and crucially, they can't yet reliably distinguish between what they've imagined and what's real.
          </p>
          <p>
            In the dark, with no visual input to anchor them, their imagination fills the void. Shadows become creatures. Silence becomes ominous. The coat hanging on the door becomes a figure standing in their room. These fears feel completely real to your child.
          </p>
          <p>
            This is often a key component of both the <Link href="/blog/2-year-sleep-regression" className="text-brand-teal hover:underline">2 year sleep regression</Link> and the <Link href="/blog/3-year-sleep-regression" className="text-brand-teal hover:underline">3 year sleep regression</Link>, where nighttime fears are a primary driver of sleep disruption.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            What Helps: The Right Responses
          </h2>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Validate, Don't Dismiss</h3>
          <p>
            "I can see you're feeling scared. That makes sense — the dark can feel really different. But you are safe. I'm right next door and nothing can hurt you here."
          </p>
          <p>
            Validation doesn't reinforce the fear. It tells your child that their feelings are acknowledged, which reduces anxiety. Dismissal ("Don't be silly, there's nothing there") tells them their feelings are wrong, which increases anxiety because now they're scared <em>and</em> confused about why they feel scared.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Add a Nightlight (the Right Kind)</h3>
          <p>
            A dim nightlight can make a significant difference. But the colour matters: choose <strong>amber, red, or warm orange</strong>. These warm wavelengths have minimal impact on melatonin production. Avoid blue, white, or cool-toned lights — they suppress melatonin and can genuinely interfere with sleep quality.
          </p>
          <p>
            Let your child choose their nightlight. The sense of agency reduces fear — they've made an active decision to solve the problem, which builds confidence.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Use a Comfort Object</h3>
          <p>
            A special stuffed animal or blanket can serve as a "protector." "Teddy will keep watch while you sleep. He's very brave." This externalises the sense of safety onto an object that's always present — even when you're not in the room.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">The "Worry Eater" Technique (Age 3+)</h3>
          <p>
            For children aged 3 and older, give them a small stuffed animal or decorated box that "eats" worries. Before bed, they whisper or draw their fear and "feed" it to the Worry Eater, who holds onto it so they don't have to. This gives children a tangible way to process their fears without needing you to fix them.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Brief, Confident Reassurance</h3>
          <p>
            When your child calls out about being scared, respond promptly but briefly. Go to them, offer a hug, say your reassurance script, and leave. The key word is <strong>confident</strong> — if you seem worried or linger anxiously, it confirms their suspicion that there's something to be worried about.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            What Makes It Worse: Common Mistakes
          </h2>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Monster Spray and Monster Checks</h3>
          <p>
            This is the most well-intentioned mistake parents make. "Monster spray" (a spray bottle labelled "Anti-Monster Spray") and elaborate under-the-bed checks seem helpful — but they send a clear message: <em>the monsters are real enough that we need protection from them.</em>
          </p>
          <p>
            Instead, state facts calmly: "There are no monsters. Monsters aren't real. Your room is safe." Say it with the same tone you'd use to say "The sky is blue." No drama, no ceremony.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Lying Down With Them Until They Fall Asleep</h3>
          <p>
            When your child is genuinely scared, lying with them feels like the compassionate response — and occasionally, it's fine. But as a nightly habit, it creates a dependency. They learn that they need you to feel safe, which means they'll call for you every time they wake during the night.
          </p>
          <p>
            Instead, sit near the door or in a chair across the room. "I'll sit here for a few minutes while you settle." Over several nights, move the chair further away, then into the hallway, then back to your room.
          </p>

          <h3 className="text-xl font-bold text-brand-charcoal mt-8 mb-3">Scary Content During the Day</h3>
          <p>
            At age 2-3, what seems completely harmless to you can be terrifying to your child. Villains in Disney films, "chase" scenes in cartoons, even intense illustrations in picture books can become nightmare material. Monitor what they're exposed to, especially in the 2 hours before bed.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mt-12 mb-4">
            When to Be Concerned
          </h2>
          <p>
            Normal bedtime fear of the dark is temporary (weeks, not months), responds to reassurance, and doesn't significantly affect daytime behaviour. Speak with your paediatrician if:
          </p>
          <p>
            The fear persists for more than 2-3 months without improvement. Your child shows fear during the day (not just at bedtime). The fear is so intense they vomit, hyperventilate, or can't be calmed. The fear seems connected to a specific traumatic event. You notice significant changes in eating, behaviour, or mood alongside the fear.
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-r from-brand-teal/10 to-brand-coral/10 rounded-2xl p-8 my-12 text-center">
            <h2 className="text-2xl font-bold text-brand-charcoal mb-3">Need the Full Fear Management Toolkit?</h2>
            <p className="text-brand-charcoal/70 mb-6">
              Our age-specific DREAM Method guides include complete fear management strategies, the Worry Eater system, nightmare response scripts, and a week-by-week plan to build your child's sleep confidence.
            </p>
            <Link href="/#products" className="inline-block bg-brand-coral hover:bg-brand-coral-dark text-white font-bold text-lg py-3 px-8 rounded-lg transition-colors mr-4">
              View the Guides
            </Link>
            <Link href="/#bundle" className="inline-block bg-brand-charcoal hover:bg-brand-charcoal/90 text-white font-bold text-lg py-3 px-8 rounded-lg transition-colors">
              Get All 4 — $69.99
            </Link>
          </div>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <h3 className="font-bold text-brand-charcoal mb-4">Related Guides</h3>
            <ul className="space-y-2 text-brand-teal">
              <li><Link href="/blog/2-year-sleep-regression" className="hover:underline">2 Year Sleep Regression: Why It Happens & What to Do</Link></li>
              <li><Link href="/blog/3-year-sleep-regression" className="hover:underline">3 Year Sleep Regression: Nightmares, Nap Dropping & How to Cope</Link></li>
              <li><Link href="/blog/2-year-old-fighting-bedtime" className="hover:underline">2 Year Old Fighting Bedtime? Scripts That Actually Work</Link></li>
              <li><Link href="/blog/toddler-waking-at-night" className="hover:underline">Toddler Waking at Night? 7 Reasons & How to Stop It</Link></li>
            </ul>
          </div>
        </div>
      </article>
    </>
  )
}
