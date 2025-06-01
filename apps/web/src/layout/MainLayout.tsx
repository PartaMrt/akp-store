import { useEffect ,useState } from "react";
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen flex flex-col">
        <Navbar toggleSidebar={() => setIsSidebarOpen(prev => !prev)} />
        <div className="flex flex-1">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <main className={`flex-1 bg-gray-100 p-4 overflow-auto 
          ${isSidebarOpen ? (isMobile ? "ml-0" : "ml-64") : "ml-0"}`
          }>
            {children}
        </main>
        </div>
    </div>
  )
}
