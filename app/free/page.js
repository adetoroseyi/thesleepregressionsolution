'use client'

import { useState } from 'react'

export default function FreeChecklist() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, firstName }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // Success State
  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-brand-cream to-white flex items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✓</span>
          </div>
          <h1 className="text-3xl font-bold text-brand-charcoal mb-4">
            Check Your Inbox!
          </h1>
          <p className="text-lg text-brand-charcoal/70 mb-6">
            Your <strong>Sleep Regression Survival Checklist</strong> is on its way to <strong>{email}</strong>.
          </p>
          <p className="text-brand-charcoal/60 mb-8">
            Can't find it? Check your spam folder and mark us as "not spam" so you don't miss our helpful tips.
          </p>
          <a 
            href="/"
            className="inline-block bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Back to Home
          </a>
        </div>
      </main>
    )
  }

  // Form State
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-cream to-white">
      
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Content */}
            <div>
              <span className="inline-block bg-brand-coral/10 text-brand-coral text-sm font-semibold px-4 py-1 rounded-full mb-4">
                FREE DOWNLOAD
              </span>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-charcoal mb-6 leading-tight">
                The Sleep Regression Survival Checklist
              </h1>
              
              <p className="text-xl text-brand-charcoal/70 mb-6 leading-relaxed">
                A simple, one-page action plan to help you survive your toddler's sleep regression—
                <strong> starting tonight.</strong>
              </p>
              
              {/* What's Inside */}
              <div className="space-y-3 mb-8">
                <p className="font-semibold text-brand-charcoal">Inside this free checklist:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-brand-charcoal/80">
                    <span className="text-brand-green mt-1">✓</span>
                    <span>The 5 signs your toddler is in a sleep regression (not just being difficult)</span>
                  </li>
                  <li className="flex items-start gap-3 text-brand-charcoal/80">
                    <span className="text-brand-green mt-1">✓</span>
                    <span>Quick-win bedtime routine adjustments you can make tonight</span>
                  </li>
                  <li className="flex items-start gap-3 text-brand-charcoal/80">
                    <span className="text-brand-green mt-1">✓</span>
                    <span>The 3 biggest mistakes that make regressions worse</span>
                  </li>
                  <li className="flex items-start gap-3 text-brand-charcoal/80">
                    <span className="text-brand-green mt-1">✓</span>
                    <span>A simple "Night 1 Action Plan" to start seeing improvement fast</span>
                  </li>
                </ul>
              </div>
              
              {/* Social Proof */}
              <p className="text-sm text-brand-charcoal/60">
                Downloaded by <strong>2,000+</strong> exhausted parents
              </p>
            </div>
            
            {/* Right: Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-brand-charcoal mb-2 text-center">
                Get Your Free Checklist
              </h2>
              <p className="text-brand-charcoal/60 text-center mb-6">
                Enter your details below and we'll send it straight to your inbox.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-brand-charcoal mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Your first name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all"
                  />
                </div>
                
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-charcoal mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all"
                  />
                </div>
                
                {/* Error Message */}
                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-brand-coral hover:bg-brand-coral-dark text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Send Me the Checklist →'}
                </button>
                
                {/* Privacy Note */}
                <p className="text-xs text-brand-charcoal/50 text-center">
                  We respect your privacy. Unsubscribe anytime.{' '}
                  <a href="/privacy" className="underline hover:text-brand-teal">Privacy Policy</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* Trust Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8">
            What Parents Say About the Checklist
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-brand-cream p-6 rounded-xl">
              <p className="text-brand-charcoal/80 italic mb-4">
                "I printed this and stuck it on my fridge. Such a relief to have a simple plan when you're too exhausted to think."
              </p>
              <p className="font-semibold text-brand-charcoal">— Emma R.</p>
            </div>
            <div className="bg-brand-cream p-6 rounded-xl">
              <p className="text-brand-charcoal/80 italic mb-4">
                "The 'Night 1 Action Plan' alone was worth it. We saw improvement that same night!"
              </p>
              <p className="font-semibold text-brand-charcoal">— David M.</p>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* About Section */}
      <section className="py-12 px-4 bg-brand-cream">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img 
              src="/images/author-marli.jpg" 
              alt="Marli Benjamin"
              className="w-24 h-24 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <p className="text-brand-charcoal/80 leading-relaxed">
                <strong className="text-brand-charcoal">Hi, I'm Marli!</strong> I'm a mum of two who survived the 18-month 
                sleep regression twice. I created this checklist because I know how overwhelming it feels when you're 
                running on no sleep. This is the simple guide I wish I'd had.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* Final CTA */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Ready to Start Sleeping Again?
          </h2>
          <p className="text-brand-charcoal/70 mb-6">
            Get the free checklist now and take the first step toward peaceful nights.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-brand-coral hover:bg-brand-coral-dark text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get Your Free Checklist ↑
          </button>
        </div>
      </section>
      
      
      {/* Footer */}
      <footer className="bg-brand-charcoal text-white py-8 px-4">
        <div className="max-w-3xl mx-auto text-center text-white/60 text-sm">
          <p className="mb-2">© 2025 The Sleep Regression Solution. All rights reserved.</p>
          <div className="flex justify-center gap-4">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/" className="hover:text-white transition-colors">Home</a>
          </div>
        </div>
      </footer>
      
    </main>
  )
}
