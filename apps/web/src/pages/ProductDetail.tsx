import {  useParams } from 'react-router-dom'
import { trpc } from '../utils/trpc'

export default function ProductDetail() {
  const { id } = useParams()
  const { data: product } = trpc.product.getById.useQuery(id!)

  if (!product) return <div>Loading...</div>

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={product.imageUrl || 'https://img.global.news.samsung.com/id/wp-content/uploads/2024/11/28115936/Tampilan-Galaxy-A16-Gray-1000x667.jpg'} alt={product.name} className="w-full h-96 object-cover mb-6" />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-xl text-gray-700 mb-4">${product.price}</p>
      <p className="text-gray-600">{product.description}</p>
    </div>
  )
}