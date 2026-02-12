<script setup>
const store = useCartStore();
</script>

<template>
  <div>
    <NuxtLink 
      to="/shop-cart"
      class="flex items-center justify-center overflow-hidden rounded-full size-10 bg-[#f4e7e7] dark:bg-[#3a1d1d] hover:bg-[#eadddd] dark:hover:bg-[#4a2d2d] transition-colors group"
    >
      <!-- ✅ Fixed: Use 'name' prop instead of 'icon' -->
      <Icon
        name="streamline-kameleon-color:shopping-4"
        class="text-[20px] group-hover:text-primary transition-colors absolute"
     
      />
      <span
      class="relative z-1 left-2.5 -top-2.5 text-xs  light:text-black font-bold"
      >{{ store.totalCartArts }}</span>
    </NuxtLink>
      
  </div>
</template>