import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-orange-400">Abracadabra<span className="text-gray-600">.com</span></h1>
      <div>
        <button onClick={logout} className="border border-orange-400 hover:bg-red-500 hover:text-white font-semibold px-4 py-2 rounded-xl">
        Logout
      </button>
      </div>
    </header>
  )
}