<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useArtStore } from "@/stores/artStore";

const artStore = useArtStore();
const { arts, isLoading, totalCount } = storeToRefs(artStore);

onMounted(() => {
  artStore.getArt();
});
</script>

<template>
  <div>
     <div v-if="isLoading" class="mt-4">
      Loading...
    </div>
    <div>
      <div v-if="totalCount===0">No Art Found For Now</div>
       <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
    >
      <ArtCard
        v-for="art in arts"
        :key="art.id"
        :art="art"
      />
    </div>
    </div>
   

   
  </div>
</template>
