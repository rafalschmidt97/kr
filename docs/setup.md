# Local setup

For an existing editing session, start with the
[Polish operations guide](editing-session.md#start-i-wznowienie) and reuse its
owned preview process. The steps below are for a fresh checkout.

## Prerequisites and install

Use Node 24, matching [PR CI](../.github/workflows/ci.yml), and npm. The resolved
Astro version's minimum is Node 22.12.0; the old Node 20 guidance is obsolete.
Versions and scripts live in [package.json](../package.json) and
[package-lock.json](../package-lock.json).

```sh
npm ci
npm run dev
```

`npm ci` runs the package's `prepare` script to install Husky hooks. Review the
[working mode and authority](contributing.md#working-modes) before editing or
saving. Browser configuration is described in [API and external boundaries](api.md#build-time-configuration);
there is no database, container stack, or application-server setup.

## Production-like local preview

Build first, then run the preview server in a separate owned terminal:

```sh
npm run build
npm run preview
```

The default local port is 4321. Preview serves the last successful `dist/` build.
For LAN hostname setup, the phone URL, refreshing changed source, or stale CSS,
follow [the operations guide](editing-session.md). It also owns process handoff,
photo intake, and separately authorized publication/restoration steps.

## Checks and delivery

[Quality](quality.md) lists formatting, build, OpenSpec, and the direct Node
regression-test command. There is no dedicated npm test/typecheck/lint script.
PR CI and production
delivery are mapped in [architecture](architecture.md#build-and-external-boundaries).
The [authorization table](contributing.md#authorization-and-git) distinguishes
local changes, saving a batch, publication, and Rafał's manual merge.
