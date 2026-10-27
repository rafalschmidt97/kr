# 0002: Record consequential architecture decisions

- Status: Documented repository practice
- Recorded: 2026-10-26
- Basis: The repository-context assignment and Rafał's request for corresponding reference document types

## Context

The typed-content rationale was embedded in a guest-group specification, where
an agent looking at another page could miss it. Refactoring that choice without
its editing-workflow context would undo a deliberate trade-off.

## Decision

Keep consequential, surprising trade-offs under `docs/adr/`, using the next
available four-digit number and the [template](TEMPLATE.md). Link them from the
relevant architecture or task router. Record alternatives and accepted costs;
routine copy edits need no ADR. Mark a new, undecided proposal as Proposed and
record acceptance only when the user actually decides. A changed decision gets
a new record linking to the one it supersedes; preserve the earlier rationale.

## Alternatives considered

- A note inside each feature spec keeps context nearby but scatters shared
  rationale and confuses a design choice with an acceptance requirement.
- Conversation-only decisions avoid another file but are hard to discover in
  later agent sessions.

## Consequences

The [typed-content record](0001-typed-content-for-editing.md) preserves the existing
decision without claiming a new architecture approval. [Contributing](../contributing.md#documentation-maintenance)
routes decision maintenance here; [OpenSpec](../contributing.md#openspec) continues
to own change proposals and acceptance contracts.
