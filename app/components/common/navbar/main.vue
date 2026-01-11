<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'


// const {signOut , status} = useAuth();
// const loggedin = status.value
const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Sign up',
  to: '/signup',
  active: route.path.startsWith('/signup')
}, {
  label: 'Log in',
  to: '/login',
  active: route.path.startsWith('/login')
}, {
  label: 'Gallery',
  to: '/gallery',
  active: route.path.startsWith('/gallery')
}, {
  label: 'Auctions',
  to: 'auctions',
  active: route.path.startsWith('/auctions')
},
]);

// async function  handlesignout(){
//   signOut();
// console.log('signned out')
// }
</script>

<template>
 
    <UHeader  title="Artisty" >
      <!-- <template>
        <Logo class="h-6 w-auto" />
      </template> -->
<!--       
<div v-show="loggedin==='authenticated'">
  <button @click="handlesignout">
    Sign out 
  </button>
</div> -->
      <UNavigationMenu :items="items" />

      <template #right>
        <UColorModeButton 
       active-color="primary"
        variant="ghost" color="neutral"
        />

        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/mooddex"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </template>

      <template #body>
        <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      </template>
    </UHeader>
    </template>