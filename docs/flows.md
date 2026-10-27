# Browser flows and state

These are current implementation flows, not proof of passing browser tests.
Use [architecture](architecture.md) to find rendering/content owners,
[API and external boundaries](api.md) for integrations, and
[quality](quality.md#targeted-behavior-checks) to choose verification.

## Triggers, transitions, and outcomes

| Trigger                | Implementation flow                                                                                                                                                                                   | Lifetime / boundary                                                                                                                                                 |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Load homepage          | [index.astro](../src/pages/index.astro) starts a five-second photo interval and calls `updateCountdown()` once                                                                                        | Countdown uses the visitor's local midnight and calendar subtraction. It is not a ticking clock; see [INV-04](invariants.md#inv-04-preserve-countdown-and-calendar) |
| Open `?preview=1`      | [preview.ts](../src/scripts/preview.ts) sets `kr-preview`; shows the three-dot control; dropdown closes on outside click or Escape                                                                    | `localStorage`, same origin; `?preview=0` or "Wyłącz podgląd" clears it. No authentication                                                                          |
| Analytics configured   | [Analytics](../src/components/Analytics.astro) renders a hidden banner with `data-ga-id`; [consent.ts](../src/scripts/consent.ts) reads `cookie-consent`                                              | Missing choice shows banner; accepted loads GA; rejected leaves GA unloaded. Choice persists in `localStorage`, distinct from predictions                           |
| Answer a prediction    | [predictions.ts](../src/scripts/predictions.ts) validates one choice, moves focus, updates progress; back/edit keeps radio selections; optional signature then review; reset clears them              | DOM controls plus `currentStep`, no submission or durable storage. Without enhancement, questions remain readable                                                   |
| Open old apartment URL | [Redirect](../public/static/mieszkanie-194-fad5831a/index.html) reads three `m194:` keys, encodes them into `#m194-migrate=...`, then `location.replace`; fallback link and no-script redirect remain | Legacy outbound migration only; does not delete source storage. Destination code and imported state behavior belong to another repository                           |

## Initialization and failure boundaries

Analytics loading is guarded by `window.__gaLoaded`; predictions initialization
by `data-predictions-ready`. The preview component assumes one instance per page.
Consent and preview catch unavailable storage at their own feature boundaries.
Consent remains usable for the current page and asks again on a later load if
the choice could not be retained. Preview uses the explicit URL flag when its
preference cannot be read/written; its off button always hides it locally.
The legacy redirect also handles unavailable storage. These are independent
behaviors, not a shared storage service.

The [roadmap](roadmap.md) records the current post-event countdown as future
presentation work. [Regression tests](../tests/browser-storage.test.js) cover
storage fallbacks; build success alone does not verify these transitions.
