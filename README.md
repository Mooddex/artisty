# Artisty - Digital Art Marketplace & Auction Platform

A modern, full-stack web application for discovering, trading, and auctioning digital artwork. Built with cutting-edge technologies and designed for scalability.

**Status:** Active Development (MVP Released)

---

## 🎯 Project Overview

Artisty is a marketplace platform where artists can showcase their work, users can browse and purchase art, and participate in auctions. The application demonstrates modern web development practices with a focus on performance, scalability, and user experience.

---

## ✨ Current Features (Released)

### User Authentication & Authorization
- **OAuth 2.0 Integration** - Google SSO via Better Auth
- **Secure Session Management** - Server-side session handling with type-safe composables
- **User Profiles** - Artist and collector profile management
- **Role-Based Access Control** - Different views for artists, collectors, and admins

### Art Discovery & Browsing
- **Dynamic Gallery** - Responsive grid layout with lazy-loaded images (@nuxt/image)
- **Advanced Filtering** - Filter by category, price range, artist, and more
- **Smart Search** - Elasticsearch-powered art search capabilities
- **Sorting Options** - Sort by newest, trending, price, and popularity

### E-Commerce
- **Shopping Cart** - Persistent cart state management with pinia-plugin-persistedstate
- **Product Pages** - Detailed art information with high-resolution image viewer
- **Checkout Flow** - Streamlined purchase process (payment integration in progress)

### Auctions
- **Real-Time Bidding** - Live auction platform for exclusive artwork
- **Auction Management** - Create, manage, and participate in auctions

### Performance & UX
- **Server-Side Rendering (SSR)** - Nuxt 4 for optimal SEO and initial page load
- **Dark/Light Mode** - Theme toggle with @nuxt/ui
- **Responsive Design** - Mobile-first approach using Tailwind CSS
- **Social Sharing** - Share artwork across social platforms

---

## 🚀 Planned Features (Q1-Q2 2026)

### Advanced Features
- [ ] **Payment Gateway Integration** - Stripe/PayPal for secure transactions
- [ ] **Notification System** - Real-time notifications for bids, messages, and new listings
- [ ] **Artist Verification** - KYC process for artist accounts
- [ ] **Commission System** - Artist-to-artist collaboration and commissions

### Community & Social
- [ ] **Messaging System** - Direct communication between users
- [ ] **User Reviews & Ratings** - Reputation system for buyers and sellers
- [ ] **Follow System** - Follow favorite artists and receive updates
- [ ] **Collections** - User-curated art collections and wishlists

### Analytics & Admin
- [ ] **Dashboard Analytics** - Sales metrics, traffic insights, user engagement
- [ ] **Admin Panel** - Content moderation and platform management
- [ ] **Seller Analytics** - Revenue reports and audience insights for artists

### Technical Enhancements
- [ ] **API Rate Limiting** - Protection against abuse and DDoS
- [ ] **Search Optimization** - Faceted search and autocomplete
- [ ] **Performance Optimization** - Image CDN optimization and caching strategies
- [ ] **Mobile App** - React Native companion application

---

## 🛠 Tech Stack

### Frontend
- **Framework:** Nuxt 4 (Vue 3)
- **Styling:** Tailwind CSS 4 with @tailwindcss/vite
- **UI Components:** @nuxt/ui with @iconify icons
- **State Management:** Pinia with persistence plugin
- **Image Optimization:** @nuxt/image (next-gen image formats)
- **Type Safety:** TypeScript 5.9

### Backend
- **Runtime:** Node.js with Nitro
- **Hosting:** Vercel (nitro preset configured)
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** Better Auth (OAuth 2.0 support)
- **Session Management:** Server-side with type-safe composables

### DevOps & Tooling
- **Package Manager:** npm/pnpm/yarn/bun
- **Linting:** ESLint 9
- **Build Tool:** Vite
- **Code Quality:** TypeScript strict mode, composable-based architecture

---

## 📊 Architecture Highlights

### Scalable Code Organization