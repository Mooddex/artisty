<script setup>

defineProps(['user',])
</script>

<template>
 <div class="flex flex-col gap-2">
<h1 class="text-[#1c0d0d] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Welcome back, {{ user.name }}</h1>
<p class="text-[#9d4848] dark:text-[#dcaaaa] text-base font-normal leading-normal">Here is what's happening  today.</p>
</div>
</template>
