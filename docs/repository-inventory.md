# Repository coverage and known gaps

Audit completed 26 October 2026, using the dirty `klaudia/strona` working tree
based on `90ed87d722f0fa486a8096f554ce70965483b101`. This is a dated coverage
record, not a requirement to repeat a whole-repository audit for each edit.
Current edit ownership is in [architecture](architecture.md); update triggers
are in [contributing](contributing.md#documentation-maintenance).

## Scope and coverage

The final authorized source patch is limited to `src/scripts/consent.ts`,
`src/scripts/preview.ts`, one label in `src/data/schedules.ts`, and
`tests/browser-storage.test.js`. The coordinator reserved those files and paused
concurrent builds. Its preview server was reused, not restarted.

The completed investigation covered first-party source, existing documentation,
contracts, configuration, and asset references. The continuation retained that
work, checked its documentation, and reconciled the filesystem against the
original hash baseline. Rafał then authorized contract alignment and the small
storage/Polish-label fixes. All other application files and all asset hashes
still match the baseline; the explicit source patch and tests are verified separately.

| Scope                                                   | Owner during this assignment   | Action / status                                                                   |
| ------------------------------------------------------- | ------------------------------ | --------------------------------------------------------------------------------- |
| Agent/developer docs and documentation-related OpenSpec | Documentation agent            | Completed locally; formatting, links, contracts, and scope checked                |
| Existing story and other application work               | Website coordinator / couple   | Read-only evidence; preserved, including untracked files                          |
| Preview process                                         | Website coordinator            | Independently managed; not part of documentation verification                     |
| Git and publication                                     | Separately authorized operator | No staging, commit, push, merge, dispatch, or settings changes in this assignment |

The final Git-visible inventory is **116 unique files**, including tracked and
non-ignored untracked files. The following rows are disjoint and exhaustive:

| Area                                         |   Files | Coverage                                                                                                                                                                                                                                                                        |
| -------------------------------------------- | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Pages](../src/pages/)                       |       6 | `index.astro`, `historia.astro`, `goscie-zamiejscowi.astro`, `villa-presto-nocleg.astro`, `poprawiny.astro`, `harmonogram-mlodzi.astro`: composition, slug lookup, anchors, navigation, countdown                                                                               |
| [Components](../src/components/)             |      11 | `Analytics`, `Faq`, `GroupPage`, `Plan`, `PreviewPanel`, `SchedulePage`, `Section`, `SiteNav`, `Slideshow`, `StoryChapter`, `WeddingPredictions` (`.astro`): rendering, scripts, accessibility hooks, styles                                                                    |
| [Typed content](../src/data/)                |       8 | `faq.ts`, `groups.ts`, `plan.ts`, `predictions.ts`, `schedules.ts`, `site.ts`, `story.ts`, `timeline.ts`: consumers, draft details, shared facts, archived mappings                                                                                                             |
| [Browser scripts](../src/scripts/)           |       3 | `consent.ts`, `predictions.ts`, `preview.ts`: initialization, DOM/state transitions, storage and external requests                                                                                                                                                              |
| [Layout](../src/layouts/Base.astro)          |       1 | Language, metadata/canonical/robots, fonts, icons, shared CSS, analytics inclusion                                                                                                                                                                                              |
| [History images](../public/static/historia/) |      33 | All filenames, dimensions, hashes, archive references, and current story selection                                                                                                                                                                                              |
| [Landing images](../public/static/landing/)  |       4 | All four JPEGs, dimensions, hashes, homepage references                                                                                                                                                                                                                         |
| Other images                                 |       4 | Three icons in [assets/images](../public/assets/images/) and [avatar.png](../public/static/avatar.png); dimensions, hashes, references                                                                                                                                          |
| Other public files                           |       3 | [CNAME](../public/CNAME), [wedding.ics](../public/static/wedding.ics), [legacy redirect](../public/static/mieszkanie-194-fad5831a/index.html); domain, date, migration boundary                                                                                                 |
| Runtime/tooling configuration                |      12 | `package.json`, lockfile metadata, `astro.config.mjs`, `.env` metadata only, `.gitignore`, `.editorconfig`, `.prettierrc.json`, `.commitlintrc.json`, both `.husky` hooks, both `.github/workflows` files                                                                       |
| Documentation                                |      18 | `AGENTS.md`, `CLAUDE.md`, `README.md`, `GLOSSARY.md`; `docs/api.md`, `architecture.md`, `coding-standards.md`, `contributing.md`, `editing-session.md`, `flows.md`, `invariants.md`, `quality.md`, `roadmap.md`, `setup.md`, this inventory, and all three files in `docs/adr/` |
| Focused regression tests                     |       1 | [browser-storage.test.js](../tests/browser-storage.test.js): actual consent/preview modules, storage exceptions, gating, flags, and menu behavior using Node's built-in test runner                                                                                             |
| OpenSpec context and domain contracts        |      12 | [config.yaml](../openspec/config.yaml) plus all 11 domains: collaborative-editing, event-plan, guest-faq, guest-group-pages, landing-page, our-story, site-analytics, site-build-deploy, site-navigation, transport-info, wedding-countdown                                     |
| **Total**                                    | **116** | **29 source + 44 public + 12 configuration + 18 documentation + 12 OpenSpec + 1 test**                                                                                                                                                                                          |

Additional local coverage, outside that total:

- Ignored OpenSpec planning: `prepare-klaudia-editing`,
  `story-chapters-and-predictions`, and three archives:
  `2026-07-18-rebuild-astro-port-landing`, `2026-07-19-add-guest-info-pages`, and
  `2026-10-25-agent-ready-repository-docs` (CLI archive date in UTC). Together these contain 38 Markdown and five
  YAML files. Historical plans were inspected as evidence, not treated as current
  implementation. Only this repository-context change's artifacts were updated here.
- `.opencode/`: six generated command and six skill Markdown files were
  inventoried as local OpenSpec integration. They are ignored scaffolding, not a
  second policy source or deliverable.
- Dependencies, `dist/`, `.astro/`, `.git/` internals, generated Husky internals,
  caches, and Finder metadata were excluded from exhaustive content review.
  Lockfile package/engine metadata was inspected rather than every transitive
  package. `.env` values were not printed or included in evidence files.
- No third-party test framework, sitemap, transport module/route, API,
  database, or server adapter was found. `.editorconfig` retains unrelated C#
  settings; they do not describe a C# application in this repository.

### Asset reconciliation

There are 41 image files: 33 history JPEGs, four landing JPEGs, three icons, and
one avatar. The archive references all 33 history files exactly once. The current
story references 19 unique history files, leaving 14 archive-only images.
All references resolve; archive-only images remain owned assets.

The story's 16 explicit photo width/height pairs match display-oriented metadata.
Three JPEGs have EXIF rotation, so their raw pixel width/height are reversed from
the intended display: `27.02.2022.jpg`, `12.04.2025-2.jpg`, and `27.09.2022.jpg`.
The other three story references belong to its optional slideshow. Raw `sips`
dimensions alone must not be used to "correct" rotated images. This audit checked
metadata and mappings; it was not a fresh visual review of every photograph.

## Reference material

All **13 Markdown files** in the supplied `Downloads/repo-context/` example were
reviewed; its `.DS_Store` was excluded. ShopFlow is an example system, not a KR
dependency or source of product requirements.

Each source has a **distinct counterpart: 13/13 files**. KR retains its lowercase
docs naming and root glossary; the correspondence is by purpose and structure.

| Reference file                                    | KR counterpart                                                                     | Adaptation / relationship                                                                             |
| ------------------------------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `AGENTS.md`                                       | [AGENTS.md](../AGENTS.md)                                                          | Task-triggered router to all document types instead of loading every file on routine edits            |
| `CLAUDE.md`                                       | [CLAUDE.md](../CLAUDE.md)                                                          | One-line import of AGENTS; no duplicate client policy                                                 |
| `docs/INVARIANTS.md`                              | [invariants.md](invariants.md)                                                     | Product boundaries linked to source, contracts, and verification                                      |
| `docs/ARCHITECTURE.md`                            | [architecture.md](architecture.md)                                                 | Static composition and edit map, linked to flows, external boundaries, and decisions                  |
| `docs/FLOWS.md`                                   | [flows.md](flows.md)                                                               | Triggers, transitions, and state lifetime linked to source and quality checks                         |
| `docs/API.md`                                     | [api.md](api.md)                                                                   | Static surface and external contracts, explicitly recording the absence of application endpoints      |
| `docs/GLOSSARY.md`                                | [GLOSSARY.md](../GLOSSARY.md)                                                      | Wedding/editorial vocabulary, referenced by coding standards and the router                           |
| `docs/SETUP.md`                                   | [setup.md](setup.md)                                                               | Fresh-checkout setup, linked to configuration, quality, and the Polish session guide                  |
| `docs/CODING_STANDARDS.md`                        | [coding-standards.md](coding-standards.md)                                         | Naming, content, Astro/client code, CSS, images, and formatting; working modes remain in contributing |
| `docs/QUALITY.md`                                 | [quality.md](quality.md)                                                           | Actual tooling and focused checks, linked to flows, contracts, and authorization                      |
| `adr/0001-record-architecture-decisions.md`       | [0002-record-architecture-decisions.md](adr/0002-record-architecture-decisions.md) | Decision-record practice, linked to the template and existing decision                                |
| `adr/0002-use-tanstack-query-for-server-state.md` | [0001-typed-content-for-editing.md](adr/0001-typed-content-for-editing.md)         | KR's existing trade-off, alternatives, and consequences; no imported React/server-state choice        |
| `adr/TEMPLATE.md`                                 | [TEMPLATE.md](adr/TEMPLATE.md)                                                     | Reusable context/decision/alternatives/consequences format with truthful status and authority         |

Relationship checks cover Claude -> AGENTS -> task documents, architecture ->
flows/API/ADR, standards -> glossary/invariants/quality, setup -> session guide,
and ADR practice <-> template. Every counterpart is reachable from the router;
local links and heading anchors are checked across the documentation tree.

No ShopFlow stack, database, coverage thresholds, deployment model, or invented
decision-approval history was adopted.

## Known gaps

The current domain contracts match the retained website. Historical requirements
for a separate transport section, a minimal public plan, absent FAQ topics, old
group travel arrangements, and a separate post-event state were removed or aligned
at Rafał's request. They are not pending requirements or decisions.

Consent and preview now handle unavailable storage, with
[focused regression tests](../tests/browser-storage.test.js). The schedule label
is Polish. Configuration names and limits remain documented in [API boundaries](api.md);
the actual automated/manual coverage is in [quality](quality.md).

Further investigation belongs in [the roadmap](roadmap.md), which records the
poprawiny timing question sent to Klaudia's agent, future post-wedding presentation,
the couple's review of publicly reachable working details, and physical phone
verification. These are separate follow-ups, not unfinished tasks in this change.

## Remote evidence

Read-only GitHub queries on 26 October 2026 (local date; 25 October UTC) confirmed:

- [PR #3](https://github.com/rafalschmidt97/kr/pull/3) is open, non-draft,
  `klaudia/strona` -> `main`, with head
  `90ed87d722f0fa486a8096f554ce70965483b101`.
- Pages uses workflow builds, the custom domain `klaudiarafal.pl`, and enforced
  HTTPS. Its recorded source branch is `main`; this does not prevent an allowed
  editing-branch workflow dispatch from replacing the same public site.
- The `github-pages` environment uses custom branch policies with exactly
  `main` and `klaudia/strona` allowed. The returned protection rules contained
  branch policy only, not a required-reviewer gate. Manual-merge and explicit
  publication rules are operational policy, not guarantees enforced by that list.

Sources: `gh pr view 3`, and read-only `gh api` requests to repository `/pages`,
`/environments/github-pages`, and its `/deployment-branch-policies` endpoint.
Remote state can change; recheck it when an authorized operation depends on it.
This audit did not publish or establish which dirty local changes are live, and
did not test physical phone connectivity or the separate apartment destination.
