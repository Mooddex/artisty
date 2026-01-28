<script setup lang="ts"></script>

<template>
  <div>
    <CommonNavbar />
    <main class="flex flex-col min-h-screen">
      <slot />
    </main>
    <CommonFooterMain />
  </div>
</template>
