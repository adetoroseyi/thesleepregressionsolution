import './globals.css'

export const metadata = {
  title: 'The Sleep Regression Solution | End Toddler Sleep Battles Tonight',
  description: 'The proven DREAM Method for exhausted parents. Step-by-step ebook guides to help your toddler sleep through the night in 7 days or less.',
  keywords: 'sleep regression, toddler sleep, 18 month sleep regression, 2 year sleep regression, baby sleep guide, toddler bedtime',
  authors: [{ name: 'Marli Benjamin' }],
  openGraph: {
    title: 'The Sleep Regression Solution | End Toddler Sleep Battles Tonight',
    description: 'The proven DREAM Method for exhausted parents. Step-by-step ebook guides to help your toddler sleep through the night.',
    url: 'https://thesleepregressionsolution.com',
    siteName: 'The Sleep Regression Solution',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Sleep Regression Solution',
    description: 'End toddler sleep battles with the proven DREAM Method.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
