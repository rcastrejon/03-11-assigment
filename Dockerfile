FROM oven/bun:1 AS base

FROM base AS deps
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN bun run build

FROM base AS runner
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
ENV PORT 3000
CMD ["bun", "run", "./.output/server/index.mjs"]
