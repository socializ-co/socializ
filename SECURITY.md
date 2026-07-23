# Security Policy

## Supported versions

Socializ is under active development. Security fixes are applied to the default branch and to the latest published release when releases exist.

## Reporting a vulnerability

Please do not open a public GitHub issue for a security vulnerability. Use GitHub's private vulnerability reporting or a private security advisory for the `socializ-co/socializ` repository.

Include:

- A clear description of the vulnerability and its impact.
- The affected commit, version, application, or library.
- Reproduction steps or a minimal proof of concept.
- Any suggested mitigation.

The maintainers will acknowledge a valid report, investigate it, coordinate a fix, and publish disclosure details when it is safe to do so. Please avoid accessing, modifying, or deleting data that does not belong to you while validating a report.

## Secrets

Never commit credentials, tokens, private keys, production data, or local `.env` files. Use `.env.example` to document variable names and safe development defaults.
