# our-story Specification

## Purpose

TBD - created by archiving change add-guest-info-pages. Update Purpose after archive.

## Requirements

### Requirement: Relationship timeline page

The Our Story page SHALL present the couple's relationship timeline as dated entries on a standalone route (`/historia`), kept off the home hero.

#### Scenario: Timeline shown on its own page

- **WHEN** a visitor opens `/historia`
- **THEN** the relationship timeline is shown as a list of dated milestones ending with the wedding date

#### Scenario: Not on the home hero

- **WHEN** the site root loads
- **THEN** the full timeline is not rendered in the hero; only a link to `/historia` is offered
