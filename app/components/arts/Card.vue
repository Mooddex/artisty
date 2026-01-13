<script setup>
defineProps({
  art: Object,
});
const getImageUrl = (imageId) =>
  imageId
    ? `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`
    : "https://via.placeholder.com/300x400?text=No+Image";
</script>
<template>
  <RouterLink :to="`/gallery/${art.id}`">
    <div
      class="group flex flex-col gap-4 bg-white dark:bg-[#2a1212] rounded-xl p-3 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div class="relative aspect-4/5 overflow-hidden rounded-lg w-full">
        <!-- Replaced the old static URL with actual artwork image -->
        <div
          class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          :style="{ backgroundImage: `url(${getImageUrl(art.image_id)})` }"
        ></div>
        <div class="absolute top-3 right-3">
          <button
            class="flex items-center justify-center size-9 rounded-full bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-primary transition-all"
          >
            <span class="material-symbols-outlined text-[20px]">favorite</span>
          </button>
        </div>
        <div
          class="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/60 backdrop-blur-md"
        >
          <p class="text-xs font-bold text-white tracking-wide">12h left</p>
        </div>
      </div>
      <div class="flex flex-col gap-3 px-1 pb-1">
        <div class="flex justify-between items-start">
          <div>
            <h3
              class="text-lg font-bold leading-tight line-clamp-1 group-hover:text-primary transition-colors"
            >
              {{ art.title }}
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
              by {{ art.artist_title }}
            </p>
          </div>
          <div class="text-right">
            <p class="text-xs text-gray-500 dark:text-gray-400">Current Bid</p>
            <p class="text-base font-bold text-[#1c0d0d] dark:text-white">
              0.85 ETH
            </p>
          </div>
        </div>
        <button
          class="w-full h-10 mt-1 rounded-lg bg-primary/20 hover:bg-primary text-[#1c0d0d] font-bold text-sm transition-colors flex items-center justify-center gap-2 group/btn"
        >
          <span>Place Bid</span>
          <span
            class="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform"
            >arrow_forward</span
          >
        </button>
      </div>
    </div>
  </RouterLink>
</template>
