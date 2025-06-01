import { useNavigate } from 'react-router-dom'

interface NavbarProps {
  toggleSidebar: () => void;
}

export default function Navbar({ toggleSidebar }: NavbarProps) {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <header 
      className="bg-white shadow p-4 flex items-center justify-between">
        <div className="flex items-center">
        <button onClick={toggleSidebar} 
        className="inline-flex p-2 items-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
        </button>
        <span
          className="text-xl pl-7 font-bold text-orange-400">Abracadabra
          <span className="text-gray-600">.com</span>
        </span>
      </div>
      <div>
        <button 
          onClick={logout} 
          className="border border-orange-400 hover:bg-red-500 hover:text-white px-4 py-2 rounded-md">
        Logout
      </button>
      </div>
    </header>
    
  )
}