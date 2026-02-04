export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/success', '/free/sleep-regression-checklist.pdf'],
      },
    ],
    sitemap: 'https://www.thesleepregressionsolution.com/sitemap.xml',
    host: 'https://www.thesleepregressionsolution.com',
  }
}
