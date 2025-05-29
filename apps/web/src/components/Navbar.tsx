import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <h1 className="text-lg font-semibold">My App</h1>
      <div>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
      </div>
    </header>
  )
}