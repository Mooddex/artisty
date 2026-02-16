<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent, AuthFormField } from "@nuxt/ui";
import { authClient } from "~/lib/auth-client";

//-------
const {signInWithGoogle} = useAuth();
const fields: AuthFormField[] = [
  {
    name: "name",
    type: "text",
    label: "Full Name",
    placeholder: "Enter your name",
    required: true,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Create a password",
    required: true,
  },
];

const providers = [
  {
    label: "Google",
    icon: "i-simple-icons-google",
     onClick: async () => await signInWithGoogle(),

  },
 
];

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;
const onSubmit = async (payload: FormSubmitEvent<Schema>) => {
  try {
     console.log("Signup submitted", payload.data);
  // Handle signup logic here
  const user = payload.data ;
  console.log(user);
  await authClient.signUp.email(user)
  } catch (error) {
    console.log(error);
    
  }
 

}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        :fields="fields"
        :providers="providers"
        title="Create an account"
        description="Sign up to get started."
        icon="i-lucide-user-plus"
        :submit="{ label: 'Sign up', color:'secondary', variant:'subtle'  }"
        @submit="onSubmit"
      >
        <template #description>
          Already have an account?
          <ULink to="/login" class="text-teal-600 font-medium">Sign in</ULink>.
        </template>
        <template #footer>
          By signing up, you agree to our
          <ULink to="#" class="text-teal-600 font-medium">Terms of Service</ULink
          >.
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
