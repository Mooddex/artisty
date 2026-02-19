<script setup>

const { cart, totalUniqueArt, totalPrice, deleteItem } = useCartStore();
const router = useRouter();
const checkout = async () => {
    console.log('Cart items being sent:', cart)
  console.log('Cart length:', cart.length)
  
  try {
   const response = await $fetch('/api/checkout',{
    method: 'POST',
    body: {
      cartItems: cart
    }
   });
   console.log(response.message)
   if(response.success){
    router.push('/profile')
   }
  }catch (error) {
    // 🔍 DEBUG: See full error
    console.error('Full error:', error)
    console.error('Error data:', error.data)
    console.error('Error message:', error.data?.message)
  }
};
</script>
<template>
  <!-- Empty state -->
  <div
    v-if="cart.length === 0"
    class="min-h-[60vh] flex items-center justify-center"
  >
    <ShopCartEmbty />
  </div>

  <!-- Cart Page -->
  <main v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Header -->
    <section class="mb-12">
      <h1 class="text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
        Your Shopping Cart
      </h1>
      <p class="text-slate-500 dark:text-slate-400">
        You have {{ totalUniqueArt }} unique masterpieces ready for checkout.
      </p>
    </section>

    <!-- Content -->
    <section class="flex flex-col lg:flex-row gap-12">
      <!-- Cart Items -->
      <div class="flex-1">
        <div class="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          <div v-for="item in cart" :key="item.id" class="flex flex-col">
            <ArtCard :art="item" />

            <div
              class="mt-4 flex items-center justify-between text-sm text-red-400"
            >
              <span>{{ item.quantity }} remaining</span>
              <button
                class="bg-red-200 hover:bg-red-300 text-red-600 px-4 py-1.5 rounded-full transition"
                @click="deleteItem(item.id)"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Order Summary -->
      <aside class="w-full lg:w-96 shrink-0">
        <div class="sticky top-24">
          <div
            class="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-8 shadow-lg"
          >
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Order Summary
            </h2>

            <div class="space-y-4 mb-10">
              <div
                class="flex justify-between text-slate-500 dark:text-slate-400"
              >
                <span>Total Price</span>
                <span class="font-bold text-slate-900 dark:text-white">
                  {{ totalPrice }}
                </span>
              </div>
            </div>

            <button
              class="w-full bg-red-400 hover:bg-red-500 text-white font-bold py-4 rounded-xl transition mb-4"
              @click="checkout"
            >
              Proceed to Checkout
            </button>

            <NuxtLink
              to="/gallery"
              class="block text-center text-slate-500 hover:text-primary font-semibold transition"
            >
              Continue Shopping
            </NuxtLink>
          </div>
        </div>
      </aside>
    </section>
  </main>
</template>
