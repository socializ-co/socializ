# Architecture Decision Records

Architecture Decision Records (ADRs) document decisions that affect multiple applications, bounded contexts, or public contracts.

## When to write an ADR

Create an ADR when a decision changes one of these areas:

- domain or application boundaries;
- public API or event contracts;
- persistence, deployment, or security architecture;
- a convention that contributors will need to follow.

Small, local implementation choices belong in code comments or the relevant documentation page instead.

## Template

Create the next numbered file, for example `0001-modular-context-boundaries.md`:

```md
# ADR-NNNN: Decision title

## Status

Proposed | Accepted | Superseded

## Context

What problem or constraint led to this decision?

## Decision

What are we choosing and why?

## Consequences

What becomes easier, harder, or different because of this decision?
```
