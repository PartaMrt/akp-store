
import type { Product } from '../../../../packages/model'
import ProductCard from '../components/ProductCard'
import { trpc } from '../utils/trpc'

export default function Dashboard() {
  const { data } = trpc.product.getAll.useQuery()
  const products = data as Product[] | undefined

  return (
    <div className="w-full bg-gray-50 py-6">
      <div className="max-w-screen-2xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Used Mobile Phones</h1>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )

}