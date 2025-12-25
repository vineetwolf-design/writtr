# Writtr - Project Roadmap & Analysis

## Project Overview
**Writtr** is a SaaS platform that helps solo creators turn rough notes into polished content for multiple platforms (Twitter, LinkedIn, Instagram, Blog, Newsletter).

**Tech Stack:**
- Next.js 16 (App Router, TypeScript)
- React 19 with Framer Motion animations
- Radix UI components with custom styling
- Tailwind CSS for styling
- Vercel Analytics built-in

---

## Current State Assessment

### ✅ What's Working
1. **Landing Page** - Fully designed with:
   - Hero section with animations
   - Features showcase
   - Use cases
   - Pricing section (UI only)
   - Trusted by section
   - Footer (recently fixed grid layout)
   - Smooth scroll progress indicator

2. **Dashboard Page** - 90% UI complete with:
   - Top navbar with user profile
   - "Repurpose" section with platform selection
   - Content output preview
   - "My Posts" section (empty stub)
   - Responsive design

3. **Design System** - Well-structured:
   - Reusable UI components (Button, Card, Badge)
   - Animation utilities (fadeIn, fadeUp, stagger)
   - Consistent color/typography theming
   - Dark/light mode support ready

4. **Animations** - Smooth scroll-triggered animations throughout

### ⚠️ Issues Found

#### 1. **Text Content Issues** (HIGH PRIORITY)
- **Footer**: Fixed typos (cretoers → creators, sustinable → sustainable)
- **Pricing Section**: Placeholder text with typos:
  - "Perfitk for talyly pieving fhre first ideas" (Seedling plan)
  - "For tireles beuitor sciling flier forest" (Evergreen plan)
  - "Custom Tone Nudde", "All Egrmets" are garbled
- **Need to review**: Hero section, features, use cases for similar issues

#### 2. **Missing Core Features** (CRITICAL)
- No authentication system (currently mocked)
- No AI integration (output is hardcoded)
- No database (no data persistence)
- No payment system (pricing UI only)
- Dashboard sections incomplete

#### 3. **Unimplemented Areas**
- API routes don't exist
- "My Posts" section is empty
- Analytics not implemented
- Settings/preferences not created
- Social media integrations missing

---

## Prioritized Roadmap

### Phase 1: Content & Polish (1-2 days)
**Goal:** Make the site look production-ready

1. **Fix all text/copy issues**
   - Review and fix pricing descriptions
   - Fix any typos in hero, features, use cases
   - Write proper feature descriptions
   - Create compelling CTA copy

2. **Improve dashboard UI**
   - Add proper empty states for "My Posts"
   - Add skeleton loaders for async content
   - Improve error state handling

### Phase 2: Backend Infrastructure (2-3 days)
**Goal:** Establish data persistence and APIs

1. **Set up database** (Recommend: Supabase - includes auth + DB)
   - Users table
   - Posts table (generated content)
   - Subscriptions table
   - Generation logs table

2. **Create API routes**
   - `/api/generate` - Call AI to repurpose content
   - `/api/posts` - CRUD for user posts
   - `/api/auth/*` - Authentication endpoints
   - `/api/user` - User profile/settings

3. **Environment setup**
   - Add `.env.local` with keys for:
     - OpenAI/Claude API
     - Supabase credentials
     - Stripe keys (if using)
     - Auth provider config

### Phase 3: Authentication (1-2 days)
**Goal:** Real user accounts and security

1. **Implement auth** (Recommend: NextAuth.js or Supabase Auth)
   - Sign up flow
   - Login flow
   - Logout
   - Protected routes middleware
   - User profile management

2. **Connect to UI**
   - Update header sign-in link
   - Replace mock user data with real user
   - Add user session checks to dashboard

### Phase 4: Core AI Feature (2-3 days)
**Goal:** Working content repurposing

1. **API integration**
   - Call OpenAI API to generate platform-specific content
   - Implement tone/style parameters
   - Add generation history tracking

2. **Dashboard repurpose feature**
   - Accept user input (notes/rough content)
   - Call generation API
   - Display output for multiple platforms
   - Allow editing/regenerating
   - Save to database

### Phase 5: Payments (1-2 days)
**Goal:** Monetize the product

1. **Set up Stripe**
   - Seedling free tier (5 generations/month)
   - Evergreen plan ($19/month - unlimited)
   - Manage subscriptions

2. **Implement quota system**
   - Track generations per user
   - Enforce limits based on plan
   - Show usage to user

### Phase 6: Enhanced Features (2-3 days)
**Goal:** Differentiate from competition

1. **"My Posts" section**
   - Display all generated content
   - Edit/delete posts
   - View analytics per post

2. **Analytics**
   - Generati ions used this month
   - Most used platform
   - Content performance tracking

3. **Social integrations** (Optional MVP)
   - Direct post to Twitter/LinkedIn
   - Schedule posts
   - View engagement

### Phase 7: Polish & Deploy (1-2 days)
**Goal:** Production-ready

1. **Testing**
   - Test all user flows
   - Test error scenarios
   - Performance testing

2. **Error handling**
   - Add error boundaries
   - User-friendly error messages
   - Logging (Sentry optional)

3. **SEO & Meta**
   - Update metadata
   - Add Open Graph tags
   - robots.txt, sitemap

4. **Deploy**
   - Vercel deployment
   - Set up domain
   - SSL certificate
   - Monitoring/analytics

---

## Quick Start Recommendations

### Immediate Next Steps (Do First)
1. **Fix pricing section typos** - 30 minutes
2. **Create `.env.local` template** - 15 minutes
3. **Set up Supabase project** - 30 minutes
4. **Create basic API route structure** - 1 hour

### Stack Decisions (Recommended)
- **Auth**: NextAuth.js or Supabase Auth (faster)
- **Database**: Supabase (PostgreSQL + realtime)
- **AI**: OpenAI API (GPT-4 or Claude via API)
- **Payments**: Stripe
- **Hosting**: Vercel (already configured)

### Critical Files to Update
- `components/pricing-section.tsx` - Fix all description text
- `components/features-section.tsx` - Review text
- `components/hero-section.tsx` - Review text
- Create `app/api/generate/route.ts`
- Create `app/api/posts/route.ts`
- Create `lib/supabase.ts` - Database client
- Create `.env.local` - All secrets

---

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm build

# Lint
npm lint

# Run dev with external access
npm run dev -- -H 0.0.0.0
```

---

## Success Metrics
- ✅ All text is correct, no typos
- ✅ Users can sign up/login
- ✅ Generate AI content from rough notes
- ✅ View generated content history
- ✅ Different plan tiers with limits
- ✅ Direct social posting
- ✅ No console errors
- ✅ Deployed and accessible

---

## Time Estimate
**Total: 10-15 days** for a functional MVP with all core features.

Can be reduced to **5-7 days** if prioritizing speed over perfection on:
- Analytics (basic version)
- Social integrations (manual copy/paste)
- Advanced tone options

