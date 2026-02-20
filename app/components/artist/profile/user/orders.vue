<!-- components/ArtistProfile/UserOrders.vue -->
<template>
  <template v-if="loading">
    <div v-for="n in 3" :key="n" class="animate-pulse">
      <div class="bg-slate-200 dark:bg-slate-800 rounded-xl h-96"></div>
    </div>
  </template>

  <template v-else-if="orders && orders.length > 0">
    <div
      v-for="order in getRecentOrders(3)"
      :key="order.id"
      class="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer"
      @click="navigateToOrders"
    >
      <!-- Order Items Images Grid -->
      <div class="relative aspect-square bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <div v-if="order.items.length === 1" class="w-full h-full">
          <img
            v-if="order?.items[0]?.image"
            :src="getItemImageUrl(order.items[0].image, 600)||`${getItemImageUrl(order.items[0].image, 600)}`"
            :alt="order.items[0].title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            @error="handleImageError"
          />
          <div v-else class="w-full h-full flex items-center justify-center text-slate-400">
            No Image
          </div>
        </div>

        <!-- Grid for multiple items -->
        <div v-else class="grid grid-cols-2 gap-1 h-full">
          <div
            v-for="(item, idx) in order.items.slice(0, 4)"
            :key="item.id"
            class="relative overflow-hidden"
            :class="{ 'col-span-2': order.items.length === 3 && idx === 2 }"
          >
            <img
              v-if="item.image"
              :src="getItemImageUrl(item.image, 400)||`${getItemImageUrl(item.image, 400)}`"
              :alt="item.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              @error="handleImageError"
            />
            <div v-else class="w-full h-full flex items-center justify-center bg-slate-200 dark:bg-slate-700 text-slate-400 text-xs">
              No Image
            </div>

            <!-- Show +N overlay for more items -->
            <div
              v-if="idx === 3 && order.items.length > 4"
              class="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold text-2xl"
            >
              +{{ order.items.length - 4 }}
            </div>
          </div>
        </div>

        <!-- Order Status Badge -->
        <div class="absolute top-3 right-3">
          <span
            class="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
            :class="getStatusColor(order.status)"
          >
            {{ order.status }}
          </span>
        </div>

        <!-- Recent Order Badge -->
        <div v-if="isRecentOrder(order.createdAt)" class="absolute top-3 left-3">
          <span class="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm  text-white">
            New
          </span>
        </div>

        <!-- Click to view overlay on hover -->
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
          <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-lg">
            <span class="text-sm font-semibold text-slate-900 dark:text-slate-100">View All Orders</span>
          </div>
        </div>
      </div>

      <!-- Order Details -->
      <div class="p-4">
        <!-- Order ID and Date -->
        <div class="flex items-start justify-between mb-3">
          <div>
            <h3 class="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">
              Order #{{ order.id.slice(0, 8).toUpperCase() }}
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              {{ formatOrderDate(order.createdAt, 'short') }}
            </p>
          </div>
          <div class="text-right">
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-1">
              {{ order.items.length }} item{{ order.items.length > 1 ? 's' : '' }}
            </p>
            <p class="font-bold text-lg text-primary">
              ${{ order.total.toFixed(2) }}
            </p>
          </div>
        </div>

        <!-- Items List (collapsed) -->
        <div class="space-y-2 mb-3 max-h-32 overflow-y-auto custom-scrollbar">
          <div
            v-for="item in order.items"
            :key="item.id"
            class="flex items-center gap-2 text-xs"
          >
            <div class="w-8 h-8 rounded overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-800">
              <img
                v-if="item.image"
                :src="getItemImageUrl(item.image, 100)||`${getItemImageUrl(item.image, 100)}`"
                :alt="item.title"
                class="w-full h-full object-cover"
                @error="handleImageError"
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="truncate text-slate-700 dark:text-slate-300 font-medium">
                {{ item.title }}
              </p>
              <p class="text-slate-500 dark:text-slate-400">
                ${{ item.price.toFixed(2) }} × {{ item.quantity }}
              </p>
            </div>
          </div>
        </div>

        <!-- Toggle Details Button -->
        <button
          @click.stop="toggleOrderDetails(order.id)"
          class="w-full py-2 px-4 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
        >
          {{ expandedOrders.has(order.id) ? 'Hide Details' : 'Show Details' }}
          <Icon 
            :name="expandedOrders.has(order.id) ? 'mdi:chevron-up' : 'mdi:chevron-down'" 
            class="w-4 h-4"
          />
        </button>

        <!-- Expanded Details -->
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-96 opacity-100"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="max-h-96 opacity-100"
          leave-to-class="max-h-0 opacity-0"
        >
          <div
            v-if="expandedOrders.has(order.id)"
            class="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3 overflow-hidden"
            @click.stop
          >
            <div
              v-for="item in order.items"
              :key="item.id"
              class="flex gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <div class="w-16 h-16 rounded overflow-hidden flex-shrink-0 bg-slate-200 dark:bg-slate-700">
                <img
                  v-if="item.image"
                  :src="getItemImageUrl(item.image, 200)||`${getItemImageUrl(item.image, 200)}`"
                  :alt="item.title"
                  class="w-full h-full object-cover"
                  @error="handleImageError"
                />
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-1 line-clamp-2">
                  {{ item.title }}
                </h4>
                <p class="text-xs text-slate-600 dark:text-slate-400 mb-2 line-clamp-1">
                  {{ item.artist }}
                </p>
                <div class="flex items-center justify-between text-xs">
                  <span class="text-slate-500">Qty: {{ item.quantity }}</span>
                  <span class="font-semibold text-slate-900 dark:text-slate-100">
                    ${{ (item.price * item.quantity).toFixed(2) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </template>

  <!-- Empty State -->
  <div v-else class="col-span-full">
    <div class="text-center py-12 text-slate-500 dark:text-slate-400">
      <Icon name="mdi:package-variant" class="w-16 h-16 mx-auto mb-4 opacity-50" />
      <p class="text-lg font-semibold mb-2">No orders yet</p>
      <p class="text-sm">Your purchased artworks will appear here</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()

// Use the composable
const {
  orders,
  loading,
  fetchOrders,
  getRecentOrders,
  formatOrderDate,
  getStatusColor,
  getItemImageUrl,
  isRecentOrder
} = useOrder()

// Fetch orders on mount
await fetchOrders()

const expandedOrders = ref<Set<string>>(new Set())

const toggleOrderDetails = (orderId: string): void => {
  if (expandedOrders.value.has(orderId)) {
    expandedOrders.value.delete(orderId)
  } else {
    expandedOrders.value.add(orderId)
  }
}

const navigateToOrders = (): void => {
  router.push('/orders')
}

const handleImageError = (event: Event): void => {
  const target = event.target as HTMLImageElement
  target.style.display = 'none'
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.5);
  border-radius: 2px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(148, 163, 184, 0.7);
}

/* Smooth max-height transition */
.max-h-0 {
  max-height: 0;
}

.max-h-96 {
  max-height: 24rem;
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