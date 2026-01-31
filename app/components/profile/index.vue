<script setup>
const { user } = useAuth();
</script>

<template>
  <div class="relative mx-auto md:max-w-2xl w-full mb-6 mt-16">
     <div v-if="!user" class="px-6 text-center">
      <p class="text-slate-600">Loading...</p>
    </div>
    <div v-else class="px-6">
      <div class="flex flex-wrap justify-center">
        <div class="w-full flex justify-center">
          <div class="relative">
            <NuxtImg
              :src="user.image"
              :alt="user.name"
              class="rounded-full w-32 h-32 object-cover "
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div class="text-center mt-2">
        <h3 class="text-2xl light:text-slate-700 font-bold mb-1">
          {{ user.name }}
        </h3>
        <div class="text-xs mt-0 mb-2 light:text-slate-400 font-bold uppercase">
          id : {{ user.id }}
        </div>
        <div class="p-3 text-center">
          <span class="text-xl text-red-400">{{ user.email }}</span>
        </div>
      </div>
      <div class="w-full">
        <div class="lg:pt-4 pt-8 pb-0">
          <div class="p-3 text-center">
            <span
              class="text-xl font-bold block uppercase tracking-wide light:text-slate-700"
              >{{ user.emailVerified ? "verified" : "Not Verified" }}</span
            >
          </div>
          <div class="p-3 text-center">
            <span class="text-sm text-slate-400">Created At</span>
            <span
              class="text-xl font-bold block uppercase tracking-wide light:text-slate-700"
              >{{ user.createdAt.toDateString() }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
