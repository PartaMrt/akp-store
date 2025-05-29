import { t } from "../trpc"
import { authRoutes } from "./AuthRouter"
import { productRoutes } from "./ProductRouter"

export const appRouter = t.router({
  auth: authRoutes,   
  product: productRoutes,
})

export type AppRouter = typeof appRouter