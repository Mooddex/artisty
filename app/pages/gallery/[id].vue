<script setup>
const store = useArtStore();
const { art, isLoading, error } = store();
const route = useRoute();
await useAsyncData(`art-${route.params.id}`, () =>
  store.getSingleArt(route.params.id),
);
</script>

<template>
  <div class="p-6">
    <div v-if="isLoading" class="text-center text-lg">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
    <div v-else-if="art" 
    class=""
    >
      <Art :art="art" />
      
    </div>
  </div>
</template>
