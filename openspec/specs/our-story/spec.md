# our-story Specification

## Purpose

Define the standalone relationship story and its truthful, page-memory Wedding Predictions interaction without changing the rest of the static wedding website.

## Requirements

### Requirement: Relationship chapter narrative page

The Our Story page SHALL present the couple's supplied Polish narrative on the existing standalone `/historia` route rather than a list of dated milestones. It SHALL use the title "Zaskakująco dobry plan" and subtitle "Niektóre rzeczy zaplanowaliśmy. Inne po prostu się wydarzyły." The full story SHALL remain off the homepage.

The page SHALL present exactly seven chapters numbered 01-07 in this order:

- 01 Tak to się zaczęło: Kraków and the pandemic.
- 02 Własne ścieżki, wspólne plany: studies and shared plans.
- 03 Zawsze w ruchu: sports and travel.
- 04 Zmiana otoczenia: Kraków to Warszawa.
- 05 Nawet najlepsze plany: the Malta/Gozo proposal.
- 06 Nasza codzienność: family, friends, and everyday life.
- 07 Jeszcze nienapisany rozdział: the wedding, with the final subtitle "10 lipca 2027 · Ciąg dalszy nastąpi".

"Własne ścieżki, wspólne plany" SHALL be a single chapter title. Chapter labels SHALL use "Rozdział". There SHALL NOT be an extra epilogue. Supplied Polish paragraphs and prediction questions SHALL retain their exact wording. All visitor-visible text SHALL always be Polish, including headings, subtitles, labels, controls, notices, placeholders, and accessible text, even when a brief supplies English wording. There SHALL be no English-editorial exception and no i18n. Ordinary code identifiers MAY remain English when they are not shown to visitors.

#### Scenario: Chapter story shown on its own page

- **WHEN** a visitor opens `/historia`
- **THEN** the editorial title, subtitle, and exactly seven numbered chapters appear in the specified order with the supplied Polish narrative
- **AND** chapter 07 is "Jeszcze nienapisany rozdział", with the subtitle "10 lipca 2027 · Ciąg dalszy nastąpi" and no extra epilogue
- **AND** the story is not presented as a dated timeline

#### Scenario: English wording appears in a brief

- **WHEN** an editorial brief supplies an English heading, subtitle, label, or other visitor-visible wording
- **THEN** the page still presents only Polish visitor-visible text, using the exact approved Polish titles and subtitles
- **AND** no English wording from the brief is rendered as an editorial exception

#### Scenario: Not on the home hero

- **WHEN** the site root loads
- **THEN** the full story is not rendered in the hero; only the existing link to `/historia` is offered

### Requirement: Responsive reportage and preserved owned photographs

The story SHALL use mixed responsive text/photo compositions with Manrope, white or off-white backgrounds, gray typography, and subtle warm gold accents. "Zawsze w ruchu" SHALL include a 5-7-photo sports/travel mosaic. Photographs SHALL come only from existing owned assets; missing appropriate chapter photos SHALL use honest tasteful placeholders rather than stock couples or misleading substitutions. All original photo assets and the `timeline.ts` archive mapping SHALL be preserved unchanged.

#### Scenario: Story read on desktop and mobile

- **WHEN** a visitor views `/historia` on desktop or a narrow mobile screen
- **THEN** the compositions adapt without horizontal overflow, preserve the narrative reading order, and keep text and images legible
- **AND** the sports/travel chapter includes its 5-7-photo mosaic

#### Scenario: Appropriate photo is unavailable

- **WHEN** no suitable existing owned photo is available for a chapter
- **THEN** that chapter uses an intentional placeholder rather than an invented or stock-couple photograph
- **AND** original assets and the archive mapping remain intact

### Requirement: Editable Wedding Predictions interaction

The story page SHALL embed the predictions interaction naturally and directly after chapter 07, using the label "Weselne przewidywania", title "Studium kontrolowanego chaosu", and subtitle "Starannie zaplanowane. Całkowicie nieprzewidywalne." Exactly five draft questions SHALL be defined in an easily editable typed data module, with exactly four answers per question. Existing supplied Polish questions and answers SHALL remain unchanged. The interaction SHALL permit one radio selection per question, previous/next navigation preserving selections within the loaded page, and an optional name at the end. Controls SHALL have Polish accessible labels and support keyboard operation.

#### Scenario: Choose and revise an answer

- **WHEN** a visitor selects an answer, moves to another question, and returns with the previous control
- **THEN** the previously selected answer remains selected
- **AND** choosing a different answer replaces that question's earlier selection rather than adding another

#### Scenario: Reach the final step without a name

- **WHEN** a visitor navigates through the five questions to the final step
- **THEN** an optional name field is available
- **AND** leaving the name empty does not produce a required-field error

### Requirement: Truthful non-persistent predictions

Predictions SHALL be a UI-only interaction using page-memory state. The page SHALL clearly disclose in Polish that answers and the optional name are not sent and not durably saved. It SHALL NOT introduce a backend, API submission, cookies, localStorage, sessionStorage, or other persistence for this interaction. It SHALL NOT show success acknowledgements suggesting submission or saving, nor guest-visible results or statistics. A real future persistence implementation SHALL be required before any submission-success UI can be enabled.

#### Scenario: Visitor answers questions and reaches the end

- **WHEN** a visitor uses the prediction controls or enters an optional name
- **THEN** the page keeps that interaction data only in memory without transmitting or persisting it
- **AND** the not-sent/not-durably-saved notice is visible before interaction and at the final step
- **AND** no submission-success message, results, or statistics appear

#### Scenario: Fresh page load

- **WHEN** a visitor reloads or freshly opens `/historia`
- **THEN** no previous answers or optional name are restored from storage

### Requirement: Story-only change scope

This change SHALL affect only `/historia` and its dedicated content, components, styles, and scripts. It SHALL NOT add a route or change navigation, shared Base styles, other pages, countdown arithmetic or Polish pluralization, RSVP boundaries, analytics consent behavior, or static GitHub Pages architecture. Production publication SHALL require a separate explicit request.

#### Scenario: Existing site behavior is retained

- **WHEN** the story redesign is implemented
- **THEN** existing routes, navigation, shared styling, other pages, countdown, external RSVP handling, and consent-gated optional analytics remain unchanged
- **AND** no server, database, serverless function, or unrequested production deployment is introduced
