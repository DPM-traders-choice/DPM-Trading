# DPM — Marketing Website

Official marketing website for **DPM**, a CFD/Forex broker. Built with Next.js 16 App Router and deployed on Vercel.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.2.7 (App Router) |
| UI | React 19.2, Tailwind CSS v4 |
| Language | TypeScript 5 |
| Bundler | Turbopack (default for dev & build) |
| Database | Neon PostgreSQL (serverless) |
| ORM | Prisma 7 with `@prisma/adapter-pg` |
| Deployment | Vercel |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

Create `.env.local` at the project root:

```env
# Telegram Bot (form submissions)
TELEGRAM_BOT_TOKEN=<your-bot-token>
TELEGRAM_CHAT_ID=<your-chat-id>

# Admin panel credentials
ADMIN_EMAIL=wtl.business2023@gmail.com
ADMIN_PASSWORD=<your-admin-password>

# Neon PostgreSQL
DATABASE_URL=postgresql://...?channel_binding=require&sslmode=require
DATABASE_URL_UNPOOLED=postgresql://...?sslmode=require
```

> **Never commit `.env.local`** — it is gitignored.

### 3. Generate Prisma client

```bash
npx prisma generate
```

### 4. Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Commands

```bash
npm run dev      # Start dev server (Turbopack, hot reload)
npm run build    # Production build
npm run start    # Serve production build locally
npm run lint     # Run ESLint (eslint CLI, not next lint)
```

---

## Project Structure

```
dpm/
├── app/
│   ├── (pages)
│   │   ├── page.tsx                  # Homepage
│   │   ├── about-us/
│   │   │   ├── about-dpm/
│   │   │   ├── contact-us/
│   │   │   ├── complaints/
│   │   │   ├── faqs/
│   │   │   └── legal-documents/
│   │   ├── trading/
│   │   │   ├── instruments/
│   │   │   ├── account-types/
│   │   │   ├── mt5/
│   │   │   ├── advantages/
│   │   │   ├── calendar/
│   │   │   ├── deposits-withdrawals/
│   │   │   └── overnight-fees/
│   │   ├── promotions/
│   │   │   └── welcome-bonus/        # Content editable from admin
│   │   ├── partners/
│   │   │   ├── partner/
│   │   │   └── create-your-bonus/
│   │   ├── copy-trading/
│   │   ├── partner/
│   │   └── telegram/
│   │
│   ├── admin/                        # Admin panel (auth-protected)
│   │   ├── login/
│   │   ├── page.tsx                  # Dashboard — social traffic analytics
│   │   ├── announcements/            # Manage marquee announcements
│   │   └── bonus-content/            # Edit welcome bonus page content
│   │
│   ├── api/
│   │   ├── admin/
│   │   │   ├── login/                # POST — set admin_session cookie
│   │   │   └── logout/               # POST — clear cookie
│   │   ├── announcements/            # CRUD for announcements (Neon DB)
│   │   ├── track/                    # GET/POST social traffic counters (Neon DB)
│   │   ├── bonus-content/            # GET/PUT welcome bonus content (Neon DB)
│   │   ├── bonus-submission/         # POST — sends bonus form to Telegram
│   │   ├── contact-submission/       # POST — sends contact form to Telegram
│   │   └── telegram-setup/           # Utility to verify Telegram bot setup
│   │
│   ├── components/
│   │   ├── SiteShell.tsx             # Wraps Header + Footer; excluded on /admin
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── AnnouncementBar.tsx       # Marquee sub-header (scrollY > 50)
│   │   ├── LoadingScreen.tsx         # Candle animation on page load
│   │   ├── RefTracker.tsx            # Captures ?ref= query for social tracking
│   │   ├── CTABanner.tsx
│   │   ├── HeroSection.tsx
│   │   └── ...
│   │
│   └── generated/
│       └── prisma/                   # Auto-generated Prisma client (do not edit)
│
├── lib/
│   └── prisma.ts                     # Prisma singleton client
│
├── prisma/
│   └── schema.prisma                 # Database schema
│
├── prisma.config.ts                  # Prisma 7 config (loads .env.local)
├── middleware.ts                     # Admin auth guard + upstream proxy
├── data/                             # Legacy JSON files (no longer used)
└── public/                           # Static assets
```

---

## Database Schema

Managed with Prisma on **Neon PostgreSQL**. Three models:

```prisma
model Announcement {
  id        String   @id @default(cuid())
  text      String
  active    Boolean  @default(true)
  createdAt DateTime @default(now())
}

model SocialTraffic {
  platform  String @id   // facebook | tiktok | youtube | telegram | other
  count     Int    @default(0)
}

model BonusContent {
  id           String   @id @default("main")  // singleton row
  heading      String
  subheading   String
  bodyText     String
  bullets      String[]
  cardLabel    String
  cardPercent  String
  cardDesc     String
  cardFeatures String[]
  updatedAt    DateTime @updatedAt
}
```

### Schema changes

```bash
# After editing prisma/schema.prisma:
npx prisma db push     # Push changes to Neon (dev/staging)
npx prisma generate    # Regenerate the client
```

> Use `db push` for development. Set up `prisma migrate` for production migrations when needed.

---

## Admin Panel

URL: `/admin` — protected by httpOnly cookie `admin_session` (8-hour expiry).

| Route | Description |
|-------|-------------|
| `/admin/login` | Login with email + password from `.env.local` |
| `/admin` | Dashboard — social traffic analytics + tracking link generator |
| `/admin/announcements` | Create/toggle/delete marquee announcements |
| `/admin/bonus-content` | Live-preview editor for the Welcome Bonus page |

### How authentication works

1. `POST /api/admin/login` validates credentials against `ADMIN_EMAIL` / `ADMIN_PASSWORD` env vars.
2. On success, sets an httpOnly cookie `admin_session`.
3. `middleware.ts` checks for the cookie on every `/admin/*` request. If missing → redirect to `/admin/login`.

---

## Announcement System

1. Admin creates announcements at `/admin/announcements` and toggles them active.
2. `AnnouncementBar` component fetches active announcements from `/api/announcements`.
3. The bar slides in below the site header when `scrollY > 50`, displaying a marquee.
4. Single announcements are repeated 5× to fill the marquee track without gaps.

---

## Social Traffic Tracking

Attach a `?ref=` query param to links shared on social media:

| Platform | Link |
|----------|------|
| Facebook | `https://dpmtrade.com?ref=facebook` |
| TikTok | `https://dpmtrade.com?ref=tiktok` |
| YouTube | `https://dpmtrade.com?ref=youtube` |
| Telegram | `https://dpmtrade.com?ref=telegram` |

Copy-ready links are available in the admin dashboard.

`RefTracker` (client component in root layout) reads the param, fires `POST /api/track`, and sets a `sessionStorage` flag so the same session is only counted once.

---

## Upstream Proxy (Client Portal)

`middleware.ts` transparently proxies certain paths to the upstream member portal at `https://my.dpmtrade.com`:

| Public path | Upstream path |
|-------------|---------------|
| `/login` | `https://my.dpmtrade.com/my/login` |
| `/register` | `https://my.dpmtrade.com/my/register` |
| `/my/*` | `https://my.dpmtrade.com/my/*` |
| `/profile/*` | `https://my.dpmtrade.com/profile/*` |

This keeps users on the main domain at all times. Redirect `Location` headers are rewritten back to the main domain.

> **Important:** Admin routes (`/admin/*`) are handled before the proxy logic and are never forwarded upstream.

---

## Form Submissions → Telegram

Contact and bonus forms send messages to a Telegram bot.

- **Bot token** and **Chat ID** are set in `.env.local`.
- The chat ID must belong to a user or group that has sent `/start` to the bot first.
- Use `/api/telegram-setup` (GET) to verify the bot is configured correctly.

---

## Deployment (Vercel)

1. Push to `main` branch → Vercel auto-deploys.
2. Set all environment variables in **Vercel → Project → Settings → Environment Variables**:
   - `DATABASE_URL`
   - `DATABASE_URL_UNPOOLED`
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`
3. After first deploy, run `npx prisma db push` locally (pointing to the production Neon DB) if the schema has changed.

---

## Tailwind v4 Notes

Tailwind is configured through CSS only — there is no `tailwind.config.*` file.

- Theme tokens live in `@theme inline { ... }` blocks inside `app/globals.css`.
- PostCSS plugin: `@tailwindcss/postcss`.
- Import: `@import "tailwindcss"` at the top of `globals.css`.

---

## Prisma v7 Notes

Prisma 7 introduced breaking changes from v5/v6:

- `url` and `directUrl` are no longer set in `schema.prisma`. They live in `prisma.config.ts`.
- `PrismaClient` requires a **driver adapter** — this project uses `@prisma/adapter-pg`.
- Generated client outputs to `app/generated/prisma/` (not the default location).
- Import path: `import { PrismaClient } from '@/app/generated/prisma'`.

```ts
// lib/prisma.ts
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@/app/generated/prisma'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
export const prisma = new PrismaClient({ adapter })
```

---

## Next.js 16 Notes

This project runs **Next.js 16** which has several breaking changes:

- `cookies()`, `headers()`, `params`, `searchParams` are **async only** — always `await` them.
- `next lint` command is removed — use `eslint` directly (`npm run lint`).
- No custom webpack config — Turbopack only. Custom webpack will break `npm run build`.
- Stable cache APIs: `import { cacheLife, cacheTag } from 'next/cache'` (no `unstable_` prefix).
- `experimental.turbopack` is now top-level `turbopack` in `next.config.ts`.
