<script setup></script>

<template>
    <!-- CTA btn -->
  <div
    class="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
  ></div>
  <div class="relative z-10 space-y-2">
    <div
      class="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-2"
    >
      <span class="material-icons text-xs"
        ><Icon
          name="ic:twotone-auto-awesome"
          width="24"
          height="24"
          style="color: #fff"
      /></span>
      <span>For Aspiring Artists</span>
    </div>
    <h2 class="text-2xl font-bold">Want to Show your own art?</h2>
    <p class="text-slate-600 dark:text-slate-400 max-w-md">
      Transform your passion into a business. Set up your artist profile, manage
      your listings, and track your sales in one place.
    </p>
  </div>
  <button
    class="relative z-10 whitespace-nowrap bg-transparent hover:bg-teal-600/90 text-white light:text-black font-bold py-3 px-8 rounded-lg shadow-2xl shadow-white/50 light:shadow-black/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group"
  >
    <NuxtLink to="/dashboard">Open Creator Dashboard</NuxtLink>
  </button>
</template>
