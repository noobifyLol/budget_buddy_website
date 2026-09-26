# Budget Buddy Website

Marketing site for Budget Buddy, a youth-led initiative building a free
financial-literacy app that teaches through gamification. Built with
[Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS.
Deploys to [Vercel](https://vercel.com) with zero configuration.

## Pages

- `/` — Home / hero
- `/mission` — Our Mission
- `/get-the-app` — App showcase and launch signup
- `/donate` — Donate
- `/contact` — Contact Us

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploying to Vercel

Push this repo to GitHub and [import it on Vercel](https://vercel.com/new) — no
extra configuration is required. Or from the CLI:

```bash
npx vercel
```

## Configuration

Site-wide copy (nav links, contact email, legal name, tagline) lives in
[`lib/site-config.ts`](lib/site-config.ts). The contact email currently
defaults to the site owner's inbox — update it there once the org has a
dedicated address.

## Assets

Brand and app imagery used by the site lives in `public/images/`, sourced
from the shared `assets/` folder (also used by the Budget Buddy Flutter app).
