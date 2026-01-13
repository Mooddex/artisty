<script setup>
import { Icon } from "@iconify/vue";

</script>

<template>
  <div>
<div class="flex gap-3 items-center">
            <button
              class="flex items-center justify-center overflow-hidden rounded-full size-10 bg-[#f4e7e7] dark:bg-[#3a1d1d] hover:bg-[#eadddd] dark:hover:bg-[#4a2d2d] transition-colors group"
            >
              <span
                class="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors"
                ><Icon icon="mingcute:notification-line" width="24" height="24"
              /></span>
            </button>
            <button
              class="flex items-center justify-center overflow-hidden rounded-full size-10 bg-[#f4e7e7] dark:bg-[#3a1d1d] hover:bg-[#eadddd] dark:hover:bg-[#4a2d2d] transition-colors group"
            >
              <span
                class="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors"
                ><Icon icon="streamline-kameleon-color:shopping-4" width="48" height="48" /></span
              >
            </button>
            <div
              class="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white dark:border-[#3a1d1d] shadow-sm cursor-pointer"
              data-alt="User profile picture placeholder"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5bRnFSE_UlL9cMRI8ZFjQJkUIdIJLctnjm2FxJ_g03F1ev8nMbBKA-2R5nh4sxi3f9-FpWMdubv5f3fAUed9WG-mkjxUIq8e6W__avC6rHIBLFc_jpvFcp86qwlF06m4yWQzY8iosXeD2YI7qFnsJIEtD1yY5a04hQtuZUvxMndesBHjfDGxQElG79AsQFQsL18pQMYU83iEopHclB2P0ZfPnkyzSbqZsKAm-NroW_2Z-vp9P1v0tDVYqEk1RqCDfg1fhaEfon9s');
              "
            ></div>
           
  <UColorModeSwitch />
          </div>            
  </div>
</template>
