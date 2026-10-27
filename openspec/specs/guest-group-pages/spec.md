# guest-group-pages Specification

## Purpose

Define direct-link logistics pages for guest groups and their indexing boundary,
using the accommodation and travel arrangements currently authored for each group.

## Requirements

### Requirement: Hidden per-group logistics pages

The site SHALL provide hidden, direct-link-only pages for specific guest groups, each showing its authored accommodation or gathering place, travel guidance, and RSVP note. These pages SHALL be excluded from ordinary public navigation.

#### Scenario: Out-of-town guests page

- **WHEN** a visitor opens `/goscie-zamiejscowi`
- **THEN** it shows Grein Hotel details (Fri→Sun, breakfast both days) and the group's outbound bus (zbiórka time) to the church

#### Scenario: Venue-overnight guests page

- **WHEN** a visitor opens `/villa-presto-nocleg`
- **THEN** it shows Villa Presto / Karczma overnight details for Saturday to Sunday and provisional Sunday breakfast information
- **AND** it instructs guests to arrange their own travel to and from the church, with earlier contact if they need a seat on the shared return coach

#### Scenario: Poprawiny page

- **WHEN** a visitor opens `/poprawiny`
- **THEN** it shows the Sunday gathering at Siedlisko Cztery Drogi, travel from Rzeszów via Grodzisko and the surrounding area, and return arrangements
- **AND** it explains that Sunday-to-Monday accommodation remains in Rzeszów and marks provisional bus details as tentative

### Requirement: Hidden pages excluded from indexing

Hidden guest-group pages SHALL be marked to prevent search-engine indexing and SHALL NOT be linked from public navigation or a sitemap.

#### Scenario: Not indexed

- **WHEN** a hidden page is served
- **THEN** it includes a `noindex` robots directive

#### Scenario: Not discoverable via nav or sitemap

- **WHEN** the site navigation and sitemap are inspected
- **THEN** no links to hidden pages are present

## Notes

The acknowledged typed-content trade-off is recorded in
[ADR-0001](../../../docs/adr/0001-typed-content-for-editing.md). Current content
ownership and explicit route/slug wiring are in
[architecture](../../../docs/architecture.md#routes-and-content-owners).
