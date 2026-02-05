<script setup></script>

<template>
  <div class="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  w-full ">
    <SocialShare
      v-for="network in ['facebook', 'x', 'linkedin', 'email']"
      :key="network"
      :network="network"
      :styled="true"
      class="m-3 p-2 rounded-2xl text-black bg-red-300 hover:bg-red-500"
    />
  </div>
</template>
