# site-navigation Specification

## Purpose

TBD - created by archiving change add-guest-info-pages. Update Purpose after archive.

## Requirements

### Requirement: Single-page anchor navigation

The main site SHALL be a single scrolling page whose primary sections (hero, plan, transport, FAQ) are reachable via anchor navigation, with a link to the separate Our Story page.

#### Scenario: Anchor navigation jumps to sections

- **WHEN** a visitor selects a navigation item for a main section
- **THEN** the page scrolls to that section on the same page

### Requirement: Separate and hidden routes

The site SHALL provide a separate Our Story route and hidden guest-group routes. Hidden routes SHALL NOT appear in navigation.

#### Scenario: Our Story is its own route

- **WHEN** a visitor opens `/historia`
- **THEN** the Our Story page is shown as a standalone page

#### Scenario: Hidden routes are unlinked

- **WHEN** a visitor views the main navigation
- **THEN** no links to the hidden guest-group routes are present

### Requirement: Consistent top navigation on interior pages

Interior pages (Our Story and the hidden guest-group pages) SHALL show the same top navigation (Plan, FAQ, Nasza historia) as the main page, so guests can move back to the main sections. The current page SHALL be indicated where applicable.

#### Scenario: Interior page shows navigation

- **WHEN** a visitor opens `/historia` or a hidden guest-group page
- **THEN** a top navigation with links to Plan, FAQ, and Nasza historia is shown
- **AND** the Plan and FAQ links point back to the corresponding sections on the main page

### Requirement: Preview mode for hidden pages

The site SHALL support a client-side preview flag that reveals links to the hidden guest-group pages for the couple's own review, without changing what regular guests see. Hidden pages SHALL remain reachable by direct URL independently of the flag.

#### Scenario: Preview flag reveals hidden-page links

- **WHEN** a visitor loads the site with `?preview=1`
- **THEN** a small preview panel lists links to all hidden guest-group pages

#### Scenario: Preview choice is remembered

- **WHEN** the preview flag has been activated once in the browser
- **THEN** the preview panel remains available on subsequent visits without re-adding the query parameter

#### Scenario: Regular visitors unaffected

- **WHEN** a visitor loads the site without ever activating the preview flag
- **THEN** no preview panel and no hidden-page links are shown
- **AND** hidden pages remain reachable by their direct URL
