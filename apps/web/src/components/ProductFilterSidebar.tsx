// components/ProductFilterSidebar.tsx
import { useState } from "react"

const brands = ["Apple", "Samsung", "Xiaomi", "OPPO", "Vivo"]
const storageOptions = ["64GB", "128GB", "256GB", "512GB"]

export default function ProductFilterSidebar() {
  const [searchText, setSearchText] = useState("")
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100])
  const [selectedStorage, setSelectedStorage] = useState<string[]>([])

  const toggleItem = (item: string, list: string[], setter: (v: string[]) => void) => {
    setter(list.includes(item) ? list.filter(i => i !== item) : [...list, item])
  }

  const resetFilters = () => {
    setSearchText("")
    setSelectedBrands([])
    setPriceRange([0, 100])
    setSelectedStorage([])
  }

  return (
    <aside className="w-full max-w-xs bg-white text-black p-4 rounded-2xl shadow space-y-6 text-sm">
      {/* Search Input */}
      <div>
        <label className="block font-medium mb-1">Cari</label>
        <input
          type="text"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          placeholder="Cari ponsel..."
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>

      {/* Brand Checkboxes */}
      <div>
        <h3 className="font-medium mb-2">Brand</h3>
        <div className="space-y-1">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleItem(brand, selectedBrands, setSelectedBrands)}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-medium mb-2">Harga (juta)</h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={priceRange[0]}
            min={0}
            max={priceRange[1]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
            className="w-20 border rounded px-2 py-1"
          />
          <span>–</span>
          <input
            type="number"
            value={priceRange[1]}
            min={priceRange[0]}
            max={100}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="w-20 border rounded px-2 py-1"
          />
          <span className="text-muted">jt</span>
        </div>
      </div>

      {/* Storage Options */}
      <div>
        <h3 className="font-medium mb-2">Storage</h3>
        <div className="space-y-1">
          {storageOptions.map((storage) => (
            <label key={storage} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedStorage.includes(storage)}
                onChange={() => toggleItem(storage, selectedStorage, setSelectedStorage)}
              />
              {storage}
            </label>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition"
          onClick={() => {
            // apply logic here (e.g., call fetch/filter)
            console.log({ searchText, selectedBrands, priceRange, selectedStorage })
          }}
        >
          Terapkan
        </button>
        <button
          className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition"
          onClick={resetFilters}
        >
          Reset
        </button>
      </div>
    </aside>
  )
}
