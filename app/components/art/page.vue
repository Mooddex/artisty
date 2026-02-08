<script setup>


const {art} = defineProps({
  art:{
    type:Object, required:true
  }
})
const url = useRequestURL();
const route = useRoute();
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
  title: () => art?.title || "Art Gallery",
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
   
    <div  class="mx-auto flex flex-col md:flex-row gap-6">
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
        <p class="text-gray-500 dark:text-gray-400">
          {{ art.date_display || "Date unknown" }}
        </p>
        <p class="text-gray-600 dark:text-gray-300 text-lg">
          by {{ art.artist_title || "Unknown Artist" }}
        </p>
       
        <p class="text-gray-500 dark:text-gray-400">
          {{ art.classification_title || "" }} - {{ art.artwork_type_title || "" }}
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
          <div class="flex flex-col ">
             <span>
               Acquired By :
          {{ art.credit_line || "Unknown" }}
          </span>
         
          </div>
         
        </div>
        <div
          v-if="art.description"
          class="prose prose-sm dark:prose-invert"
          v-html="sanitizeHtml(art.description)"
        ></div>
         <NuxtLink 
         :to="`/shop-cart/${art.id}`"
         class="text-white light:text-black place-items-start cursor-pointer bg-violet-900 light:bg-violet-400 w-fit p-2 rounded-2xl hover:bg-violet-600"
         >
           Buy a Copy -> {{ art.id > 1000 ? "Privet"  : art.id}} $
          </NuxtLink>
        <CommonSocialShare />

       
      </div>
    </div>
  </div>
</template>

