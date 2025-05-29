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
      <form onSubmit={handleSubmit} className="space-y-4 border p-6 shadow-md rounded w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border w-full px-3 py-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border w-full px-3 py-2 rounded"
        />
        <button type="submit" className="bg-orange-500 text-white px-4 py-2 w-full rounded">
          Login
        </button>
      </form>
    </div>
  )
}