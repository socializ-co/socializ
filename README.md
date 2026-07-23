# Socializ

Socializ is an open-source social platform built as a modular Nx monorepo. The repository contains the web application, API, documentation site, end-to-end tests, and bounded-context libraries that make up the platform.

> The project is under active development. APIs and domain boundaries may change until the first stable release.

## What is in this repository?

| Project     | Purpose                  | Local URL                 |
| ----------- | ------------------------ | ------------------------- |
| `apps/web`  | Socializ web application | http://localhost:3000     |
| `apps/api`  | NestJS API               | http://localhost:3000/api |
| `apps/docs` | Fumadocs documentation   | http://localhost:3003     |

The workspace also contains Nx-managed end-to-end projects and shared libraries under `libs/`.

## Quick start

### Requirements

- Node.js 22 or newer
- npm 10 or newer
- Git

### Install

```bash
git clone https://github.com/socializ-co/socializ.git
cd socializ
npm ci
cp .env.example .env.local
```

### Run an app

```bash
npm run dev:web
npm run dev:api
npm run dev:docs
```

Run each command in a separate terminal. The API and web app currently share the default port, so use a different `PORT` when running them at the same time.

## Common commands

```bash
npm run lint           # lint every project with a lint target
npm run test           # run unit tests
npm run build          # build every project with a build target
npm run typecheck     # run TypeScript checks where configured
npm run format:check  # verify formatting
npx nx graph           # inspect project dependencies
```

For a focused change, prefer affected tasks:

```bash
npx nx affected -t lint test build
```

## Project structure

```text
apps/
├── api/          # NestJS application
├── docs/         # Fumadocs site
├── web/          # Next.js application
├── api-e2e/      # API end-to-end tests
└── web-e2e/      # browser end-to-end tests

libs/
└── ...           # shared and bounded-context libraries
```

Domain libraries follow the Socializ context and layer conventions. Keep business rules in domain/application libraries and keep framework or transport details at the adapter and infrastructure boundaries.

## Documentation

Start at [`apps/docs/content/docs/index.mdx`](apps/docs/content/docs/index.mdx). Documentation is built with Fumadocs and runs on port `3003`.

When adding a feature, update the relevant documentation and include an architecture decision record for a cross-cutting design choice.

## Contributing

Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) before opening an issue or pull request. Issues and pull requests should explain the problem, the proposed change, and how it was tested.

Good starting points are issues labelled `good first issue`, `help wanted`, or `documentation`.

## Security

Do not report security vulnerabilities in public issues. Follow [`SECURITY.md`](SECURITY.md) for the private disclosure process.

## License

Socializ is released under the [Apache License 2.0](LICENSE).
