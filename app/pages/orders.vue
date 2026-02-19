<!-- pages/orders.vue -->
<template>
  <div class="orders-page">
    <div class="container">
      <h1>My Orders</h1>
      
      <!-- Loading State -->
      <div v-if="pending" class="loading">
        <p>Loading your orders...</p>
      </div>
      
      <!-- Orders List -->
      <div v-else-if="orders && orders.length > 0" class="orders-list">
        <div v-for="order in orders" :key="order.id" class="order-card">
          <div class="order-header">
            <div class="order-info">
              <h3>Order #{{ order.id.slice(0, 8).toUpperCase() }}</h3>
              <p class="order-date">
                {{ formatDate(order.createdAt) }}
              </p>
            </div>
            <span class="order-status" :class="order.status">
              {{ order.status }}
            </span>
          </div>
          
          <div class="order-items">
            <div 
              v-for="item in order.items" 
              :key="item.id" 
              class="order-item"
            >
              <!-- ✅ Fixed: Use item.image instead of item.image_id -->
              <img 
                v-if="item.image"
                :src="`https://www.artic.edu/iiif/2/${item.image}/full/200,/0/default.jpg`" 
                :alt="item.title"
                @error="handleImageError"
              />
              <div v-else class="no-image">No Image</div>
              
              <div class="item-details">
                <h4>{{ item.title }}</h4>
                <p class="artist">{{ item.artist }}</p>
                <p class="item-price">
                  ${{ item.price.toFixed(2) }} × {{ item.quantity }}
                </p>
              </div>
              
              <div class="item-subtotal">
                ${{ (item.price * item.quantity).toFixed(2) }}
              </div>
            </div>
          </div>
          
          <div class="order-footer">
            <div class="order-total">
              <span>Total:</span>
              <strong>${{ order.total.toFixed(2) }}</strong>
            </div>
          </div>
        </div>
      </div>
      
      <!-- No Orders State -->
      <div v-else class="no-orders">
        <div class="empty-icon">📦</div>
        <h2>No orders yet</h2>
        <p>Start shopping to see your orders here</p>
        <NuxtLink to="/gallery" class="btn-primary">
          Browse Art Gallery
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup >


const { data: ordersData, pending } = await useFetch('/api/orders')

const orders = computed(() => ordersData.value?.orders || [])

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const handleImageError = (event) => {
  const target = event.target 
  target.style.display = 'none'
  const parent = target.parentElement
  if (parent) {
    const noImage = document.createElement('div')
    noImage.className = 'no-image'
    noImage.textContent = 'No Image'
    parent.insertBefore(noImage, target)
  }
}
</script>

<style scoped>
/* Same styles as before */
.orders-page {
  min-height: 100vh;
  background: #f5f5f5;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
}

.loading {
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
}

.orders-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.order-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: box-shadow 0.3s;
}

.order-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: #fafafa;
  border-bottom: 1px solid #eee;
}

.order-info h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  color: #333;
}

.order-date {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

.order-status {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: capitalize;
}

.order-status.completed {
  background: #d4edda;
  color: #155724;
}

.order-status.pending {
  background: #fff3cd;
  color: #856404;
}

.order-status.cancelled {
  background: #f8d7da;
  color: #721c24;
}

.order-items {
  padding: 1.5rem;
}

.order-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  background: #fafafa;
  align-items: center;
}

.order-item:last-child {
  margin-bottom: 0;
}

.order-item img,
.no-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
}

.no-image {
  background: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 0.75rem;
}

.item-details {
  flex: 1;
  min-width: 0;
}

.item-details h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.artist {
  margin: 0 0 0.5rem 0;
  font-size: 0.85rem;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.item-price {
  margin: 0;
  font-size: 0.9rem;
  color: #555;
}

.item-subtotal {
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
  flex-shrink: 0;
}

.order-footer {
  padding: 1.5rem;
  background: #fafafa;
  border-top: 1px solid #eee;
}

.order-total {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
}

.order-total span {
  color: #666;
}

.order-total strong {
  color: #333;
  font-size: 1.4rem;
}

.no-orders {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.no-orders h2 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.no-orders p {
  margin: 0 0 2rem 0;
  color: #666;
}

.btn-primary {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.3s;
}

.btn-primary:hover {
  background: #45a049;
}

@media (max-width: 768px) {
  .order-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .order-item {
    flex-direction: column;
    text-align: center;
  }
  
  .order-item img,
  .no-image {
    width: 100%;
    height: 200px;
  }
  
  .item-details h4,
  .artist {
    white-space: normal;
  }
  
  .item-subtotal {
    width: 100%;
    text-align: center;
  }
}
</style>