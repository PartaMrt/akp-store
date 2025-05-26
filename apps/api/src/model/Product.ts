export interface Product {
  id: string;
  sku: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  stockQuantity: number;
  minimumOrderQuantity: number;
  createdAt: Date;
  updatedAt: Date;
}