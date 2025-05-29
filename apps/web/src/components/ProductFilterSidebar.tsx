import { useSearchStore } from '../utils/stores'

const brands = ["Apple", "Samsung", "Xiaomi", "OPPO", "Vivo"]
const storageOptions = ["64GB", "128GB", "256GB", "512GB"]

export default function ProductFilterSidebar() {
  const { keyword, setKeyword } = useSearchStore()
  const {selectedBrands, setSelectedBrand} = useSearchStore()
  const {priceRange, setPriceRange} = useSearchStore()
  const {selectedStorage, setSelectedStorage} = useSearchStore()

  const toggleItem = (item: string, list: string[], setter: (v: string[]) => void) => {
    setter(list.includes(item) ? list.filter(i => i !== item) : [...list, item])
  }

  const resetFilters = () => {
    setKeyword("")
    setSelectedBrand([])
    setPriceRange(30)
    setSelectedStorage([])
  }

  return (
    <aside className="w-full max-w-xs bg-white text-black p-4 rounded-2xl shadow space-y-6 text-sm">
      {/* Search Input */}
      <div>
        <label className="block font-medium mb-1">Cari</label>
        <input
          type="text"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
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
                onChange={() => toggleItem(brand, selectedBrands, setSelectedBrand)}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>
      {/* Price Range */}
      <div>
        <h3 className="font-medium mb-2">Harga Maksimum (juta)</h3>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min={1}
            max={30}
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full"
          />
          <span className="w-12 text-right">{priceRange} jt</span>
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
          className="border w-full border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition"
          onClick={resetFilters}
        >
          Reset
        </button>
      </div>
    </aside>
  )
}
