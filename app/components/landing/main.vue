<script setup lang="ts">

const links = ref([
  {
    label: 'Get started',
    to: '/docs/getting-started',
     color: 'ghost',
    variant: 'solid',
    icon: 'i-lucide-square-play'
  },
  {
    label: 'Learn more',
    to: '/docs/getting-started/theme/design-system',
    color: 'neutral',
    variant: 'soft',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageHero
    title="Ultimate Vue UI library"
    description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications."
    headline="New release"
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
