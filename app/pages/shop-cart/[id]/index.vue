<script setup>

</script>

<template>
  <div>
<main class="max-w-7xl mx-auto px-4 md:px-10 py-10">
  <div class="mb-10">
    <h1 class="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
      Your Shopping Cart
    </h1>
    <p class="text-slate-500 dark:text-slate-400">
      You have 3 unique masterpieces ready for checkout.
    </p>
  </div>

  <div class="flex flex-col lg:flex-row gap-8 items-start">
    <!-- Cart Items List -->
    <div class="flex-1 flex flex-col gap-6 w-full">
      <!-- Item 1 -->
      <div class="group bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-4 flex flex-col sm:flex-row gap-6 transition-all hover:shadow-lg">
        <div class="w-full sm:w-40 h-40 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden shrink-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBWMW2jlig1SV-jowPjAG4HQ3NdXy0ieRuyRf6dK5zXKAZG6Y8ZyU5WE2ZhksKSqBsOjlnarNUngJOU5Sid41K8igpXn3lthAi7YIocNxm2E2fjO0LUxLgsMegHsZUKyjj99mqF-l9MBCBxf1fscpCGBN_abmBLU8pQqDSiibp7-flKdr0x4VkWETknhJIjS45T837hgMFFQm1h1o_vxb3nopItCuyRnLDS9D5W3MwB6a9J6AfgY9c5gM7btdjYEdpHf7AqQB_ccw"
            alt="Artwork"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div class="flex flex-col justify-between flex-1 py-1">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-1">
                Ethereal Horizon
              </h3>
              <p class="text-slate-500 dark:text-slate-400 font-medium">
                By
                <span class="text-slate-900 dark:text-white underline decoration-primary/30 cursor-pointer">
                  Elena Rossi
                </span>
              </p>
            </div>
            <button class="text-slate-400 hover:text-primary transition-colors">
              <span class="material-symbols-outlined">delete</span>
            </button>
          </div>

          <div class="flex items-end justify-between mt-4">
            <div class="flex items-center gap-4 text-sm text-slate-500">
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">verified</span>
                Certificate of Authenticity
              </span>
            </div>
            <p class="text-2xl font-extrabold text-slate-900 dark:text-white">
              $1,200.00
            </p>
          </div>
        </div>
      </div>

      <!-- Item 2 -->
      <div class="group bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-4 flex flex-col sm:flex-row gap-6 transition-all hover:shadow-lg">
        <div class="w-full sm:w-40 h-40 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden shrink-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKO5GIvehCL47uhVn0ZlVVTjzvGQF50JS__yqRHUs6nBPEplyeDvtqi9aIxVRwHGA6gNlq5aj7Uz0NCm1DHWdq200XMNCkv2g2kwGieHN1w_cHtEbnKSDCaqSf5QOT6MxEautYWRsEBKW_jPwPO4QStLd6yeLvIcujh6bCv46K6ULlw223Cw1waGfkeetIxFNa73_bZckJY7HSYKThquiWxNQYTY5X0kOeJ72tPCPZD_DwYfCVoJ6VuetLnQRx7GLlGDwEZ4Z3kqg"
            alt="Artwork"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div class="flex flex-col justify-between flex-1 py-1">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-1">
                Neon Pulse
              </h3>
              <p class="text-slate-500 dark:text-slate-400 font-medium">
                By
                <span class="text-slate-900 dark:text-white underline decoration-primary/30 cursor-pointer">
                  Marcus Thorne
                </span>
              </p>
            </div>
            <button class="text-slate-400 hover:text-primary transition-colors">
              <span class="material-symbols-outlined">delete</span>
            </button>
          </div>

          <div class="flex items-end justify-between mt-4">
            <div class="flex items-center gap-4 text-sm text-slate-500">
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">frame_inspect</span>
                Framed
              </span>
            </div>
            <p class="text-2xl font-extrabold text-slate-900 dark:text-white">
              $850.00
            </p>
          </div>
        </div>
      </div>

      <!-- Item 3 -->
      <div class="group bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-4 flex flex-col sm:flex-row gap-6 transition-all hover:shadow-lg">
        <div class="w-full sm:w-40 h-40 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden shrink-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv0KHZfiQIWLY7CDAN46Fy0f1fOy-Qm95XD7ugTtbcs4PTgLUrzgrcdODZK11i2reA6Vng3JBaf413L0i9JPTBBNMUVcgNTfGqrRQOub6og8GDdvWQvEITwqhsY5ZFRQTuIA-Gi1cMkZKdw6LIQq8w84t7QVDj1rf1Sa38VAREaybQaH82GC-UPPlpq5N0LGnu3WUqWm2rQVYBZVlhKHTWqjxk-Nf758GeRZmC81Yk5f5OxMwHFryR9iMmA2vT2llLY4ZXi7EHN48"
            alt="Artwork"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div class="flex flex-col justify-between flex-1 py-1">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-1">
                Marble Stillness
              </h3>
              <p class="text-slate-500 dark:text-slate-400 font-medium">
                By
                <span class="text-slate-900 dark:text-white underline decoration-primary/30 cursor-pointer">
                  Sarah Jenkins
                </span>
              </p>
            </div>
            <button class="text-slate-400 hover:text-primary transition-colors">
              <span class="material-symbols-outlined">delete</span>
            </button>
          </div>

          <div class="flex items-end justify-between mt-4">
            <div class="flex items-center gap-4 text-sm text-slate-500">
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">local_shipping</span>
                Express Shipping
              </span>
            </div>
            <p class="text-2xl font-extrabold text-slate-900 dark:text-white">
              $2,100.00
            </p>
          </div>
        </div>
      </div>

      <a
        href="#"
        class="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-semibold py-4"
      >
        <span class="material-symbols-outlined">arrow_back</span>
        Continue Shopping
      </a>
    </div>

    <!-- Order Summary -->
    <aside class="w-full lg:w-[400px] sticky top-24">
      <div class="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Order Summary
        </h2>

        <div class="space-y-4 mb-8">
          <div class="flex justify-between text-slate-500 dark:text-slate-400">
            <span>Subtotal</span>
            <span class="font-bold text-slate-900 dark:text-white">
              $4,150.00
            </span>
          </div>
          <div class="flex justify-between text-slate-500 dark:text-slate-400">
            <span>Shipping</span>
            <span class="font-bold text-slate-900 dark:text-white">
              Calculated at next step
            </span>
          </div>
          <div class="flex justify-between text-slate-500 dark:text-slate-400">
            <span>Tax</span>
            <span class="font-bold text-slate-900 dark:text-white">
              $0.00
            </span>
          </div>
        </div>

        <button class="w-full bg-primary text-white font-extrabold py-5 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-3">
          Proceed to Checkout
          <span class="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </aside>
  </div>
</main>
  </div>
</template>
