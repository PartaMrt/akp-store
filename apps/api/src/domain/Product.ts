import type { Decimal } from "@prisma/client/runtime/library";

export interface Product {
  id: string;
  sku: string;
  slug: string;
  name: string;
  description: string;
  price: number | Decimal;
  imageUrl: string | null;
  stockQuantity: number;
  minimumOrderQuantity: number;
  createdAt: Date;
  updatedAt: Date;
}