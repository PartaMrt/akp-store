import { Hono } from 'hono';
import { cors } from 'hono/cors'
import 'dotenv/config';
import { trpcServer } from '@hono/trpc-server';
import { appRouter } from '@repo/trpc/router';
import { createContext as baseCreateContext } from '@repo/trpc/AppContext';

const app = new Hono()

app.use(
  '*',
  cors({
    origin: '*', 
    allowMethods: ['GET', 'POST'],
    allowHeaders: ['Content-Type', 'Authorization'],
  })
)

app.use('/trpc/*', 
    trpcServer({ 
        router: appRouter, 
        createContext: (opts, c) => baseCreateContext(c)
    }));

app.get('/', (c) => c.text('Hono + tRPC + Prisma API is running'));

const port = process.env.PORT ?? 3000;

console.log(`Server is running on http://localhost:${port}`);
Bun.serve({ port, fetch: app.fetch });