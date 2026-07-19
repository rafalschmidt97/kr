# guest-faq Specification

## Purpose

TBD - created by archiving change add-guest-info-pages. Update Purpose after archive.

## Requirements

### Requirement: Practical FAQ

The FAQ section SHALL answer common practical guest questions in Polish, covering dress code, RSVP method, children policy, parking, transport overview, dietary needs, gifts, and approximate weather.

#### Scenario: Core questions answered

- **WHEN** a visitor views the FAQ
- **THEN** it includes dress code, children policy, parking, dietary needs, and approximate weather

#### Scenario: Gifts guidance shown

- **WHEN** a visitor reads the gifts entry
- **THEN** it communicates no flowers/gifts, envelopes welcome, no raffles, and asks for confirmation three months before

### Requirement: RSVP via personal channels

Wherever RSVP is referenced, the site SHALL instruct guests to confirm by phone, WhatsApp, or Messenger, and SHALL NOT present a web RSVP form.

#### Scenario: RSVP note present

- **WHEN** a visitor reads an RSVP reference
- **THEN** it asks them to confirm via phone / WhatsApp / Messenger

#### Scenario: No web form

- **WHEN** any page is displayed
- **THEN** no web RSVP form is present
