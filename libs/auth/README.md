# Socializ Auth library

This library owns the public authentication composition boundary. It selects
the Community Edition provider or the private Enterprise provider, while the
API application only imports `SocializAuthModule`.

The API build runs `scripts/prepare-enterprise-auth.mjs`. When the private
repository is available, it builds `@socializ/ee-auth` and
`@socializ/license`, then updates the ignored bridge at
`libs/auth/src/enterprise-auth.generated.ts`. Database schema and migrations
are owned by `libs/core/database/prisma`.
