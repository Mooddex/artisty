<script setup>

//which item is active by default and the state for the rest.
const activeIndex = ref(0);
// the array of items / btns that will be activated 
const filters = [
  "All",
  "Painting",
  "Photography",
  "Digital Art",
  "Sculpture",
  "AI Generated",
];
//function for the @click to activate the chosen btn
const setActive = (index) => {
  activeIndex.value = index;
};
//the styling change for the items (before and after )
const btnClass = (index) => {
  return activeIndex.value === index
    ? "bg-black dark:bg-white text-white dark:text-[#1c0d0d]"
    : "bg-[#f4e7e7] dark:bg-[#3a1d1d] hover:bg-[#eadddd] dark:hover:bg-[#4a2d2d]";
};

</script>

<template>
  <div class="flex gap-3 overflow-x-auto">
    <button
      v-for="(filter, index) in filters"
      :key="filter"
      :class="[
        btnClass(index),
        'h-10 rounded-lg px-6 transition-colors active:scale-95'
      ]"
      @click="setActive(index)"
    >
      {{ filter }}
    </button>
  </div>
</template>

