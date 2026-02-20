// types/order.ts

export interface OrderItem {
  id: number
  title: string
  artist: string
  image: string
  quantity: number
  price: number
}

export interface Order {
  _id?: string
  id: string
  userId: string
  userEmail: string
  items: OrderItem[]
  total: number
  status: OrderStatus
  createdAt: string | Date
  updatedAt?: string | Date
}

export type OrderStatus = 'completed' | 'pending' | 'cancelled' | 'processing' | 'shipped'

export interface OrderStats {
  total: number
  completed: number
  pending: number
  cancelled: number
  totalSpent: number
  totalItems: number
  averageOrderValue: number
}

export interface OrdersByMonth {
  [monthYear: string]: Order[]
}

export interface OrdersResponse {
  success?: boolean
  orders: Order[]
}

export interface OrderResponse {
  success: boolean
  orderId: string
  message: string
  order?: Order
}