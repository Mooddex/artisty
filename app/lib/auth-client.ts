import { createAuthClient } from "better-auth/vue";

export const authClient = createAuthClient({
    baseURL:window.location.origin
});
export const { signIn, signUp, useSession } = authClient;