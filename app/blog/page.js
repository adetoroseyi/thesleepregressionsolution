import Link from 'next/link'
import blogPosts from './posts'

export const metadata = {
  title: 'Sleep Regression Blog | The Sleep Regression Solution',
  description:
    'Free expert guides on every toddler sleep regression — 18 months, 2 years, and 3 years. Evidence-based advice and the proven DREAM Method to help your toddler sleep through the night.',
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-charcoal mb-4">
        Sleep Regression Guides
      </h1>
      <p className="text-lg text-brand-charcoal/60 mb-10 max-w-2xl">
        Free, evidence-based guides for every toddler sleep regression. Written
        by parents, backed by science, trusted by over 2,000 families.
      </p>

      {/* Post Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-white border border-gray-200 rounded-xl p-6 hover:border-brand-teal hover:shadow-lg transition-all"
          >
            <span className="inline-block text-xs font-semibold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h2 className="text-lg font-bold text-brand-charcoal group-hover:text-brand-teal transition-colors mb-2 leading-snug">
              {post.title}
            </h2>
            <p className="text-sm text-brand-charcoal/60 mb-4 leading-relaxed">
              {post.description}
            </p>
            <span className="text-sm font-semibold text-brand-teal">
              Read guide →
            </span>
          </Link>
        ))}
      </div>

      {/* Lead Magnet CTA */}
      <div className="mt-16 bg-gradient-to-r from-brand-teal/10 to-brand-coral/10 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-brand-charcoal mb-3">
          Not Sure Where to Start?
        </h2>
        <p className="text-brand-charcoal/70 mb-6 max-w-lg mx-auto">
          Download the free Sleep Regression Survival Checklist — a one-page
          action plan that works for every regression age.
        </p>
        <Link
          href="/free"
          className="inline-block bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Get the Free Checklist →
        </Link>
      </div>
    </div>
  )
}
