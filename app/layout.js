import './globals.css'

export const metadata = {
  metadataBase: new URL('https://www.thesleepregressionsolution.com'),
  title: {
    default: 'The Sleep Regression Solution | End Toddler Sleep Battles Tonight',
    template: '%s | The Sleep Regression Solution',
  },
  description:
    'End toddler sleep regressions in 5 nights with the gentle DREAM Method. Evidence-based ebook guides for 18-month, 2-year, and 3-year sleep regressions. Trusted by 2,000+ parents.',
  keywords:
    'sleep regression, toddler sleep, 18 month sleep regression, 2 year sleep regression, 3 year sleep regression, baby sleep guide, toddler bedtime, gentle sleep training, DREAM method, toddler wont sleep, toddler bedtime battles, sleep regression solutions',
  authors: [{ name: 'Marli Benjamin' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'End Toddler Sleep Battles Tonight | The Sleep Regression Solution',
    description:
      'The gentle DREAM Method helps exhausted parents end sleep regressions in 5 nights — without cry-it-out. Trusted by 2,000+ families.',
    url: 'https://www.thesleepregressionsolution.com',
    siteName: 'The Sleep Regression Solution',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Sleep Regression Solution - End toddler sleep battles tonight',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'End Toddler Sleep Battles Tonight',
    description:
      'The gentle DREAM Method helps exhausted parents end sleep regressions in 5 nights — without cry-it-out.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'n-woGhvqvhOWpIncmC8ecW4tdhBGfin7FxtXTDNbvbs',
  },
}

// Website structured data
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'The Sleep Regression Solution',
  url: 'https://www.thesleepregressionsolution.com',
  description:
    'End toddler sleep regressions in 5 nights with the gentle DREAM Method.',
  author: {
    '@type': 'Person',
    name: 'Marli Benjamin',
  },
}

// Organization structured data (this is what makes your logo appear in Google)
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Sleep Regression Solution',
  url: 'https://www.thesleepregressionsolution.com',
  logo: 'https://www.thesleepregressionsolution.com/logo-512.png',
  description:
    'Age-specific sleep regression guides for parents of toddlers aged 18 months to 3 years, using the DREAM Method.',
  founder: {
    '@type': 'Person',
    name: 'Marli Benjamin',
  },
  sameAs: [
    'https://www.facebook.com/thesleepregressionsolution',
    'https://www.instagram.com/thesleepregressionsolution',
    'https://www.pinterest.com/thesleepregressionsolution',
    'https://www.tiktok.com/@thesleepregressionsolution',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#5EBAB1" />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
