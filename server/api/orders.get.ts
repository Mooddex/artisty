// server/api/orders.get.ts
import { auth } from '~/utils/auth'
import { client } from '@/utils/db'

export default defineEventHandler(async (event) => {
  try {
    const session = await auth.api.getSession({ headers: event.headers })
    
    if (!session) {
      throw createError({
        statusCode: 401,
        message: 'Unauthorized'
      })
    }

    const db = client.db()
    
    const orders = await db.collection('orders')
      .find({ userId: session.user.id })
      .sort({ createdAt: -1 })
      .toArray()

    return { orders }
    
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch orders'
    })
  }
})