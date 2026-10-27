# guest-faq Specification

## Purpose

Define the current practical guest guidance and personal-channel attendance
confirmation.

## Requirements

### Requirement: Practical FAQ

The FAQ section SHALL answer practical guest questions in Polish, covering RSVP method and deadline, gifts, parking, transport overview, and dietary needs.

#### Scenario: Core questions answered

- **WHEN** a visitor views the FAQ
- **THEN** it includes RSVP, gifts, parking, transport, and dietary guidance

#### Scenario: Gifts guidance shown

- **WHEN** a visitor reads the gifts entry
- **THEN** it states that envelopes are preferred instead of flowers, lottery tickets, bottles, or gifts

#### Scenario: Confirmation deadline shown

- **WHEN** a visitor reads the RSVP answer
- **THEN** it asks for confirmation no later than three months before the wedding

### Requirement: RSVP via personal channels

Wherever RSVP is referenced, the site SHALL instruct guests to confirm by phone, WhatsApp, or Messenger, and SHALL NOT present a web RSVP form.

#### Scenario: RSVP note present

- **WHEN** a visitor reads an RSVP reference
- **THEN** it asks them to confirm via phone / WhatsApp / Messenger

#### Scenario: No web form

- **WHEN** any page is displayed
- **THEN** no web RSVP form is present
