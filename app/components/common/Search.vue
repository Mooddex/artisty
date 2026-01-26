<script setup>

</script>

<template>
   <label class="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
        <div class="flex w-full flex-1 items-stretch rounded-lg h-full">
          <div
            class="text-[#9d4848] dark:text-[#fca6a6] flex border-none bg-[#f4e7e7] dark:bg-[#3a1d1d] items-center justify-center pl-4 rounded-l-lg border-r-0"
          >
            <span class="material-symbols-outlined text-[20px]">search</span>
          </div>
          <input
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1c0d0d] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f4e7e7] dark:bg-[#3a1d1d] focus:border-none h-full placeholder:text-[#9d4848] dark:placeholder:text-[#fca6a6]/70 px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal"
            placeholder="Search by artist or art..."
            value=""
          />
        </div>
      </label>
</template>
