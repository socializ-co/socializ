# Socializ

[![CI](https://github.com/socializ-co/socializ/actions/workflows/ci.yml/badge.svg)](https://github.com/socializ-co/socializ/actions/workflows/ci.yml)
[![CodeQL](https://github.com/socializ-co/socializ/actions/workflows/codeql.yml/badge.svg)](https://github.com/socializ-co/socializ/actions/workflows/codeql.yml)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/socializ-co/socializ/badge)](https://scorecard.dev/viewer/?uri=github.com/socializ-co/socializ)
[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)

Socializ is an open-source social platform built as a modular Nx monorepo. The repository contains the web application, API, documentation site, end-to-end tests, and bounded-context libraries that make up the platform.

> The project is under active development. APIs and domain boundaries may change until the first stable release.

## What is in this repository?

| Project     | Purpose                  | Local URL                 |
| ----------- | ------------------------ | ------------------------- |
| `apps/web`  | Socializ web application | http://localhost:3000     |
| `apps/api`  | NestJS API               | http://localhost:3001/api |
| `apps/docs` | Fumadocs documentation   | http://localhost:3003     |

The workspace also contains Nx-managed end-to-end projects and shared libraries under `libs/`.

## Quick start

### Requirements

- Node.js 22.x
- npm 10.9.8
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

Run each command in a separate terminal. The web app uses port `3000`, the API uses port `3001`, and the documentation site uses port `3003` by default.

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

## Enterprise edition submodule

The enterprise edition lives in the private [`socializ-ee`](https://github.com/socializ-co/socializ-ee) repository. It is mounted as the `enterprise/` submodule and contains source-only libraries under `enterprise/libs/<context>/...`. The public workspace intentionally excludes this submodule from its Nx project graph and formatting checks.

Public contributors do not need the private submodule to work on Socializ. Maintainers with access can initialize it with:

```bash
git submodule update --init --recursive
```

To update the pointer to a newer private commit:

```bash
git -C enterprise fetch origin main
git -C enterprise checkout origin/main
git add enterprise
git commit -m "chore: update enterprise edition submodule"
```

The `Private EE submodule` workflow checks the pointer on pushes to `main` and manual runs. Configure the `PRIVATE_SUBMODULE_SSH_KEY` Actions secret in the public repository with a read-only deploy key whose public half is registered in `socializ-ee` under **Settings → Deploy keys**. Never commit the private key to either repository.

## Project structure

```text
apps/
├── api/          # NestJS application
├── docs/         # Fumadocs site
├── web/          # Next.js application
├── api-e2e/      # API end-to-end tests
└── web-e2e/      # browser end-to-end tests

enterprise/       # private source-only submodule (maintainers only)

libs/
└── ...           # shared and bounded-context libraries
```

Domain libraries follow the Socializ context and layer conventions. Keep business rules in domain/application libraries and keep framework or transport details at the adapter and infrastructure boundaries.

## Documentation

Start at [`apps/docs/content/docs/index.mdx`](apps/docs/content/docs/index.mdx). Documentation is built with Fumadocs and runs on port `3003`.

When adding a feature, update the relevant documentation and include an architecture decision record for a cross-cutting design choice.

The project roadmap is in [`ROADMAP.md`](ROADMAP.md), and architecture decision records are kept under [`docs/adr`](docs/adr/README.md).

## Contributing

Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) before opening an issue or pull request. Issues and pull requests should explain the problem, the proposed change, and how it was tested.

Good starting points are issues labelled `good first issue`, `help wanted`, or `documentation`.

## Security

Do not report security vulnerabilities in public issues. Follow [`SECURITY.md`](SECURITY.md) for the private disclosure process.

## License

Socializ is released under the [Apache License 2.0](LICENSE).
