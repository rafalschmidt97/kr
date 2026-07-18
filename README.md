# Klaudia & Rafał

Wedding website — **[klaudiarafal.pl](https://klaudiarafal.pl)**

Wedding: **10 July 2027, Villa Presto**. A static, Polish-language site
(save-the-date for now) built with [Astro](https://astro.build) and deployed to
GitHub Pages.

## Stack

- **[Astro](https://astro.build)** — static output, zero JS by default
- **GitHub Pages** — custom domain `klaudiarafal.pl` (HTTPS enforced), deployed
  from GitHub Actions
- **npm** + Node 20+
- Conventional commits (commitlint) · Husky · lint-staged · Prettier

## Getting started

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static build to ./dist
npm run preview  # preview the production build
```

## Project layout

```
src/
  pages/index.astro      # the landing page (names, slideshow, countdown, links)
  layouts/Base.astro     # <head>, SEO/OG meta, favicons, lang=pl
  components/Analytics.astro  # optional, consent-gated Google Analytics
  scripts/consent.ts     # consent + GA loader logic
public/
  CNAME                  # klaudiarafal.pl (custom domain)
  static/                # photos, avatar/OG image, wedding.ics
  assets/images/         # favicons
.github/workflows/pages.yml   # build + deploy to GitHub Pages
```

## Deployment

Push to `main` → GitHub Actions builds the Astro site
(`withastro/action`) and publishes to GitHub Pages (`actions/deploy-pages`).
The custom domain is preserved via `public/CNAME`; asset paths resolve at the
domain root, so no post-build path rewriting is needed.

## Analytics

Google Analytics is **optional and consent-gated**. It loads only when
`PUBLIC_GA_ID` is set (see `.env`) and only after the visitor accepts cookies.
Remove the variable to disable analytics entirely — no script, no banner.

## Guest communication (not part of this site)

RSVP and guest messaging are handled **outside** the website — over WhatsApp,
one-to-one, with the guest list kept in a Google Spreadsheet. The site stays
purely static: no forms, no database, no backend.

## Specs & planning

This repo uses [OpenSpec](https://openspec.dev) for spec-driven changes.
The current behaviour contract lives in `openspec/specs/`. See
[`AGENTS.md`](./AGENTS.md) for the workflow and conventions.
