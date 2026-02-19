// server/api/checkout.post.ts
import { auth } from '~/utils/auth'
import type {Art} from '~/types/art'
import { client } from '~/utils/db'
export default defineEventHandler(async (event) => {
  // Get authenticated session
  const session = await auth.api.getSession({ 
    headers: event.headers 
  })
  
  if (!session) {
    throw createError({
      statusCode: 401,
      message: 'Please log in to checkout'
    })
  }

  // Get cart items from request body
  const { cartItems } = await readBody(event)

  if (!cartItems || cartItems.length === 0) {
    throw createError({
      statusCode: 400,
      message: 'Cart is empty'
    })
  }

  // Calculate total (using your pricing logic: art.id/200 * quantity)
  const total = cartItems.reduce((sum: number, item: Art) => {
    return sum + (item.id / 200 * (item.quantity || 1))
  }, 0)

  // Create order object
  const order = {
    id: crypto.randomUUID(),
    userId: session.user.id,
    userEmail: session.user.email,
    items: cartItems.map((item: Art) => ({
      id: item.id,
      title: item.title,
      artist: item.artist_title,
      image: item.image_id,
      quantity: item.quantity || 1,
      price: item.id / 200, // Individual art price
    })),
    total: total,
    status: 'completed',
    createdAt: new Date()
  }

  // Get MongoDB connection
const db = client.db()
  
  try {
    // Insert order into orders collection
    await db.collection('orders').insertOne(order)

    return {
      success: true,
      orderId: order.id,
      message: 'Order placed successfully!'
    }
    
  } catch (error) {
    console.error('Checkout error:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to place order'
    })
  }
})