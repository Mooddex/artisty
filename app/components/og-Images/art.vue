<script setup lang="ts">
defineProps<{
title:string,
image:string

}>()
</script>

<template>
  <div>
           <img :src="image" alt="">
           <h1>{{ title }}</h1> 
  </div>
</template>
