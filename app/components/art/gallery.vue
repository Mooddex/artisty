<script setup lang="ts">


</script>

<template class="bg-background-light dark:bg-background-dark font-display text-[#1c0d0d] dark:text-white transition-colors duration-200">
  <div class="flex justify-center flex-1 w-full py-8 md:py-12 px-4 md:px-10">
    <div class="flex flex-col w-full max-w-7xl gap-8">
      <!-- Page Heading & Filters -->
      <div class="flex flex-col gap-6">
        <div class="flex flex-wrap justify-between items-end gap-4">
          <div class="flex flex-col gap-2">
            <h1 class="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Everyone is an Artist</h1>
            <p class="text-[#9d4848] dark:text-[#fca6a6] text-lg font-normal">Browse unique pieces from artists around the world.</p>
          </div>
         <!-- sorting -->
        </div>
        <!-- Chips / Filter Categories -->
      </div>
      <!-- Art Grid -->
      <ArtGrid />
      <!-- Load More -->
    </div>
  </div>
</template>
