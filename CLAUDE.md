# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Package Manager
- Uses **Bun** as the package manager (not npm/yarn)
- Install dependencies: `bun install`

### Common Commands
- `bun run build` - Build all packages using Turbo
- `bun run test` - Run all tests across packages
- `bun run typecheck` - TypeScript type checking
- `bun run lint` - Lint code using Biome
- `bun run format` - Format code using Biome (`turbo run write`)
- `bun run check` - Run Biome checks
- `bun run clean` - Clean build artifacts and node_modules

### Development Servers
- `bun run react` - Start React Storybook development server (port 6006)
- `bun run solid` - Start Solid.js Storybook development server

### Package-Specific Commands
- Individual packages can run: `test`, `lint`, `typecheck`, `clean`
- React package: `bun run storybook`, `bun run build-storybook`
- Core package: Uses Vitest for testing

## Project Architecture

### Monorepo Structure
This is a **monorepo** using:
- **Turbo** for build orchestration and task running
- **Workspaces** for package management
- **Lefthook** for git hooks (currently example config only)

### Package Organization
1. **`@temporal-ui/core`** - Framework-agnostic component definitions
   - Contains component logic, CSS styles, and utilities
   - TypeScript definitions and base component interfaces
   - No framework dependencies - pure TypeScript/CSS
   - Uses Vitest for testing

2. **`@temporal-ui/react`** - React implementations 
   - Depends on `@temporal-ui/core` and `@ark-ui/react`
   - Uses Storybook for component documentation
   - Testing with Vitest + React Testing Library
   - Build with tsup

3. **`@temporal-ui/solid`** - Solid.js implementations
   - Similar structure to React package
   - Uses Solid.js specific patterns

### Component Structure
Each component follows this pattern:
```
component-name/
├── index.ts          # Exports
├── Component.tsx     # React/Solid implementation  
├── Component.stories.tsx  # Storybook stories
├── Component.test.tsx     # Unit tests
└── (core package has .css and .ts definition files)
```

### Key Technologies
- **Ark UI** - Headless UI components foundation (React/Solid)
- **Biome** - Linting and formatting (replaces ESLint/Prettier)
- **Vitest** - Testing framework
- **Storybook** - Component documentation and development
- **TypeScript** - Type system
- **CSS** - Component styling (no CSS-in-JS)

## Code Style & Standards

### Biome Configuration
- Tab indentation (width: 4)
- Line width: 120 characters
- Double quotes for strings
- Organize imports enabled

### Component Patterns
- All components extend `BaseComponent` interface from core
- Support `className`, `children`, and `testId` props
- Framework-agnostic core definitions with framework-specific implementations
- CSS classes follow consistent naming patterns

### File Organization
- Core package: component definitions and styles
- Framework packages: implementations with stories and tests
- Utilities in `src/utils/` with tests co-located
- Export patterns defined in package.json `exports` field

## Testing
- Use `bun run test` to run all tests
- Individual package testing available
- React Testing Library for React components
- Happy DOM for test environment
- Coverage reports available with `test:coverage`