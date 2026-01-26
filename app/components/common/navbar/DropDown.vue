<script setup lang="ts">
const { user, isLoggedIn, signOut } = useAuthStore();

const items = computed(() => {
  if (!isLoggedIn) {
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
        label: user?.name || "Guest",
        avatar: {
          src: user?.image || "https://github.com/benjamincanac.png",
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
        label: "Artists",
        icon: "i-lucide-palette",
        to: "/artists/all",
      },
      {
        label: "Auctions",
        icon: "i-lucide-gavel",
        to: "/auctions",
      },
    ],
    [
      {
        label: "Search",
        icon: "i-lucide-search",
        disabled: false, // Enable when search is ready
      },
    ],
    [
      {
        label: "Sign out",
        icon: "i-lucide-log-out",
        click: () => signOut(),
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
