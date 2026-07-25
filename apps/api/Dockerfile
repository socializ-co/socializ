FROM node:22-bookworm-slim AS build

ENV NODE_ENV=development

WORKDIR /workspace

COPY package.json package-lock.json ./
COPY . .

RUN npm ci
RUN npx nx build api --configuration=production
RUN npm prune --omit=dev

FROM node:22-bookworm-slim AS runtime

ENV NODE_ENV=production
ENV PORT=3001

WORKDIR /app

RUN groupadd --system --gid 1001 nodejs \
  && useradd --system --uid 1001 --gid nodejs nestjs

COPY --from=build --chown=nestjs:nodejs /workspace/node_modules ./node_modules
COPY --from=build --chown=nestjs:nodejs /workspace/apps/api/dist ./dist

USER nestjs

EXPOSE 3001

CMD ["node", "dist/main.js"]
