<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import { authClient } from "~/lib/auth-client";


const isSubmitting = ref(false)

const toast = useToast();
const open = ref(false)

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  bio: z.string(),
  image: z.url("Image must be a valid URL"),
  location: z.string().min(0).max(50),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  name: '',
  bio: '',
  image: '',
  location: '',
});

 async function  onSubmit(event: FormSubmitEvent<Schema>) {
   if (isSubmitting.value) return;
    isSubmitting.value = true;
  const user = event.data
   try { await authClient.updateUser(user);
  console.log(user);
  toast.add({
    title: "Success",
    description: `${user.name} has been Updated.`,
    color: "success",
  });
   open.value = false
   }catch(error){
    console.log(error);
    toast.add({
      title: "Error",
      description: `Failed to Update user.`,
      color: "error",
    });
   }
   }
</script>

<template>
  <UModal v-model:open="open" title="Add Your Info" >
    <UButton label="Update Your Info"  variant="solid" class="text-black dark:text-white dark:hover:bg-teal-400 hover:bg-teal-200 bg-teal-500" @click="open=true"  />
  <template #body >
  <UForm :schema="schema" :state="state" class="space-y-4 w-full " @submit="onSubmit">
    <UFormField label="Name" name="name">
      <UInput v-model="state.name" class="w-full" />
    </UFormField>
    <UFormField label="bio" name="bio">
      <UInput v-model="state.bio"  class="w-full" />
    </UFormField>
    <UFormField label="Image" name="image">
      <UInput v-model="state.image"  class="w-full" />
    </UFormField>
    <UFormField label="Location" name="location">
      <UInput v-model="state.location" type="text" class="w-full" />
    </UFormField>   
   <UButton type="submit" :loading="isSubmitting" :disabled="isSubmitting"> 
      {{ isSubmitting ? 'Submitting...' : 'Submit' }}
       </UButton>
  </UForm>
  </template>
  </UModal>
</template>
