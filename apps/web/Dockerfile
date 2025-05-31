# ---- BASE IMAGE ----
FROM oven/bun:1.1 AS base
WORKDIR /app
COPY . .

# ---- PRUNE PHASE ----
FROM base AS prune
RUN bun install
RUN bunx turbo prune --scope=web --docker

# ---- BUILD DEPS ----
FROM base AS deps
COPY --from=prune /app/out/json/ ./
RUN bun install

# ---- BUILD APP ----
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY --from=prune /app/out/full/ ./
#RUN bun run build --cwd apps/web

# ---- FINAL RUNTIME IMAGE ----
FROM nginx:alpine AS deploy
WORKDIR /usr/share/nginx/html

# Copy built frontend
COPY --from=build /app/apps/web/dist ./

# Optional: Nginx config (jika perlu custom routing, history fallback, dll)
# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]