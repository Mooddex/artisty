import { authClient } from "@/lib/auth-client";

export const useAuth = () => {
  
  
  const session = authClient.useSession();
  const user = computed(() => session.value?.data?.user ?? null);
  const isLoggedIn = computed(() => !!user.value);
  const isLoading = computed(() => session.value?.isPending ?? false);
  const status = computed(() =>
    isLoggedIn.value ? 'Logged In':'Not Logged In'
  );

  // Actions
  async function signInWithGoogle() {
    const toast = useToast();
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/profile"
      });
      console.log(user)
      toast.add({ title: "Success", description: "Logged in with Google" });
    } catch (error) {
      toast.add({
        title: "Error",
        description: "Login failed",
        color: "error",
      });
      throw error;
    }
  }


  async function signOut() {
    const toast = useToast();
    try {
      await authClient.signOut();
      toast.add({ title: "Signed out successfully" });
    } catch (error) {
      toast.add({
        title: "Error",
        description: `Sign out failed ${error}`,
        color: "error",
      });
    }
  }

  return {
    // State
    user,
    session: computed(() => session.value?.data ?? null),
    isLoggedIn,
    isLoading,
    status,

    // Actions
    signInWithGoogle,
    signOut,
  };
};
