<script setup>
import { storeToRefs } from "pinia";

const route = useRoute();
const store = useArtStore();
const { art, isLoading, error } = storeToRefs(store);
const url = useRequestURL();

await store.getSingleArt(route.params.id);
// helper to get image URL
const getImageUrl = (imageId) =>
  imageId
    ? `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`
    : "https://via.placeholder.com/300x400?text=No+Image";

// sanitize HTML content
const sanitizeHtml = (html) => {
  return html;
};
useSeoMeta({
  title: () => art.value?.title || "Art Gallery",
  ogTitle: () => art.value?.title || "Art Gallery",
  ogImage: () =>
    art.value?.image_id
      ? getImageUrl(art.value.image_id)
      : `${url.origin}/default-image.jpg`,
  twitterImage: () =>
    art.value?.image_id
      ? getImageUrl(art.value.image_id)
      : `${url.origin}/default-image.jpg`,
  ogUrl: `${url.origin}/gallery/${route.params.id}`,
  twitterCard: "summary_large_image",
});
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>

<template>
  <div class="p-6">
    <div v-if="isLoading" class="text-center text-lg">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
    <div v-else-if="art" class="mx-auto flex flex-col md:flex-row gap-6">
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
        <div
          v-if="art.description"
          class="prose prose-sm dark:prose-invert"
          v-html="sanitizeHtml(art.description)"
        ></div>

        <div class="mt-6 flex items-center gap-3">
          <SocialShare
            v-for="network in ['facebook', 'x', 'linkedin', 'email']"
            :key="network"
            :network="network"
            :styled="true"
            class="m-3 p-2 rounded-2xl text-black bg-red-300 hover:bg-red-500"
          />
        </div>
      </div>
    </div>
  </div>
</template>
