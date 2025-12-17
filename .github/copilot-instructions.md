# Copilot instructions for this repo

Purpose
- This repository is a set of TypeScript learning examples (no single app). Edits should preserve small, self-contained examples in each section.

Big picture
- Structure: `essentials/`, `Section4/`, `Section5/`, `Section6/` each contain independent TypeScript examples. See `Section5/package.json` which runs a simple dev server for Section5.
- Examples are focused on language features (types, enums, classes, functions). There is no unified build pipeline across all sections.

Key files to consult
- [essentials/basics.ts](essentials/basics.ts#L1-L20) — primitive typing examples.
- [essentials/arrays-objects.ts](essentials/arrays-objects.ts#L1-L120) — arrays, tuples, enums, records.
- [Section4/calculator.ts](Section4/calculator.ts#L1-L200) — a larger example showing `type` aliases and a small calculation flow.
- [Section5/src/app.ts](Section5/src/app.ts#L1-L80) and [Section5/package.json](Section5/package.json#L1-L40) — demo of a frontend snippet served by `lite-server`.
- [Section6/basics.ts](Section6/basics.ts#L1-L40) and [Section6/tsconfig.json](Section6/tsconfig.json#L1-L200) — class shorthand and stricter TypeScript compiler settings.

Build / run workflows (project-specific)
- Section5: run in that folder: `cd Section5 && npm install && npm start` (serves `index.html`). See `Section5/package.json`.
- Type checking / compilation: run the TypeScript compiler per section using its tsconfig, e.g. `tsc -p Section5/tsconfig.json` or `tsc -p Section6/tsconfig.json`.
- Running examples: compile to JS (tsc) then run `node` on the emitted JS (or open `index.html` for Section5).

Conventions and patterns to follow
- Prefer `type` aliases and lightweight `interface`/`type` usage for examples (see `InvestmentData` and `CalculationResult` in `Section4/calculator.ts`).
- Functions and examples are minimal and log with `console.log` rather than using frameworks.
- Use the constructor parameter shorthand for small classes (see `Section6/basics.ts`).
- Where a `.js` sibling exists (e.g., `Section4/calculator.js`), it represents a compiled artifact — avoid editing compiled files; edit the `.ts` source instead.

Editing guidance for AI agents
- Keep changes minimal and local to the section/file you edit. These files are teaching examples — avoid large refactors.
- Preserve stylistic choices (simple `console.log` output, explicit `type` declarations) unless the change explicitly intends to modernize an example.
- When changing runtime behavior, also update both the `.ts` source and the related compiled `.js` only if the compiled files are intentionally maintained here; otherwise only change `.ts` and let maintainers recompile.

Example tasks and hints
- To fix a type issue in the calculator flow, modify `Section4/calculator.ts` — follow existing `type` aliases and return `CalculationResult[]` (see current implementation for pattern).
- To test a UI snippet, use: `cd Section5 && npm install && npm start` then open `index.html` in the served site.
- For stricter TS settings, consult `Section6/tsconfig.json` (this section intentionally enables stricter and modern options).

When to ask a human
- If a change affects multiple sections, or changes global build behavior (adding a monorepo build, changing root tsconfig), ask before proceeding.
- If you need to install new devDependencies (beyond running local `npm install` in a section), ask for permission.

If anything here is unclear or missing (for example, you expect a shared build or tests), tell me what area to expand and I will update this file.
