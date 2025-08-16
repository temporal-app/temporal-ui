# Temporal UI Design System

A modern, framework-agnostic design system built for speed and consistency. Temporal UI provides a comprehensive set of UI components with bindings for React and Solid.js.

## ✨ Features

- 🎨 **Modern Design System** - Clean, accessible components with a cohesive visual language
- ⚡ **Framework Agnostic** - Core components work across different JavaScript frameworks
- 🔧 **React & Solid Support** - First-class bindings for popular frameworks
- 🎭 **Component Stories** - Built-in Storybook integration for component documentation
- 🧪 **Fully Tested** - Comprehensive test coverage with Vitest
- 📦 **Monorepo Architecture** - Organized packages for maintainability
- 🎯 **TypeScript First** - Full TypeScript support with excellent DX

## 📦 Packages

| Package | Description | Framework |
|---------|-------------|-----------|
| `@temporal-ui/core` | Framework-agnostic component definitions and styles | Universal |
| `@temporal-ui/react` | React component implementations | React |
| `@temporal-ui/solid` | Solid.js component implementations | Solid.js |

## 🚀 Quick Start

### Installation

```bash
# For React projects
npm install @temporal-ui/react

# For Solid.js projects  
npm install @temporal-ui/solid
```

### Basic Usage

```tsx
import { Button, Alert, Card } from '@temporal-ui/react'

function App() {
  return (
    <Card>
      <Alert variant="info">Welcome to Temporal UI!</Alert>
      <Button variant="primary">Get Started</Button>
    </Card>
  )
}
```

## 🧱 Components

### Layout & Structure
- **Box** - Flexible container component
- **Stack** - Vertical/horizontal layout utility  
- **Card** - Content container with consistent styling
- **Sidebar** - Navigation sidebar components

### Form Controls
- **Button** - Primary interactive element
- **TextInput** - Single-line text input
- **Textarea** - Multi-line text input
- **Checkbox** - Boolean input with grouping support
- **RadioGroup** - Single-choice selection
- **Field** - Form field wrapper with labels

### Feedback & Status
- **Alert** - Status messages and notifications
- **Badge** - Small status indicators
- **Loader** - Loading states and spinners
- **Notifications** - Toast-style notifications

### Navigation & Overlays
- **Menu** - Dropdown menus with keyboard navigation
- **Popover** - Contextual overlays
- **Avatar** - User profile images and initials

## 🛠 Development

### Prerequisites
- [Bun](https://bun.sh/) (package manager)
- Node.js 18+

### Setup

```bash
# Clone and install dependencies
git clone <repository-url>
cd temporal-ui
bun install

# Start development servers
bun run react    # React components with Storybook
bun run solid    # Solid.js components with Storybook
```

### Available Scripts

```bash
bun run build      # Build all packages
bun run test       # Run all tests
bun run typecheck  # TypeScript checking
bun run lint       # Lint code with Biome
bun run format     # Format code with Biome
```

### Project Structure

```
temporal-ui/
├── packages/
│   ├── core/          # Framework-agnostic components
│   ├── react/         # React implementations
│   └── solid/         # Solid.js implementations
├── package.json       # Workspace configuration
└── turbo.json        # Build pipeline configuration
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-component`
3. Make your changes and add tests
4. Ensure all tests pass: `bun run test`
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

Built with ❤️ by the Temporal team
