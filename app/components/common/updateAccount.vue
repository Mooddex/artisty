<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import { authClient } from "~/lib/auth-client";

const props = defineProps({
  user: { type: Object, required: false, default: () => ({}) }
})

const { uploadImage } = useCloudinary()
const isSubmitting = ref(false)
const isUploading = ref(false)
const toast = useToast()
const open = ref(false)

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  bio: z.string(),
  image: z.string().url("Image must be a valid URL"),
  location: z.string().min(0).max(50),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  name: props.user.name,
  bio: props.user.bio,
  image: props.user.image,
  location: props.user.location,
});

// Handle file picker
async function onFileChange(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return

  isUploading.value = true
  try {
    state.image = await uploadImage(file)
    toast.add({ title: "Image uploaded", color: "success" })
  } catch {
    toast.add({ title: "Upload failed", description: "Could not upload image.", color: "error" })
  } finally {
    isUploading.value = false
  }
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  if (isSubmitting.value) return
  isSubmitting.value = true
  try {
    await authClient.updateUser(event.data)
    toast.add({ title: "Success", description: `${event.data.name} has been updated.`, color: "success" })
    open.value = false
  } catch {
    toast.add({ title: "Error", description: "Failed to update user.", color: "error" })
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <UModal v-model:open="open" title="Add Your Info">
    <UButton label="Update Your Info" variant="solid"
      class="text-black dark:text-white dark:hover:bg-teal-400 hover:bg-teal-200 bg-teal-500"
      @click="open = true" />

    <template #body>
      <UForm :schema="schema" :state="state" class="space-y-4 w-full" @submit="onSubmit">
        <UFormField label="Name" name="name">
          <UInput v-model="state.name" class="w-full" />
        </UFormField>

        <UFormField label="Bio" name="bio">
          <UInput v-model="state.bio" class="w-full" />
        </UFormField>

        <!-- Image upload field -->
        <UFormField label="Image" name="image">
          <div class="flex flex-col gap-2 w-full">
            <!-- Preview -->
            <img v-if="state.image" :src="state.image"
              class="w-16 h-16 rounded-full object-cover border" alt="Profile preview" />

            <!-- File input -->
            <input type="file" accept="image/*" class="hidden" id="image-upload" @change="onFileChange" />
            <label for="image-upload">
              <UButton as="span" :loading="isUploading" :disabled="isUploading" variant="outline" class="cursor-pointer">
                {{ isUploading ? 'Uploading...' : 'Choose Image' }}
              </UButton>
            </label>

            <!-- Fallback: manual URL input -->
            <UInput v-model="state.image" placeholder="Or paste image URL" class="w-full" />
          </div>
        </UFormField>

        <UFormField label="Location" name="location">
          <UInput v-model="state.location" type="text" class="w-full" />
        </UFormField>

        <UButton type="submit" :loading="isSubmitting" :disabled="isSubmitting || isUploading">
          {{ isSubmitting ? 'Submitting...' : 'Submit' }}
        </UButton>
      </UForm>
    </template>
  </UModal>
</template>