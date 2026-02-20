<!-- pages/orders.vue -->
<script setup lang="ts">
import type { Order } from '~/types/orders'

const {
  loading,
  orderStats,
  fetchOrders,
  formatOrderDate,
  getStatusColor,
  getItemImageUrl,
  searchOrders
} = useOrder()

await fetchOrders()

const searchQuery = ref<string>('')
const expandedOrders = ref<Set<string>>(new Set())

const filteredOrders = computed((): Order[] => {
  return searchOrders(searchQuery.value)
})

const toggleOrderDetails = (orderId: string): void => {
  if (expandedOrders.value.has(orderId)) {
    expandedOrders.value.delete(orderId)
  } else {
    expandedOrders.value.add(orderId)
  }
}

const handleImageError = (event: Event): void => {
  const target = event.target as HTMLImageElement
  target.style.display = 'none'
}
</script>

<template>
  <div class="orders-page min-h-screen bg-slate-50 dark:bg-slate-950">
    <div class="container max-w-7xl mx-auto px-4 py-8">
      <!-- Header with Stats -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100">My Orders</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-2">Total Orders</p>
            <p class="text-3xl font-bold text-slate-900 dark:text-slate-100">{{ orderStats.total }}</p>
          </div>
          <div class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-2">Total Spent</p>
            <p class="text-3xl font-bold text-primary">${{ orderStats.totalSpent.toFixed(2) }}</p>
          </div>
          <div class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-2">Items Purchased</p>
            <p class="text-3xl font-bold text-slate-900 dark:text-slate-100">{{ orderStats.totalItems }}</p>
          </div>
          <div class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-2">Avg Order Value</p>
            <p class="text-3xl font-bold text-slate-900 dark:text-slate-100">${{ orderStats.averageOrderValue.toFixed(2) }}</p>
          </div>
        </div>
      </div>

      <!-- Search -->
      <div class="mb-6">
        <div class="relative">
          <Icon 
            name="mdi:magnify" 
            class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
          />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search orders by title, artist, or order ID..."
            class="w-full pl-12 pr-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>
      
      <!-- Loading State -->
      <div v-if="loading" class="loading text-center py-16">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-slate-200 dark:border-slate-700 border-t-primary mb-4"></div>
        <p class="text-slate-600 dark:text-slate-400">Loading your orders...</p>
      </div>
      
      <!-- Orders List -->
      <div v-else-if="filteredOrders && filteredOrders.length > 0" class="orders-list space-y-6">
        <div
          v-for="order in filteredOrders"
          :key="order.id"
          class="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
        >
          <!-- Order Header -->
          <div class="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div class="flex items-center gap-3 mb-2">
                  <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">
                    Order #{{ order.id.slice(0, 8).toUpperCase() }}
                  </h3>
                  <span
                    class="px-3 py-1 rounded-full text-xs font-semibold"
                    :class="getStatusColor(order.status)"
                  >
                    {{ order.status }}
                  </span>
                </div>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  {{ formatOrderDate(order.createdAt, 'long') }}
                </p>
              </div>
              <div class="text-left md:text-right">
                <p class="text-sm text-slate-500 dark:text-slate-400 mb-1">
                  {{ order.items.length }} item{{ order.items.length > 1 ? 's' : '' }}
                </p>
                <p class="text-2xl font-bold text-primary">
                  ${{ order.total.toFixed(2) }}
                </p>
              </div>
            </div>
          </div>

          <!-- Order Items Grid -->
          <div class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                v-for="item in order.items"
                :key="item.id"
                class="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <!-- Item Image -->
                <div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-slate-200 dark:bg-slate-700">
                  <NuxtImg
                    v-if="item.image"
                    :src="getItemImageUrl(item?.image, 200)|| `${getItemImageUrl(item?.image, 200)}`"
                    :alt="item.title"
                    class="w-full h-full object-cover"
                    :error="handleImageError"
                  />
                  <div v-else class="w-full h-full flex items-center justify-center text-slate-400 text-xs">
                    No Image
                  </div>
                </div>

                <!-- Item Details -->
                <div class="flex-1 min-w-0">
                  <h4 class="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-1 line-clamp-2">
                    {{ item.title }}
                  </h4>
                  <p class="text-xs text-slate-600 dark:text-slate-400 mb-2 line-clamp-1">
                    {{ item.artist }}
                  </p>
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-slate-500 dark:text-slate-400">
                      ${{ item.price.toFixed(2) }} × {{ item.quantity }}
                    </span>
                    <span class="font-semibold text-slate-900 dark:text-slate-100">
                      ${{ (item.price * item.quantity).toFixed(2) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Toggle Details Button -->
            <button
              @click="toggleOrderDetails(order.id)"
              class="w-full mt-4 py-3 px-4 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {{ expandedOrders.has(order.id) ? 'Hide Details' : 'Show Full Details' }}
              <Icon 
                :name="expandedOrders.has(order.id) ? 'mdi:chevron-up' : 'mdi:chevron-down'" 
                class="w-5 h-5"
              />
            </button>

            <!-- Expanded Details -->
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-[2000px] opacity-100"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="max-h-[2000px] opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div
                v-if="expandedOrders.has(order.id)"
                class="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 overflow-hidden"
              >
                <h4 class="font-semibold text-slate-900 dark:text-slate-100 mb-4">Order Details</h4>
                
                <div class="space-y-4">
                  <div
                    v-for="item in order.items"
                    :key="item.id"
                    class="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800"
                  >
                    <!-- Large Image -->
                    <div class="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-slate-200 dark:bg-slate-700">
                      <img
                        v-if="item.image"
                        :src="getItemImageUrl(item.image, 400)||`${getItemImageUrl(item.image, 400)}`"
                        :alt="item.title"
                        class="w-full h-full object-cover"
                        @error="handleImageError"
                      />
                    </div>

                    <!-- Full Details -->
                    <div class="flex-1">
                      <h5 class="font-bold text-base text-slate-900 dark:text-slate-100 mb-2">
                        {{ item.title }}
                      </h5>
                      <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        {{ item.artist }}
                      </p>
                      <div class="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span class="text-slate-500 dark:text-slate-400">Price per item:</span>
                          <span class="ml-2 font-semibold text-slate-900 dark:text-slate-100">
                            ${{ item.price.toFixed(2) }}
                          </span>
                        </div>
                        <div>
                          <span class="text-slate-500 dark:text-slate-400">Quantity:</span>
                          <span class="ml-2 font-semibold text-slate-900 dark:text-slate-100">
                            {{ item.quantity }}
                          </span>
                        </div>
                        <div>
                          <span class="text-slate-500 dark:text-slate-400">Subtotal:</span>
                          <span class="ml-2 font-bold text-primary">
                            ${{ (item.price * item.quantity).toFixed(2) }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Order Summary -->
                  <div class="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 mt-4">
                    <div class="space-y-2">
                      <div class="flex justify-between text-sm">
                        <span class="text-slate-600 dark:text-slate-400">Subtotal:</span>
                        <span class="font-semibold text-slate-900 dark:text-slate-100">
                          ${{ order.total.toFixed(2) }}
                        </span>
                      </div>
                      <div class="flex justify-between text-sm">
                        <span class="text-slate-600 dark:text-slate-400">Shipping:</span>
                        <span class="font-semibold text-green-600">FREE</span>
                      </div>
                      <div class="flex justify-between text-lg font-bold pt-2 border-t border-slate-200 dark:border-slate-700">
                        <span class="text-slate-900 dark:text-slate-100">Total:</span>
                        <span class="text-primary">${{ order.total.toFixed(2) }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
      
      <!-- No Orders State -->
      <div v-else class="no-orders text-center py-16">
        <div class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-800 mb-6">
          <Icon name="mdi:package-variant" class="w-12 h-12 text-slate-400" />
        </div>
        <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          {{ searchQuery ? 'No orders found' : 'No orders yet' }}
        </h2>
        <p class="text-slate-600 dark:text-slate-400 mb-8">
          {{ searchQuery ? 'Try a different search term' : 'Start shopping to see your orders here' }}
        </p>
        <NuxtLink 
          to="/gallery" 
          class="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
        >
          <Icon name="mdi:palette" class="w-5 h-5" />
          Browse Art Gallery
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.max-h-0 {
  max-height: 0;
}

.max-h-\[2000px\] {
  max-height: 2000px;
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>