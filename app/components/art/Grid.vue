<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useArtStore } from "@/stores/artStore";

const artStore = useArtStore();
const { arts, isLoading } = storeToRefs(artStore);

onMounted(() => {
  artStore.getArt();
});
</script>

<template>
  <div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
    >
      <ArtCard
        v-for="art in arts"
        :key="art.id"
        :art="art"
      />
    </div>

    <div v-if="isLoading" class="mt-4">
      Loading...
    </div>
  </div>
</template>
