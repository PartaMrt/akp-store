import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-4 overflow-auto">
            {children}
        </main>
        </div>
    </div>
  )
}
