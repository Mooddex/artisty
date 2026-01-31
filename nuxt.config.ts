import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   nitro: {
    preset: 'vercel'
  },
  compatibilityDate: "2025-07-15",
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ["./app/assets/css/main.css"],
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@pinia/nuxt",
    "nuxt-mongoose",
    "@stefanobartoletti/nuxt-social-share",
    '@nuxt/fonts',
    
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {},
    modelsDir: 'models',
    devtools: true,
  },
  runtimeConfig: {
  public: {
    siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  }
},
socialShare: {
  baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
},
 
});