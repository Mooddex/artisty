import { betterAuth } from "better-auth";
import { client } from "@/utils/db";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const config = useRuntimeConfig();
export const auth = betterAuth({
  database: mongodbAdapter(client.db()),
  baseURL: config.betterAuthUrl,
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: config.public.googleClientId ,
      clientSecret:config.googleClientSecret ,
      accessType: "offline",
      prompt: "select_account consent",
    },
  },
});
