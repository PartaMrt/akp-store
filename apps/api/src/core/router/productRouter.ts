import { Hono } from 'hono';
import { trpcServer } from '@hono/trpc-server';
import { productHandler } from '../handler/productHandler';
import { createContext } from '../trpc/context';

const productRouter = new Hono();

productRouter.use('/trpc/*', 
    trpcServer({ router: productHandler, createContext }));

export default productRouter;