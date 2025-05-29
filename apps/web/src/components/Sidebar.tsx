export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4 space-y-2">
      <div className="font-bold text-lg mb-4">Menu</div>
      <nav className="flex flex-col gap-2">
        <a href="#" className="hover:bg-gray-700 p-2 rounded">Dashboard</a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">Products</a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">Settings</a>
      </nav>
    </aside>
  )
}