# 0001: Keep typed content modules for rapid editing

- Status: Accepted existing decision, recorded retrospectively
- Recorded: 2026-10-26; original decision date not recorded

## Context

Recorded from the existing acknowledged decision in the guest-group spec and
agent guide; this documents that choice, not a new architecture approval.

Frequent copy edits, reordering, and photo selection are made in typed
`src/data/*.ts` modules, rendered by Astro components. This keeps those edits
away from nested markup. Groups also reuse the same content for page rendering
and the preview menu, so the separation has a concrete second consumer.

## Decision and alternatives

Inline `.astro` content would be simpler for one-use plan/FAQ copy; Astro Content
Collections would be another option for structured editorial entries. The
accepted cost is extra files and manual route/slug alignment. Keep the current
approach during content editing; a future architectural change needs its own
scope and migration evidence rather than an opportunistic rewrite.

## Consequences

The current narrative uses [story.ts](../../src/data/story.ts).
[timeline.ts](../../src/data/timeline.ts) is now a preserved archive, so the old
suggestion to migrate the live timeline to a Collection is no longer a current
roadmap item. See [the edit map](../architecture.md#component-and-data-boundaries)
for ownership and [the story contract](../../openspec/specs/our-story/spec.md)
for preservation requirements.
