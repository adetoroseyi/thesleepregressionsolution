'use client'

import Link from 'next/link'
import blogPosts from './blog/posts'

const pillarSlugs = [
  '18-month-sleep-regression',
  '2-year-sleep-regression',
  '3-year-sleep-regression',
]

export default function BlogSection() {
  const pillarPosts = blogPosts.filter((post) => pillarSlugs.includes(post.slug))
  return (
    <section id="blog" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-charcoal mb-4">
            Free Sleep Regression Guides
          </h2>
          <p className="text-lg text-brand-charcoal/60 max-w-2xl mx-auto">
            Expert advice for every regression age — read the guides, then get the
            complete plan when you're ready.
          </p>
        </div>

        {/* Post Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {pillarPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white border border-gray-200 rounded-xl p-6 hover:border-brand-teal hover:shadow-lg transition-all"
            >
              <span className="inline-block text-xs font-semibold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>
              <h3 className="text-lg font-bold text-brand-charcoal group-hover:text-brand-teal transition-colors mb-2 leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-brand-charcoal/60 mb-4 leading-relaxed">
                {post.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-brand-teal">
                  Read guide →
                </span>
                <span className="text-xs text-brand-charcoal/40">
                  {post.readTime}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-block text-brand-teal hover:text-brand-teal-dark font-semibold transition-colors"
          >
            View all {blogPosts.length} guides →
          </Link>
        </div>
      </div>
    </section>
  )
}
