# project-code-connect

Monorepo (pnpm workspaces) com dois apps:

- **`apps/web`** — App React (Vite) — https://web-beta-six-12.vercel.app
- **`apps/api`** — API Nest.js — https://api-seven-swart-45.vercel.app

## Scripts (da raiz)

| Comando | Descrição |
|---|---|
| `pnpm dev:web` | Dev server do Web |
| `pnpm dev:api` | API em watch mode |
| `pnpm build:web` / `pnpm build:api` | Build dos apps |
| `pnpm lint:web` / `pnpm lint:api` | Lint dos apps |
| `pnpm test:api` / `pnpm test:e2e:api` | Testes unitários / e2e da API |

## Configuração do Web

Copie `apps/web/.env.example` para `.env` e ajuste `VITE_API_URL` (default local: `http://localhost:3000`).

## Deploy

Cada app é um projeto Vercel conectado a este repositório (Root Directory `apps/web` e `apps/api`), com deploy automático em cada push.