# Contribution and style guide

This is the operational policy for people and agents. Product rules are in
[invariants](invariants.md); the [collaboration spec](../openspec/specs/collaborative-editing/spec.md)
provides acceptance scenarios. Use the working tree as evidence and preserve
unrelated changes.

## Working modes

Infer the mode from the conversation; ask who is speaking only when identity or
intent affects a consequential action. Both modes use the same authorization
and parallel-work rules below.

### Klaudia: visible changes, quick feedback

1. Speak Polish about the visible result. Handle code, images, Git, builds, and
   checks yourself. Ask one short intent/content question when genuinely needed.
2. Find the content owner in [architecture](architecture.md), make the scoped
   edit, and rebuild the existing [phone preview](editing-session.md).
3. Use [proportionate verification](quality.md#choose-checks-by-change). A routine
   text edit needs its build and changed-copy check, not full-site browser QA or
   CI polling after each sentence.
4. Say briefly what changed and which page to refresh. Keep taking feedback;
   report preview readiness separately from any pending background checks.
5. Continue locally. Batch Git/PR work and broader validation at the user's
   request to save the series or finish the editing session.

Handle OpenSpec planning behind the scenes when a change merits it. Ask Klaudia
about actual appearance, wording, and logistics choices, not planning tools.

### Rafał: technical scope and evidence

1. Establish the requested outcome, write scope, and relevant source/contracts.
   Surface meaningful trade-offs; for a small reversible change, proceed directly.
2. For nontrivial work, use [OpenSpec](#openspec). A request for analysis or a
   proposal alone does not authorize implementation.
3. Implement authorized work with focused [verification](quality.md). Explain
   any observed behavior that differs from the contract before changing its meaning.
4. Report paths and evidence against a commit or dirty-file snapshot. Distinguish
   implemented, locally verified, saved to GitHub, and published.

Technical familiarity grants no extra mutation authority. The authorizations
below also apply to Rafał's requests and delegated workstreams.

## Authorization and Git

Current editing branch: `klaudia/strona`, targeting `main` through
[PR #3](https://github.com/rafalschmidt97/kr/pull/3). Recheck state at session
startup; do not assume this PR stays open forever. This repository's editing
workflow uses a branch/PR even if a global personal-repository shortcut permits
direct main commits.

| User intent                                           | Authorized outcome                                                                                                                                         |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Request an edit or implementation                     | Scoped local changes and local preview                                                                                                                     |
| "Pokaż", "podoba mi się", local approval              | Refresh/review locally                                                                                                                                     |
| Request to save a batch or finish the editing session | Validate the stable batch, conventional commit, push editing branch, update the same PR, verify its CI asynchronously                                      |
| Explicit request to publish on the website            | Explain that this replaces the public site for all guests at `klaudiarafal.pl`, then use [publication steps](editing-session.md#publikacja-i-przywracanie) |
| Request to merge                                      | Rafał performs the merge manually on GitHub                                                                                                                |

Agents never merge, enable auto-merge, or push to main. Saving does not authorize
publication; an editing-branch deployment does not merge the PR. Restoration is
also a publication operation. If publication intent is ambiguous, ask a short
question. A narrower instruction such as "docs only, no Git" or "local-only
commit" takes precedence over the usual batch-save workflow.

Before saving, review the exact accumulated diff and paths, including new files.
Stage that explicit scope, not `git add .`. Use conventional commits; both Husky
hooks must pass. Do not bypass hooks or collect another worker's unfinished work.
Report push/PR status separately from pending CI and surface CI failures when
they arrive. GitHub account permissions are not enforcement of these agent rules.

## Parallel work and handoff

- One writer per file and one owner of Git mutations. Assign independent scopes
  before delegation. Keep the coordinator available for conversation.
- Delegate independent checks asynchronously; use background jobs for long
  commands and CI monitoring. Follow the host's process/pane rules. Work only
  with processes you own; inherited identifiers are not evidence of ownership.
- Every background result names its checked commit, or its dirty-file snapshot
  (path list plus hashes/time), commands, outcome, and gaps. If source changed,
  qualify or rerun the affected check rather than applying a stale result.
- A delegated save starts only after the exact file set and reviewed snapshot
  are stable. Freeze writes to that scope through staging/commit/push. Accept
  new feedback immediately and queue edits to frozen files until the owner is done.
- On interruption, leave a handoff with branch, dirty scope/owners, preview
  command/port/process owner, checked snapshot, pending jobs, and remaining
  authorization. Do not include secrets or assume a stale pane can be reused.

## Style and content

Before editing code or copy, use [coding and content standards](coding-standards.md)
for naming, source ownership, Polish wording, Astro/client conventions, styles,
images, and formatting. Documentation structure and maintenance are below.

## OpenSpec

For nontrivial behavior, architecture, or process changes, read
[config.yaml](../openspec/config.yaml) and the affected
[domain specs](../openspec/specs/) first. The current code is implementation
evidence; a spec is an intended contract, not proof that a feature exists.

Use the available propose -> apply -> sync/archive workflow. Local command
definitions live under `.opencode/commands/`; use the names exposed by the client.
For the CLI workflow, inspect `openspec --help` and start with:

```sh
openspec list --json
openspec new change <change-name>
openspec status --change <change-name> --json
openspec instructions proposal --change <change-name> --json
```

Follow the CLI's returned artifact paths/dependencies to write proposal, specs,
design, and tasks. Check tasks as work completes and validate before syncing.
Use sync to update domain contracts while retaining an active change; archive
only when that change is complete. Avoid archiving another worker's change.

[.gitignore](../.gitignore) intentionally excludes `openspec/changes/` (including
archives), `.opencode/`, dependencies and build output. Commit candidates are
the domain specs and project context, not ignored planning scaffolding. A docs-only
task needs no production deployment to satisfy an old deployment-check task.

## Documentation maintenance

Further investigation and content decisions belong in [the roadmap](roadmap.md).
Keep its owner, next action, and completion criterion current when resolving an item.

| Authoritative home                                                     | Update when                                                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [Invariants](invariants.md)                                            | The couple explicitly changes a product boundary; align affected contract scenarios                        |
| [OpenSpec specs](../openspec/specs/)                                   | An authorized behavior/process contract changes; preserve unrelated scenarios                              |
| This guide                                                             | Working modes, authority, or collaboration change                                                          |
| [Coding standards](coding-standards.md)                                | Coding, content, styling, or formatting conventions change                                                 |
| [Setup](setup.md)                                                      | Fresh-checkout prerequisites or startup change                                                             |
| [Editing guide](editing-session.md)                                    | Preview, photo intake, startup/resume, or publication steps change                                         |
| [Architecture](architecture.md)                                        | Route/content ownership or build/deploy wiring changes                                                     |
| [Flows](flows.md)                                                      | Browser triggers, state transitions, or state lifetime change                                              |
| [API / external boundaries](api.md)                                    | Environment lookups, external services, or integration contracts change                                    |
| [Quality](quality.md)                                                  | Commands or meaningful verification coverage change                                                        |
| [Glossary](../GLOSSARY.md)                                             | A wedding/editorial term needs clarification                                                               |
| [Inventory / gaps](repository-inventory.md)                            | Resolve a listed discrepancy; refresh full counts only during a new audit                                  |
| [ADR practice and template](adr/0002-record-architecture-decisions.md) | A consequential, surprising trade-off needs durable rationale; follow the linked decision-record procedure |

Keep AGENTS as a task router and README as onboarding. CLAUDE is a one-line
import for its client, not another policy hierarchy. Use relative links with
strong task triggers; do not duplicate global client configuration. Documentation
may be English; operational wording for Klaudia remains Polish. Record uncertain
behavior as such instead of converting observations into new requirements.
