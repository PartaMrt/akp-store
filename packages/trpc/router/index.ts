import { t } from "../../trpc"
import { authRoutes } from "../../../apps/api/src/router/AuthRouter"
import { productRoutes } from "../../../apps/api/src/router/ProductRouter"

export const appRouter = t.router({
  auth: authRoutes,   
  product: productRoutes,
})

export type AppRouter = typeof appRouter