# Agent entry point

KR is Klaudia and Rafał's Polish wedding website, built with static Astro and
served at [klaudiarafal.pl](https://klaudiarafal.pl). Start from the working tree,
including uncommitted files, rather than assuming HEAD is the current design.

## Before acting

Read [contributing: working modes and authorization](docs/contributing.md#working-modes)
to select Klaudia's fast, nontechnical Polish editing loop or Rafał's developer
workflow. The same page owns branch/PR, batch-save, publication, manual-merge,
and parallel-work rules. A task's narrower write scope remains binding.

Read [invariants](docs/invariants.md) before changing visitor behavior, assets,
dependencies, or build/deploy configuration. It owns the static-site, Polish-copy,
external-RSVP, countdown, analytics, hidden-page, and prediction-state boundaries.

## Load by task

| Task                                                                              | Read before editing                                                                                                                                                    |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Find a page or content owner                                                      | [Architecture](docs/architecture.md)                                                                                                                                   |
| Change browser state or an external boundary                                      | [Flows](docs/flows.md) and [API / external contracts](docs/api.md)                                                                                                     |
| Change code, copy, or documentation                                               | [Coding/content standards](docs/coding-standards.md), [maintenance](docs/contributing.md#documentation-maintenance), and [proportionate verification](docs/quality.md) |
| Set up a fresh checkout                                                           | [Setup](docs/setup.md)                                                                                                                                                 |
| Start/resume a session, refresh phone preview, receive photos, publish or restore | [Polish operations guide](docs/editing-session.md)                                                                                                                     |
| Plan a nontrivial change                                                          | [OpenSpec workflow](docs/contributing.md#openspec), [project context](openspec/config.yaml), then the relevant [domain spec](openspec/specs/)                          |
| Interpret wedding/editorial terms                                                 | [Glossary](GLOSSARY.md)                                                                                                                                                |
| Reconsider typed content modules                                                  | [Recorded trade-off](docs/adr/0001-typed-content-for-editing.md)                                                                                                       |
| Record a consequential architecture decision                                      | [ADR practice and template](docs/adr/0002-record-architecture-decisions.md)                                                                                            |
| Audit the whole repo or resolve stale guidance                                    | [Coverage and known gaps](docs/repository-inventory.md)                                                                                                                |

## Finish the scoped task

Put follow-up investigation or unresolved content choices in [the roadmap](docs/roadmap.md).
Use the completion criteria in [quality](docs/quality.md#completion-evidence).
Report the visible outcome, checked snapshot, and any pending work. Update the
authoritative document when its [maintenance trigger](docs/contributing.md#documentation-maintenance)
fires. If code and a contract disagree, preserve the evidence and resolve the
affected decision; do not silently rewrite requirements or unrelated user work.
