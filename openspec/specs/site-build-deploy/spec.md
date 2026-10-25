# site-build-deploy Specification

## Purpose

TBD - created by archiving change rebuild-astro-port-landing. Update Purpose after archive.

## Requirements

### Requirement: Static Astro build

The site SHALL be built by Astro producing a fully static output directory (`dist/`) with no server-side runtime, database, or serverless functions.

#### Scenario: Production build succeeds

- **WHEN** `astro build` runs in CI
- **THEN** a static `dist/` directory is produced containing HTML, CSS, and assets
- **AND** the build completes without requiring any runtime backend

#### Scenario: No backend dependency

- **WHEN** the built site is served as static files
- **THEN** every page renders correctly without any application server or API

### Requirement: GitHub Pages deployment

The site SHALL deploy to GitHub Pages via a GitHub Actions workflow triggered on push to the default branch, replacing the previous MkDocs build and `reprec` path-rewrite step.

#### Scenario: Deploy on push to main

- **WHEN** a commit is pushed to the `main` branch
- **THEN** the workflow builds the Astro site and publishes `dist/` to GitHub Pages

#### Scenario: Manual deploy

- **WHEN** the workflow is triggered manually via `workflow_dispatch`
- **THEN** the site is rebuilt and redeployed

### Requirement: Custom domain and HTTPS

The deployed site SHALL be served from the custom domain `klaudiarafal.pl` over HTTPS.

#### Scenario: Custom domain served

- **WHEN** a visitor navigates to `https://klaudiarafal.pl`
- **THEN** the site loads over HTTPS with a valid certificate
- **AND** the GitHub Pages `CNAME` resolves to `klaudiarafal.pl`

### Requirement: Correct asset paths without post-processing

Built asset URLs SHALL resolve correctly on the custom domain without a post-build path-rewriting script.

#### Scenario: Assets load without reprec

- **WHEN** the site is built and deployed
- **THEN** CSS, images, and downloadable files load correctly
- **AND** no post-build string-replacement step (e.g. `reprec`) is required

### Requirement: Pull request build validation

Pull requests targeting main SHALL run npm ci and the static production build with read-only repository permissions and no Pages deployment.

#### Scenario: Editing branch updated

- **WHEN** a pull request targeting main is opened or updated
- **THEN** CI validates its build without publishing the site

### Requirement: Manual editing-branch deployment

The existing manual Pages workflow SHALL build the selected ref. The github-pages environment SHALL allow main and the designated editing branch. Publishing the editing branch SHALL replace the existing public site at klaudiarafal.pl without merging.

#### Scenario: Explicit publication request

- **WHEN** an authorized operator dispatches Deploy on the allowed editing branch after a publication request
- **THEN** the branch is built and deployed to the existing public domain without merging

#### Scenario: Restore main

- **WHEN** an authorized operator manually dispatches Deploy on main
- **THEN** the current main build replaces the previously published editing branch
