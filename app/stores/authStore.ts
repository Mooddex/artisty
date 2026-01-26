// stores/auth.ts - EVERYTHING IN ONE PLACE
import { authClient, session } from "@/lib/auth-client"

export const useAuthStore = defineStore('auth', () => {
  // Computed state from Better Auth
  const user = computed(() => session.value?.data?.user ?? null)
  const isLoggedIn = computed(() => !!user.value)
  const isLoading = computed(() => session.value?.isPending ?? false)
  const status = computed(() => isLoggedIn.value ? 'authorized' : 'unauthorized')

  // Actions
  async function signInWithGoogle() {
    const toast = useToast()
    try {
      await authClient.signIn.social({ provider: "google" })
      toast.add({ title: 'Success', description: 'Logged in with Google' })
    } catch (error) {
      toast.add({ title: 'Error', description: 'Login failed', color: 'error' })
      throw error
    }
  }

  async function signInWithGithub() {
    const toast = useToast()
    try {
      await authClient.signIn.social({ provider: "github" })
      toast.add({ title: 'Success', description: 'Logged in with GitHub' })
    } catch (error) {
      toast.add({ title: 'Error', description: 'Login failed', color: 'error' })
      throw error
    }
  }

  async function signOut() {
    const toast = useToast()
    try {
      await authClient.signOut()
      toast.add({ title: 'Signed out successfully' })
    } catch (error) {
      toast.add({ title: 'Error', description: `Sign out failed ${error}`, color: 'error' })
    }
  }

  return {
    // State
    session,
    user,
    isLoggedIn,
    isLoading,
    status,
    
    // Actions  
    signInWithGoogle,
    signInWithGithub,
    signOut,
  }
})