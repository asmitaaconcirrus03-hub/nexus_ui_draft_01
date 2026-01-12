# nexus_ui_draft_01

## Vue 3 + TypeScript + Vite Project

This project is initialized with Vue 3, TypeScript (strict mode), Vite, Vue Router, Pinia, Vitest, and ESLint.

## Project Setup

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher

### Install Dependencies

```sh
npm install
```

### Development Server

Start the development server with hot-reload:

```sh
npm run dev
```

The application will be available at `http://localhost:5173`

### Type-Check

Run TypeScript compiler to check for type errors:

```sh
npm run type-check
```

### Lint

Run ESLint to check code quality:

```sh
npm run lint
```

### Build for Production

Compile and minify for production:

```sh
npm run build
```

### Preview Production Build

Preview the production build locally:

```sh
npm run preview
```

### Run Unit Tests

Execute unit tests with Vitest:

```sh
npm run test:unit
```

## Project Structure

```
.
├── src/
│   ├── components/     # Vue components
│   ├── router/         # Vue Router configuration
│   ├── stores/         # Pinia stores
│   ├── views/          # View components
│   ├── App.vue         # Root component
│   └── main.ts         # Application entry point
├── index.html          # HTML entry point
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration (strict mode enabled)
└── package.json        # Project dependencies
```

## Technology Stack

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Typed superset of JavaScript (strict mode enabled)
- **Vite** - Next-generation frontend tooling
- **Vue Router** - Official routing library for Vue.js
- **Pinia** - Official state management library for Vue.js
- **Vitest** - Blazing fast unit test framework
- **ESLint** - Pluggable linting utility for JavaScript and TypeScript

## TypeScript Strict Mode

This project is configured with TypeScript strict mode enabled in `tsconfig.app.json`:

- `strict: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `noFallthroughCasesInSwitch: true`

All code must adhere to strict type checking rules.
