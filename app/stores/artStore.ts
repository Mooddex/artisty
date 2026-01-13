import { defineStore } from "pinia";

export const useArtStore = defineStore("artStore", {
  state: () => ({
    arts: [],
    art: null,          
    isLoading: false,
    pagination: null,
    error: null as string | null,       
  }),

  getters: {
    totalCount: (state) => state.arts.length,
  },

  actions: {
    // ======================
    // Fetch list of artworks
    // ======================
    async getArt({ page = 1, limit = 20 } = {}) {
      this.isLoading = true;
      this.error = null;

      try {
        const res = await fetch(
          `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`
        );
        const data = await res.json();

        this.arts = data.data;
        this.pagination = data.pagination;
      } catch (err) {
        console.error(err);
        this.error = "Failed to fetch artworks";
      } finally {
        this.isLoading = false;
      }
    },

    // ======================
    // Fetch single artwork
    // ======================
    async getSingleArt(id:string | number) {
      this.isLoading = true;
      this.error = null;
      this.art = null;

      try {
        const res = await fetch(
          `https://api.artic.edu/api/v1/artworks/${id}`
        );
        const data = await res.json();

        this.art = data.data;
      } catch (err) {
        console.error(err);
        this.error = "Failed to fetch artwork";
      } finally {
        this.isLoading = false;
      }
    },
  },
});
