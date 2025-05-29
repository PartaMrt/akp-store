import { t } from "../../trpc"
import { authRoutes } from "../../../apps/api/src/core/router/AuthRouter"
import { productRoutes } from "../../../apps/api/src/core/router/ProductRouter"

export const appRouter = t.router({
  auth: authRoutes,   
  product: productRoutes,
})

export type AppRouter = typeof appRouter