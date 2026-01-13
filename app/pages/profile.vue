<script setup>
import { useAuth } from '@/composables/useAuth';

const {user} = useAuth();

</script>

<template>
  <div v-if="user">
         {{ user?.name }}
         {{ user?.email }}   
  </div>
</template>
