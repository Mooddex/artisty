<script setup>

  const {isLoggedIn, signOut} = useAuth();
</script>

<template>
   <div class="hidden lg:flex items-center gap-8">
      <NuxtLink
        class="text-sm font-medium hover:text-primary transition-colors"
        href="/gallery"
        >Discover</NuxtLink
      >
   
   <div 
    v-if="!isLoggedIn"
    class="hidden lg:flex items-center gap-8"
    
    >
      <NuxtLink
        class="text-sm font-medium hover:text-primary transition-colors"
        href="/gallery"
        >sign up</NuxtLink
      >
      <NuxtLink
        class="text-sm font-medium hover:text-primary transition-colors"
        href="/auctions"
        >sign in</NuxtLink
      >
    </div>
    <div 
    v-else
    class="hidden lg:flex items-center gap-8">
       <NuxtLink
        class="text-sm font-medium hover:text-primary transition-colors"
        href="artist/all"
        >Artists</NuxtLink
      >
     
      <NuxtLink
        class="text-sm font-medium hover:text-primary transition-colors"
        href="/auctions"
        >Auctions</NuxtLink
      >
      <button
        class=" cursor-pointer text-sm font-medium hover:text-primary transition-colors"
        @click="signOut"
        >Sign out</button
      >
    </div>
  </div>
</template>
