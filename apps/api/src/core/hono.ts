import { Hono } from 'hono';
import { trpcServer } from '@hono/trpc-server';
import { productRouter } from './router/producRouter';
import { createContext } from './trpc/context';

const app = new Hono();

app.use('/trpc/*', trpcServer({ router: productRouter, createContext }));

app.get('/', (c) => c.text('Hono + tRPC + Prisma API is running'));

export default app;