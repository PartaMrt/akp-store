import { generateToken } from './jwtService'

export const loginUseCase = async (username: string, password: string) => {
  if (username !== 'admin' || password !== 'admin') {
    throw new Error('Invalid credentials')
  }

  const token = await generateToken({ sub: username, role: 'admin' })
  return token
}