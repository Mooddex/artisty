<script setup>

const route = useRoute();
const store = useArtStore();
const art = ref(null);
const isLoading = ref(false);
const error = ref(null);

store.getSingleArt.apply(route.params.id)
// helper to get image URL
const getImageUrl = (imageId) =>
  imageId
    ? `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`
    : "https://via.placeholder.com/300x400?text=No+Image";

// sanitize HTML content

</script>

<template>
  <div class="p-6">
    <div v-if="isLoading" class="text-center text-lg">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
    <div
      v-else-if="art"
      class="max-w-4xl mx-auto flex flex-col md:flex-row gap-6"
    >
      <!-- Image section -->
      <div class="shrink-0 md:w-1/2">
        <img
          :src="getImageUrl(art.image_id)"
          :alt="art.title"
          class="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
  <!-- eslint-disable-next-line vue/no-v-html -->
      <!-- Info section -->
      <div class="flex-1 flex flex-col gap-4">
        <h1 class="text-2xl font-bold">{{ art.title }}</h1>
        <div
          v-if="art.description"
          class="prose prose-sm dark:prose-invert max-w-none"
          v-html="sanitizeHtml(art.description)"
        ></div>

        <p class="text-gray-600 dark:text-gray-300 text-lg">
          by {{ art.artist_title || "Unknown Artist" }}
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          {{ art.date_display || "Date unknown" }}
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          {{ art.classification_title || "" }} - {{ art.style_title || "" }}
        </p>

        <div class="mt-4">
          <h2 class="font-semibold text-lg">Dimensions:</h2>
          <p class="text-gray-500 dark:text-gray-400">
            {{ art.dimensions || "Unknown" }}
          </p>
        </div>

        <div class="mt-4">
          <h2 class="font-semibold text-lg">Place of Origin:</h2>
          <p class="text-gray-500 dark:text-gray-400">
            {{ art.place_of_origin || "Unknown" }}
          </p>
        </div>

        <div class="mt-6">
          <button
            class="px-6 py-3 rounded-lg bg-primary/20 hover:bg-primary text-[#1c0d0d] font-bold transition-colors"
          >
            Place Bid - 0.85 ETH
          </button>
        </div>
      </div>
    </div>
    <div v-else class="text-center text-gray-500">Artwork not found.</div>
  </div>
</template>
