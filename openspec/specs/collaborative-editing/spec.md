# collaborative-editing Specification

## Purpose

Define the distinct nontechnical editing and developer workflows, responsive
collaboration, and discoverable repository guidance. Operational rules and
authorization live in [the contribution guide](../../../docs/contributing.md);
this contract records their acceptance scenarios.

## Requirements

### Requirement: Branch-only agent editing

The agent SHALL make Klaudia's changes on an editing branch with a PR targeting main. Rafał SHALL perform the merge manually. Communication with Klaudia SHALL use nontechnical Polish.

#### Scenario: Klaudia requests an edit

- **WHEN** Klaudia requests a text, photo, or layout change
- **THEN** the agent edits locally on the editing branch, refreshes the preview, and performs only checks proportionate to that change
- **AND** commits, pushes, PR updates, and CI verification are deferred until the user requests saving the batch or finishing the session

#### Scenario: User finishes a batch

- **WHEN** the user asks to save the batch or finish the editing session
- **THEN** the agent validates the accumulated changes, commits and pushes them, and verifies CI on the existing PR without merging or publishing

### Requirement: Responsive background work

The coordinator SHALL keep local editing and conversation responsive by running independent checks and long-running operations asynchronously. Batched Git work MAY be delegated after its scope is fixed. Concurrent workers SHALL have nonoverlapping write scopes and a single owner of Git mutations.

#### Scenario: Feedback arrives during checks

- **WHEN** the user sends another question or change while background checks are running
- **THEN** the coordinator handles the feedback without waiting for those checks and distinguishes preview readiness from pending verification

#### Scenario: Background batch save

- **WHEN** the user requests saving a batch and Git work is delegated
- **THEN** the worker commits only the agreed stable scope, while new feedback is accepted without racing edits or Git mutations

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

### Requirement: Developer working mode

The repository SHALL document a developer workflow for Rafał alongside Klaudia's nontechnical editing workflow. It SHALL distinguish implementation scope, saving a batch, production publication, and manual merge ownership. Nontrivial changes SHALL use OpenSpec with proportionate validation. A developer request SHALL NOT implicitly authorize unrelated mutations or bypass the current branch and publication rules.

#### Scenario: Rafał requests an implementation

- **WHEN** Rafał requests a nontrivial technical change
- **THEN** the agent establishes scope, relevant contracts and trade-offs, implements the authorized work, and reports verification against its source snapshot
- **AND** saving, publishing, and merging remain governed by their separate authorization boundaries

#### Scenario: Planning for a nontechnical request

- **WHEN** Klaudia requests a change requiring nontrivial planning
- **THEN** the agent handles the necessary artifacts while keeping the conversation in Polish about visible choices
- **AND** only genuinely missing content or consequential intent requires a question

### Requirement: Evidence-based repository context

The repository SHALL provide a concise agent entry point with task-triggered links to authoritative product boundaries, contribution/style guidance, architecture and content ownership, local preview operations, and verification. Documentation SHALL distinguish observed implementation from policy and unresolved contract gaps. Shared guidance SHALL have one maintained home, with client-specific entry points acting only as pointers.

#### Scenario: Agent starts a scoped task

- **WHEN** an agent reads the repository entry point
- **THEN** it can identify the relevant workflow, source paths, constraints, and completion checks without loading every document

#### Scenario: Documentation and implementation disagree

- **WHEN** investigation finds a contract/implementation discrepancy
- **THEN** the agent records the evidence and unresolved decision without inventing facts or silently changing product requirements

#### Scenario: Work completes in the background

- **WHEN** a background worker reports verification
- **THEN** its result identifies the checked commit or dirty-file snapshot, its exact write scope, and outstanding checks
- **AND** changed files are rechecked before an earlier result is applied to newer work
