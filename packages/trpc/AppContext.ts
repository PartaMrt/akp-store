// src/trpc/context.ts
import type { Context } from 'hono'
import { TRPCError } from '@trpc/server'
import { jwtVerify } from 'jose'
import { JWT_SECRET } from './../model'

export const createContext = async (c: Context) => {
  const authHeader = c.req.header('Authorization')
  const token = authHeader?.split(' ')[1]
  let user: import('jose').JWTPayload | null = null
  if (token) {
    try {
      const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET))
      user = payload
    } catch (err) {
      throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Invalid credentials' })
    }
  }
  return { c, user }
}

export type AppContext = Awaited<ReturnType<typeof createContext>>
