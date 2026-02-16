import blogPosts from './blog/posts'
import { products } from '../lib/products'
import { freebies } from '../lib/freebies'

export default function sitemap() {
  const baseUrl = 'https://www.thesleepregressionsolution.com'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]

  // Auto-generate blog post URLs from posts.js
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: post.category === 'Overview' ? 0.7 : 0.6,
  }))

  // Auto-generate freebie URLs from freebies.js
  const freebiePages = freebies.map((freebie) => ({
    url: `${baseUrl}${freebie.url}`,
    lastModified: new Date(freebie.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Only include products that are marked as indexable (public product pages)
  // Delivery/download pages are excluded from sitemap
  const productPages = products
    .filter((product) => product.indexable)
    .map((product) => ({
      url: `${baseUrl}/products/${product.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }))

  return [...staticPages, ...freebiePages, ...blogPages, ...productPages]
}
