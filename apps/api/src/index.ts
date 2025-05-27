import app from './core/hono';

const port = 3000;
Bun.serve({ port, fetch: app.fetch });

console.log(`Server running at http://localhost:${port}`);