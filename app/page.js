'use client'

import { useState } from 'react'

// Product data
const products = [
  {
    id: '18-month',
    title: 'The 18-Month Sleep Regression Survival Guide',
    shortTitle: '18-Month Survival Guide',
    audience: 'Parents of 12-20 month olds',
    price: 7.99,
    launchPrice: 4.99,
    badge: 'MOST POPULAR',
    badgeColor: 'bg-brand-coral',
    color: 'teal',
    features: [
      'Why the 18-month regression is the hardest (and what to do)',
      'The exact bedtime routine that works',
      'Scripts for night wakings',
      'Nap transition guide',
      'Printable sleep logs & checklists',
    ],
    image: '/images/product-18month.jpg',
  },
  {
    id: '2-year',
    title: 'The 2-Year Sleep Regression Blueprint',
    shortTitle: '2-Year Blueprint',
    audience: 'Parents of 2-year-olds',
    price: 6.99,
    launchPrice: 4.99,
    badge: 'LAUNCH SALE',
    badgeColor: 'bg-brand-green',
    color: 'gold',
    features: [
      'How to handle the "big kid bed" transition',
      'Scripts for stalling, curtain calls & negotiations',
      'Fear of the dark solutions',
      'Potty training + sleep strategies',
      'Printable routine charts',
    ],
    image: '/images/product-2year.jpg',
  },
  {
    id: '3-year',
    title: 'The 3-Year Sleep Regression Playbook',
    shortTitle: '3-Year Playbook',
    audience: 'Parents of 3-4 year olds',
    price: 6.99,
    launchPrice: 4.99,
    badge: 'LAUNCH SALE',
    badgeColor: 'bg-brand-green',
    color: 'purple',
    features: [
      'Nap dropping guide (when & how)',
      'Nightmare vs. night terror response scripts',
      'The "Worry Eater" technique for anxious kids',
      'How to negotiate with tiny lawyers',
      'Quiet time transition strategies',
    ],
    image: '/images/product-3year.jpg',
  },
  {
    id: 'working-parent',
    title: 'Working Parent Sleep Survival Guide',
    shortTitle: 'Working Parent Guide',
    audience: 'Parents juggling careers + sleepless nights',
    price: 7.99,
    launchPrice: 4.99,
    badge: 'LAUNCH SALE',
    badgeColor: 'bg-brand-green',
    color: 'coral',
    features: [
      'The "Connection-First" routine for late arrivals',
      'Partner coordination scripts',
      'Daycare/nanny communication templates',
      'Weekend reset strategies',
      'Self-care that fits your schedule',
    ],
    image: '/images/product-working.jpg',
  },
]

const bundle = {
  id: 'bundle',
  title: 'The Complete Sleep Regression Solution',
  totalValue: 29.96,
  price: 17.99,
  savings: 11.97,
}

const testimonials = [
  {
    quote: "By night 4, she slept through the night for the first time EVER. I actually cried.",
    name: "Sarah K.",
    role: "Mum of a 2-year-old",
    image: "/images/avatar-sarah.jpg",
  },
  {
    quote: "I was skeptical of another sleep guide, but the DREAM method actually made sense. We finally have our evenings back.",
    name: "Michael T.",
    role: "Dad of 18-month-old twins",
    image: "/images/avatar-michael.jpg",
  },
  {
    quote: "As a working mom, the guilt was eating me alive. This guide gave me permission to set boundaries AND stay connected. Game changer.",
    name: "Jessica L.",
    role: "Marketing manager & mum of one",
    image: "/images/avatar-jessica.jpg",
  },
]

const faqs = [
  {
    question: "What age are these guides for?",
    answer: "The guides cover toddlers from 12 months to 4 years old. Each guide is tailored to a specific developmental stage, so you get advice that's actually relevant to your child's age.",
  },
  {
    question: "Is this a \"cry it out\" method?",
    answer: "No. The DREAM Method is gentle and connection-focused. You'll never be asked to ignore your child. It's about teaching sleep skills while maintaining a strong emotional bond.",
  },
  {
    question: "How quickly will I see results?",
    answer: "Most parents see improvement within 3-5 nights of consistent implementation. Some see results the very first night. The key is consistency.",
  },
  {
    question: "What format are the ebooks?",
    answer: "PDF format. They work on any device—phone, tablet, computer—and can be printed if you prefer a physical copy.",
  },
  {
    question: "Can I buy one guide now and get the bundle later?",
    answer: "Absolutely. You can purchase any individual guide now and come back anytime to buy additional guides or the complete bundle at its discounted price.",
  },
  {
    question: "How do I access my ebooks after purchase?",
    answer: "Immediately after your payment is processed, you'll receive an email with download links. The ebooks are yours to keep forever—no subscriptions, no recurring charges.",
  },
]

// Component for FAQ item with toggle
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="faq-item">
      <button 
        className="faq-question w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="text-brand-teal text-2xl">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <p className="faq-answer">{answer}</p>
      )}
    </div>
  )
}

// Product Card Component - NOW WITH REAL IMAGES
function ProductCard({ product, onBuy }) {
  return (
    <div className="card flex flex-col h-full">
      {/* Product Image */}
      <div className="h-48 bg-gradient-to-br from-brand-teal/10 to-brand-coral/10 relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover"
        />
        {product.badge && (
          <span className={`absolute top-3 right-3 badge ${product.badgeColor} text-white`}>
            {product.badge}
          </span>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-brand-teal font-medium mb-2">{product.audience}</p>
        <h3 className="text-xl font-bold mb-4 text-brand-charcoal">{product.title}</h3>
        
        {/* Features */}
        <ul className="space-y-2 mb-6 flex-grow">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-brand-charcoal/70">
              <span className="text-brand-green mt-0.5">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Price */}
        <div className="mb-4">
          <span className="price-strike mr-2">${product.price.toFixed(2)}</span>
          <span className="price-current">${product.launchPrice.toFixed(2)}</span>
          <span className="ml-2 text-sm text-brand-green font-medium">Launch Price</span>
        </div>
        
        {/* CTA */}
        <button 
          onClick={() => onBuy(product)}
          className="btn-secondary w-full"
        >
          Buy Now — ${product.launchPrice.toFixed(2)}
        </button>
      </div>
    </div>
  )
}

// Main Page Component
export default function SalesPage() {
  
  const handleBuyProduct = (product) => {
    // TODO: Integrate with Stripe Checkout
    console.log('Buying product:', product.id)
    alert(`Stripe checkout coming soon!\n\nProduct: ${product.title}\nPrice: $${product.launchPrice}`)
  }
  
  const handleBuyBundle = () => {
    // TODO: Integrate with Stripe Checkout
    console.log('Buying bundle')
    alert(`Stripe checkout coming soon!\n\nProduct: Complete Bundle\nPrice: $${bundle.price}`)
  }
  
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen">
      
      {/* ============ HERO SECTION ============ */}
      <section className="relative bg-gradient-to-b from-brand-cream to-white section-padding">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            {/* Trust bar */}
            <div className="flex justify-center gap-6 mb-8 text-sm text-brand-charcoal/60">
              <span className="flex items-center gap-1">
                <span className="text-brand-green">✓</span> Instant Download
              </span>
              <span className="flex items-center gap-1">
                <span className="text-brand-green">✓</span> Works Tonight
              </span>
              <span className="flex items-center gap-1">
                <span className="text-brand-green">✓</span> Proven Method
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="heading-xl text-brand-charcoal mb-6">
              Tonight Could Be{' '}
              <span className="text-brand-coral">Different.</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-brand-charcoal/70 mb-8 leading-relaxed">
              The step-by-step guides that have helped thousands of exhausted parents 
              end toddler sleep battles—without the guilt, without the tears, and 
              without losing your sanity.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button onClick={handleBuyBundle} className="btn-primary text-lg px-10 py-4">
                Get the Complete Bundle — $17.99
              </button>
              <button onClick={scrollToProducts} className="btn-outline text-lg px-10 py-4">
                View Individual Guides
              </button>
            </div>
            
            {/* Social proof teaser */}
            <p className="text-sm text-brand-charcoal/50">
              Join thousands of parents who finally got their nights back
            </p>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" 
             style={{clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)'}}></div>
      </section>
      
      
      {/* ============ PAIN SECTION ============ */}
      <section className="bg-white section-padding">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg text-center mb-12">
              Sound <span className="text-brand-coral">Familiar?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="space-y-4">
                <div className="pain-checkbox">You've been up since 3 AM... again</div>
                <div className="pain-checkbox">Bedtime takes 2+ hours of negotiations</div>
                <div className="pain-checkbox">You've tried everything—nothing sticks</div>
              </div>
              <div className="space-y-4">
                <div className="pain-checkbox">You're too exhausted to function at work</div>
                <div className="pain-checkbox">You feel like you're failing as a parent</div>
                <div className="pain-checkbox">Your patience is completely gone</div>
              </div>
            </div>
            
            <div className="bg-brand-cream rounded-2xl p-8 text-center">
              <p className="text-lg text-brand-charcoal/80 leading-relaxed">
                If you checked even one of these, you're in the middle of a{' '}
                <strong className="text-brand-coral">sleep regression</strong>—and you're not alone. 
                Millions of parents go through this. But most don't know there's a 
                <strong> proven way out</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* ============ SOLUTION SECTION ============ */}
      <section className="bg-brand-cream section-padding">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg mb-6">
              Introducing the{' '}
              <span className="text-brand-teal">DREAM Method</span>
            </h2>
            <p className="text-body">
              After surviving multiple sleep regressions with my own children—and helping 
              hundreds of families since—I developed a gentle, research-backed framework 
              that actually works.
            </p>
          </div>
          
          {/* DREAM Method breakdown */}
          <div className="grid md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-12">
            {[
              { letter: 'D', word: 'Decode', desc: "Your toddler's challenge" },
              { letter: 'R', word: 'Reset', desc: 'Your routine' },
              { letter: 'E', word: 'Emotionally', desc: 'Connect deeply' },
              { letter: 'A', word: 'Adapt', desc: 'To changes' },
              { letter: 'M', word: 'Master', desc: 'Healthy habits' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-teal text-white text-2xl font-bold flex items-center justify-center mx-auto mb-3">
                  {item.letter}
                </div>
                <p className="font-semibold text-brand-charcoal">{item.word}</p>
                <p className="text-sm text-brand-charcoal/60">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-lg text-brand-charcoal/70 max-w-2xl mx-auto">
            I've put everything into four comprehensive guides—each designed for a 
            specific age and situation.{' '}
            <strong className="text-brand-charcoal">Find the one that fits your family:</strong>
          </p>
        </div>
      </section>
      
      
      {/* ============ PRODUCTS SECTION ============ */}
      <section id="products" className="bg-white section-padding">
        <div className="container-narrow mx-auto">
          <h2 className="heading-lg text-center mb-4">
            Choose Your <span className="text-brand-teal">Guide</span>
          </h2>
          <p className="text-center text-brand-charcoal/60 mb-12 max-w-2xl mx-auto">
            Each guide is specifically designed for your child's age and developmental stage
          </p>
          
          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onBuy={handleBuyProduct}
              />
            ))}
          </div>
        </div>
      </section>
      
      
      {/* ============ BUNDLE SECTION ============ */}
      <section className="bg-gradient-to-r from-brand-teal to-brand-teal-dark section-padding">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl mx-auto text-center text-white">
            <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-medium mb-6">
              BEST VALUE — SAVE 40%
            </span>
            
            <h2 className="heading-lg mb-4">
              Get the Complete Solution
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Everything you need, no matter what age or stage
            </p>
            
            {/* Bundle contents */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
              <div className="grid sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span>18-Month Survival Guide <span className="text-white/60">($7.99)</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span>2-Year Blueprint <span className="text-white/60">($6.99)</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span>3-Year Playbook <span className="text-white/60">($6.99)</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Working Parent Guide <span className="text-white/60">($7.99)</span></span>
                </div>
              </div>
            </div>
            
            {/* Price */}
            <div className="mb-8">
              <p className="text-white/60 line-through text-xl mb-2">
                Total Value: ${bundle.totalValue.toFixed(2)}
              </p>
              <p className="text-5xl font-bold mb-2">
                ${bundle.price.toFixed(2)}
              </p>
              <p className="text-brand-coral font-medium bg-white/10 inline-block px-4 py-1 rounded-full">
                You save ${bundle.savings.toFixed(2)}
              </p>
            </div>
            
            {/* CTA */}
            <button 
              onClick={handleBuyBundle}
              className="bg-brand-coral hover:bg-brand-coral-dark text-white font-bold text-xl py-4 px-12 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-xl"
            >
              Get the Complete Bundle — ${bundle.price.toFixed(2)}
            </button>
            
            <p className="mt-6 text-white/60 text-sm">
              Instant download • Works on any device • Yours to keep forever
            </p>
          </div>
        </div>
      </section>
      
      
      {/* ============ TESTIMONIALS SECTION - NOW WITH REAL IMAGES ============ */}
      <section className="bg-white section-padding">
        <div className="container-narrow mx-auto">
          <h2 className="heading-lg text-center mb-12">
            What Parents Are <span className="text-brand-coral">Saying</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="flex gap-1 text-brand-coral mb-4">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-brand-charcoal/80 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-brand-charcoal">{testimonial.name}</p>
                    <p className="text-sm text-brand-charcoal/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      
      {/* ============ FAQ SECTION ============ */}
      <section className="bg-brand-cream section-padding">
        <div className="container-narrow mx-auto">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-lg text-center mb-12">
              Frequently Asked <span className="text-brand-teal">Questions</span>
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      
      {/* ============ FINAL CTA SECTION ============ */}
      <section className="bg-white section-padding border-t border-gray-100">
        <div className="container-narrow mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-lg mb-4">
              Ready to <span className="text-brand-coral">Sleep Again?</span>
            </h2>
            <p className="text-xl text-brand-charcoal/70 mb-8">
              You've survived enough 3 AM wake-ups. You've earned peaceful nights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button onClick={handleBuyBundle} className="btn-primary text-lg px-10 py-4">
                Get the Bundle — $17.99
              </button>
              <button onClick={scrollToProducts} className="btn-outline text-lg px-10 py-4">
                View Individual Guides
              </button>
            </div>
            
            {/* Urgency */}
            <div className="inline-flex items-center gap-2 bg-brand-coral/10 text-brand-coral px-4 py-2 rounded-full">
              <span>🔥</span>
              <span className="font-medium">Launch pricing available now</span>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* ============ ABOUT SECTION - NOW WITH REAL IMAGE ============ */}
      <section className="bg-brand-cream section-padding">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Author image - NOW REAL */}
              <img 
                src="/images/author-marli.jpg" 
                alt="Marli Benjamin"
                className="w-32 h-32 rounded-full object-cover flex-shrink-0"
              />
              
              <div>
                <h3 className="text-xl font-bold mb-2">About Marli Benjamin</h3>
                <p className="text-brand-charcoal/70 leading-relaxed">
                  Marli is a mum of two who survived the 18-month sleep regression twice. 
                  After her own sleepless nights, she created The Sleep Regression Solution 
                  to help exhausted parents get their nights back—without the guilt, without 
                  the tears, and without losing their sanity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* ============ FOOTER ============ */}
      <footer className="bg-brand-charcoal text-white py-12 px-4">
        <div className="container-narrow mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="font-semibold mb-1">The Sleep Regression Solution</p>
              <p className="text-white/60 text-sm">© 2025 All rights reserved</p>
            </div>
            
            <div className="flex gap-6 text-sm text-white/60">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="mailto:hello@thesleepregressionsolution.com" className="hover:text-white transition-colors">Contact</a>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-white/60">
              <span>Secure checkout powered by</span>
              <span className="font-semibold text-white">Stripe</span>
            </div>
          </div>
        </div>
      </footer>
      
    </main>
  )
}
