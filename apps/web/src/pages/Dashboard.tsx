import type { Product } from '../../../../packages/model'
import ProductCard from '../components/ProductCard'
import { trpc } from '../utils/trpc'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()
  const { data, error } = trpc.product.getAll.useQuery()

   if (error) {
    if ((error as any).data?.code === 'UNAUTHORIZED') {
      localStorage.removeItem('token');
      navigate('/');
    } else {
      console.error("Error fetching product:", error);
    }
  }


  const products = data as Product[] | undefined

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