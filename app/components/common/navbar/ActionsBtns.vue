<script setup>
import { Icon } from "@iconify/vue";
import DropDown from "./DropDown.vue";

</script>

<template>
  <div>
<div class="flex gap-3 items-center">
  <!-- notification -->
            <button
              class="flex items-center justify-center overflow-hidden rounded-full size-10 bg-[#f4e7e7] dark:bg-[#3a1d1d] hover:bg-[#eadddd] dark:hover:bg-[#4a2d2d] transition-colors group"
            >
              <span
                class="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors"
                ><Icon icon="mingcute:notification-line" width="24" height="24"
              /></span>
            </button>
            <!-- shopCart -->
            <button
              class="flex items-center justify-center overflow-hidden rounded-full size-10 bg-[#f4e7e7] dark:bg-[#3a1d1d] hover:bg-[#eadddd] dark:hover:bg-[#4a2d2d] transition-colors group"
            >
              <span
                class="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors"
                ><Icon icon="streamline-kameleon-color:shopping-4" width="48" height="48" /></span
              >
            </button>
            <!-- dropdown  -->
            <div>
            <DropDown />
          </div>
           
  <UColorModeSwitch />
          </div>            
  </div>
</template>
