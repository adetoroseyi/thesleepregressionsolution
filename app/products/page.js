'use client'

import { useState } from 'react'
import Link from 'next/link'
import { products, bundle } from '../../lib/products'
import { freebies } from '../../lib/freebies'

export default function ProductsPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleBuy = async (productId) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Something went wrong')
      if (data.url) window.location.href = data.url
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-brand-charcoal text-lg">
            The Sleep Regression Solution
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/blog" className="text-brand-charcoal/70 hover:text-brand-teal transition-colors">
              Blog
            </Link>
            <Link href="/free" className="text-brand-charcoal/70 hover:text-brand-teal transition-colors">
              Free Resources
            </Link>
            <Link
              href="/products"
              className="text-brand-teal font-semibold"
            >
              All Guides
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-brand-cream to-white py-12 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-charcoal mb-4">
              All Sleep Regression Guides
            </h1>
            <p className="text-lg text-brand-charcoal/60 max-w-2xl mx-auto">
              Evidence-based ebooks for every toddler sleep regression — choose your child's age
              or get the complete bundle and save.
            </p>
          </div>
        </section>

        {/* Bundle CTA */}
        <section className="px-4 -mt-2 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-brand-teal to-brand-teal-dark rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                  BEST VALUE — SAVE ${bundle.savings.toFixed(2)}
                </span>
                <h2 className="text-xl md:text-2xl font-bold">{bundle.title}</h2>
                <p className="text-white/80 text-sm mt-1">
                  All {products.length} guides • Instant download • 14-day guarantee
                </p>
              </div>
              <div className="text-center md:text-right flex-shrink-0">
                <p className="text-3xl font-extrabold">${bundle.price}</p>
                <button
                  onClick={() => handleBuy('bundle')}
                  className="mt-2 bg-brand-coral hover:bg-brand-coral-dark text-white font-bold py-3 px-8 rounded-lg transition-all"
                >
                  Get the Bundle →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* All Products Grid */}
        <section className="px-4 pb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-charcoal mb-8">Individual Guides</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
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

                    <ul className="space-y-2 mb-6 flex-grow">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-brand-charcoal/70">
                          <span className="text-brand-green mt-0.5 flex-shrink-0">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      <div className="text-3xl font-bold text-brand-charcoal mb-3">
                        ${product.price}
                      </div>
                      <button
                        onClick={() => handleBuy(product.id)}
                        className="w-full bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                      >
                        Get Instant Access
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Resources Section */}
        {freebies.length > 0 && (
          <section className="px-4 pb-16">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-brand-teal/10 to-brand-coral/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-brand-charcoal mb-2">Free Resources</h2>
                <p className="text-brand-charcoal/60 mb-6">
                  Not ready to buy? Start with one of our free tools.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {freebies.map((freebie) => (
                    <Link
                      key={freebie.slug}
                      href={freebie.url}
                      className="flex items-center gap-4 bg-white p-4 rounded-xl hover:shadow-md transition-all group"
                    >
                      <div className="w-12 h-12 rounded-full bg-brand-coral/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🎁</span>
                      </div>
                      <div>
                        <p className="font-semibold text-brand-charcoal group-hover:text-brand-teal transition-colors">
                          {freebie.title}
                        </p>
                        <p className="text-sm text-brand-charcoal/60">{freebie.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Guarantee */}
        <section className="px-4 pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-brand-green/5 border-2 border-brand-green/20 rounded-2xl p-8">
              <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal mb-2">14-Day Results Guarantee</h3>
              <p className="text-brand-charcoal/70 max-w-lg mx-auto">
                Implement the DREAM Method for 14 days. If you don't see significant improvement,
                send us your completed Sleep Tracker and we'll refund you in full.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-charcoal py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-white/60 text-sm">
          <div>
            <p className="font-semibold text-white">The Sleep Regression Solution</p>
            <p>© 2025 All rights reserved</p>
          </div>
          <div className="flex gap-6">
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <a href="mailto:hello@thesleepregressionsolution.com" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
