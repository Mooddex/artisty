<script setup>

</script>

<template>
<main class="grow flex items-center justify-center p-6">
  <div class="max-w-xl w-full text-center">
    
    <!-- Empty State Illustration -->
    <div class="mb-12 relative flex justify-center">
      <div class="w-64 h-64 bg-primary/10 dark:bg-primary/5 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div class="relative z-10">
        <div class="w-48 h-60 border-4 border-slate-300 dark:border-white/20 rounded-lg flex flex-col items-center justify-center bg-white dark:bg-white/5 shadow-2xl overflow-hidden">
          <div class="w-12 h-1 bg-slate-200 dark:bg-white/10 mb-8 rounded-full"></div>
          <span class="material-icons text-7xl text-primary/40 dark:text-primary/20"></span>
          <div class="mt-8 space-y-2 w-full px-8">
            <div class="h-2 bg-slate-100 dark:bg-white/5 rounded-full w-full"></div>
            <div class="h-2 bg-slate-100 dark:bg-white/5 rounded-full w-3/4"></div>
          </div>
        </div>

        <div class="absolute -bottom-4 -right-4 w-12 h-12 bg-transparent rounded-lg flex items-center justify-center shadow-lg transform rotate-12">
          <span class="text-4xl"><Icon name="streamline-kameleon-color:cart"  /></span>
        </div>
      </div>
    </div>

    <!-- Empty State Text -->
    <div class="space-y-4 mb-10">
      <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
        Your cart is empty
      </h1>
      <p class="text-lg text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
        Discover unique art and start your collection today. The perfect piece is waiting for you.
      </p>
    </div>

    <!-- Actions -->
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <NuxtLink
        class="bg-teal-500 hover:bg-primary/90 text-white font-semibold py-4 px-10 rounded-lg shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-2"
        to="gallery"
      >
        Browse Gallery
      </NuxtLink>
    </div>

    <!-- Popular Collections -->
    <div class="mt-20 pt-10 border-t border-slate-200 dark:border-white/5">
      <p class="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
        Popular Collections
      </p>

      <div class="flex flex-wrap justify-center gap-3">
        <a class="px-5 py-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-sm hover:border-primary hover:text-primary transition-all" href="#">Contemporary</a>
        <a class="px-5 py-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-sm hover:border-primary hover:text-primary transition-all" href="#">Photography</a>
        <a class="px-5 py-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-sm hover:border-primary hover:text-primary transition-all" href="#">Abstract</a>
        <a class="px-5 py-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-sm hover:border-primary hover:text-primary transition-all" href="#">Sculpture</a>
      </div>
    </div>

  </div>
</main>

</template>
