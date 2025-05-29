import type { Product } from '../../../../packages/model'
import ProductCard from '../components/ProductCard'
import { trpc } from '../utils/trpc'
import { useNavigate } from 'react-router-dom'
import { useSearchStore } from '../utils/stores'
import { filterProductSchema } from '../../../../packages/model'
import { useEffect } from 'react'


export default function Dashboard() {
  const navigate = useNavigate()
  const filter = useSearchStore()

  const { data, error } = trpc.product.getAll.useQuery(filterProductSchema.parse({
    keyword: filter.keyword,
    selectedBrands: filter.selectedBrands,
    priceRange: filter.priceRange,
    selectedStorage: filter.selectedStorage
  }))
  const products = data as Product[] | undefined

  useEffect(() => {
    if (error) {
      if ((error as any).data?.code === 'UNAUTHORIZED') {
        localStorage.removeItem('token');
        navigate('/');
      } else {
        console.error("Error fetching product:", error);
      }
    }
  }, [error, navigate]);

  if (!products) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading products...</div>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-gray-500">No products found</div>
      </div>
    )
  }

  return (
    <div className="w-full bg-gray-50 py-6">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )

}