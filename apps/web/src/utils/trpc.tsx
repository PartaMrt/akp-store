import { createTRPCReact } from '@trpc/react-query'
import type { AppRouter } from '../../../../packages/trpc/router'

export const trpc = createTRPCReact<AppRouter>()