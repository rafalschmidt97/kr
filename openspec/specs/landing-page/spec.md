# landing-page Specification

## Purpose

TBD - created by archiving change rebuild-astro-port-landing. Update Purpose after archive.

## Requirements

### Requirement: Landing page content

The landing page SHALL display the couple names "Klaudia & Rafał" and the Polish intro copy describing the wedding date and venue, and SHALL form the top (hero) section of a single scrolling page that also contains the plan, transport, and FAQ sections.

#### Scenario: Landing renders core content

- **WHEN** a visitor opens the site root
- **THEN** the couple names "Klaudia & Rafał" are shown
- **AND** the intro copy states the wedding is on 10 July 2027 at Villa Presto

#### Scenario: Landing is the top of the single page

- **WHEN** the site root loads
- **THEN** the hero is the first section
- **AND** anchor navigation is available to reach the plan, transport, and FAQ sections on the same page

### Requirement: Background photo slideshow

The landing page SHALL show a fullscreen background slideshow that cycles through the four landing photos with a dark overlay, advancing automatically.

#### Scenario: Slideshow auto-advances

- **WHEN** the landing page is displayed
- **THEN** the background shows one of the four photos with a dark overlay
- **AND** the visible photo changes automatically every 5 seconds, cycling through all four

#### Scenario: Content is legible over photos

- **WHEN** any slide is visible
- **THEN** a dark overlay keeps the couple names and copy legible

### Requirement: Calendar download and venue map links

The landing page SHALL provide a download link for the `wedding.ics` calendar file and a link to the Villa Presto location on Google Maps.

#### Scenario: Calendar file downloads

- **WHEN** a visitor activates the date/calendar link
- **THEN** the `wedding.ics` file is downloaded

#### Scenario: Map link opens venue

- **WHEN** a visitor activates the venue link
- **THEN** the Villa Presto location opens on Google Maps in a new tab

### Requirement: Responsive layout

The landing page SHALL render correctly on mobile and desktop viewports.

#### Scenario: Mobile rendering

- **WHEN** the landing page is viewed on a narrow (mobile) viewport
- **THEN** the couple names and copy remain readable and correctly laid out
