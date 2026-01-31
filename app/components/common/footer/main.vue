<script setup lang="ts">

</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}</p>
    </template>


    <template #right>
      <UButton
        icon="i-simple-icons-gmail"
        color="neutral"
        variant="ghost"
        to="mailto:msalama027@gmail.com"
        aria-label="Gmail"
      />
      <UButton
        icon="i-simple-icons-linkedin"
        color="neutral"
        variant="ghost"
        to="https://www.linkedin.com/in/mahmoudsalama1/"
        target="_blank"
        aria-label="linkedIn"
      />
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/mooddex"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>
