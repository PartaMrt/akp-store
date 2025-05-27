import { loginUseCase } from '../../application/authService';
import type { Context } from 'hono'

export const loginHandler = async (c: Context) : Promise<any> => {
  const { username, password } = await c.req.json()

  try {
    const token = await loginUseCase(username, password)
    return Response.json({ token }, 200)
  } catch {
    return Response.json({ error: 'nvalid username or password'}, { status: 401 })
  }
}

export const protectedHandler = async (c: Context) => {
  const payload = c.get('jwtPayload')
  return Response.json({ message: 'Protected route', user: payload.sub, role: payload.role })
}