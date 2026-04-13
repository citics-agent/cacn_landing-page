
# Citics C-ACN Landing Page

Landing page for the **Citics Agent Cooperation Network (C-ACN)** -- a next-generation platform for real estate agents to manage teams, connect networks, and grow commission income nationwide.

## Tech Stack

- **Next.js 16** (static export) + **React 19**
- **Tailwind CSS 4** (utility-first styling)
- **TypeScript**
- Deployed to **GitHub Pages** via GitHub Actions

## Getting Started

```bash
cd v2.1
npm install
npm run dev
```

Open [http://localhost:3000/cacn_landing-page](http://localhost:3000/cacn_landing-page) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Convert policy images to WebP + build static export |
| `npm run convert:policies` | Convert policy banner images (PNG/JPG -> WebP) |
| `npm run lint` | Run ESLint |

## Project Structure

```
v2.1/
├── public/assets/           # Images, banners, policy assets
│   └── policies/{id}/       # Desktop + mobile banners per campaign
├── src/
│   ├── app/                 # Next.js App Router (page, layout, globals.css)
│   ├── components/
│   │   └── sections/        # Page sections (Hero, Policies, Faq, etc.)
│   └── lib/                 # Shared config & data (policies.ts, config.ts)
├── scripts/
│   └── convert-policies.mjs # Sharp-based PNG/JPG -> WebP converter
└── docs/                    # Static export output
```

## Adding a New Policy/Campaign Banner

1. Add an entry in `v2.1/src/lib/policies.ts`
2. Create folder `v2.1/public/assets/policies/{id}/`
3. Drop `desktop.{png|jpg}` + `mobile.{png|jpg}` into the folder
4. Run `npm run convert:policies` (or just `npm run build` -- it runs automatically)

## Deployment

Push to the `v2.1` branch triggers a GitHub Actions workflow that:

1. Installs dependencies
2. Converts policy images to WebP
3. Builds static export (`next build` -> `out/`)
4. Deploys to GitHub Pages

Base path: `/cacn_landing-page`
