# event-plan Specification

## Purpose

Define the guest-facing wedding-day schedule, including ceremony, reception,
shared transport, and provisional details.

## Requirements

### Requirement: Ceremony and reception details

The plan section SHALL present the wedding-day schedule in authored order, including the church ceremony and Villa Presto reception with locations, map links, and start/arrival times. It SHALL include the authored meals, celebrations, and shared transport entries, with provisional times clearly marked.

#### Scenario: Ceremony details shown

- **WHEN** a visitor views the plan section
- **THEN** the church (Parafia św. Andrzeja Apostoła, Chałupki Dębniańskie) and its 14:00 start time are shown with a map link

#### Scenario: Reception details shown

- **WHEN** a visitor views the plan section
- **THEN** the Villa Presto reception is shown with a map link

#### Scenario: Detailed guest schedule

- **WHEN** the plan section is displayed
- **THEN** the authored ceremony, reception, meals, celebrations, and bus entries are shown in order
- **AND** entries marked tentative display a confirmation notice
