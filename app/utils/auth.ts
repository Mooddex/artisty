import { betterAuth } from "better-auth";
import { client } from "@/utils/db";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const config = useRuntimeConfig();
export const auth = betterAuth({
  database: mongodbAdapter(client.db()),
 baseURL: config.public.betterAuthUrl,
  trustedOrigins: [
    'http://localhost:3000',
    'https://artisty-mu.vercel.app',
  ],
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
  user:{
    additionalFields:{
      bio:{
        type:"string",
        required: false,
        input: true,
      },
      location:{
        type:"string",
        required: false,
        input: true,
      },
      image:{
        type:"string",
        required: false,
        input: true,
      },
    },
  },
});
