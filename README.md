# Klaudia & Rafał

[klaudiarafal.pl](https://klaudiarafal.pl) is our Polish-language wedding site for
10 July 2027 at Villa Presto. It includes the landing/countdown, day plan, FAQ,
the seven-chapter "Nasza historia" with a page-memory predictions preview, and
direct-link logistics pages. The current working-tree story is described in
the [story contract](openspec/specs/our-story/spec.md).

## Local development

Follow [local setup](docs/setup.md) for Node/npm prerequisites, installation,
development, and a production-like preview. For an existing editing session,
reuse its server and follow [the phone-preview guide](docs/editing-session.md),
including its stale-CSS and process-ownership notes.

## Find the right document

- Agents: [AGENTS.md](AGENTS.md). Claude Code enters through [CLAUDE.md](CLAUDE.md).
- Where to edit: [architecture and routes](docs/architecture.md),
  [browser flows](docs/flows.md), and [API/external boundaries](docs/api.md).
- How to work: [Klaudia/Rafał modes and authorization](docs/contributing.md),
  [coding/content standards](docs/coding-standards.md).
- What must hold: [invariants](docs/invariants.md) and [OpenSpec contracts](openspec/specs/).
- How to verify: [quality guide](docs/quality.md).
- Why typed content: [decision record](docs/adr/0001-typed-content-for-editing.md).
- How to record decisions: [ADR practice and template](docs/adr/0002-record-architecture-decisions.md).
- Terminology: [glossary](GLOSSARY.md). Verified audit coverage:
  [repository inventory](docs/repository-inventory.md).
- Further investigation and content decisions: [roadmap](docs/roadmap.md).

Astro produces static files for GitHub Pages. Build/deploy mechanics and browser
configuration are mapped in [architecture](docs/architecture.md#build-and-external-boundaries).
Publishing is a separate operation governed by
[authorization](docs/contributing.md#authorization-and-git); operational steps
are in [the editing guide](docs/editing-session.md#publikacja-i-przywracanie).
