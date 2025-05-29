import { Hono } from 'hono';
import { cors } from 'hono/cors'
import 'dotenv/config';
import { trpcServer } from '@hono/trpc-server';
import { appRouter } from '../../../packages/trpc/router';
import { createContext as baseCreateContext } from '../../../packages/trpc/AppContext';

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

const port = 3000;
Bun.serve({ port, fetch: app.fetch });

console.log(`Server running at http://localhost:${port}`);