<script setup>
const { user, isLoading, session } = useAuth();
</script>

<template>
  <!-- loading state -->
  <div v-if="isLoading" class="px-6 text-center">
    <p class="text-slate-600">Loading...</p>
  </div>
  <div v-else class="relative mx-auto md:max-w-2xl w-full mb-6 mt-16">
    <!-- no user -->
    <div v-if="!session && !user">
      Not A User Please
      <NuxtLink to="/login" class="text-green-500"> Log In </NuxtLink>
      or
      <NuxtLink to="/signup" class="text-teal-600"> Sign Up </NuxtLink>
      to access your profile
    </div>
    <!-- user -->
    <div v-else class="">
      <ArtistProfileUser />
    </div>
  </div>
</template>
