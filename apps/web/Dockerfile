FROM node:22-bookworm-slim AS build

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ARG NEXT_PUBLIC_EDITION=CE
ENV NEXT_PUBLIC_EDITION=${NEXT_PUBLIC_EDITION}

WORKDIR /workspace

COPY package.json package-lock.json ./
COPY . .

RUN npm ci
RUN npx nx build web
RUN npm prune --omit=dev

FROM node:22-bookworm-slim AS runtime

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

WORKDIR /app

RUN groupadd --system --gid 1001 nodejs \
  && useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=build --chown=nextjs:nodejs /workspace/node_modules ./node_modules
COPY --from=build --chown=nextjs:nodejs /workspace/apps/web/.next ./apps/web/.next
COPY --from=build --chown=nextjs:nodejs /workspace/apps/web/public ./apps/web/public
COPY --from=build --chown=nextjs:nodejs /workspace/apps/web/package.json ./apps/web/package.json

WORKDIR /app/apps/web

USER nextjs

EXPOSE 3000

CMD ["sh", "-c", "exec ../../node_modules/.bin/next start --hostname 0.0.0.0 --port ${PORT}"]
