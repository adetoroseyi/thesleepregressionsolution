import Link from 'next/link'

export default function BlogLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Blog Header / Navigation */}
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
              className="bg-brand-coral hover:bg-brand-coral-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Get the Guides
            </Link>
          </nav>
        </div>
      </header>

      {/* Blog Content */}
      <main>{children}</main>

      {/* Blog Footer */}
      <footer className="bg-brand-charcoal py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-white/60 text-sm">
          <div>
            <p className="font-semibold text-white">The Sleep Regression Solution</p>
            <p>© 2025 All rights reserved</p>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <a href="mailto:hello@thesleepregressionsolution.com" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
