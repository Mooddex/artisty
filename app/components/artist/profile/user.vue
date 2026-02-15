<script setup>
import UpdateAccount from '~/components/updateAccount.vue';

const { user } = useAuth();
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
             <p class="text-sm leading-relaxed ">
            {{ user?.bio || " Tell us about yourself" }}
          </p>
          <UpdateAccount  />
          </div>
         
          <div
            class="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800"
          >
            <div
              class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400"
            >
              <span class="material-icons text-base text-primary/60"
                ><Icon
                  name="uil:calender"
                  width="24"
                  height="24"
                  style="color: #fff"
              /></span>
              <span>Joined {{ user.createdAt.toDateString() }}</span>
            </div>
            <div
              class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400"
            >
              <span class="material-icons text-base text-primary/60"
                ><Icon
                  name="duo-icons:location"
                  width="24"
                  height="24"
                  style="color: #fff"
              /></span>
              <span data-location="Berlin, Germany">{{
                user?.location || "locationDATA"
              }}</span>
            </div>
          </div>
          <div
            class="flex items-center justify-between mt-8 pt-6 border-t border-slate-100 dark:border-slate-800"
          >
            <div class="text-center">
              <p class="text-lg font-bold">
                {{ user?.bought || "number of art bought" }}
              </p>
              <p class="text-[10px] uppercase tracking-wider text-slate-500">
                Masterpieces
              </p>
            </div>
            <div class="text-center">
              <p class="text-lg font-bold">
                {{ user?.likes || "number of liked arts " }}
              </p>
              <p class="text-[10px] uppercase tracking-wider text-slate-500">
                Liked
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Main Content Area -->
      <div class="flex-grow">
        <!-- Creator CTA Banner -->
        <div
          class="relative overflow-hidden bg-white dark:bg-slate-900 rounded-xl border border-primary/20 shadow-md mb-8 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div
            class="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
          ></div>
          <div class="relative z-10 space-y-2">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-2"
            >
              <span class="material-icons text-xs"
                ><Icon
                  name="ic:twotone-auto-awesome"
                  width="24"
                  height="24"
                  style="color: #fff"
              /></span>
              <span>For Aspiring Artists</span>
            </div>
            <h2 class="text-2xl font-bold">Want to Show your own art?</h2>
            <p class="text-slate-600 dark:text-slate-400 max-w-md">
              Transform your passion into a business. Set up your artist
              profile, manage your listings, and track your sales in one place.
            </p>
          </div>
          <button
            class="relative z-10 whitespace-nowrap bg-transparent hover:bg-teal-600/90 text-white light:text-black font-bold py-3 px-8 rounded-lg shadow-lg shadow-white/20 light:shadow-black/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group"
          >
            <NuxtLink to="/dashboard">Open Creator Dashboard</NuxtLink>
          </button>
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
          <!-- Artwork Card 1 -->
          <div
            class="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 group hover:shadow-xl transition-all"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Vibrant abstract oil painting with heavy texture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAknMHS6FoegL4iLVH3Jzm9txd0KAL2VY4L32aKQ2bWjEWFkSd-F1u-NvJ1CxPJJfJecYS8ddw9GvkCZRUSaIm91w4Cu4T0MVTevrUHVZzJ5i1neRpVM_BiKM1NyOjQB9fUz9aX7BMKTUMGZJfooxDK-grO23l2wq7dhmFBPxNaUnMjOSu-wx1Z9FE95fEJ2X1vk9iVck0U3GpviT8Nh5y3S8X9vnf1XL5iK6WfoD5LgbUq1ddm4J9NwWC8gQqF6LwM3JCORcNiKKQ"
              />
              <div
                class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3"
              >
                <button
                  class="p-2 bg-white text-slate-900 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <span class="material-icons">visibility</span>
                </button>
                <button
                  class="p-2 bg-white text-slate-900 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <span class="material-icons">verified</span>
                </button>
              </div>
            </div>
            <div class="p-5">
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-bold text-lg leading-tight">Neon Echoes #4</h3>
                <span
                  class="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full"
                  >NFT</span
                >
              </div>
              <div class="flex items-center gap-2 mb-4">
                <img
                  class="w-5 h-5 rounded-full object-cover"
                  data-alt="Male artist avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuvrHasLuyOwqjWF5VHWjYQELospDQy6_WowhH49FUDD12IXuW3TooH5EhQPKfpzjT0yW8MmmK6L0liVrqwQfYsJFOuxt1y_sSd3i9THiL1T6Ia2eDf1hA1hfSiWu6hA31xHFtCk3W4QWWko-pNQ7cuM5kkyfmlAEgon9wSGaHt7lQ9-OhNsgl8FUTcejBEeWp1GUSrK52s1WuVurX7rxsNMd7x823g5jRyCjKtwCVFT9Zt_vHTDyf2iljDIhSGGpMpw4uInE9y7w"
                />
                <span class="text-sm text-slate-600 dark:text-slate-400"
                  >by Alex Rivera</span
                >
              </div>
              <div
                class="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800"
              >
                <div class="text-xs text-slate-400">Purchased Oct 24, 2023</div>
                <div class="text-sm font-bold text-primary">0.85 ETH</div>
              </div>
            </div>
          </div>
          <!-- Artwork Card 2 -->
          <div
            class="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 group hover:shadow-xl transition-all"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Minimalist geometric sculpture in a gallery space"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFSu195DZfYq3jqeDJOKJzN90GrwIE6-YHeZsG0eMqQzcb3CSzBWaxyMOVr5WqZXChetbA0oFNRkCiggndyh6GWovmlBa7jB2eUdEfN-HpPMYo4z29kQ9jBwL5X_rk1ajvPVhrkBettYMEGV5INyVdAz-c5EfJzgEcCbXYiOQK6Gya5IO5Ye1HTdAdyPmRsUfZRdg5NABB1esbFhaim99f_WfxeTfaA70uBV6VUtirGLgUsPJcFcKXTWoEDqXqg2QCTxS8vw7r1Dk"
              />
              <div
                class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3"
              >
                <button
                  class="p-2 bg-white text-slate-900 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <span class="material-icons">visibility</span>
                </button>
                <button
                  class="p-2 bg-white text-slate-900 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <span class="material-icons">verified</span>
                </button>
              </div>
            </div>
            <div class="p-5">
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-bold text-lg leading-tight">
                  Structured Silence
                </h3>
                <span
                  class="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold px-2 py-0.5 rounded-full"
                  >PHYSICAL</span
                >
              </div>
              <div class="flex items-center gap-2 mb-4">
                <img
                  class="w-5 h-5 rounded-full object-cover"
                  data-alt="Female artist avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuABvOJAxg8fD2mC1hNnc9lQbJqxzu8fxHRcxzLRIo-QdEnLgpL29WwMdf8IdlWokW5GjWpzQJV9AiAld20zTRprNabRy-pDqehXkXIeWZeLZ0Vm3383A3QL8VDxnhj8aPkLVscnoJqUijfPik8-IWUGQubxr0hrhny2GGIPVDHwVG3mOr3UWVwK7o22PBl516KSh5zwqHRac0rxaJgPk1wvWC6ygx5isTQstZPyWPfJ76I0mJYnfr4xJ9N1K0ztEf1Oojy3SCnljI0"
                />
                <span class="text-sm text-slate-600 dark:text-slate-400"
                  >by Elena Chen</span
                >
              </div>
              <div
                class="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800"
              >
                <div class="text-xs text-slate-400">Purchased Sep 12, 2023</div>
                <div class="text-sm font-bold text-primary">$1,200</div>
              </div>
            </div>
          </div>
          <!-- Artwork Card 3 -->
          <div
            class="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 group hover:shadow-xl transition-all"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Contemporary digital art of a celestial landscape"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByt6DlXuu0-bVwD5lRR0wZSv8Es9CNJglmLrEdSYmnjz4wUifXmsfKlOfnUb3rYbaUd46yMZukcAJc65Pm03ncbte_Yh0uej4HWtuGQOReQJ4gBQTlbu8pl_dq-4f-A3AC0WVd3C-WnJK5-fJZ8RjCKlNKz14k5DWu-MnCmeHUXzr6EF5IiDhGVyOw6ivHfK-hsUnmkK2L0rnLOb-giwwJugDPMS-G5l1LCOshNJURd5ji0D_65jh1eRKaM0HxTrp1eD8aDKFcPQ0"
              />
              <div
                class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3"
              >
                <button
                  class="p-2 bg-white text-slate-900 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <span class="material-icons">visibility</span>
                </button>
                <button
                  class="p-2 bg-white text-slate-900 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <span class="material-icons">verified</span>
                </button>
              </div>
            </div>
            <div class="p-5">
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-bold text-lg leading-tight">
                  The Celestial Void
                </h3>
                <span
                  class="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full"
                  >NFT</span
                >
              </div>
              <div class="flex items-center gap-2 mb-4">
                <img
                  class="w-5 h-5 rounded-full object-cover"
                  data-alt="Male artist avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8XQI_W_jil6u99zK751qPrd7IdvhR199bpMNWaoXCdB2lnUHMhcKIkItD9jU8620NMdlsvRQHRMU2c2F4vfOotViB8eqsrioLGlqB-G-WXeMy7Lg7BZW6FLV2Z23-K_rA2PPPSc-iptYoMKAbjueTDao-XicBFWNADFdmHL6jxOdQS5m0Q1zDokSicD4Uvu2CHHng76IBsGB3EPu23LF3Abeue-hTTAca6S75lIftRvufz1AmJqlYBbBXCzFRsG9WgKtwiGs--kk"
                />
                <span class="text-sm text-slate-600 dark:text-slate-400"
                  >by Marcus Vane</span
                >
              </div>
              <div
                class="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800"
              >
                <div class="text-xs text-slate-400">Purchased Aug 05, 2023</div>
                <div class="text-sm font-bold text-primary">0.42 ETH</div>
              </div>
            </div>
          </div>
          <!-- Artwork Card 4 (Placeholder style) -->
          <div
            class="bg-primary/5 rounded-xl border-2 border-dashed border-primary/20 flex flex-col items-center justify-center p-8 text-center min-h-[400px]"
          >
            <div class="flex items-center justify-center shadow-sm mb-4">
              <span
                class="text-6xl hover:shadow-blue-700 shadow-lg shadow-blue-400"
                ><Icon name="icon-park:add" width="50" height="50"
              /></span>
            </div>
            <h4 class="font-bold text-lg mb-2">Add more to your collection</h4>
            <p class="text-slate-500 text-sm max-w-[200px] mb-6">
              Discover thousands of unique artworks from global creators.
            </p>
            <NuxtLink
              to="/gallery"
              class="text-primary font-bold text-sm hover:underline"
              >Browse Market</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
