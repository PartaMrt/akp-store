import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { trpc } from '../utils/trpc'

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const loginMutation = trpc.auth.login.useMutation()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
          navigate('/dashboard', { replace: true })
        }
        setUsername("admin")
        setPassword("admin")
    }, [navigate])

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      try {
        const token = await loginMutation.mutateAsync({ username : username, password : password })
        localStorage.setItem("token", token)
        navigate("/dashboard")
      } catch (err) {
        setError("Invalid credentials")
      }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-4 p-6 shadow-md rounded w-full max-w-sm">
        <div className="text-3xl font-bold text-orange-400 text-center py-2">Abracadabra
          <span className="text-gray-600">.com</span></div>
          {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-400 w-full px-3 py-2 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-400 w-full px-3 py-2 rounded-md"
        />
        <button type="submit" className="bg-orange-400 text-white px-4 py-2 w-full rounded-2xl">
          Login
        </button>
      </form>
    </div>
  )
}