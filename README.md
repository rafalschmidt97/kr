# Klaudia & Rafał

Wedding website — **[klaudiarafal.pl](https://klaudiarafal.pl)**

Wedding: **10 July 2027, Villa Presto**. A static, Polish-language wedding site
built with [Astro](https://astro.build) and deployed to GitHub Pages. Includes
the landing/countdown, day plan, FAQ, an "Our Story" timeline, and hidden
per-group logistics pages (hotel + transport) shared with guests by direct link.

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
  pages/
    index.astro              # landing (hero, glass nav, countdown) + Plan + FAQ
    historia.astro           # "Nasza historia" timeline
    goscie-zamiejscowi.astro # hidden: out-of-town guests (Grein Hotel)
    villa-presto-nocleg.astro# hidden: guests staying at the venue
    poprawiny.astro          # hidden: Sunday afterparty invitees
  layouts/Base.astro         # <head>, SEO/OG, favicons, Manrope font, lang=pl,
                             #   optional noindex, shared .glass-panel styles
  components/
    Section.astro            # section wrapper (anchor id + title)
    Plan.astro, Faq.astro    # main-page sections
    Slideshow.astro          # horizontal photo row (swipe on mobile)
    GroupPage.astro          # shared layout for the 3 hidden group pages
    SiteNav.astro            # top nav for interior pages
    PreviewPanel.astro       # ?preview=1 panel listing hidden pages
    Analytics.astro          # optional, consent-gated Google Analytics
  data/                      # content lives here (see AGENTS.md for the trade-off)
    plan.ts, faq.ts, timeline.ts, groups.ts, site.ts
  scripts/                   # client-side TS modules (consent, preview)
public/
  CNAME                      # klaudiarafal.pl (custom domain)
  static/                    # landing photos, historia/ photos, wedding.ics
  assets/images/             # favicons
.github/workflows/pages.yml  # build + deploy to GitHub Pages
```

## Content

Page content (day plan, FAQ, timeline, guest groups) lives in typed
`src/data/*.ts` modules and is rendered by components — so copy is edited in one
place. `groups.ts` also drives the `?preview=1` panel. See `AGENTS.md` for the
deliberate trade-off behind this.

Hidden guest-group pages (`/goscie-zamiejscowi`, `/villa-presto-nocleg`,
`/poprawiny`) are `noindex`, unlinked from nav, and reachable only by direct URL
— add `?preview=1` to the site to reveal a panel listing them.

> **Dev cache note:** the Astro dev server (Vite) sometimes serves stale scoped
> CSS after edits. If styles look wrong, restart with `npm run dev -- --force`
> and hard-reload (Cmd+Shift+R), or verify against `npm run preview`.

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
