<script setup>
import LeftSide from "./LeftSide.vue";
import Links from "./Links.vue";
import ActionsBtns from "./ActionsBtns.vue";



</script>

<template>
  <div
    class="w-full flex justify-center sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-[#f4e7e7] dark:border-[#3a1d1d]"
  >
    <div class="w-full max-w-7xl px-4 md:px-10 py-3">
      <header class="flex items-center justify-between whitespace-nowrap">
        <LeftSide />
        <Links />
        <ActionsBtns />
      </header>
    </div>
  </div>
</template>

