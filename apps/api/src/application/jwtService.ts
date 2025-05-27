import { SignJWT, jwtVerify } from 'jose'

const secret = new TextEncoder().encode(process.env.JWT_SECRET) // 32 bytes for HS256
const alg = 'HS256'

type CustomPayload = {
  sub: string
  role: string
}

export const generateToken = async (payload: CustomPayload): Promise<string> => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg })
    .setExpirationTime('1h')
    .sign(secret)
}

export const verifyToken = async (token: string): Promise<CustomPayload> => {
  const { payload } = await jwtVerify(token, secret)
  return payload as CustomPayload
}

