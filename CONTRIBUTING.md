# Contributing to Socializ

Thank you for helping improve Socializ. Contributions include code, tests, documentation, design feedback, issue triage, and thoughtful product proposals.

## Before you start

1. Read the [Code of Conduct](CODE_OF_CONDUCT.md).
2. Search existing issues and pull requests before opening a new one.
3. For security vulnerabilities, follow [SECURITY.md](SECURITY.md) instead of opening a public issue.
4. For larger changes, open an issue or discussion first so the design can be reviewed before implementation.

## Local setup

```bash
npm ci
cp .env.example .env.local
```

Run the application you need with `npm run dev:web`, `npm run dev:api`, or `npm run dev:docs`. See the [README](README.md) for the full local workflow.

## Repository conventions

- Use TypeScript and follow the existing ESLint and Prettier configuration.
- Keep domain rules independent of NestJS, Next.js, HTTP, and persistence concerns.
- Respect Nx project boundaries and tags. Do not bypass a boundary by importing internal files from another project.
- Add or update tests for behavior changes.
- Update documentation when a public workflow, API, or architecture changes.
- Prefer small, focused pull requests over broad refactors.

## Branches and commits

Create a branch from the default branch:

```bash
git switch -c feat/short-description
```

Use an imperative, descriptive commit subject. Conventional Commit prefixes are encouraged:

```text
feat(web): add audience overview
fix(api): validate empty profile names
docs: explain local development
```

## Verification checklist

Before opening a pull request, run the checks relevant to your change:

```bash
npm run format:check
npm run lint
npm run test
npm run build
```

For a focused change, `npx nx affected -t lint test build` is usually faster. If a check cannot be run locally, explain why in the pull request.

## Pull requests

A good pull request includes:

- A concise description of the problem and solution.
- Links to the related issue or discussion.
- Screenshots or recordings for UI changes.
- Tests and verification commands.
- Notes about migrations, environment variables, or breaking changes.

Maintainers may request changes to improve scope, tests, documentation, accessibility, or architecture. Please keep review discussions technical and respectful.
