<script setup>
const { cart, totalUniqueArt, totalPrice, deleteItem } = useCartStore();
</script>

<template>
  <div v-show="cart.length===0 ">
    <ShopCartEmbty />
  </div>
  <div >
    <main  class="  px-4 md:px-10 py-10">
      <div class="mb-10">
        <h1 class="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
          Your Shopping Cart
        </h1>
        <p class="text-slate-500 dark:text-slate-400">
          You have {{ totalUniqueArt }} unique masterpieces ready for checkout.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-8 items-start">
        <!-- Cart Items List -->
        <div class="grid lg:grid-cols-3 gap-6 w-full">
          <!-- Item 1 -->
          <div v-for="item in cart" :key="item.id" class="h-78 w-60">
            <ArtCard :art="item" />
            <div class=" my-2 text-red-400">
            {{ item.quantity }}  remaining <button class="mx-2 cursor-pointer bg-red-200 px-3 rounded-full " @click="deleteItem(item.id)"> - </Button>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <aside class="w-full lg:w-100 sticky top-24">
          <div
            class="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none"
          >
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Order Summary
            </h2>

            <div class="space-y-4 mb-8">
              <div
                class="flex justify-between text-slate-500 dark:text-slate-400"
              >
                <span>Total Price</span>
                <span class="font-bold text-slate-900 dark:text-white">
                  {{ totalPrice }}
                </span>
              </div>
            </div>
              <div class="text-center">
                 <button
              class="w-full bg-red-300 text-white font-extrabold py-5 rounded-xl hover:bg-red-500 transition-all flex items-center justify-center gap-3 mb-3"
            >
              Proceed to Checkout
            </button>
            <NuxtLink
              to="/gallery"
              class="gap-4 text-slate-500 hover:text-primary transition-colors font-semibold text-center"
            >
              Continue Shopping
            </NuxtLink>
              </div>
           
          </div>
        </aside>
      </div>
    </main>
  </div>
</template>
