<script setup>
const { user, isLoggedIn } = useAuthStore();

</script>

<template>
 <div v-if="isLoggedIn" class="flex flex-col gap-2">
<h1 class="text-[#1c0d0d] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Welcome back, {{ user?.name }}</h1>
<h2>{{ user }}</h2>
<p class="text-[#9d4848] dark:text-[#dcaaaa] text-base font-normal leading-normal">Here is what's happening  today.</p>
</div>
<div v-else>
   <h1 class="light:text-black text-3xl">
     please sign in or create an account
   </h1>
</div>
</template>
