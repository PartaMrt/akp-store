// src/trpc/context.ts
import type { Context } from 'hono'
import { AuthService } from '../../application/AuthService'
import { TRPCError } from '@trpc/server'

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET)
var authService = new AuthService ()

export const createContext = async (c: Context) => {
  const authHeader = c.req.header('Authorization')
  const token = authHeader?.split(' ')[1]
  let user = null
  if (token) {
    try {
      const loginPayload  = await authService.verifyToken(token)
      user = loginPayload
    } catch (err) {
      throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Invalid credentials' })
    }
  }
  return { c, user }
}

export type AppContext = Awaited<ReturnType<typeof createContext>>
