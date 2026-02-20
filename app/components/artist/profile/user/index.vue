<script setup>
const { user } = useAuth();

// Use the composable and fetch orders
const { orderStats, fetchOrders } = useOrder();

// Fetch orders on mount
await fetchOrders();
</script>

<template>
  <main class="max-w-7xl mx-auto">
    <div class="lg:flex-row gap-8">
      <!--  Profile Card -->
      <div class="bg-white dark:bg-slate-900 rounded-xl">
        <div class="px-6 pb-6">
          <div class="mb-4 justify-items-center">
            <NuxtImg
              class="w-44 h-44 rounded-xl border-4 border-white dark:border-slate-900 shadow-md object-cover"
              :src="user?.image"
              :alt="user.name"
            />
          </div>
          <h1 class="text-xl font-bold">{{ user.name }}</h1>
          <p class="text-slate-500 dark:text-slate-400 text-sm mb-4">
            {{ user.email }}
          </p>
          <div class="flex items-center justify-between mb-6">
            <p class="text-sm leading-relaxed">
              {{ user?.bio || "Tell us about yourself" }}
            </p>
            <CommonUpdateAccount :user="user" />
          </div>

          <div
            class="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800"
          >
            <div
              class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400"
            >
              <Icon
                name="uil:calender"
                width="24"
                height="24"
                style="color: #fff"
              />
              <span>Joined {{ new Date(user.createdAt).toDateString() }}</span>
            </div>
            <div
              class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400"
            >
              <Icon
                name="duo-icons:location"
                width="24"
                height="24"
                style="color: #fff"
              />
              <span>{{ user?.location || "No location set" }}</span>
            </div>
          </div>
          
          <div
            class="flex mt-8 pt-6 border-t border-slate-100 dark:border-slate-800"
          >
            <div class="justify-items-center">
              <p class="text-lg font-bold">
                {{ orderStats.totalItems }}
              </p>
              <p class="text-[10px] uppercase tracking-wider text-slate-500">
                Masterpieces
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Main Content Area -->
      <div class="grow">
        <!-- Creator CTA Banner -->
        <div
          class="relative overflow-hidden bg-white dark:bg-slate-900 rounded-xl border border-primary/20 shadow-md mb-8 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <ArtistProfileUserGotoDashboard />
        </div>
        
        <!-- Tabs Navigation -->
        <div
          class="flex items-center gap-8 border-b border-slate-200 dark:border-slate-800 mb-8"
        >
          <button
            class="pb-4 px-2 text-sm font-bold border-b-2 border-primary text-primary"
          >
            My Collection
          </button>
        </div>
        
        <!-- Collection Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <!-- Orders Component -->
          <ArtistProfileUserOrders />
          
          <!-- Add More Placeholder -->
          <div
            class="bg-primary/5 rounded-xl border-2 border-dashed border-primary/20 flex flex-col items-center justify-center p-8 text-center min-h-[400px]"
          >
            <div class="flex items-center justify-center shadow-sm mb-4">
              <NuxtLink
                to="/gallery"
                class="text-6xl hover:shadow-blue-700 shadow-lg shadow-blue-400"
              >
                <Icon name="icon-park:add" width="50" height="50" />
              </NuxtLink>
            </div>
            <h4 class="font-bold text-lg mb-2">Add more to your collection</h4>
            <p class="text-slate-500 text-sm max-w-50 mb-6">
              Discover thousands of unique artworks from global creators.
            </p>
            <NuxtLink
              to="/gallery"
              class="text-primary font-bold text-sm hover:underline"
            >
              Browse Market
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>