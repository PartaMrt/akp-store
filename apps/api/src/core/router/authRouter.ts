import { Hono } from 'hono';
import { jwt } from 'hono/jwt';
import { loginHandler, protectedHandler } from '../handler/authHandler';

const authRouter = new Hono();

authRouter.post('/login', 
    loginHandler);

authRouter.get(
  '/protected',
  jwt({ secret:  process.env.JWT_SECRET as string}),
  protectedHandler
)

authRouter.get('/', (c) => 
    c.text('Hono + tRPC + Prisma API is running'));

export default authRouter;