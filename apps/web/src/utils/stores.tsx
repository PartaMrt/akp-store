import { create } from 'zustand'

type SearchState = {
    keyword: string
    setKeyword: (value: string) => void
    selectedBrands: string[]
    setSelectedBrand: (value: string[]) => void
    priceRange: number
    setPriceRange: (value: number) => void
    selectedStorage: string[]
    setSelectedStorage: (value: string[]) => void
}

export const useSearchStore = create<SearchState>((set) => ({
    keyword: '',
    setKeyword: (value) => set({ keyword: value }),
    selectedBrands: [],
    setSelectedBrand: (value) => set({ selectedBrands: value }),
    priceRange: 30,
    setPriceRange: (value) => set({ priceRange: value }),
    selectedStorage: [],
    setSelectedStorage: (value) => set({ selectedStorage: value})
}))