import { createAuthClient } from "better-auth/vue";

export const authClient = createAuthClient({
    baseURL: useRuntimeConfig().public.betterAuthUrl
});
export const { signIn, signUp, useSession } = authClient;