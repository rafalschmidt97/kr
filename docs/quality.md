# Verification proportional to the change

Choose checks for the affected behavior. This page distinguishes the focused
regression tests from manual and browser verification. Apply
[snapshot-safe parallelism](contributing.md#parallel-work-and-handoff) when work
continues during checks.

## Commands and current automation

- `npm run build` runs `astro build`. It verifies that a static build can be
  generated; it is not a typecheck, accessibility audit, or browser test.
- `npm run format` writes across `src/` only. It does not format root docs,
  OpenSpec, or YAML. Prefer an explicit owned file list during parallel work:

  ```sh
  ./node_modules/.bin/prettier --check README.md docs/contributing.md
  ./node_modules/.bin/prettier --write README.md docs/contributing.md
  git diff --check
  ```

- Pre-commit runs `lint-staged` for staged Astro/CSS/JS/TS/Markdown. Commit-msg
  runs conventional commitlint. YAML is not in the lint-staged pattern; check it
  explicitly if edited. These hooks are local, not steps in PR CI.
- [PR CI](../.github/workflows/ci.yml) runs only install + build, on Node 24.
  There is no `test`, `lint`, `typecheck`, or coverage script configured in
  [package.json](../package.json). The focused storage regression tests below
  run directly with Node 24; CI does not currently run them.
- OpenSpec validation is structural, not a test of runtime behavior:

  ```sh
  openspec validate --specs --strict --no-interactive
   openspec validate <change-name> --type change --strict --no-interactive
  ```

- Storage fallbacks have dependency-free regression tests against the actual
  consent/preview modules, using DOM fixtures and Node 24's built-in runner:

  ```sh
  node --test tests/browser-storage.test.js
  ```

  They cover unavailable reads/writes, consent gating, explicit preview flags,
  remembered choices, menu closure, and clearing. They do not replace browser
  checks of rendered markup, focus, layout, or network behavior.

## Choose checks by change

| Change                                        | Sufficient focused verification                                                                                                                                                               |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Documentation only                            | Owned Markdown/YAML formatting, local links/anchors and referenced paths/commands, `git diff --check`; strict validation for affected OpenSpec. No site rebuild or CI wait needed             |
| Routine copy                                  | Build, confirm changed Polish copy in the relevant generated page/preview, check obvious duplicated facts; no routine full-site browser run                                                   |
| Photos or layout                              | Build; inspect affected route at phone and desktop widths in fresh preview; confirm referenced images, actual dimensions, crop/orientation, alt text, reading order and no page overflow      |
| Data shape, slug, navigation                  | Build; verify every affected route lookup, anchor, preview-menu entry, direct-link behavior and robots metadata                                                                               |
| Client interaction                            | Build; exercise affected state transitions, keyboard/focus and fallback behavior below; review storage/network boundaries                                                                     |
| Shared Base, dependencies, build or workflows | Build and inspect all six Astro routes plus relevant copied assets/redirect; review actual workflow triggers, permissions and config. Live release checks only when publication is authorized |
| Save a batch                                  | Review the accumulated stable scope and combine its relevant checks, then follow [save rules](contributing.md#authorization-and-git); tie asynchronous PR CI evidence to its SHA              |

Use the host's authorized browser tooling when browser checks are needed.
Preview serves the last successful build: a running server alone proves nothing
about freshness. See [operations](editing-session.md#odświeżanie-po-zmianie).

## Targeted behavior checks

### Countdown or date changes

Verify local calendar boundaries, one/two/five-unit Polish forms, omitted zero
units, punctuation, and the wedding-day state against
[the contract](../openspec/specs/wedding-countdown/spec.md). Include a month
boundary and a year boundary; ensure displayed date and ICS agree. Document
the current post-wedding result separately from any desired change. A focused
clock-controlled check or small dependency-free harness is appropriate if
changing this logic; building alone cannot verify date arithmetic.

### Story and predictions

For story structure, compare approved copy and ordering against
[the story contract](../openspec/specs/our-story/spec.md). Verify the archive and
image selections according to [photo intake](editing-session.md#zdjęcia).

For interaction changes, check:

1. All questions readable without JavaScript; initial enhancement does not steal focus.
2. Next with no selection announces the Polish error and remains on the question.
3. One choice per question; next/back and review/edit preserve it in the page.
4. Optional blank signature works; entered text renders literally in review.
5. Review has the truthful notice and disabled saving, with no submission success.
6. Reset clears answers/signature; fresh reload restores no prediction data.
7. Keyboard radios/buttons, visible focus, progress/status announcements; no
   prediction data in network calls or storage. Check phone overflow.

### Analytics or preview changes

Verify the affected [browser flow](flows.md) in
an isolated test browser origin/profile so testing does not overwrite the user's
stored choice. For analytics, distinguish local bootstrap code from the external
Google request and cover unset/empty ID plus new/accepted/rejected choices and
revisit. Coordinate builds with another worker; toggling an environment value
and rebuilding a shared `dist/` changes their preview.

For preview, cover `?preview=1`, remembered choice, `?preview=0`, the off button,
outside click/Escape, and hidden pages' direct URLs without the flag. Localhost,
LAN hostname, and IP have separate browser storage origins.

## Completion evidence

A scoped change is ready for local review when its requested outcome exists,
relevant checks pass, and affected documentation/contracts are coherent.

Before reporting completion:

- Review the owned diff, including untracked files; verify no unrelated source,
  assets, environment values, or configuration were changed by this worker.
- Name the source snapshot and the checks actually run. A dirty tree needs an
  explicit path scope and snapshot identifier, not just HEAD.
- Separate successful checks from pending/blocked ones. A background result
  against older source is not verification of a newer edit.
- Confirm links, paths, and commands in updated docs; reconcile aggregate
  counts for inventories. Label unresolved contract drift instead of erasing it.
- Report local preview, Git save, and publication as separate outcomes governed
  by [authorization](contributing.md#authorization-and-git).
