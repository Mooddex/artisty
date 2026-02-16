<script setup></script>

<template>
  <main
    class="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-[calc(100vh-140px)]"
  >
    <!-- Empty State Central Card -->
    <div
      class="w-full max-w-3xl bg-white dark:bg-slate-900/50 border border-primary/10 rounded-xl shadow-xl shadow-primary/5 overflow-hidden"
    >
      <!-- Visual Hero -->
      <div
        class="relative w-full h-72 bg-gradient-to-br from-primary/10 via-background-light to-white dark:from-primary/5 dark:via-background-dark dark:to-slate-900 flex items-center justify-center p-8"
      >
        <div
          class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"
        ></div>

        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZxsbWC2IjAT7eQSd6bNAqqo1lmzw-8SRzXLmh3DmVh9mwJlw7DaCWd22qNoLsEdov31HY4_ohbRPfhYM-LcShg2uSp2uHiqOi5SKXC0-mxVzj0KBo46xSwxu0f9VFnvYFM7vluIb4rnzpfdN79npA0oLLgULnymNIPeIcMRw_MptDj2yROw0B5qKmdZbQhLGb1puwtfmZDZYX59RG9r2J_drw-j4Lo_FGozx1zGfLBF7OCSrY3EKnYKbizL1y_I42f5Wckqi9C4c"
          alt="Artist workspace"
          class="w-full h-full object-cover rounded-lg shadow-lg mix-blend-multiply opacity-80 dark:mix-blend-normal dark:opacity-40"
        />

        <div class="absolute inset-0 flex items-center justify-center">
          <div
            class="bg-white/90 dark:bg-slate-800/90 p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-primary/20"
          >
            <span class="material-icons-round text-primary text-6xl"
              ><Icon name="streamline-ultimate-color:color-bucket-brush" width="24" height="24" /></span
            >
          </div>
        </div>
      </div>

      <!-- Content Area -->
      <div class="p-10 text-center">
        <h1 class="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
          Welcome to your Creator Space
        </h1>

        <p
          class="text-slate-500 dark:text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed text-lg"
        >
          Start your journey by uploading your first masterpiece and sharing it
          with the world. Your potential collectors are waiting.
        </p>

        <button
          class="bg-teal-500 hover:bg-teal-500/90 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-teal-500/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-3 mx-auto cursor-pointer"
        >
          <span class="light:text-black"><Icon name="flat-color-icons:upload" width="48" height="48" /></span>
          Upload My First Artwork
        </button>
      </div>
    </div>

    <!-- Quick Start Tips -->
    <div class="mt-16 w-full max-w-4xl">
      <div class="flex items-center gap-4 mb-8">
        <div class="h-px flex-1 bg-primary/20"></div>
        <h2 class="text-sm font-bold uppercase tracking-[0.2em] text-primary">
          Quick Start Guide
        </h2>
        <div class="h-px flex-1 bg-primary/20"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          class="p-6 bg-white/50 dark:bg-slate-900/30 rounded-xl border border-primary/5 hover:border-primary/20 transition-all group"
        >
          <div
            class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
          >
            <span class=" "
              ><Icon name="mdi:account" width="24" height="24"/></span
            >
          </div>
          <h3 class="font-bold mb-2 text-slate-900 dark:text-white">
            Complete Bio
          </h3>
          <p class="text-sm text-slate-500 dark:text-slate-400">
            Introduce yourself to the community. Tell collectors about your
            inspiration and style.
          </p>
        </div>

        <div
          class="p-6 bg-white/50 dark:bg-slate-900/30 rounded-xl border border-primary/5 hover:border-primary/20 transition-all group"
        >
          <div
            class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
          >
            <span class="material-icons-round text-primary"><Icon name="streamline-plump-color:payment-recieve-7" width="48" height="48" /></span>
          </div>
          <h3 class="font-bold mb-2 text-slate-900 dark:text-white">
            Set Up Payments
          </h3>
          <p class="text-sm text-slate-500 dark:text-slate-400">
            Connect your bank account to start receiving earnings from your
            first art sales.
          </p>
        </div>

        <div
          class="p-6 bg-white/50 dark:bg-slate-900/30 rounded-xl border border-primary/5 hover:border-primary/20 transition-all group"
        >
          <div
            class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
          >
            <span class="material-icons-round text-primary"
              ><Icon name="streamline:shipping-truck" width="14" height="14"  style="color: #853030" /></span
            >
          </div>
          <h3 class="font-bold mb-2 text-slate-900 dark:text-white">
            Shipping Setup
          </h3>
          <p class="text-sm text-slate-500 dark:text-slate-400">
            Learn about our shipping protection and how to package your pieces
            safely.
          </p>
        </div>
      </div>
    </div>

    <!-- Footer Help -->
    <footer
      class="mt-20 text-slate-400 dark:text-slate-600 text-sm flex items-center gap-4"
    >
      <a class="hover:text-primary transition-colors" href="#">Help Center</a>
      <span class="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
      <a class="hover:text-primary transition-colors" href="#"
        >Creator Community</a
      >
      <span class="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
      <a class="hover:text-primary transition-colors" href="#"
        >Artist Guidelines</a
      >
    </footer>
  </main>
</template>
