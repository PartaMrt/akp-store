import ProductFilterSidebar from "./ProductFilterSidebar";

interface SidebarProps {
  isSidebarOpen: boolean;
}

export default function Sidebar({ isSidebarOpen }: SidebarProps) {
  return (
  <aside 
  className={`absolute left-0 z-40 w-64 transition-transform 
    sm:translate-x-0 ${isSidebarOpen ? '-translate-x-0' : '-translate-x-full'} 
    bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700
    `} 
  aria-label="Sidebar">
    <div className="px-3 py-4 overflow-y-auto ">
        <ProductFilterSidebar />
    </div>
  </aside>
  )
}