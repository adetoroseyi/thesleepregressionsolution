export const metadata = {
  title: 'Thank You! | The Sleep Regression Solution',
  description: 'Your purchase was successful',
}

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-cream to-white flex items-center justify-center px-4">
      <div className="max-w-lg mx-auto text-center py-16">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-5xl">🎉</span>
        </div>
        
        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">
          Thank You for Your Purchase!
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl text-brand-charcoal/70 mb-8">
          Your ebook is on its way to your inbox right now.
        </p>
        
        {/* Email Notice */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-left">
          <h2 className="font-bold text-brand-charcoal mb-3 flex items-center gap-2">
            <span>📧</span> Check Your Email
          </h2>
          <p className="text-brand-charcoal/70 mb-4">
            We've sent your download link to the email address you provided. 
            If you don't see it within a few minutes, check your spam folder.
          </p>
          <p className="text-sm text-brand-charcoal/50">
            Still can't find it? Email us at{' '}
            <a href="mailto:hello@thesleepregressionsolution.com" className="text-brand-teal hover:underline">
              hello@thesleepregressionsolution.com
            </a>
          </p>
        </div>
        
        {/* What's Next */}
        <div className="bg-brand-teal/5 rounded-2xl p-6 mb-8 text-left">
          <h2 className="font-bold text-brand-charcoal mb-4">📋 What's Next?</h2>
          <ol className="space-y-3 text-brand-charcoal/70">
            <li className="flex items-start gap-3">
              <span className="bg-brand-teal text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
              <span>Download your PDF from the email we just sent</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-brand-teal text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
              <span>Read the "Night 1 Action Plan" section first (page 15)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-brand-teal text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
              <span>Print the Sleep Tracker from the back of the guide</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-brand-teal text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
              <span>Start tonight — peaceful sleep is just days away!</span>
            </li>
          </ol>
        </div>
        
        {/* Encouragement */}
        <div className="bg-brand-coral/10 rounded-xl p-4 mb-8">
          <p className="text-brand-charcoal font-medium">
            💪 You made an amazing decision for your family. Better sleep is coming!
          </p>
        </div>
        
        {/* Back to Home */}
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
