# API and external boundaries

KR exposes static pages and files, with **no application API endpoints**,
authentication service, database, or submission handler. The [route map](architecture.md#routes-and-content-owners)
is its public surface. Preserve [INV-01](invariants.md#inv-01-static-site-boundary)
when considering integrations; a displayed form-like interaction does not imply
a remote service.

## Existing external interactions

| Boundary              | Direction and mechanism                                                                      | Source / contract                                                                                                                                                            |
| --------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Google Analytics      | Outbound browser loader/tracking, configured and consent-gated                               | [Analytics.astro](../src/components/Analytics.astro), [consent flow](flows.md#triggers-transitions-and-outcomes), [analytics spec](../openspec/specs/site-analytics/spec.md) |
| Google Fonts          | Outbound font stylesheet/font requests, independent of analytics consent                     | [Base.astro](../src/layouts/Base.astro)                                                                                                                                      |
| Maps and venue sites  | User-activated outbound links; no embedded map API                                           | [index.astro](../src/pages/index.astro), [plan.ts](../src/data/plan.ts), [groups.ts](../src/data/groups.ts)                                                                  |
| Calendar              | Static [wedding.ics](../public/static/wedding.ics) download; no calendar-account integration | [Landing contract](../openspec/specs/landing-page/spec.md)                                                                                                                   |
| Legacy apartment site | Redirect to the separate site, optionally carrying migration data in a URL fragment          | [Redirect source](../public/static/mieszkanie-194-fad5831a/index.html), [migration flow](flows.md#triggers-transitions-and-outcomes)                                         |

Destination availability and the apartment site's interpretation of migration
data are outside this repository. Preserve the compatibility redirect during
wedding edits.

## Build-time configuration

`PUBLIC_GA_ID` is the only first-party environment lookup. It is build-time and
public when configured. Empty/unset disables the analytics feature. A local
bootstrap module can still exist in the bundle; "no analytics script" means no
Google loader/tracking request. `.env` is currently **tracked**, has no example
file, and is not ignored. Treat it as public configuration; do not put secrets
there or print values in reports.

Setup is in [setup.md](setup.md), build/deploy wiring in
[architecture](architecture.md#build-and-external-boundaries), and consent test
cases in [quality](quality.md#analytics-or-preview-changes).

## Product boundaries without an integration

- Attendance confirmation and guest communication use personal channels and a
  separate spreadsheet, under [INV-03](invariants.md#inv-03-guest-operations-stay-outside).
  This repository does not connect to either service.
- [Predictions](invariants.md#inv-05-predictions-are-page-memory-only) keep answers
  and the optional name within the loaded page. There is no prediction endpoint
  or guest-results service.
- Post-event photo sharing is an outbound Google Photos boundary, not an
  implemented gallery/upload integration. Existing local story photographs follow
  [INV-08](invariants.md#inv-08-preserve-owned-history-and-route-continuity).
