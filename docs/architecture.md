# Architecture and edit map

This page describes the working implementation. Product boundaries live in
[invariants](invariants.md); acceptance scenarios live in [OpenSpec](../openspec/specs/).
[Audit coverage](repository-inventory.md) records the verified source inventory;
[the roadmap](roadmap.md) holds further investigation and content decisions.

## Static composition

Astro renders `src/pages/*.astro` at build time. Pages import components and typed
content, then use [Base](../src/layouts/Base.astro) for the Polish HTML document,
metadata, canonical URL, favicons, Manrope, shared glass styles, and analytics.
Canonical URLs use the production site and pathname, excluding query parameters.

There is no application API or server-state layer. Browser JavaScript enhances
already-rendered HTML. Plain files under `public/` are copied to the output,
including the standalone redirect below, which bypasses Base.

## Routes and content owners

| URL                                | Composition                                                                              | Edit here                                                                                                                                   |
| ---------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                                | [index](../src/pages/index.astro), Plan, Faq, PreviewPanel, Base                         | Hero names/intro/map/slides and countdown in `index.astro`; [plan.ts](../src/data/plan.ts), [faq.ts](../src/data/faq.ts) for sections       |
| `/historia`                        | [historia](../src/pages/historia.astro), SiteNav, StoryChapter, WeddingPredictions, Base | Intro in `historia.astro`; [story.ts](../src/data/story.ts) for chapters/photos; [predictions.ts](../src/data/predictions.ts) for questions |
| `/goscie-zamiejscowi`              | [route](../src/pages/goscie-zamiejscowi.astro) selects a group; GroupPage renders it     | Matching slug in [groups.ts](../src/data/groups.ts)                                                                                         |
| `/villa-presto-nocleg`             | [route](../src/pages/villa-presto-nocleg.astro) -> GroupPage                             | Matching slug in `groups.ts`                                                                                                                |
| `/poprawiny`                       | [route](../src/pages/poprawiny.astro) -> GroupPage                                       | Matching slug in `groups.ts`                                                                                                                |
| `/harmonogram-mlodzi`              | [route](../src/pages/harmonogram-mlodzi.astro) -> SchedulePage                           | [schedules.ts](../src/data/schedules.ts)                                                                                                    |
| `/static/mieszkanie-194-fad5831a/` | Standalone [compatibility redirect](../public/static/mieszkanie-194-fad5831a/index.html) | Separate apartment project boundary; preserve during wedding edits                                                                          |

The three group pages and one schedule are `noindex, nofollow` and omitted from
ordinary navigation. [SiteNav](../src/components/SiteNav.astro) links to `/#plan`,
`/#faq`, and `/historia`; the homepage owns its own hero navigation. Transport is
currently in the plan, FAQ, and group copy, with no separate transport route or
anchor. There is no sitemap implementation.

[groups.ts](../src/data/groups.ts) and [schedules.ts](../src/data/schedules.ts)
also supply [PreviewPanel](../src/components/PreviewPanel.astro). Adding an entry
adds its preview link, **not its route**: every current route is a separate file
that finds its entry by slug. Keep both ends aligned.

## Component and data boundaries

- [Section](../src/components/Section.astro) owns the common section wrapper and
  anchor. [Plan](../src/components/Plan.astro) and [Faq](../src/components/Faq.astro)
  render their arrays. Content order is array order; times are display strings.
- [GroupPage](../src/components/GroupPage.astro) renders optional hotel, bus,
  and extra blocks. [SchedulePage](../src/components/SchedulePage.astro) renders
  optional parallel morning tracks, then schedule items. Both consume the RSVP
  note from [site.ts](../src/data/site.ts); the FAQ has separately authored wording.
- [StoryChapter](../src/components/StoryChapter.astro) maps a chapter's layout
  discriminator to scoped CSS. Photos include alt text and dimensions; an
  optional [Slideshow](../src/components/Slideshow.astro) is a horizontal swipe
  strip. It is unrelated to the timed homepage background slideshow.
- [timeline.ts](../src/data/timeline.ts) is an unimported archive of dated entries
  and photo mappings. `story.ts` selects from that owned photo library; unused
  archive images are not cleanup candidates. Intake rules are in
  [the editing guide](editing-session.md#zdjęcia).
- [WeddingPredictions](../src/components/WeddingPredictions.astro) renders all
  questions and the no-JavaScript explanation. Its state/notice boundary is
  [INV-05](invariants.md#inv-05-predictions-are-page-memory-only).

The reason for typed content instead of inline copy or Content Collections is
recorded in [ADR-0001](adr/0001-typed-content-for-editing.md).

## Browser flows and state

[Flows](flows.md) owns browser triggers, transitions, initialization, and state
lifetime for the homepage, preview, consent, predictions, and legacy redirect.
Consult it before changing a component's script or persistence behavior.

## Build and external boundaries

| Source                                                            | What it establishes                                                                                                       |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| [astro.config.mjs](../astro.config.mjs)                           | Production `site` URL, no `base` prefix and no server adapter                                                             |
| [package.json](../package.json), [lockfile](../package-lock.json) | npm scripts/dependencies; build is `astro build`, with no dedicated test/typecheck/lint scripts                           |
| [ci.yml](../.github/workflows/ci.yml)                             | PRs targeting main: Node 24, `npm ci`, build, read-only permissions, cancellation by PR                                   |
| [pages.yml](../.github/workflows/pages.yml)                       | Push to main or manual dispatch: `withastro/action@v6`, then `actions/deploy-pages@v4`; shared `pages` cancellation group |
| [public/CNAME](../public/CNAME)                                   | Custom-domain file copied to Pages; environment branch allowlist and HTTPS enforcement are remote settings                |

[API and external boundaries](api.md) owns environment configuration, outgoing
services, and the distinction between implemented integrations and product
boundaries. Fresh-checkout commands live in [setup](setup.md).
Deployment authorization lives in
[contributing](contributing.md#authorization-and-git).
