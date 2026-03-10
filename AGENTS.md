# AGENTS.md

## Cursor Cloud specific instructions

This is a **Bun-based monorepo** (3 packages: `core`, `react`, `solid`) with no external services or databases. See `CLAUDE.md` for the full command reference.

### Key caveats

- **Bun is the only package manager.** Do not use npm/yarn/pnpm. The repo pins `bun@1.2.23` via `packageManager` in root `package.json`.
- **Build before lint/typecheck.** Turbo's `lint` and `typecheck` tasks depend on `^build` (core must be built first so React/Solid packages can resolve its types). Run `bun run build` before `bun run lint` or `bun run typecheck`.
- **Tests do not require a prior build.** `bun run test` works independently.
- **React Storybook** runs on port **6006** (`bun run react`). **Solid Storybook** runs on port **6007** (`bun run solid`).
- **Lefthook** is installed as a postinstall hook and registers a pre-commit that runs `bun run lint` and `bun run typecheck`.
- **Biome** is the linter/formatter (not ESLint/Prettier). Config is in `biome.json` (tabs, double quotes, 120 char width).
