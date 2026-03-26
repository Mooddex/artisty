export function useCloudinary() {
  const config = useRuntimeConfig()

  async function uploadImage(file: File): Promise<string> {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', config.public.cloudinaryPreset) // your unsigned preset
    
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${config.public.cloudinaryCloudName}/image/upload`,
      { method: 'POST', body: formData }
    )

    if (!res.ok) throw new Error('Upload failed')
    const data = await res.json()
    return data.secure_url
  }

  return { uploadImage }
}