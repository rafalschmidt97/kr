# wedding-countdown Specification

## Purpose

TBD - created by archiving change rebuild-astro-port-landing. Update Purpose after archive.

## Requirements

### Requirement: Countdown to the wedding date

The site SHALL display a client-side countdown to 2027-07-10, computed with calendar-based arithmetic (years, months, days) rather than fixed-length units.

#### Scenario: Countdown shows remaining time

- **WHEN** the landing page loads before the wedding date
- **THEN** an inline countdown displays the remaining time as years, months, and days (e.g. "za 1 rok, 8 miesięcy i 22 dni")

#### Scenario: Calendar-based arithmetic

- **WHEN** the remaining time is computed
- **THEN** month and day boundaries account for varying month lengths (calendar arithmetic, not 30-day approximations)

### Requirement: Polish grammatical pluralization

The countdown SHALL apply correct Polish pluralization for years, months, and days.

#### Scenario: Correct plural forms

- **WHEN** a unit value is rendered
- **THEN** the correct Polish form is used (e.g. "1 rok", "2 lata", "5 lat"; "1 miesiąc", "3 miesiące", "8 miesięcy"; "1 dzień", "5 dni")

#### Scenario: Zero-value units omitted

- **WHEN** a unit (years, months, or days) is zero
- **THEN** that unit is omitted and the remaining units are joined naturally with commas and "i"

### Requirement: Wedding-day and past states

The countdown SHALL show an appropriate message on and after the wedding date.

#### Scenario: On the wedding day

- **WHEN** the current date is the wedding date
- **THEN** the countdown shows "dzisiaj" (or equivalent) instead of a duration
