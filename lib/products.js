// =============================================================================
// PRODUCTS DATA — Single source of truth
// =============================================================================
// To add a new product:
// 1. Add an entry to the `products` array below
// 2. That's it — homepage, sitemap, and any product listing pages update automatically
//
// To update pricing, features, or badges:
// 1. Edit the relevant product entry below
// 2. All pages reflect the change on next deploy
// =============================================================================

export const products = [
  {
    id: '18-month',
    title: 'The 18-Month Sleep Regression Survival Guide',
    subtitle: 'For parents of 12-20 month olds',
    price: 24.99,
    image: '/images/product-18month.jpg',
    badge: 'MOST POPULAR',
    features: [
      'The 5-Night Sleep Rescue Action Plan',
      'Scripts for handling separation anxiety at bedtime',
      'Nap transition guide (from 2 naps to 1)',
      'Printable: Daily Sleep & Mood Tracker',
    ],
    // Set to true if this product has a public-facing page (e.g. /products/18-month)
    // that should appear in the sitemap. Delivery/download pages should be false.
    indexable: false,
  },
  {
    id: '2-year',
    title: 'The 2-Year Sleep Regression Blueprint',
    subtitle: 'For parents of 2-year-olds',
    price: 24.99,
    image: '/images/product-2year.jpg',
    badge: null,
    features: [
      'The P.E.A.C.E. Method for toddler negotiations',
      'Scripts for "just one more story" and stall tactics',
      'Big kid bed transition guide',
      'Printable: Bedtime Routine Reward Chart',
    ],
    indexable: false,
  },
  {
    id: '3-year',
    title: 'The 3-Year Sleep Regression Playbook',
    subtitle: 'For parents of 3-4 year olds',
    price: 24.99,
    image: '/images/product-3year.jpg',
    badge: null,
    features: [
      'The R.E.S.T. Method for dropping the last nap',
      'Nightmare vs. night terror response scripts',
      'Techniques for managing fears (monsters, the dark)',
      'Printable: "My Big Kid Bed" Success Certificate',
    ],
    indexable: false,
  },
  {
    id: 'working-parent',
    title: 'The Working Parent Sleep Survival Guide',
    subtitle: 'For parents juggling careers + sleepless nights',
    price: 29.99,
    image: '/images/product-working.jpg',
    badge: 'INCLUDES BONUS',
    features: [
      'The C.E.O. Method (Connect, Efficiency, Outsource)',
      'Career protection strategies when sleep-deprived',
      'Partner & caregiver coordination scripts',
      'Printable: Weekend Reset Planner',
    ],
    indexable: false,
  },
]

export const bundle = {
  id: 'bundle',
  title: 'The Complete Sleep Regression Solution',
  totalValue: products.reduce((sum, p) => sum + p.price, 0),
  price: 69.99,
  get savings() {
    return +(this.totalValue - this.price).toFixed(2)
  },
  get savingsPercent() {
    return Math.round((this.savings / this.totalValue) * 100)
  },
}
