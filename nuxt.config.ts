import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
   socialShare: {
    baseUrl: 'http://localhost:3000' // required!
    // other optional module options
  }
 
});