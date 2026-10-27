# Coding and content standards

Use the [edit map](architecture.md#routes-and-content-owners) rather than adding
a second content source. Repeated content lives in typed data; page introductions,
section headings, and UI notices still live in Astro components. `site.ts` is
not a universal site configuration. The [glossary](../GLOSSARY.md) resolves
domain terms. Working modes and Git authority live in [contributing](contributing.md).

## Naming and content

Match local naming: PascalCase Astro components/types, lowercase data/script
modules, Polish route slugs, and existing English identifiers.

- Preserve approved copy verbatim unless the request changes it. Follow
  [INV-02](invariants.md#inv-02-visitor-facing-polish) for all rendered text.
  Unknown arrangements remain `tentative`, `draft`, or `todo` using truthful
  Polish labels. Ask the couple rather than infer dates/times from filenames.
- When changing a shared fact, inspect its other consumers: RSVP is duplicated
  between `faq.ts` and `site.ts`; schedule/plan/group times and venue links are
  separately authored. Keep confirmed details consistent without turning draft
  logistics into promises.
- Keep slug lookup and route filenames aligned. An array entry is not a route
  generator. Preserve stable anchors and script selectors alongside markup.

## Astro and browser code

- Keep reusable client behavior in `src/scripts/*.ts`, imported by a small
  component `<script>`. The homepage's existing inline script is an exception
  to preserve during unrelated edits. Avoid large `<script define:vars>` bodies:
  the Astro Prettier plugin cannot format them reliably.
- Match typed interfaces, scoped DOM queries, null guards, native controls, and
  `textContent` for user-entered text. Keep the predictions `data-*`/focus hooks,
  radio grouping, `[hidden]` behavior, and readable no-JavaScript content coherent.
- Follow the feature-specific state lifetime in [flows](flows.md); preview and
  consent persistence do not authorize prediction persistence.

## Styling and images

- Prefer component-scoped CSS. Shared reset/font/glass rules belong in Base;
  changing them affects every Astro page. Match Manrope, restrained neutral
  surfaces and warm accents; check narrow-screen reading order and overflow.
  Preserve keyboard focus, contrast, labels, and relevant reduced-motion behavior.
- Image selection/intake follows [the photo guide](editing-session.md#zdjęcia).
  Alt text describes the actual supplied image; width/height reflect metadata
  with orientation accounted for, as illustrated by the
  [asset reconciliation](repository-inventory.md#asset-reconciliation).

## Formatting and verification

Formatting is defined by [.prettierrc.json](../.prettierrc.json) and
[.editorconfig](../.editorconfig). Apply Prettier only to the owned scope;
[quality](quality.md#commands-and-current-automation) explains script coverage
and the checks appropriate to each change. Architectural trade-offs belong in
[decision records](adr/0002-record-architecture-decisions.md), not code comments
that repeat a planning history.
