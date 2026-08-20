# AGENTS.md

Monorepo pnpm (workspace: `apps/*`) — **`apps/web`** (React/Vite) + **`apps/api`** (NestJS). Run everything from the root with `pnpm <script>`.

## Setup

- Run `pnpm install` after clone — `node_modules` is not committed.
- Ignore the `pnpm approve-builds` / `unrs-resolver` warning; it does not block install or tests.

## Commands (from repo root)

- Dev: `pnpm dev:web` (Vite, default port 5173) · `pnpm dev:api` (Nest watch, port 3000, overridable via `PORT`)
- Test: `pnpm test:api` (unit) · `pnpm test:e2e:api` (e2e, uses `apps/api/test/jest-e2e.json`)
- Lint: `pnpm lint:web` (oxlint) · `pnpm lint:api` (eslint + prettier)
- Build: `pnpm build:web` · `pnpm build:api`

## Conventions

- **Frontend (apps/web):** structure components following **Atomic Design** (`atoms/`, `molecules/`, `organisms/`, `templates/`, `pages/`). Style with **Tailwind CSS** (utility-first; avoid custom CSS where utilities suffice). **Every component must have a test covering its essential use** — if a component has no test, add one (component tests only; unit/E2E suites are API-scoped today).
- **Backend (apps/api):** follow REST principles — resource-based endpoints (nouns, plural), correct HTTP verbs and status codes, JSON responses, statelessness, and consistent error shapes. No RPC-style verbs in URLs.
- **Git:** use **Conventional Commits** for both apps — `feat:`, `fix:`, `refactor:`, `test:`, `chore:`, `docs:`, `style:`, `perf:` + scope (e.g. `feat(web): ...`, `fix(api): ...`). This is required for every commit.

## Gotchas

- **`pnpm lint:api` runs eslint with `--fix`** — it rewrites source files. Expect/prefer it to mutate code; check diffs after.
- **`apps/web` is JSX, not TypeScript** (`src/App.jsx`). No test runner or test script exists for web — only lint.
- Web reads API via `VITE_API_URL` (`import.meta.env`, fallback `http://localhost:3000`). Copy `apps/web/.env.example` → `.env` to override; default works for local dev.
- API enables CORS globally (`app.enableCors()`) and serves a single `GET /` returning plain text. Unit spec: `src/app.controller.spec.ts`; e2e: `test/app.e2e-spec.ts`.
- API lint uses `recommendedTypeChecked` rules (type-aware) plus prettier with `endOfLine: "auto"` (Windows-friendly).
- No CI workflows in `.github/`. Each app deploys to Vercel independently (Root Directory `apps/web` / `apps/api`) on push — a bad commit deploys to prod, so lint+test+build locally before pushing.
