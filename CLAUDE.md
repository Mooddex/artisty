# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Artisty is a digital art marketplace and auction platform built with Nuxt 4. It uses the Chicago Art Institute API (api.artic.edu) as the external data source for artwork data and images.

## Common Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Generate static site
npm run generate

# Prepare Nuxt (runs automatically after npm install)
npm run postinstall
```

**Note:** There is no explicit lint or test script defined in package.json. ESLint is configured via `@nuxt/eslint` and can be run with `npx eslint`.

## Tech Stack

- **Framework:** Nuxt 4.2.2 with Vue 3.5.26
- **Styling:** Tailwind CSS 4.1.18 + @nuxt/ui 4.3.0 (Headless UI components)
- **State:** Pinia 3.0.4 with pinia-plugin-persistedstate
- **Auth:** Better Auth with Google OAuth + MongoDB adapter
- **Database:** MongoDB (via native driver and Mongoose)
- **Icons:** @nuxt/icon with Iconify (lucide, ph, simple-icons, noto sets)
- **Images:** @nuxt/image for optimization (external domains must be whitelisted)
- **Server:** Nitro with Vercel preset

## Architecture

### State Management (Pinia)

Stores use the Composition API style with `ref()` and `computed()`:

```typescript
// stores/cartStore.ts - Shopping cart with localStorage persistence
const cart = ref<Art[]>([]);
const totalPrice = computed(() => ...);
const addToCart = (art: Art) => { ... };
```

Key stores:
- `cartStore.ts` - Persistent shopping cart (localStorage)
- `artStore.ts` - Fetches from Chicago Art API

### Composables

Reusable logic following Vue 3 patterns:
- `useAuth.ts` - Better Auth wrapper (`signInWithGoogle`, `signOut`, session state)
- `useOrders.ts` - Order fetching, filtering, and statistics

### Authentication

Better Auth is configured in `app/utils/auth.ts`:
- MongoDB adapter for sessions
- Google OAuth provider
- Extended user fields: `bio`, `location`, `image`
- Auth client in `app/lib/auth-client.ts`
- Server routes in `server/api/auth/[...all].ts`

**User Collection Structure:**
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  emailVerified: Boolean,
  image: String,           // Avatar URL (Google: lh3.googleusercontent.com, Twitter: pbs.twimg.com)
  createdAt: Date,
  updatedAt: Date,
  bio: String,             // Extended field
  location: String         // Extended field
}
```

**User Data Safety:**
The `user` from `useAuth()` can be null during SSR or before hydration. Always use optional chaining:
```vue
<!-- Template -->
<div>{{ user?.name }}</div>
<NuxtImg :src="user?.image" :alt="user?.name || 'User'" />
```

**SSR Considerations:**
Don't use `await` at the top level of `<script setup>` for client-side data:
```typescript
// ❌ Bad - causes SSR issues
const { fetchOrders } = useOrder();
await fetchOrders();

// ✅ Good - client-side only
const { fetchOrders } = useOrder();
onMounted(async () => {
  await fetchOrders();
});
```

### Images (@nuxt/image)

External domains must be whitelisted in `nuxt.config.ts`:

```typescript
image: {
  domains: [
    'lh3.googleusercontent.com',  // Google OAuth avatars
    'pbs.twimg.com',              // Twitter/X profile images
  ],
},
```

Always use optional chaining with user images:
```vue
<NuxtImg :src="user?.image" :alt="user?.name || 'User avatar'" />
```

### External Data Source

Art data comes from the Chicago Art Institute API:
- API base: `https://api.artic.edu/api/v1/artworks`
- Images via IIIF: `https://www.artic.edu/iiif/2/{image_id}/full/{size},/0/default.jpg`

### Server API Routes

Nitro server handlers in `server/api/`:
- `auth/[...all].ts` - Better Auth handler
- `orders.get.ts` - Fetch user orders (requires session)
- `checkout.post.ts` - Checkout endpoint

Server-side session validation: `await auth.api.getSession({ headers: event.headers })`

## Environment Variables

Create `.env.local` for local development:

```env
# Required for Auth
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
BETTER_AUTH_SECRET=your_secret_key

# Required for Database
MONGODB_URI=mongodb+srv://...
```

## Project Structure

```
app/
  components/      # Feature-organized (art/, auth/, shopCart/, common/, artist/)
  pages/           # File-based routing
  stores/          # Pinia stores (Composition API style)
  composables/     # Vue 3 composables
  types/           # TypeScript definitions
  utils/           # Helpers (auth.ts, db.ts)
  lib/             # External lib setup (auth-client.ts)
  layouts/           # Page layouts
  assets/css/      # Global styles (main.css with Tailwind v4)
server/
  api/             # Nitro API routes
```

## Styling Conventions

- Tailwind CSS v4 with `@import "tailwindcss"` in main.css
- Theme colors defined in `@theme inline` block
- @nuxt/ui components use `ui` prop for customization
- Icons via `i-{set}-{name}` classes (e.g., `i-ph-sun`, `i-lucide-user`)
