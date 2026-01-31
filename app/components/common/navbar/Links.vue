<script setup>

  const {isLoggedIn, signOut} = useAuth();
</script>

<template>
   <div class="hidden lg:flex items-center gap-8">
      <NuxtLink
        class="text-sm font-medium hover:text-blue-700  dark:hover:text-primary/75 transition-colors"
        href="/gallery"
        >Discover</NuxtLink
      >
   
   <div 
    v-if="!isLoggedIn"
    class="hidden lg:flex items-center gap-8"
    
    >
      <NuxtLink
        class="text-sm font-medium hover:text-blue-700 dark:hover:text-primary/75 transition-colors"
        href="/signup"
        >Sign up</NuxtLink
      >
      <NuxtLink
        class="text-sm font-medium hover:text-blue-700 dark:hover:text-primary/75 transition-colors"
        href="/login"
        >Log in</NuxtLink
      >
    </div>
    <div 
    v-else
    class="hidden lg:flex items-center gap-8">
      
     
      <NuxtLink
        class="text-sm font-medium hover:text-blue-700 dark:hover:text-primary/75 transition-colors"
        href="/profile"
        >Profile</NuxtLink
      >
      <button
        class=" cursor-pointer text-rose-500 text-sm font-medium hover:text-red-800 transition-colors"
        @click="signOut"
        >Sign out</button
      >
    </div>
  </div>
</template>
