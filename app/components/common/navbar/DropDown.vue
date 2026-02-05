<script setup lang="ts">
const { user, isLoggedIn, signOut } = useAuth();

const items = computed(() => {
  if (!isLoggedIn.value) {
    return [
      [
        {
          label: "Sign In",
          icon: "i-lucide-log-in",
          to: "/login",
        },
        {
          label: "Sign Up",
          icon: "i-lucide-user-plus",
          to: "/signup",
        },
      ],
      [
        {
          label: "Discover",
          icon: "i-lucide-compass",
          to: "/gallery",
        },
      ],
    ];
  }

  return [
    [
      {
        label: user?.value?.name || "Guest",
        avatar: {
          src: user?.value?.image || "https://github.com/benjamincanac.png",
        },
        type: "label",
      },
    ],
    [
      {
        label: "Profile",
        icon: "i-lucide-user",
        to: "/profile",
      },
      {
        label: "Discover",
        icon: "i-lucide-compass",
        to: "/gallery",
      },
    ],
   
    [
      {
        label: "Sign out",
        icon: "i-lucide-log-out",
        onClick: () => signOut(),
      },
    ],
  ];
});
</script>

<template>
  <UDropdownMenu v-if="isLoggedIn" :items="items">
    <UButton
      class="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white  dark:border-[#3a1d1d] shadow-sm cursor-pointer p-0 overflow-hidden"
    >
      <NuxtImg
        :src="user?.image || 'https://github.com/benjamincanac.png'"
        alt="User avatar"
        class="w-full h-full object-cover rounded-full"
      />
    </UButton>
  </UDropdownMenu>

  <UDropdownMenu v-else :items="items">
    <UButton
      icon="i-lucide-user"
      color="primary"
      variant="ghost"
      class="rounded-full text-black dark:text-white"
    />
  </UDropdownMenu>
</template>
