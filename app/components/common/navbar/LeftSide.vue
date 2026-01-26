<script setup>

</script>

<template>
  <div>
    <div class="flex items-center gap-8">
      <div >
        <!-- logo -->
      <NuxtLink 
      to="/"
      class="flex items-center gap-2 cursor-pointer"
      >
         <img 
        src="/logo.jpeg" 
        alt="Logo" 
        class="size-8" 
        />
          <!-- Name -->
        <h2
          class="text-xl font-bold leading-tight tracking-[-0.015em] dark:text-white"
        >
          Artisty
        </h2>
      </NuxtLink>
       
      </div>
      <!-- search -->
     <CommonSearch />
    </div>
  </div>
</template>
