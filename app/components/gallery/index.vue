<script setup lang="ts">


</script>

<template class="bg-background-light dark:bg-background-dark font-display text-[#1c0d0d] dark:text-white transition-colors duration-200">
  <div class="flex justify-center flex-1 w-full py-8 md:py-12 px-4 md:px-10">
    <div class="flex flex-col w-full max-w-[1280px] gap-8">
      <!-- Page Heading & Filters -->
      <div class="flex flex-col gap-6">
        <div class="flex flex-wrap justify-between items-end gap-4">
          <div class="flex flex-col gap-2">
            <h1 class="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Discover New Masterpieces</h1>
            <p class="text-[#9d4848] dark:text-[#fca6a6] text-lg font-normal">Browse unique pieces from artists around the world.</p>
          </div>
         <!-- sorting -->
          <ArtsSort />
        </div>
        <!-- Chips / Filter Categories -->
        <ArtsFilters />
      </div>
      <!-- Art Grid -->
      <ArtsGrid />
      <!-- Load More -->
      <div class="flex py-6 justify-center">
        <button class="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary text-[#1c0d0d] hover:bg-opacity-90 text-base font-bold leading-normal tracking-[0.015em] transition-opacity shadow-sm">
          <span class="truncate">Load More Art</span>
        </button>
      </div>
    </div>
  </div>
</template>
