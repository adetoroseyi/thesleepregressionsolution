export default function sitemap() {
  const baseUrl = 'https://www.thesleepregressionsolution.com'

  // Core pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/free`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
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

  // Blog posts — add new entries here as you publish
  const blogPosts = [
    // PRIORITY 1 — Publish these first
    // '18-month-sleep-regression',
    // '2-year-sleep-regression',
    // 'how-long-does-18-month-sleep-regression-last',
    // 'sleep-regression-ages',

    // PRIORITY 2
    // '2-year-old-fighting-bedtime',
    // '18-month-nap-strike',
    // 'toddler-nightmares-vs-night-terrors',
    // 'gentle-sleep-training-dream-method',

    // PRIORITY 3
    // 'working-mom-sleep-deprivation',
    // 'toddler-bedtime-routine-chart',
    // '3-year-old-dropping-nap',
    // '3-year-sleep-regression',
  ]

  const blogPages = blogPosts
    .filter(slug => !slug.startsWith('//')) // skip commented out
    .map(slug => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))

  return [...staticPages, ...blogPages]
}
