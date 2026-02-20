# Artisty - Digital Art Marketplace & Auction Platform

A modern, full-stack web application for discovering, trading, and auctioning digital artwork. Built with cutting-edge technologies and designed for scalability and performance.

**Status:** 🚀 Active Development (MVP Released)

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Completed Features](#completed-features)
- [Planned Features](#planned-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Contributing](#contributing)

---

## 🎯 Project Overview

Artisty is a comprehensive marketplace and auction platform designed for digital artists and art enthusiasts. The platform enables:

- **Artists** to showcase and monetize their digital work
- **Collectors** to discover, purchase, and bid on artwork
- **Community** to engage through social features and collaborations

The application is built with modern web development best practices, emphasizing performance, security, scalability, and exceptional user experience.

---

## ✅ Completed Features

### Authentication & User Management ✓
- ✅ OAuth 2.0 Authentication (Google SSO via Better Auth)
- ✅ Secure Server-Side Session Management
- ✅ User Profile Management (Artists & Collectors)
- ✅ Role-Based Access Control (RBAC)
- ✅ Type-Safe Auth Composables (`useAuth`)

### Art Discovery & Browsing ✓
- ✅ Responsive Gallery Grid Layout (Mobile-first)
- ✅ Lazy-Loaded Image Optimization (@nuxt/image)
- ✅ Advanced Filtering System (category, price range, artist, etc.)
- ✅ Multi-Criteria Sorting (newest, trending, price, popularity)
- ✅ Smart Art Search Functionality
- ✅ Dynamic Art Cards with Preview

### E-Commerce Features ✓
- ✅ Shopping Cart with Persistent State Management (Pinia)
- ✅ Detailed Product Pages with High-Resolution Images
- ✅ Image Gallery & Zoom Viewer
- ✅ Order Management System
- ✅ Order History & Tracking

### Auction System ✓
- ✅ Real-Time Bidding Infrastructure
- ✅ Auction Creation & Management
- ✅ Bid History & Live Updates
- ✅ Auction Status Management

### User Experience & Performance ✓
- ✅ Server-Side Rendering (Nuxt 4) for SEO Optimization
- ✅ Dark/Light Theme Toggle with Persistence
- ✅ Mobile-First Responsive Design
- ✅ Social Media Integration & Sharing (@nuxt/social-share)
- ✅ Icon System (@nuxt/icon with Iconify)
- ✅ Optimized Page Load Performance

---

## 🚀 Planned Features (Roadmap 2026)

### Priority 1: Critical Commerce Features (Q1)
- [ ] **Payment Gateway Integration** - Stripe/PayPal for secure transactions
- [ ] **Complete Checkout Flow** - Multi-step payment processing
- [ ] **Invoice & Receipt System** - Digital documentation for purchases
- [ ] **Refund Management** - Automated refund processing

### Priority 2: Community & Engagement (Q1-Q2)
- [ ] **Real-Time Notification System** - Bids, purchases, messages via Web Push
- [ ] **Messaging System** - Direct artist-to-collector communication
- [ ] **User Reviews & Ratings** - Reputation and trust system
- [ ] **Follow System** - Subscribe to favorite artists and receive updates

### Priority 3: Advanced Features (Q2)
- [ ] **Artist Verification** - KYC process for professional creators
- [ ] **Commission System** - Artist-to-artist collaborations
- [ ] **Collections & Wishlists** - Curated user collections
- [ ] **Advanced Search** - Faceted search with autocomplete and suggestions

### Priority 4: Analytics & Admin Tools (Q2)
- [ ] **Artist Dashboard Analytics** - Sales metrics, revenue reports, audience insights
- [ ] **Admin Panel** - Content moderation, user management, platform analytics
- [ ] **Seller Dashboard** - Real-time sales data and performance metrics
- [ ] **Platform Analytics** - Traffic insights, conversion rates, engagement metrics

### Priority 5: Technical Enhancements (Ongoing)
- [ ] **API Rate Limiting** - DDoS protection and abuse prevention
- [ ] **Image CDN Optimization** - Advanced caching and content delivery
- [ ] **Database Optimization** - Query optimization and strategic indexing
- [ ] **Mobile App** - React Native companion application
- [ ] **Automated Testing** - Unit, integration, and E2E tests

---

## 🛠 Tech Stack

### Frontend Layer
| Technology | Purpose | Version |
|---|---|---|
| **Nuxt** | Full-stack Vue 3 framework | v4.2.2 |
| **Vue 3** | Progressive JavaScript framework | v3.5.26 |
| **Tailwind CSS** | Utility-first CSS framework | v4.1.18 |
| **@nuxt/ui** | Component library with Headless UI | v4.3.0 |
| **Pinia** | State management | v3.0.4 |
| **@nuxt/image** | Image optimization & delivery | v2.0.0 |
| **TypeScript** | Static type checking | v5.9.3 |
| **@nuxt/icon** | Icon system with Iconify | v2.2.1 |

### Backend Layer
| Technology | Purpose |
|---|---|
| **Nitro** | Server framework with Vercel preset |
| **Node.js** | Runtime environment |
| **MongoDB** | NoSQL document database |
| **Mongoose** | MongoDB ODM (via nuxt-mongoose) |
| **Better Auth** | OAuth 2.0 authentication |
| **Zod** | TypeScript-first schema validation |

### Development & DevOps
| Tool | Purpose |
|---|---|
| **Vite** | Next-gen build tool and dev server |
| **ESLint** | Code quality & linting |
| **Vercel** | Production deployment platform |
| **TypeScript** | Static type checking with strict mode |

---

## 📁 Project Structure

```
artisty/
├── app/
│   ├── components/              # Reusable Vue components
│   │   ├── art/                # Gallery, filters, cards, sorting
│   │   ├── artist/             # Artist dashboard & profile management
│   │   ├── auth/               # Login & signup interfaces
│   │   ├── common/             # Navbar, footer, shared UI
│   │   │   ├── navbar/
│   │   │   ├── footer/
│   │   │   ├── socialShare.vue
│   │   │   └── updateAccount.vue
│   │   └── shopCart/           # Cart display & checkout
│   ├── pages/                  # File-based routing
│   │   ├── index.vue           # Homepage
│   │   ├── auctions.vue        # Auctions listing
│   │   ├── dashboard.vue       # Artist dashboard
│   │   ├── login.vue           # Auth login
│   │   ├── signup.vue          # Auth signup
│   │   ├── profile.vue         # User profile
│   │   ├── orders.vue          # Order history
│   │   ├── gallery/
│   │   │   ├── index.vue       # Gallery listing
│   │   │   └── [id].vue        # Art detail page
│   │   └── shop-cart/          # Shopping cart pages
│   ├── stores/                 # Pinia state management
│   │   ├── artStore.ts         # Art & gallery state
│   │   └── cartStore.ts        # Shopping cart state
│   ├── composables/            # Vue 3 composables
│   │   ├── useAuth.ts          # Authentication logic
│   │   └── useOrders.ts        # Order management
│   ├── types/                  # TypeScript type definitions
│   │   ├── art.ts              # Art and gallery types
│   │   └── orders.ts           # Order types
│   ├── utils/                  # Utility functions
│   │   ├── auth.ts             # Auth helpers
│   │   └── db.ts               # Database utilities
│   ├── layouts/                # Page layouts
│   │   └── default.vue
│   ├── plugins/                # Nuxt plugins
│   │   └── pinia.client.ts     # Pinia setup
│   ├── lib/                    # External libraries
│   │   └── auth-client.ts      # Auth client setup
│   └── assets/
│       └── css/
│           └── main.css        # Global styles

├── server/
│   └── api/
│       ├── checkout.post.ts    # Payment checkout endpoint
│       ├── orders.get.ts       # Order retrieval endpoint
│       └── auth/
│           └── [...all].ts     # Better Auth routes

├── docs/                       # Documentation
│   ├── api-art-search.md
│   ├── debugging_summary.md
│   ├── shoppingCartImplementation.md
│   └── example_for_me.md

├── public/
│   └── robots.txt

├── nuxt.config.ts              # Nuxt configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies & scripts
├── eslint.config.mjs           # ESLint configuration
└── README.md                   # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm**, **pnpm**, **yarn**, or **bun**
- MongoDB instance (local or cloud)
- Google OAuth 2.0 credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/artisty.git
   cd artisty
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   yarn install
   bun install
   ```

3. **Create environment file**
   
   Create a `.env.local` file in the project root:
   ```env
   # Authentication
   BETTER_AUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your_google_client_id_here
   GOOGLE_CLIENT_SECRET=your_google_client_secret_here
   
   # Database
   DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/artisty
   
   # Optional: API Keys
   STRIPE_KEY=your_stripe_key
   PAYPAL_KEY=your_paypal_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open http://localhost:3000 in your browser

### Build for Production

```bash
# Build application
npm run build

# Preview production build locally
npm run preview

# Generate static site (if SSG needed)
npm run generate
```

---

## 💻 Development

### Available Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static HTML site
npm run generate

# Lint code with ESLint
npm run lint
```

### Development Best Practices

1. **Components** - Place all Vue components in `app/components/`
   - Organize by feature (auth, art, cart, etc.)
   - Use meaningful names and comments
   
2. **Pages** - Use Nuxt file-based routing in `app/pages/`
   - Keep logic minimal, use composables
   
3. **State Management** - Use Pinia stores in `app/stores/`
   - Define clear actions and getters
   - Use persistence plugin for cart
   
4. **Styling** - Use Tailwind CSS utilities
   - Customize in `tailwind.config.ts` if needed
   - Keep component styles scoped
   
5. **Type Safety** - Always define TypeScript types
   - Place types in `app/types/`
   - Use strict mode in `tsconfig.json`
   
6. **Composables** - Extract reusable logic
   - Follow naming convention: `useFeatureName`
   - Document with JSDoc comments
   
7. **Server Routes** - Create APIs in `server/api/`
   - Use Nitro for server handlers
   - Validate inputs with Zod

### Code Quality Standards

- ✅ ESLint must pass (no errors or warnings)
- ✅ TypeScript strict mode enforced
- ✅ Components use composition API
- ✅ Proper error handling and validation
- ✅ Meaningful commit messages

---

## 🔐 Authentication Flow

The application uses **Better Auth** with OAuth 2.0:

```
1. User clicks "Sign in with Google" button
   ↓
2. Redirected to Google OAuth consent screen
   ↓
3. User grants permissions
   ↓
4. Google returns authorization code
   ↓
5. Better Auth exchanges code for tokens
   ↓
6. Secure HTTP-only session cookie created
   ↓
7. User authenticated, redirected to dashboard
```

**Security Features:**
- Server-side session management
- HTTP-only cookies (prevents XSS)
- CSRF protection built-in
- Type-safe auth composable

---

## 📈 Performance Metrics

- **Time to First Contentful Paint (FCP):** Optimized with SSR
- **Largest Contentful Paint (LCP):** Image optimization with @nuxt/image
- **Cumulative Layout Shift (CLS):** Maintained below 0.1
- **Mobile Performance:** 90+ Lighthouse score target
- **Bundle Size:** Tree-shaken, code-split by routes

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. **Code Style**
   - Follow existing code patterns
   - Use TypeScript for type safety
   - Run ESLint before committing

2. **Commits**
   - Write clear, descriptive commit messages
   - Reference issues when applicable
   - Keep commits focused and atomic

3. **Pull Requests**
   - Provide detailed description of changes
   - Reference related issues
   - Ensure tests pass and no linting errors

4. **Documentation**
   - Update README for new features
   - Add JSDoc comments for functions
   - Document API endpoints

---

## 📄 License

This project is proprietary and confidential.

---

## 📞 Contact & Support

- **Issues & Bugs:** Open an issue on the repository
- **Feature Requests:** Create a GitHub discussion
- **Direct Contact:** [Your Contact Info]

---

## 🗺️ Roadmap Summary

| Phase | Timeline | Status |
|-------|----------|--------|
| **MVP - Core Features** | Completed | ✅ Released |
| **Phase 1 - Payments & Notifications** | Q1 2026 | 🚧 In Progress |
| **Phase 2 - Community Features** | Q1-Q2 2026 | 📋 Planned |
| **Phase 3 - Analytics & Admin** | Q2 2026 | 📋 Planned |
| **Phase 4 - Mobile App** | Q3 2026 | 📋 Planned |

---

**Last Updated:** February 20, 2026  
**Project Status:** MVP Released - Active Development  
**Next Milestone:** Payment Gateway Integration (Q1 2026)  
**Team:** Development Team  
**Repository:** [GitHub Link]
