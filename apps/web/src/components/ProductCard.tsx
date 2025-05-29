import { useNavigate } from 'react-router-dom'
import type { Product } from '../../../../packages/model'

export default function ProductCard({ product }: { product: Product }) {
  const navigate = useNavigate()
  
  return (
    <div 
    onClick={() => navigate(`/products/${product.id}`)}
    className="max-w-sm rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
      <img
        src={product.imageUrl || 'https://img.global.news.samsung.com/id/wp-content/uploads/2024/11/28115936/Tampilan-Galaxy-A16-Gray-1000x667.jpg'}
        alt={product.name}
        className="w-full h-78 object-cover"
      />
      <div className="p-3 flex flex-col gap-1">
        <h2 className="text-sm font-semibold line-clamp-2">{product.name}</h2>
        <p className="text-sm text-gray-800">{product.price.toString()}</p>
        <p className="text-xs text-gray-500">{product.sku}</p>
        <button className="mt-2 text-sm border rounded-md py-1 px-3 hover:bg-gray-100 transition">
          Chat now
        </button>
      </div>
    </div>
  )
}