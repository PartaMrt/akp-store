import { Hono } from 'hono';
import { trpcServer } from '@hono/trpc-server';
import { productHandler } from '../handler/productHandler';
import { createContext as baseCreateContext } from '../trpc/appContext'


const productRouter = new Hono();

productRouter.use('/trpc/*', 
    trpcServer({ 
        router: productHandler, 
        createContext: (opts, c) => baseCreateContext(c)
    }));

export default productRouter;