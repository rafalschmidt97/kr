# Product invariants

These are the couple's established boundaries, not proof that every check is
automated. Preserve them when editing. If a requested change conflicts, resolve
the affected decision with the user before proceeding; unrelated work can
continue. Acceptance scenarios are in the linked specs. Historical discrepancies
are recorded under [known gaps](repository-inventory.md#known-gaps).

Operational permissions, Git ownership, and publication gates are authoritative
in [contributing](contributing.md#authorization-and-git).

## INV-01: Static site boundary

Keep the Astro/npm/GitHub Pages site purely static: no application server,
database, API, or serverless backend. The current scope does not add a framework,
dependency, or hosting service. Local Astro preview/dev servers are development
tools, not production backends.

Evidence: [Astro config](../astro.config.mjs), [package scripts](../package.json),
[Pages workflow](../.github/workflows/pages.yml),
[build contract](../openspec/specs/site-build-deploy/spec.md).
Verify relevant changes by inspecting dependencies/config and building static
output; do not use deployment as a routine test.

## INV-02: Visitor-facing Polish

All visitor-facing text is always Polish, including editorial headings,
subtitles, chapter labels, notices, placeholders, validation, metadata, alt text,
and accessible labels. Translate English briefs; they create no exception.
There is no i18n. Developer documentation and non-rendered identifiers may be English.

Evidence: [Base language/metadata](../src/layouts/Base.astro),
[story contract](../openspec/specs/our-story/spec.md).
Verify changed strings in source and rendered output, including screen-reader
text.

## INV-03: Guest operations stay outside

Attendance confirmation and guest communication happen through personal channels
and the couple's separate Google Spreadsheet. Keep RSVP forms, guest databases,
reminders, and messaging automation outside this repository. Predictions are a
separate entertainment preview, not attendance confirmation.

Evidence: [site.ts](../src/data/site.ts), [FAQ](../src/data/faq.ts),
[RSVP contract](../openspec/specs/guest-faq/spec.md).
Verify that changes remain informational and introduce no attendance collection
or transmission. The current copy offers phone, WhatsApp, or Messenger.

## INV-04: Preserve countdown and calendar

Preserve the countdown's calendar arithmetic, Polish pluralization, omission of
zero units, natural joining, and wedding-day "dzisiaj" behavior. Keep the wedding
date consistent with the calendar download and displayed copy. Do not replace
calendar months with fixed 30-day units.

Evidence: `updateCountdown()` in [index.astro](../src/pages/index.astro),
[wedding.ics](../public/static/wedding.ics),
[countdown contract](../openspec/specs/wedding-countdown/spec.md).
Verify boundary dates and Polish forms when this logic changes. Current code also
uses "dzisiaj" after the date and updates once at load; a separate post-event
presentation is [future work](roadmap.md), not a current contract requirement.

## INV-05: Predictions are page-memory only

Keep answers and optional name only in the loaded page. No backend, submission,
cookies, localStorage, sessionStorage, or other persistence for predictions.
Show honest Polish not-sent/not-durably-saved notices before interaction and at
review. Do not enable fake saving/success or guest results/statistics. Future
persistence would require a separately approved change to these boundaries;
copy that says saving is unavailable does not authorize building it.

Evidence: [component](../src/components/WeddingPredictions.astro),
[script](../src/scripts/predictions.ts),
[truthful interaction contract](../openspec/specs/our-story/spec.md).
Verify next/back/edit/reset, optional name, fresh reload, and absence of
prediction storage/network writes. Preview and analytics storage are separate
features, described in [flows](flows.md).

## INV-06: Optional consent-gated analytics

Only a configured `PUBLIC_GA_ID` plus acceptance permits Google Analytics to
load. No ID means no analytics banner or Google tracking request. Honor stored
rejection and preserve remembered consent. Do not extend analytics to collect
prediction answers or names.

Evidence: [Analytics](../src/components/Analytics.astro),
[consent.ts](../src/scripts/consent.ts),
[analytics contract](../openspec/specs/site-analytics/spec.md).
Verify unset/empty ID, new visitor, acceptance, rejection, and revisit when this
feature changes. The local bootstrap and Google Fonts are distinguished in
[API and external boundaries](api.md).

## INV-07: Hidden does not mean private

Keep group/schedule pages out of ordinary navigation and marked `noindex`.
They remain publicly reachable by URL. `?preview=1` is a convenience switch,
not access control or a separate environment. Do not put secrets or information
requiring access control in these pages or their source.

Evidence: [GroupPage](../src/components/GroupPage.astro),
[SchedulePage](../src/components/SchedulePage.astro),
[preview.ts](../src/scripts/preview.ts),
[navigation contract](../openspec/specs/site-navigation/spec.md).
Verify direct URL access, robots metadata, ordinary nav, and preview on/off.
Review of existing working details is listed in [the roadmap](roadmap.md).

## INV-08: Preserve owned history and route continuity

Preserve existing routes, navigation, owned assets, and the archived
`timeline.ts` photo mapping during story/content work. Current chapter selection
need not display every archived image. Missing suitable photos use honest
placeholders. Post-event photo sharing links out to Google Photos; it is not a
self-hosted wedding gallery. The local relationship-photo library is distinct.

Evidence: [route map](architecture.md#routes-and-content-owners),
[story data](../src/data/story.ts), [archive](../src/data/timeline.ts),
[story contract](../openspec/specs/our-story/spec.md).
Verify referenced files, archive coverage, real dimensions, and unchanged
originals for a story redesign. Use [photo intake](editing-session.md#zdjęcia)
for newly supplied files rather than deleting archived photos as unused code.
