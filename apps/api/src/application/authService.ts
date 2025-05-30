import type { LoginPayload } from '@repo/model'
import { TRPCError } from '@trpc/server'
import { SignJWT, jwtVerify } from 'jose'

export class AuthService {
  async login(username: string, password: string): Promise<string> {
      if (username !== 'admin' || password !== 'admin') {
        throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Invalid credentials' })
      }
      const token = await this.generateToken({ sub: username, role: 'admin' })
      return token
  }

  async generateToken(payload: LoginPayload): Promise<string> {
    return await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('1h')
      .sign(new TextEncoder().encode(process.env.JWT_SECRET))
  }

  async verifyToken(token: string): Promise<LoginPayload> {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET))
    return payload as LoginPayload
  }
}
