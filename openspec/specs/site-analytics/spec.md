# site-analytics Specification

## Purpose

Define optional analytics and remembered consent before Google tracking loads.

## Requirements

### Requirement: Optional Google Analytics integration

The site SHALL support Google Analytics, enabled only when a tracking ID is configured (e.g. via a build-time environment variable / site config). When no tracking ID is configured, the site SHALL function normally without loading any analytics.

#### Scenario: Analytics enabled and consented

- **WHEN** a tracking ID is configured
- **AND** a visitor accepts analytics cookies
- **THEN** Google Analytics is loaded with that tracking ID and page views are tracked

#### Scenario: Analytics not configured

- **WHEN** no tracking ID is configured
- **THEN** no Google Analytics loader or tracking request is made
- **AND** the site renders and functions normally

### Requirement: Cookie consent gating

When analytics is configured, it SHALL only run after the visitor has given consent via a cookie-consent banner. The choice SHALL be persisted when browser storage is available; unavailable storage SHALL NOT prevent the current-page choice from working.

#### Scenario: Banner shown to new visitor

- **WHEN** analytics is configured
- **AND** a visitor arrives without a stored consent choice
- **THEN** a cookie-consent banner is displayed with accept and reject options

#### Scenario: Consent respected

- **WHEN** analytics is configured
- **AND** a visitor rejects analytics cookies
- **THEN** Google Analytics is not loaded

#### Scenario: Choice persisted

- **WHEN** a visitor has already made a consent choice
- **AND** browser storage retained that choice
- **THEN** the banner is not shown again and the prior choice is honored

#### Scenario: Browser storage unavailable

- **WHEN** reading or writing the consent choice fails
- **THEN** accept and reject remain usable for the current page
- **AND** Google Analytics loads only after acceptance or a successfully read stored acceptance
- **AND** a later page load asks again if no choice was retained

#### Scenario: No banner when analytics disabled

- **WHEN** no tracking ID is configured
- **THEN** no analytics consent banner is required for analytics purposes
