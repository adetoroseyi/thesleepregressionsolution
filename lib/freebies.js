// =============================================================================
// FREEBIES DATA — Single source of truth
// =============================================================================
// To add a new freebie:
// 1. Add an entry to the `freebies` array below
// 2. That's it — sitemap, navigation, and any freebie listing sections update automatically
//
// Each freebie needs:
// - slug: URL path (e.g. 'free' → /free)
// - title: Display name
// - description: Short description for listings
// - url: Full path on the site
// =============================================================================

export const freebies = [
  {
    slug: 'free',
    title: 'Sleep Regression Survival Checklist',
    description:
      'A one-page action plan to help you survive your toddler\'s sleep regression — starting tonight.',
    url: '/free',
    date: '2025-02-04',
  },
  // Example of adding a future freebie:
  // {
  //   slug: 'bedtime-scripts',
  //   title: '10 Bedtime Scripts That Actually Work',
  //   description: 'Word-for-word scripts for every stall tactic your toddler throws at you.',
  //   url: '/free/bedtime-scripts',
  //   date: '2026-03-01',
  // },
]
