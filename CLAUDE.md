# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server at http://localhost:3000
npm run build     # Production build
npm run start     # Run production build
npm run lint      # Run ESLint
```

No test runner is configured yet.

## Architecture

This is a **Next.js 16 App Router** project using **React 19**, **TypeScript** (strict mode), and **Tailwind CSS v4**.

### Key conventions

- **App Router**: All routes live under `app/`. The entry layout is `app/layout.tsx` and the home page is `app/page.tsx`.
- **Tailwind CSS v4**: Uses the new `@import "tailwindcss"` syntax (not the old `@tailwind base/components/utilities` directives). Theme tokens are defined via `@theme inline` in `app/globals.css`.
- **CSS variables for color**: Background/foreground colors are defined as CSS custom properties (`--background`, `--foreground`) in `globals.css` and referenced in Tailwind via `--color-background` / `--color-foreground`.
- **Path alias**: `@/*` maps to the project root (e.g., `import Foo from "@/components/Foo"`).
- **Fonts**: Geist Sans and Geist Mono are loaded via `next/font/google` and injected as CSS variables (`--font-geist-sans`, `--font-geist-mono`) on `<body>`.

## Tasks
1. First think through the problem, read the codebase for relevant files, and write a plan to tasks/todo.md
2. The plan should have a list of todo items that you can check off as you complete them
3. Before you begin working, check in with me and I will verify the plan.
4. Then, begin working on the todo items, marking them as complete as you go .
5. Please every step of the way just give me a high level explanation of what changes you made
6. Make every task and code change you do as simple as possible. We want to avoid making and massive or complex changes. Every change should impact as little code as possible. Everything is about simplicity.

