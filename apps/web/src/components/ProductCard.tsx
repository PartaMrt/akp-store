import { useNavigate } from 'react-router-dom'
import type { Product } from '@repo/model'

export default function ProductCard({ product }: { product: Product }) {
  const navigate = useNavigate()
  
  return (
    <div 
    onClick={() => navigate(`/products/${product.id}`)}
    className="w-full rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
      <img
        src={product.imageUrl || import.meta.env.VITE_IMG_NOT_FOUND}
        alt={product.name}
        className="w-full h-78 object-cover"
      />
      <div className="p-3 flex flex-col gap-1">
        <h2 className="text-sm font-semibold line-clamp-2">{product.name}</h2>
        <p className="text-sm text-gray-800">Rp {product.price?.toLocaleString("id-ID")}</p>
        <p className="text-xs text-gray-500">SKU: {product.sku}</p>
        <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center text-xs text-gray-600 mt-1">
          <span>Stok: {product.stockQuantity}</span>
          <span>Min. order: {product.minimumOrderQuantity}</span>
        </div>
        <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
          <span>Dibuat: {new Date(product.createdAt).toLocaleDateString('id-ID')}</span>
          <span>Diperbarui: {new Date(product.updatedAt).toLocaleDateString('id-ID')}</span>
        </div>
        <button className="mt-2 text-sm border rounded-md py-1 px-3 hover:bg-gray-100 transition">
          Chat now
        </button>
      </div>
    </div>
  )
}