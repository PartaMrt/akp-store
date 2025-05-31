# ---- BASE IMAGE ----
FROM oven/bun:1.1 AS base
WORKDIR /app
COPY . .

# ---- PRUNE ONLY NEEDED FILES ----
FROM base AS prune
RUN bun install
RUN bunx turbo prune --scope=api --docker

# ---- INSTALL PRUNED DEPENDENCIES ----
FROM oven/bun:1.1 AS deps
WORKDIR /app
COPY --from=prune /app/out/json/ ./
RUN bun install

# ---- SETUP FINAL DEVELOPMENT IMAGE ----
FROM oven/bun:1.1 AS dev
WORKDIR /app

# Copy hasil prune (full source code)
COPY --from=prune /app/out/full/ ./
COPY .env .env

# Copy deps yang sudah diinstall
COPY --from=deps /app/node_modules ./node_modules

# Tambahkan start.sh
COPY apps/api/start.sh ./start.sh
RUN chmod +x ./start.sh

EXPOSE 3000
CMD ["./start.sh"]

# Generate Prisma Client (pastikan path schema benar)
# RUN bunx prisma migrate dev --name init --schema=packages/db/prisma/schema.prisma
# RUN bunx prisma generate --schema=packages/db/prisma/schema.prisma
# RUN bun run seed

# # Jalankan langsung index.ts
# CMD ["bun", "--hot", "apps/api/src/index.ts"]
