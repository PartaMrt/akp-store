import { useNavigate, useParams } from "react-router-dom"
import { trpc } from '../utils/trpc'
import { useEffect } from "react";

const specs = {
    brand: "Apple",
    storage: "256GB",
    color: "Titanium",
    screen: "6.7 inci Super Retina XDR",
    camera: "48MP + 12MP + 12MP",
    battery: "4.400 mAh",
    os: "iOS 17",
}

export default function ProductDetailPage() {
  const navigate = useNavigate()
  const { id } = useParams()

  const { data: product, isLoading, error } = trpc.product.getById.useQuery(id!);

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

  if (isLoading) return <div>Loading...</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
      {/* Tombol Kembali */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-sm text-blue-600 hover:underline"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Kembali
      </button>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Gambar Produk */}
        <div className="rounded-lg overflow-hidden">
          <img
            src={product.imageUrl || import.meta.env.VITE_IMG_NOT_FOUND}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Detail Produk */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>

          <div className="text-2xl font-semibold text-blue-600">
            Rp {product.price?.toLocaleString("id-ID")}
          </div>

          {/* Spesifikasi */}
          <div className="border-t pt-4 space-y-2">
            <h2 className="text-lg font-medium">Spesifikasi</h2>
            <ul className="grid grid-cols-2 text-sm gap-y-1 text-gray-700">
              {Object.entries(specs).map(([key, val]) => (
                <li key={key}>
                  <span className="capitalize font-semibold">{key}:</span>{" "}
                  {val}
                </li>
              ))}
            </ul>
          </div>

          {/* Tombol Aksi */}
          <div className="flex gap-4 pt-4">
            <button className="bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-amber-500 transition">
              Beli Sekarang
            </button>
            <button className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 transition">
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
