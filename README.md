# 📱 B2B Used Mobile Phones Web App (Alibaba Clone)

A full-stack web application built with a modern TypeScript stack that replicates the **“B2B Used Mobile Phones”** experience from Alibaba.com.

This project follows a scalable architecture, integrates a full API layer, and is production-ready for deployment.

---

## 🚀 Tech Stack

### 🖥️ Frontend
- **React** (with React Router v7) — File-based routing, modern practices.
- **Tailwind CSS** — Utility-first styling.
- **shadcn/ui** — Accessible and elegant component system.
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
  └── api/       # Hono + tRPC backend
packages/
  └── ui/        # Shared shadcn/ui components (optional)
\`\`\`

---

## 🧪 Development

### Prerequisites
- [Bun](https://bun.sh)
- [Docker](https://www.docker.com/) (for PostgreSQL)
- [Node.js](https://nodejs.org) (optional if you use Bun entirely)

### Setup

\`\`\`bash
# Clone the repository
git clone https://github.com/partaMrt/AKP-Test.git
cd AKP-Store

# Install dependencies
bun install

# Start PostgreSQL with Docker
docker-compose up -d

# Apply Prisma migrations
bun run prisma migrate dev

# Start dev servers
bun run dev  # or: turbo run dev --parallel
\`\`\`

---

## 🔐 Authentication

This project uses **Hono Auth** (optional) for JWT-based authentication.

- Login: \`/login\`
- Protected Routes: via \`protectedProcedure\` in \`tRPC\`
- JWT stored in \`Authorization\` headers

---

## 📦 Deployment

Deploy the backend (API) and frontend (web) separately or together depending on the platform.

- Add production \`.env\` variables
- Dockerize with \`Dockerfile\` & \`docker-compose.prod.yml\` (optional)
- Connect to PostgreSQL service (e.g., Neon, Supabase, RDS)

---

## 👨‍💻 Author

Built by Me
