# collaborative-editing Specification

## Purpose

Let Klaudia request and review website changes without developer tools, while
keeping production publication explicit and manual merge ownership with Rafał.

## Requirements

### Requirement: Branch-only agent editing

The agent SHALL make Klaudia's changes on an editing branch with a PR targeting main. Rafał SHALL perform the merge manually. Communication with Klaudia SHALL use nontechnical Polish.

#### Scenario: Klaudia requests an edit

- **WHEN** Klaudia requests a text, photo, or layout change
- **THEN** the agent updates the editing branch, validates it, refreshes the local preview, and keeps the PR current without merging

### Requirement: Phone preview over LAN

The project SHALL provide a preview of the static build reachable from the Mac's local hostname or LAN IP. The editing guide SHALL explain Wi-Fi, Mac availability, refreshing builds, and hidden-page navigation.

#### Scenario: Local review

- **WHEN** the Mac is awake and the phone is on the same reachable network
- **THEN** Safari can request the preview on port 4321 without publishing to GitHub Pages

### Requirement: Explicit production publication

The agent SHALL dispatch production deployment only after an explicit request to publish. Local preview approval, committing, pushing, and opening a PR SHALL NOT count as publication requests.

#### Scenario: Preview approved

- **WHEN** Klaudia approves a local edit without asking to publish
- **THEN** the public site remains unchanged
