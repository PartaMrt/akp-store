#!/bin/sh

echo "📦 Generating Prisma Client..."

echo "📦 DATABASE_URL from ENV: $DATABASE_URL"

bunx prisma generate --schema=packages/db/prisma/schema.prisma

echo "⬢ Running Prisma Migrate (deploy)..."
bunx prisma migrate deploy --schema=packages/db/prisma/schema.prisma

# OPTIONAL: Seed data
if [ -f "packages/db/prisma/seed.ts" ]; then
  echo "🌱 Seeding database..."
  bun run packages/db/prisma/seed.ts
else
  echo "ℹ️ No seed.ts file found, skipping seeding."
fi

echo "🚀 Starting Bun server..."
bun run apps/api/src/index.ts
