import { betterAuth } from "better-auth";
import { mongoClient } from "@/utils/db";
import { mongodbAdapter } from "better-auth/adapters/mongodb";



export const createAuth = async () => {
  const client = await mongoClient;
  return betterAuth({
    database: mongodbAdapter(client.db(), { client }),
    baseURL: process.env.BETTER_AUTH_URL,
    emailAndPassword: { enabled: true },
    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
         accessType: "offline", 
        prompt: "select_account consent", 
      },
    },
  });
};