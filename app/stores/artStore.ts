import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Art, Pagination } from "~/types/art";

export const useArtStore = defineStore("artStore", () => {
  // state
  const arts = ref<Art[]>([]);
  const art = ref<Art | null>(null);
  const isLoading = ref<boolean>(false);
  const pagination = ref<Pagination | null>(null);
  const error = ref<string | null>(null);

  // getters
  const totalCount = computed<number>(() => arts.value.length);

  // actions
  async function getArt(
    { page = 1, limit = 20 }: { page?: number; limit?: number } = {}
  ): Promise<void> {
    isLoading.value = true;
    error.value = null;

    try {
      const res = await fetch(
        `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`
      );

      const data: { data: Art[]; pagination: Pagination } = await res.json();

      arts.value = data.data ?? [];
      pagination.value = data.pagination ?? null;
    } catch (err) {
      console.error(err);
      error.value = "Failed to fetch artworks";
    } finally {
      isLoading.value = false;
    }
  }

  async function getSingleArt(id: number | string): Promise<void> {
    isLoading.value = true;
    error.value = null;
    art.value = null;

    try {
      const res = await fetch(
        `https://api.artic.edu/api/v1/artworks/${id}`
      );

      const data: { data: Art } = await res.json();

      art.value = data.data ?? null;
    } catch (err) {
      console.error(err);
      error.value = "Failed to fetch artwork";
    } finally {
      isLoading.value = false;
    }
  }

  return {
    arts,
    art,
    isLoading,
    pagination,
    error,
    totalCount,
    getArt,
    getSingleArt,
  };
});
