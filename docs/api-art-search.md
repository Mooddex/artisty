Absolutely. Let’s make **a complete, end-to-end documentation** that covers **everything from the API endpoints to your Pinia store, search, and Vue components**. I’ll break it down systematically so it reads like professional developer documentation.

---

# **ArtMarket — Art Institute API Integration Documentation**

This documentation covers **how the ArtMarket frontend interacts with the Art Institute of Chicago API**, including endpoints, data structure, Pinia store logic, and Vue components.

---

## **1. API Endpoints**

The Art Institute of Chicago (AIC) API provides several endpoints for retrieving artworks:

### 1.1 **Fetch Artworks (paginated)**

```
GET https://api.artic.edu/api/v1/artworks
```

**Query Parameters:**

| Parameter | Type   | Default | Description                                                                       |
| --------- | ------ | ------- | --------------------------------------------------------------------------------- |
| `page`    | number | 1       | Page number to retrieve                                                           |
| `limit`   | number | 20      | Number of artworks per page                                                       |
| `fields`  | string | -       | Comma-separated list of fields to return (e.g., `id,title,image_id,artist_title`) |

**Example:**

```
GET https://api.artic.edu/api/v1/artworks?page=1&limit=20&fields=id,title,image_id,artist_title
```

**Response Structure:**

```json
{
  "pagination": {
    "total": 116941,
    "limit": 20,
    "offset": 0,
    "total_pages": 5847,
    "current_page": 1,
    "next_url": "...",
    "prev_url": null
  },
  "data": [
    {
      "id": 14556,
      "title": "Auvers, Panoramic View",
      "artist_title": "Vincent van Gogh",
      "image_id": "abc123...",
      "date_display": "1890",
      "classification_title": "Painting",
      "style_title": "Post-Impressionism",
      "dimensions": "73.0 x 92.0 cm",
      "place_of_origin": "France"
    },
    ...
  ]
}
```

---

### 1.2 **Search Artworks**

```
GET https://api.artic.edu/api/v1/artworks/search
```

**Query Parameters:**

| Parameter | Type   | Default | Description                                |
| --------- | ------ | ------- | ------------------------------------------ |
| `q`       | string | -       | Search query for title, artist, or keyword |
| `page`    | number | 1       | Page number                                |
| `limit`   | number | 20      | Number of results per page                 |
| `fields`  | string | -       | Fields to return for each artwork          |

**Example:**

```
GET https://api.artic.edu/api/v1/artworks/search?q=Van Gogh&page=1&limit=20&fields=id,title,image_id,artist_title
```

**Response:**

* Similar to the artworks endpoint, but the relevant search results are in `data.data`.
* Pagination info is in `data.pagination`.

---

## **2. Pinia Store — `useArtStore`**

The Pinia store manages **state, actions, and getters** for artworks.

### 2.1 **State**

```ts
state: () => ({
  arts: [],             // Array of artwork objects
  isLoading: false,     // Boolean for loading state
  pagination: null,     // Pagination data from API
  searchQuery: "",      // Current search string
})
```

---

### 2.2 **Getter**

```ts
getters: {
  totalCount(state) {
    return state.arts.length; // Number of artworks currently stored
  }
}
```

---

### 2.3 **Actions**

#### **getArt({ page, limit, search })**

Fetches artworks either via **default endpoint** or **search endpoint**.

```ts
async getArt({ page = 1, limit = 20, search = "" } = {}) {
  this.isLoading = true;
  this.searchQuery = search;

  try {
    let url;
    if (search) {
      // Use search endpoint
      url = `https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(search)}&page=${page}&limit=${limit}&fields=id,title,artist_title,image_id,date_display,classification_title,style_title,dimensions,place_of_origin`;
      const res = await fetch(url);
      const data = await res.json();

      this.arts = data.data.map(item => ({
        id: item.id,
        title: item.title,
        artist_title: item.artist_title,
        image_id: item.image_id,
        date_display: item.date_display,
        classification_title: item.classification_title,
        style_title: item.style_title,
        dimensions: item.dimensions,
        place_of_origin: item.place_of_origin
      }));

      this.pagination = data.pagination;
    } else {
      // Default fetch
      url = `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}&fields=id,title,image_id,artist_title,date_display,classification_title,style_title,dimensions,place_of_origin`;
      const res = await fetch(url);
      const data = await res.json();

      this.arts = data.data;
      this.pagination = data.pagination;
    }
  } catch (error) {
    console.error("Failed to fetch artworks:", error);
  } finally {
    this.isLoading = false;
  }
}
```

#### **clearSearch()**

```ts
clearSearch() {
  this.searchQuery = "";
  this.arts = [];
  this.pagination = null;
}
```

---

## **3. Image URLs**

Artwork images are accessed using the IIIF URL format:

```ts
const getImageUrl = (imageId) =>
  imageId
    ? `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`
    : "https://via.placeholder.com/300x400?text=No+Image";
```

* `imageId` is from the artwork object.
* Returns a **high-resolution 843px width image**.
* Placeholder is used if `image_id` is missing.

---

## **4. Vue Component — Search & Grid**

### 4.1 **Reactive Search Input**

```vue
<script setup>
import { ref, watch } from "vue";
import { useArtStore } from "@/stores/artStore";

const artStore = useArtStore();
const searchQuery = ref("");

// fetch initial artworks
artStore.getArt();

// debounce search input
let debounceTimer;
watch(searchQuery, (newQuery) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    artStore.getArt({ search: newQuery, page: 1, limit: 20 });
  }, 500); // 500ms debounce
});
</script>

<input v-model="searchQuery" placeholder="Search by artist or artwork" />
```

---

### 4.2 **Displaying Artworks in Grid**

```vue
<template>
  <div v-if="artStore.isLoading">Loading...</div>
  <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div v-for="art in artStore.arts" :key="art.id" class="p-3 border rounded">
      <img :src="getImageUrl(art.image_id)" :alt="art.title" class="rounded-lg mb-2" />
      <h3 class="font-bold">{{ art.title }}</h3>
      <p class="text-gray-500">{{ art.artist_title || 'Unknown Artist' }}</p>
      <p class="text-gray-400 text-sm">{{ art.date_display }}</p>
    </div>
  </div>
</template>
```

* Uses `v-for` to loop over `arts` from Pinia store.
* Displays image, title, artist, and date.
* Automatically updates when `searchQuery` changes.

---

## **5. Single Artwork Page — `gallery/[id].vue`**

### 5.1 Fetch artwork by ID

```vue
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;

const art = ref(null);
const isLoading = ref(false);
const error = ref(null);

const getImageUrl = (imageId) =>
  imageId
    ? `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`
    : "https://via.placeholder.com/300x400?text=No+Image";

onMounted(async () => {
  isLoading.value = true;
  try {
    const res = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
    const data = await res.json();
    art.value = data.data;
  } catch (err) {
    console.error(err);
    error.value = "Failed to fetch artwork.";
  } finally {
    isLoading.value = false;
  }
});
</script>
```

### 5.2 Layout for Single Artwork

```vue
<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="error" class="text-red-500">{{ error }}</div>
  <div v-else-if="art" class="flex flex-col md:flex-row gap-6">
    <img :src="getImageUrl(art.image_id)" :alt="art.title" class="rounded-lg md:w-1/2" />
    <div class="flex-1 flex flex-col gap-2">
      <h1 class="text-2xl font-bold">{{ art.title }}</h1>
      <p>{{ art.artist_title || "Unknown Artist" }}</p>
      <p>{{ art.date_display }}</p>
      <p>{{ art.classification_title || "" }} - {{ art.style_title || "" }}</p>
      <p>{{ art.dimensions || "Unknown" }}</p>
      <p>{{ art.place_of_origin || "Unknown" }}</p>
    </div>
  </div>
</template>
```

---

## **6. Flow Summary (End-to-End)**

```
[User Input Search] → [Vue Component] → [Pinia Store getArt({search})]
      ↓
[Art Institute API /artworks or /artworks/search] → [JSON Response]
      ↓
[Pinia Store maps response] → [arts state updated]
      ↓
[Vue Component Grid] → [Images & Metadata displayed]
```

---

## **7. Notes & Best Practices**

1. Always **debounce search input** (500ms recommended).
2. Include `fields=` to **minimize payload**.
3. Use `getImageUrl` for consistent image rendering.
4. Handle **missing fields** (`artist_title`, `image_id`) gracefully.
5. Pagination can be accessed via `artStore.pagination` for next/prev page functionality.
6. Single artwork pages are **isolated** and fetch by `id`.

---

This is a **full, production-ready documentation** covering:

* API endpoints
* Pinia store
* Search & pagination
* Image handling
* Grid and single artwork layouts
* Flow diagram (text version)

---

If you want, I can make a **visual diagram flow** of the **entire system** — showing the **Vue component → Pinia → API → state → grid/page**.

Do you want me to create that diagram?
