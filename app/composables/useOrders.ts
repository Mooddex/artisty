// composables/useOrder.ts
import type { Order, OrderItem, OrderStatus, OrderStats, OrdersByMonth, OrdersResponse } from '~/types/orders'

export const useOrder = () => {
  const orders = ref<Order[]>([])
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  // Fetch all orders for the current user
  const fetchOrders = async (): Promise<Order[]> => {
    loading.value = true
    error.value = null

    try {
      const { data, error: fetchError } = await useFetch<OrdersResponse>('/api/orders')
      
      if (fetchError.value) {
        error.value = fetchError.value.message || 'Failed to fetch orders'
        return []
      }

      orders.value = data.value?.orders || []
      return orders.value
    } catch (error) {
      console.log(error, 'Failed to fetch orders');
      return []
    } finally {
      loading.value = false
    }
  }

  // Get a single order by ID
  const getOrderById = (orderId: string): Order | undefined => {
    return orders.value.find(order => order.id === orderId)
  }

  // Get total number of orders
  const totalOrders = computed((): number => orders.value.length)

  // Get total spent across all orders
  const totalSpent = computed((): number => {
    return orders.value.reduce((total, order) => total + (order.total || 0), 0)
  })

  // Get total items purchased
  const totalItemsPurchased = computed((): number => {
    return orders.value.reduce((total, order) => {
      return total + order.items.reduce((sum: number, item: OrderItem) => {
        return sum + (item.quantity || 1)
      }, 0)
    }, 0)
  })

  // Get orders by status
  const getOrdersByStatus = (status: OrderStatus): Order[] => {
    return orders.value.filter(order => order.status === status)
  }

  // Get recent orders (last N orders)
  const getRecentOrders = (limit: number = 5): Order[] => {
    return orders.value
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, limit)
  }

  // Format order date
  const formatOrderDate = (
    dateString: string | Date, 
    format: 'short' | 'long' | 'full' = 'short'
  ): string => {
    const date = new Date(dateString)
    
    switch (format) {
      case 'short':
        return date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })
      case 'long':
        return date.toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      case 'full':
        return date.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      default:
        return date.toLocaleDateString()
    }
  }

  // Get order status color
  const getStatusColor = (status: OrderStatus): string => {
    const colors: Record<OrderStatus, string> = {
      completed: 'bg-green-500/90 text-white',
      pending: 'bg-yellow-500/90 text-white',
      cancelled: 'bg-red-500/90 text-white',
      processing: 'bg-blue-500/90 text-white',
      shipped: 'bg-purple-500/90 text-white'
    }
    return colors[status] || 'bg-gray-500/90 text-white'
  }

  // Get image URL for an item
  const getItemImageUrl = (imageId: string, size: number = 200): string | null => {
    if (!imageId) return null
    return `https://www.artic.edu/iiif/2/${imageId}/full/${size},/0/default.jpg`
  }

  // Check if order is recent (within last 7 days)
  const isRecentOrder = (orderDate: string | Date): boolean => {
    const date = new Date(orderDate)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays <= 7
  }

  // Group orders by month
  const ordersByMonth = computed((): OrdersByMonth => {
    const grouped: OrdersByMonth = {}
    
    orders.value.forEach(order => {
      const date = new Date(order.createdAt)
      const monthYear = date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long' 
      })
      
      if (!grouped[monthYear]) {
        grouped[monthYear] = []
      }
      grouped[monthYear].push(order)
    })
    
    return grouped
  })

  // Get statistics
  const orderStats = computed((): OrderStats => {
    return {
      total: totalOrders.value,
      completed: getOrdersByStatus('completed').length,
      pending: getOrdersByStatus('pending').length,
      cancelled: getOrdersByStatus('cancelled').length,
      totalSpent: totalSpent.value,
      totalItems: totalItemsPurchased.value,
      averageOrderValue: totalOrders.value > 0 
        ? totalSpent.value / totalOrders.value 
        : 0
    }
  })

  // Search orders by item title or artist
  const searchOrders = (query: string): Order[] => {
    if (!query) return orders.value

    const searchTerm = query.toLowerCase()
    
    return orders.value.filter(order => {
      // Search in order ID
      if (order.id.toLowerCase().includes(searchTerm)) return true
      
      // Search in items
      return order.items.some((item: OrderItem) => {
        return (
          item.title?.toLowerCase().includes(searchTerm) ||
          item.artist?.toLowerCase().includes(searchTerm)
        )
      })
    })
  }

  // Refresh orders
  const refreshOrders = async (): Promise<void> => {
    await fetchOrders()
  }

  return {
    // State
    orders: readonly(orders),
    loading: readonly(loading),
    error: readonly(error),
    
    // Computed
    totalOrders,
    totalSpent,
    totalItemsPurchased,
    ordersByMonth,
    orderStats,
    
    // Methods
    fetchOrders,
    getOrderById,
    getOrdersByStatus,
    getRecentOrders,
    formatOrderDate,
    getStatusColor,
    getItemImageUrl,
    isRecentOrder,
    searchOrders,
    refreshOrders
  }
}