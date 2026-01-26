<script setup lang="ts">
const links = ref([
  {
    label: "Start Selling",
    to: "/signup",
    color: "ghost",
    variant: "solid",
    icon: "i-lucide-square-play",
  },
  {
    label: "Start Bidding",
    to: "/gallery",
    color: "neutral",
    variant: "soft",
    trailingIcon: "i-lucide-arrow-right",
  },
]);
</script>

<template>
  <UPageHero
    title="Where Creativity Meets Opportunity"
    description="  The premier marketplace for discovering unique art and connecting with visionary creators. Whether you're collecting or creating, find your place here."
    orientation="horizontal"
    :links="links"
  >
    <NuxtImg
      src="/hero.jpg"
      alt="App screenshot"
      class="rounded-lg shadow-2xl ring ring-default"
    />
  </UPageHero>
</template>
