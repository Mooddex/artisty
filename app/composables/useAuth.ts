import { authClient, session } from "@/lib/auth-client";

export const useAuth = () => {
  const user = computed(() => session.value?.data?.user ?? null);
  const isLoggedIn = computed(() => !!user.value);
  const status = computed(() => isLoggedIn? 'authorized' : 'unAuthorized' );

// actions
  const signInWithGoogle = async () => {
    return authClient.signIn.social({ provider: "google" });
    
  };

  const signOut = async () => {
    await authClient.signOut();
  };

  return {
    session,
    user,
    isLoggedIn,
    status,
    signInWithGoogle,
    signOut,
  };
};
