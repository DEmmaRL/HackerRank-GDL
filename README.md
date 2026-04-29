# HackerRank Crew GDL

The central portal for HackerRank Crew GDL's technical sessions, workshops, and interactive presentations. This project is built as a high-performance monorepo to host both the main discovery hub and independent slide decks.

![HackerRank GDL Banner](assets/banner.jpg)

## Architecture

This repository uses **pnpm workspaces** to manage multiple packages:

- **`apps/hub`**: The main landing page and session navigator built with **Astro**.
- **`sessions/`**: A collection of interactive presentations built with **Slidev** (Vue +  UnoCSS).

## Tech Stack

- **Core**: Astro, Slidev, TypeScript.
- **Styling**: UnoCSS (sessions), Starlight design system (hub).
- **Package Management**: pnpm.
- **Automation**: Custom build orchestrator with local caching (`build.mjs`).

## Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- pnpm (`npm install -g pnpm`)

### Installation
```bash
pnpm install
```

The postinstall hook automatically syncs assets from `@hr-gdl/shared-assets` to all project `public/` directories.

### Development

All scripts automatically include asset prebuild (no manual steps required):

**Start the hub** (main entry point):
```bash
pnpm dev
```

**Start a specific session** for HMR development:
```bash
# Terminal 1 — Slidev with live reload
pnpm --filter resume-building-101 dev   # Port 3031
# or
pnpm --filter technical-interview dev   # Port 3032

# Terminal 2 — Hub (auto-detects running Slidev)
pnpm dev                                  # Port 3000
```

## Asset Management

Assets (fonts, logos, images) are centrally managed via the `@hr-gdl/shared-assets` workspace package:

- **Single Source**: `packages/shared-assets/src/` → `dist/` → distributed to all projects
- **Automatic Sync**: Assets are synced to `public/` on install and before each dev/build
- **Reduced Duplication**: ~100MB saved by consolidating shared assets
- **Tree-shakeable**: Each project imports only what it needs

**No manual asset steps required.** The workflow is completely automatic:
1. `pnpm install` → Postinstall hook runs prebuild
2. `pnpm dev` → Prebuild runs before starting dev server
3. `pnpm build` → Prebuild runs before building

## Building for Production

```bash
pnpm build
```

The build process:
1. Runs prebuild to sync assets
2. Checks for file changes in each session
3. Skips rebuilding unchanged sessions (local optimization)
4. Compiles the Hub and embeds slide decks into `public/slides/`

## Brand Identity

This project adheres to the HackerRank Brand Guides. All assets, logos, and typography (Montserrat, Satoshi, Departure Mono) are managed within the respective application assets or shared public folders.

## Legal Disclaimer

This is a community-led project managed by the **HackerRank Crew Guadalajara**. It is not an official product of HackerRank Ltd. All HackerRank logos and trademarks are the property of HackerRank Ltd. and are used here for community educational purposes under community brand guidelines.

## License

This project is licensed under the [MIT License](LICENSE).
