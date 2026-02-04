import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Map product IDs to Stripe Price IDs
const PRICE_IDS = {
  '18-month': 'price_1SwhEEKv9gEvbEL3WK0WcXZ5',
  '2-year': 'price_1SwhE9Kv9gEvbEL33Lw52Pza',
  '3-year': 'price_1SwhE3Kv9gEvbEL3pBmWe85z',
  'working-parent': 'price_1SwhDyKv9gEvbEL3NnVmDFQh',
  'bundle': 'price_1SwhDrKv9gEvbEL3ivMTIO20',
}

// Product names for metadata
const PRODUCT_NAMES = {
  '18-month': 'The 18-Month Sleep Regression Survival Guide',
  '2-year': 'The 2-Year Sleep Regression Blueprint',
  '3-year': 'The 3-Year Sleep Regression Playbook',
  'working-parent': 'The Working Parent Sleep Survival Guide',
  'bundle': 'The Complete Sleep Regression Solution (Bundle)',
}

export async function POST(request) {
  try {
    const { productId } = await request.json()

    // Validate product ID
    if (!productId || !PRICE_IDS[productId]) {
      return Response.json(
        { error: 'Invalid product ID' },
        { status: 400 }
      )
    }

    const priceId = PRICE_IDS[productId]

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      metadata: {
        product_id: productId,
        product_name: PRODUCT_NAMES[productId],
      },
      // Collect customer email
      customer_creation: 'always',
      billing_address_collection: 'required',
    })

    return Response.json({ 
      sessionId: session.id,
      url: session.url 
    })

  } catch (error) {
    console.error('Checkout error:', error)
    return Response.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    )
  }
}
