import { createTRPCReact } from '@trpc/react-query'
import type { AppRouter } from '../../../api/src/core/router'

export const trpc = createTRPCReact<AppRouter>()