import { initTRPC, TRPCError } from '@trpc/server'
import type { AppContext } from './AppContext'

export const t = initTRPC.context<AppContext>().create()

export const router = t.router
export const publicProcedure = t.procedure
export const middleware = t.middleware

export const protectedProcedure = publicProcedure.use(
  t.middleware(({ ctx, next }) => {
    if (!ctx.user)  throw new TRPCError({ code: 'UNAUTHORIZED', message: 'You must be logged in.' })
    return next({ ctx })
  })
)
