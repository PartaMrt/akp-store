# 📱 Fullstack Web App Turborepo

This project follows a scalable architecture, integrates a full API layer, and is production-ready for deployment.

---

## 🚀 Tech Stack

### 🖥️ Frontend
- **Vite + React + Zustand** (with React Router v7) — File-based routing, modern practices.
- **Tailwind CSS** — Utility-first styling.
- **Zod** — Type-safe schema validation.

### ⚙️ Backend
- **Bun** — Ultra-fast JavaScript runtime and package manager.
- **Hono** — Lightweight web framework.
- **tRPC** — End-to-end typesafe APIs.
- **Prisma** — Type-safe ORM.
- **PostgreSQL** — Relational database.
- **Hono Auth** — Simple and extensible authentication system.

### 🧰 Tooling
- **Turborepo** — Monorepo management.
- **Docker + Docker Compose** — Containerized local dev (Postgres setup).
- **TypeScript** — Full type safety across the stack.

### ☁️ Deployment
- Deployable on: **Vercel**.
---

## 📁 Monorepo Structure (if using Turborepo)

\`\`\`
apps/
  ├── web/       # React frontend
  └── api/       # Hono + tRPC backend using Clean Architecture
packages/
  └──/        # Shared prisma,model etc (optional)
\`\`\`

---

## 🧪 Development

### Setup
\`\`\`bash
# Clone the repository
git clone https://github.com/partaMrt/AKP-Test.git
cd AKP-Store

# Install dependencies
bun install

# Start PostgreSQL with Docker
docker-compose up -d

# Apply Prisma generate , migrations & seed
bunx prisma generate --schema=packages/db/prisma/schema.prisma
bunx prisma migrate deploy --schema=packages/db/prisma/schema.prisma
bun run packages/db/prisma/seed.ts

# Start dev servers
bun run dev  # or: turbo run dev --parallel
\`\`\`

## 👨‍💻 Author

Built by Me
