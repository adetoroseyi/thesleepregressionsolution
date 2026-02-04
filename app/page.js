// test
'use client'

import { useState } from 'react'

/*
================================================================================
HIGH-CONVERTING SALES PAGE - RESEARCH-BACKED ARCHITECTURE
================================================================================
Based on validated data from:
- Northwestern University (Social Proof Study - 270% higher purchase likelihood)
- The DVI Group (Testimonial Impact)
- Academy of Mine (Design & Copy Case Study - 34% improvement)
- Leadpages & Unbounce (Landing Page Best Practices)
================================================================================
*/

// =============================================================================
// PRODUCT DATA - PREMIUM PRICING
// =============================================================================
const products = [
  {
    id: '18-month',
    title: 'The 18-Month Sleep Regression Survival Guide',
    subtitle: 'For parents of 12-20 month olds',
    price: 24.99,
    image: '/images/product-18month.jpg',
    badge: 'MOST POPULAR',
    features: [
      'The 5-Night Sleep Rescue Action Plan',
      'Scripts for handling separation anxiety at bedtime',
      'Nap transition guide (from 2 naps to 1)',
      'Printable: Daily Sleep & Mood Tracker',
    ],
  },
  {
    id: '2-year',
    title: 'The 2-Year Sleep Regression Blueprint',
    subtitle: 'For parents of 2-year-olds',
    price: 24.99,
    image: '/images/product-2year.jpg',
    badge: null,
    features: [
      'The P.E.A.C.E. Method for toddler negotiations',
      'Scripts for "just one more story" and stall tactics',
      'Big kid bed transition guide',
      'Printable: Bedtime Routine Reward Chart',
    ],
  },
  {
    id: '3-year',
    title: 'The 3-Year Sleep Regression Playbook',
    subtitle: 'For parents of 3-4 year olds',
    price: 24.99,
    image: '/images/product-3year.jpg',
    badge: null,
    features: [
      'The R.E.S.T. Method for dropping the last nap',
      'Nightmare vs. night terror response scripts',
      'Techniques for managing fears (monsters, the dark)',
      'Printable: "My Big Kid Bed" Success Certificate',
    ],
  },
  {
    id: 'working-parent',
    title: 'The Working Parent Sleep Survival Guide',
    subtitle: 'For parents juggling careers + sleepless nights',
    price: 29.99,
    image: '/images/product-working.jpg',
    badge: 'INCLUDES BONUS',
    features: [
      'The C.E.O. Method (Connect, Efficiency, Outsource)',
      'Career protection strategies when sleep-deprived',
      'Partner & caregiver coordination scripts',
      'Printable: Weekend Reset Planner',
    ],
  },
]

const bundle = {
  id: 'bundle',
  title: 'The Complete Sleep Regression Solution',
  totalValue: 104.96,
  price: 69.99,
  savings: 34.97,
  savingsPercent: 33,
}

// =============================================================================
// ENHANCED TESTIMONIALS - Specific results, locations, star ratings
// =============================================================================
const testimonials = [
  {
    quote: "By night 4, my daughter slept 11 hours straight for the first time EVER. I literally cried happy tears at 6 AM. This method is a game-changer.",
    name: "Sarah K.",
    location: "London",
    role: "Mum of a 2-year-old",
    image: "/images/avatar-sarah.jpg",
    result: "11 hours of uninterrupted sleep",
    stars: 5,
  },
  {
    quote: "I was skeptical—we'd tried 3 sleep consultants and nothing worked. But the DREAM method actually addressed WHY our twins were waking. Within a week, both were sleeping through.",
    name: "Michael T.",
    location: "Manchester",
    role: "Dad of 18-month-old twins",
    image: "/images/avatar-michael.jpg",
    result: "Both twins sleeping through",
    stars: 5,
  },
  {
    quote: "As a marketing director, I was making mistakes at work because I was so exhausted. The Working Parent guide gave me my career AND my sanity back. Worth every penny.",
    name: "Jessica L.",
    location: "Bristol",
    role: "Marketing Director & Mum",
    image: "/images/avatar-jessica.jpg",
    result: "Career & sanity restored",
    stars: 5,
  },
]

// =============================================================================
// FAQ DATA - Addresses objections
// =============================================================================
const faqs = [
  {
    question: "Is this a \"cry it out\" method?",
    answer: "Absolutely not. The DREAM Method is gentle and attachment-focused. You'll never be asked to ignore your child or let them cry alone. It's about understanding their developmental needs and responding with connection while teaching healthy sleep habits.",
  },
  {
    question: "How quickly will I see results?",
    answer: "Most parents see significant improvement within 3-5 nights of consistent implementation. Some see results the very first night. By day 7, most children are sleeping through the night independently. The key is consistency.",
  },
  {
    question: "What if it doesn't work for my family?",
    answer: "We offer a 14-Day Results Guarantee. Implement the DREAM Method consistently for 14 days using the included Sleep Tracker. If you don't see significant improvement, send us your completed tracker and we'll refund you in full. We ask for the tracker because the method only works if you actually use it—and when you do, it works.",
  },
  {
    question: "What format are the ebooks?",
    answer: "You'll receive instant access to PDF files that work on any device—phone, tablet, or computer. You can also print them if you prefer a physical copy. They're yours to keep forever.",
  },
  {
    question: "Is this a one-time payment?",
    answer: "Yes! This is a one-time purchase. No subscriptions, no recurring charges, no upsells. You pay once and get lifetime access to all materials, including any future updates.",
  },
  {
    question: "My situation is unique. Will this work for us?",
    answer: "Each guide includes comprehensive troubleshooting sections covering dozens of specific scenarios: teething, illness, travel, new siblings, daycare transitions, and more. If your situation isn't covered, our email support is here to help.",
  },
]

// =============================================================================
// COMPONENTS
// =============================================================================

// Star Rating Component
function StarRating({ stars }) {
  return (
    <div className="flex gap-1">
      {[...Array(stars)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg">★</span>
      ))}
    </div>
  )
}

// FAQ Item Component
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="border-b border-gray-200 py-5">
      <button 
        className="w-full text-left flex justify-between items-center gap-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg text-brand-charcoal">{question}</span>
        <span className="text-brand-teal text-2xl flex-shrink-0">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <p className="mt-4 text-brand-charcoal/70 leading-relaxed">{answer}</p>
      )}
    </div>
  )
}

// Product Card Component
function ProductCard({ product, onBuy }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="h-48 bg-gradient-to-br from-brand-teal/10 to-brand-coral/10 relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover"
        />
        {product.badge && (
          <span className="absolute top-3 right-3 bg-brand-coral text-white text-xs font-bold px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-brand-teal font-medium mb-1">{product.subtitle}</p>
        <h3 className="text-xl font-bold mb-4 text-brand-charcoal">{product.title}</h3>
        
        {/* Features */}
        <ul className="space-y-2 mb-6 flex-grow">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-brand-charcoal/70">
              <span className="text-brand-green mt-0.5 flex-shrink-0">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Price & CTA */}
        <div className="mt-auto">
          <div className="text-3xl font-bold text-brand-charcoal mb-3">
            ${product.price}
          </div>
          <button 
            onClick={() => onBuy(product.id)}
            className="w-full bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
          >
            Get Instant Access
          </button>
        </div>
      </div>
    </div>
  )
}

// Guarantee Badge Component
function GuaranteeBadge() {
  return (
    <div className="flex items-center gap-3 text-sm text-brand-charcoal/70">
      <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
        <span className="text-2xl">🛡️</span>
      </div>
      <span>60-Day Money-Back Guarantee</span>
    </div>
  )
}

// =============================================================================
// MAIN PAGE COMPONENT
// =============================================================================
export default function HighConvertingSalesPage() {
  const [isLoading, setIsLoading] = useState(false)
  
  const handleBuy = async (productId) => {
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }
      
      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }
  
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }
  
  const scrollToBundle = () => {
    document.getElementById('bundle')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-white">
      
      {/* ================================================================
          SECTION 1: HERO - Specific headline + guarantee + CTA
          Research: Headlines increase conversions 20-50%
      ================================================================ */}
      <section className="bg-gradient-to-b from-brand-cream to-white py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 text-sm text-brand-charcoal/60">
            <span className="flex items-center gap-2">
              <span className="text-brand-green">✓</span> Instant PDF Download
            </span>
            <span className="flex items-center gap-2">
              <span className="text-brand-green">✓</span> Works in 5 Nights
            </span>
            <span className="flex items-center gap-2 font-semibold text-brand-charcoal">
              <span className="text-brand-green">✓</span> 14-Day Results Guarantee
            </span>
          </div>
          
          {/* Main Headline - Specific + Benefit-Driven */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-charcoal mb-6 leading-tight">
            Get Your Toddler Sleeping Through the Night in{' '}
            <span className="text-brand-coral">5 Nights</span>
          </h1>
          
          {/* Subheadline - Addresses objection + outcome */}
          <p className="text-xl md:text-2xl text-brand-charcoal/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            The gentle, attachment-focused method that has helped <strong>2,000+ exhausted parents</strong> end 
            sleep regressions—without cry-it-out, without guilt, and without losing your sanity.
          </p>
          
          {/* Primary CTA */}
          <div className="mb-8">
            <button 
              onClick={scrollToBundle}
              className="bg-brand-coral hover:bg-brand-coral-dark text-white font-bold text-lg md:text-xl py-4 px-10 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get the Complete Solution — ${bundle.price}
            </button>
            <p className="mt-3 text-sm text-brand-charcoal/50">
              Instant access • 14-day results guarantee • One-time payment
            </p>
          </div>
          
          {/* Secondary CTA */}
          <button 
            onClick={scrollToProducts}
            className="text-brand-teal hover:text-brand-teal-dark font-medium underline"
          >
            Or choose an individual guide →
          </button>
        </div>
      </section>
      
      
      {/* ================================================================
          SECTION 2: HOOK / INDOCTRINATION - Personal story
          Research: Emotional connection builds trust
      ================================================================ */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Author Photo */}
            <img 
              src="/images/author-marli.jpg" 
              alt="Marli Benjamin"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover flex-shrink-0 mx-auto md:mx-0"
            />
            
            {/* Story */}
            <div className="text-lg text-brand-charcoal/80 leading-relaxed space-y-4">
              <p className="text-xl font-medium text-brand-charcoal">
                "I've been exactly where you are right now."
              </p>
              <p>
                I'm Marli—a mum of two who survived the 18-month sleep regression twice. 
                The first time, I did everything wrong. I was so desperate I tried five different 
                methods in one week. Nothing worked, and I made things worse.
              </p>
              <p>
                The second time, I knew better. I developed a systematic approach based on 
                developmental science and gentle attachment principles. My daughter went from 
                waking 6 times a night to sleeping through in just 5 nights.
              </p>
              <p className="font-medium text-brand-teal">
                Since then, I've helped over 2,000 families do the same. And today, I want to help you.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* ================================================================
          SECTION 3: PAIN & AGITATION - Emotional narrative
          Research: Visceral storytelling increases relevance
      ================================================================ */}
      <section className="py-16 md:py-20 px-4 bg-brand-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal text-center mb-10">
            It's 3:47 AM. <span className="text-brand-coral">Again.</span>
          </h2>
          
          <div className="text-lg text-brand-charcoal/80 leading-relaxed space-y-6">
            <p>
              Your toddler is screaming. Your partner rolls over with a frustrated sigh. 
              You drag yourself out of bed for the fourth time tonight, your eyes burning, 
              wondering what you did wrong.
            </p>
            
            <p>
              You've tried everything. The sleep training books. The expensive consultants. 
              The white noise machines and blackout curtains. The rigid schedules and the 
              "drowsy but awake" advice that never seems to work.
            </p>
            
            <p className="font-medium text-brand-charcoal">
              And yet, here you are. Exhausted. Defeated. Questioning your abilities as a parent.
            </p>
            
            {/* Consequence List */}
            <div className="bg-white rounded-xl p-6 my-8">
              <p className="font-semibold text-brand-charcoal mb-4">The real cost of sleepless nights:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-brand-coral">✗</span>
                  <span>Your relationship is strained—you and your partner barely speak except to argue</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-coral">✗</span>
                  <span>Your work is suffering—missed deadlines, forgotten meetings, diminishing performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-coral">✗</span>
                  <span>Your patience is gone—you're snapping at everyone, including your child</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-coral">✗</span>
                  <span>Your health is declining—constant exhaustion, anxiety, and that fog that never lifts</span>
                </li>
              </ul>
            </div>
            
            <p className="text-xl font-bold text-brand-teal text-center">
              If this is your reality, please know: It's not your fault. And there IS a way out.
            </p>
          </div>
        </div>
      </section>
      
      
      {/* ================================================================
          SECTION 4: THE SOLUTION - DREAM Method introduction
          Research: Proprietary method increases perceived value
      ================================================================ */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">
              Introducing the <span className="text-brand-teal">DREAM Method</span>
            </h2>
            <p className="text-xl text-brand-charcoal/70 max-w-2xl mx-auto">
              A 5-step framework designed specifically for sleep regressions—not generic 
              sleep advice that ignores your child's developmental stage.
            </p>
          </div>
          
          {/* DREAM Method Breakdown */}
          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {[
              { letter: 'D', word: 'Decode', desc: "Understand why your child is regressing" },
              { letter: 'R', word: 'Reset', desc: 'Optimize their sleep environment' },
              { letter: 'E', word: 'Emotionally', desc: 'Connect without creating dependence' },
              { letter: 'A', word: 'Adapt', desc: 'Adjust to their specific temperament' },
              { letter: 'M', word: 'Master', desc: 'Build habits that last' },
            ].map((item, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-16 h-16 rounded-full bg-brand-teal text-white text-2xl font-bold flex items-center justify-center mx-auto mb-3">
                  {item.letter}
                </div>
                <p className="font-bold text-brand-charcoal">{item.word}</p>
                <p className="text-sm text-brand-charcoal/60 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Results Promise */}
          <div className="bg-brand-cream rounded-2xl p-8 text-center">
            <p className="text-lg text-brand-charcoal/80 mb-4">
              <strong>The Result?</strong> Most parents see significant improvement within 3-5 nights. 
              By night 7, their child is sleeping through independently.
            </p>
            <p className="text-brand-charcoal/70">
              But more importantly, parents report: restored peace in their marriage, renewed 
              confidence in their parenting, and a stronger bond with their child.
            </p>
          </div>
        </div>
      </section>
      
      
      {/* ================================================================
          SECTION 5: THE OFFER - Individual products
          Research: Clear value breakdown justifies price
      ================================================================ */}
      <section id="products" className="py-16 md:py-20 px-4 bg-brand-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">
              Choose Your Guide
            </h2>
            <p className="text-lg text-brand-charcoal/70 max-w-2xl mx-auto">
              Each guide is tailored to your child's specific developmental stage—because 
              an 18-month-old and a 3-year-old need completely different approaches.
            </p>
          </div>
          
          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onBuy={handleBuy}
              />
            ))}
          </div>
          
          {/* Or Get the Bundle */}
          <div className="text-center mt-12">
            <p className="text-brand-charcoal/70 mb-4">
              Not sure which one you need? <strong>Get all four and save 33%.</strong>
            </p>
            <button 
              onClick={scrollToBundle}
              className="text-brand-coral hover:text-brand-coral-dark font-semibold text-lg underline"
            >
              See the Complete Bundle →
            </button>
          </div>
        </div>
      </section>
      
      
      {/* ================================================================
          SECTION 6: BUNDLE OFFER - Primary conversion target
          Research: Bundle with savings drives higher AOV
      ================================================================ */}
      <section id="bundle" className="py-16 md:py-20 px-4 bg-gradient-to-r from-brand-teal to-brand-teal-dark">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <span className="inline-block bg-brand-coral text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
                BEST VALUE — SAVE ${bundle.savings.toFixed(2)}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-2">
                The Complete Sleep Regression Solution
              </h2>
              <p className="text-lg text-brand-charcoal/70">
                Everything you need, no matter what age or stage
              </p>
            </div>
            
            {/* What's Included */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {products.map((product) => (
                <div key={product.id} className="flex items-center gap-3 p-3 bg-brand-cream rounded-lg">
                  <span className="text-brand-green text-xl">✓</span>
                  <div>
                    <p className="font-medium text-brand-charcoal">{product.title}</p>
                    <p className="text-sm text-brand-charcoal/50">(${product.price} value)</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bonus */}
            <div className="bg-gradient-to-r from-brand-coral/10 to-brand-teal/10 rounded-xl p-6 mb-8">
              <p className="font-bold text-brand-charcoal mb-2">🎁 BONUS: Sleep Regression Quick-Start Checklist</p>
              <p className="text-brand-charcoal/70">
                A one-page action plan so you can start implementing tonight—even if you're too 
                exhausted to read the full guides right now. ($19 value, yours FREE)
              </p>
            </div>
            
            {/* Price */}
            <div className="text-center mb-8">
              <p className="text-brand-charcoal/50 line-through text-lg">
                Total Value: ${bundle.totalValue.toFixed(2)}
              </p>
              <p className="text-5xl font-extrabold text-brand-charcoal my-2">
                ${bundle.price}
              </p>
              <p className="text-brand-green font-semibold">
                You save ${bundle.savings.toFixed(2)} ({bundle.savingsPercent}% off)
              </p>
            </div>
            
            {/* CTA */}
            <div className="text-center">
              <button 
                onClick={() => handleBuy('bundle')}
                className="bg-brand-coral hover:bg-brand-coral-dark text-white font-bold text-xl py-4 px-12 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg w-full md:w-auto"
              >
                Get the Complete Bundle — ${bundle.price}
              </button>
              <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-brand-charcoal/60">
                <span className="flex items-center gap-2">
                  <span className="text-brand-green">✓</span> Instant PDF Download
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-brand-green">✓</span> 14-Day Guarantee
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-brand-green">✓</span> Lifetime Access
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* ================================================================
          SECTION 7: BENEFITS TIMELINE
          Research: Specific outcomes increase desire
      ================================================================ */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal text-center mb-12">
            What Changes <span className="text-brand-teal">After You Start</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Immediate */}
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-brand-coral/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-bold text-xl text-brand-charcoal mb-3">Within 5 Nights</h3>
              <ul className="text-left text-brand-charcoal/70 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-brand-green">✓</span>
                  <span>Your first full night of uninterrupted sleep</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green">✓</span>
                  <span>Reduced bedtime battles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green">✓</span>
                  <span>Confidence that you're on the right track</span>
                </li>
              </ul>
            </div>
            
            {/* Short-term */}
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌙</span>
              </div>
              <h3 className="font-bold text-xl text-brand-charcoal mb-3">Within 2 Weeks</h3>
              <ul className="text-left text-brand-charcoal/70 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-brand-green">✓</span>
                  <span>A peaceful bedtime routine—no negotiations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green">✓</span>
                  <span>Your relationship with your partner improving</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green">✓</span>
                  <span>Energy to be present during the day</span>
                </li>
              </ul>
            </div>
            
            {/* Long-term */}
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="font-bold text-xl text-brand-charcoal mb-3">Long-Term</h3>
              <ul className="text-left text-brand-charcoal/70 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-brand-green">✓</span>
                  <span>A confident, independent sleeper</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green">✓</span>
                  <span>Tools to handle future regressions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-green">✓</span>
                  <span>A stronger bond with your child</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* ================================================================
          SECTION 8: SOCIAL PROOF - Testimonials with specifics
          Research: 270% higher purchase likelihood with reviews
      ================================================================ */}
      <section className="py-16 md:py-20 px-4 bg-brand-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal text-center mb-4">
            Real Parents. <span className="text-brand-coral">Real Results.</span>
          </h2>
          <p className="text-center text-brand-charcoal/70 mb-12 max-w-2xl mx-auto">
            Join over 2,000 families who have transformed their nights with the DREAM Method.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
                {/* Stars */}
                <StarRating stars={testimonial.stars} />
                
                {/* Result Badge */}
                <div className="inline-block bg-brand-green/10 text-brand-green text-sm font-medium px-3 py-1 rounded-full my-3">
                  {testimonial.result}
                </div>
                
                {/* Quote */}
                <p className="text-brand-charcoal/80 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-brand-charcoal">{testimonial.name}</p>
                    <p className="text-sm text-brand-charcoal/60">{testimonial.role}, {testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      
      {/* ================================================================
          SECTION 9: GUARANTEE + FAQ - Risk reversal
          Research: Guarantees increase conversions 3-6%
      ================================================================ */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          
          {/* Guarantee */}
          <div className="bg-brand-green/5 border-2 border-brand-green/20 rounded-2xl p-8 mb-16 text-center">
            <div className="w-20 h-20 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🛡️</span>
            </div>
            <h3 className="text-2xl font-bold text-brand-charcoal mb-4">
              14-Day Results Guarantee
            </h3>
            <p className="text-brand-charcoal/70 leading-relaxed max-w-xl mx-auto mb-4">
              I'm confident the DREAM Method will work for your family. Implement the method 
              consistently for 14 days using the included Sleep Tracker. If you don't see 
              significant improvement, send us your completed tracker and we'll refund you in full.
            </p>
            <p className="text-brand-charcoal/60 text-sm max-w-lg mx-auto">
              Why do we ask for the tracker? Because the method only works if you actually use it. 
              The tracker takes 2 minutes per day and ensures you're implementing correctly—which 
              means you WILL see results.
            </p>
            <p className="text-brand-green font-medium mt-4">
              Fair for you. Fair for us. And it works.
            </p>
          </div>
          
          {/* FAQ */}
          <h2 className="text-3xl font-bold text-brand-charcoal text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="bg-brand-cream rounded-2xl p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
      
      
      {/* ================================================================
          SECTION 10: FINAL CTA - Last conversion opportunity
          Research: Multiple CTAs capture hesitant buyers
      ================================================================ */}
      <section className="py-16 md:py-20 px-4 bg-brand-charcoal">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            You Deserve to Sleep Again.
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Every night you wait is another night of exhaustion, frustration, and strain on 
            your family. The DREAM Method can change that—starting tonight.
          </p>
          
          {/* What They Get - Checklist */}
          <div className="bg-white/10 rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
            <p className="text-white font-semibold mb-4">When you order, you get:</p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-3">
                <span className="text-brand-coral">✓</span>
                <span>Instant PDF download (start tonight)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-coral">✓</span>
                <span>Lifetime access to all materials</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-coral">✓</span>
                <span>Free updates as methods evolve</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-coral">✓</span>
                <span>14-day results guarantee</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-coral">✓</span>
                <span>Email support if you get stuck</span>
              </li>
            </ul>
          </div>
          
          {/* Final CTA */}
          <button 
            onClick={() => handleBuy('bundle')}
            className="bg-brand-coral hover:bg-brand-coral-dark text-white font-bold text-xl py-4 px-12 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Get the Complete Bundle — ${bundle.price}
          </button>
          
          <p className="mt-4 text-white/50 text-sm">
            One-time payment. Instant access. Risk-free.
          </p>
          
          {/* Individual Guides Link */}
          <p className="mt-8 text-white/60">
            Want just one guide?{' '}
            <button 
              onClick={scrollToProducts}
              className="text-brand-coral hover:text-brand-coral-dark underline"
            >
              View individual guides from $24.99
            </button>
          </p>
        </div>
      </section>
      
      
      {/* ================================================================
          FOOTER
      ================================================================ */}
      <footer className="bg-brand-charcoal border-t border-white/10 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/60 text-sm">
            <div>
              <p className="font-semibold text-white">The Sleep Regression Solution</p>
              <p>© 2025 All rights reserved</p>
            </div>
            
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="mailto:hello@thesleepregressionsolution.com" className="hover:text-white transition-colors">Contact</a>
            </div>
            
            <div className="flex items-center gap-2">
              <span>Secure checkout by</span>
              <span className="font-semibold text-white">Stripe</span>
            </div>
          </div>
        </div>
      </footer>
      
    </main>
  )
}
