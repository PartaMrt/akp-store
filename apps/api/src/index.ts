// import app from './core/hono';
// import 'dotenv/config';

// const port = 3000;
// Bun.serve({ port, fetch: app.fetch });

// console.log(`Server running at http://localhost:${port}`);

import { Hono } from 'hono';
import 'dotenv/config';
import authRoutes from './core/router/authRouter';
import productRoutes from './core/router/productRouter';

const app = new Hono()

app.route('/auth', authRoutes)
app.route('/', productRoutes)

app.get('/', (c) => c.text('Hono + tRPC + Prisma API is running'));

const port = 3000;
Bun.serve({ port, fetch: app.fetch });

console.log(`Server running at http://localhost:${port}`);