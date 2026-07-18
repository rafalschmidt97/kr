# AGENTS.md

Operating guide for AI agents working in this repository.

## What this is

The wedding website for Klaudia & Rafał — **[klaudiarafal.pl](https://klaudiarafal.pl)**.
Wedding: 10 July 2027, Villa Presto. Polish-language, static site built with
**Astro**, deployed to **GitHub Pages**.

## Hard constraints (do not violate)

- **Purely static.** Never introduce a server, database, or serverless backend.
  The output is static files served by GitHub Pages.
- **Guest communication stays off the site.** RSVP, reminders, and guest
  messaging happen over **WhatsApp** (one-to-one), with the guest list in a
  **Google Spreadsheet**. Do not build RSVP forms, guest DBs, or notification
  systems into the website. The messaging automation (WhatsApp Web via
  agent-browser + the spreadsheet) is a **separate future project**, not part of
  this repo.
- **Polish only.** No i18n unless explicitly requested.
- **Post-event photos** link out to Google Photos — no self-hosted gallery.
- **Preserve the countdown** behaviour (calendar arithmetic, Polish
  pluralization, "dzisiaj" on the day).
- **Analytics is optional.** Google Analytics loads only when `PUBLIC_GA_ID` is
  set, and only after cookie consent. No ID → no script, no banner.

## Stack & commands

- Astro (static), npm, Node 20+.
- `npm run dev` / `npm run build` / `npm run preview`.
- Conventional commits (commitlint), Husky pre-commit runs lint-staged
  (Prettier). Commits must pass both hooks.
- Prettier's Astro plugin cannot format inline `<script define:vars>` bodies —
  keep client logic in `src/scripts/*.ts` modules and import them, rather than
  large inline scripts.

## OpenSpec workflow

This repo uses [OpenSpec](https://openspec.dev) (`@fission-ai/openspec`) for
spec-driven changes. Non-trivial work should go through it.

- **Source of truth:** `openspec/specs/` — the current behaviour contract
  (requirements + scenarios). This IS committed.
- **Project context & rules:** `openspec/config.yaml`. Read it before proposing
  changes; it carries the constraints above and the roadmap.
- **Slash commands** (OpenCode): `/opsx:propose`, `/opsx:apply`, `/opsx:archive`,
  `/opsx:explore`. Or drive the CLI directly: `openspec new change`,
  `openspec status`, `openspec instructions <artifact>`, `openspec validate`,
  `openspec archive`.

Typical flow: propose (proposal → specs → design → tasks) → apply (implement,
checking off `tasks.md`) → archive (delta specs merge into `openspec/specs/`).

## What is and isn't committed

`.gitignore` keeps the repo lean. **Committed:** `openspec/specs/` and
`openspec/config.yaml` (authored source of truth). **Ignored** (regenerable /
scaffolding): `openspec/changes/` (including `changes/archive/`), `.opencode/`,
`dist/`, `.astro/`, `node_modules/`.

So after archiving a change, only the merged domain specs land in git — the
proposal/design/tasks and the archive folder stay local. Don't try to commit
them.

## Roadmap / next steps

- **After the Astro migration is live, ask Rafal for the page/content
  requirements** (which sections the site should have: details, schedule,
  travel, accommodation, our story, FAQ, …) before building further pages. Do
  not assume the section list.
- Guest-messaging automation (WhatsApp + spreadsheet) will be its own separate
  OpenSpec change later, outside this website.
