# guest-group-pages Specification

## Purpose

TBD - created by archiving change add-guest-info-pages. Update Purpose after archive.

## Requirements

### Requirement: Hidden per-group logistics pages

The site SHALL provide hidden, direct-link-only pages for specific guest groups, each showing that group's hotel and its group-specific outbound bus, plus the RSVP note. These pages SHALL be excluded from navigation.

#### Scenario: Out-of-town guests page

- **WHEN** a visitor opens `/goscie-zamiejscowi`
- **THEN** it shows Grein Hotel details (Fri→Sun, breakfast both days) and the group's outbound bus (zbiórka time) to the church

#### Scenario: Venue-overnight guests page

- **WHEN** a visitor opens `/villa-presto-nocleg`
- **THEN** it shows Villa Presto / Karczma overnight details (Saturday only) and that group's transfer to the church

#### Scenario: Poprawiny page

- **WHEN** a visitor opens `/poprawiny`
- **THEN** it shows the Sunday afterparty at Siedlisko Cztery Drogi, the optional Sun→Mon extra night, and the small bus to Grodzisko and Rzeszów

### Requirement: Hidden pages excluded from indexing

Hidden guest-group pages SHALL be marked to prevent search-engine indexing and SHALL NOT be linked from public navigation or a sitemap.

#### Scenario: Not indexed

- **WHEN** a hidden page is served
- **THEN** it includes a `noindex` robots directive

#### Scenario: Not discoverable via nav or sitemap

- **WHEN** the site navigation and sitemap are inspected
- **THEN** no links to hidden pages are present

## Notes

### Content architecture trade-off (`src/data/*.ts`)

Site content (guest groups, timeline, FAQ, plan, transport) lives in typed
`src/data/*.ts` arrays rendered by components, rather than the more idiomatic
Astro patterns — inline HTML in `.astro` files for small one-off content, or
Content Collections (Markdown/MDX + Zod) for entry-style content like the
timeline. This is a deliberate, acknowledged choice, not a requirement of Astro.

- **Why:** the site was built through many rapid, small content edits
  (rename/merge/reorder timeline entries, tweak copy). Editing one typed array
  is faster and less error-prone than hand-editing nested JSX. `groups.ts`
  genuinely earns its keep by driving both the hidden pages and the preview
  panel from a single source of truth.
- **Cost:** more `.ts` files than a static wedding site strictly needs; some
  (`faq.ts`, `plan.ts`) are used exactly once, so the data layer is arguably
  overkill for them.
- **Decision:** keep as-is (works, typed, content easy to edit in one place). To
  make the repo read as idiomatic Astro later, fold `faq.ts`/`plan.ts` into
  their components and move `timeline` to a Content Collection. The unused
  `venues` export in `site.ts` was removed as dead code.
