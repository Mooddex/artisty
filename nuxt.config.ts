import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      mainUrl: process.env.BETTER_AUTH_URL,
      googleClientId: process.env.GOOGLE_CLIENT_ID! ,
      betterAuthUrl: process.env.BETTER_AUTH_URL
    },
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  },
  socialShare: {
    baseUrl: process.env.BETTER_AUTH_URL,
},
  nitro: {
    preset: "vercel",
  },
  ssr: false,
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
    "@nuxt/fonts",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {},
    modelsDir: "models",
    devtools: true,
  },
  
});
