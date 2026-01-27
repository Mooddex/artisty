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
        href="/signup"
        >Sign up</NuxtLink
      >
      <NuxtLink
        class="text-sm font-medium hover:text-primary transition-colors"
        href="/login"
        >Log in</NuxtLink
      >
    </div>
    <div 
    v-else
    class="hidden lg:flex items-center gap-8">
       <NuxtLink
        class="text-sm font-medium hover:text-primary transition-colors"
        href="artists"
        >Artists</NuxtLink
      >
     
      <NuxtLink
        class="text-sm font-medium hover:text-primary transition-colors"
        href="/auctions"
        >Auctions</NuxtLink
      >
      <button
        class=" cursor-pointer text-rose-500 text-sm font-medium hover:text-primary transition-colors"
        @click="signOut"
        >Sign out</button
      >
    </div>
  </div>
</template>
