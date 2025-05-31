import type { Product, FilterProduct } from '@repo/model'
import { Prisma, PrismaClient } from '@prisma/client'

var prisma = new PrismaClient();

export class ProductRepository {
  async getAll(filter: FilterProduct): Promise<Product[]> {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc'},
      where : {
       AND: [
        // Keyword filter (optional)
          filter.keyword
            ? {
                OR: [
                  { name: { contains: filter.keyword, mode: 'insensitive' } },
                  { description: { contains: filter.keyword, mode: 'insensitive' } },
                  { sku: { contains: filter.keyword, mode: 'insensitive' } },
                ],
              }
            : {},
        // Brand filter (array of substrings)
          filter.selectedBrands?.length
            ? {
                OR: filter.selectedBrands.flatMap((brand) => [
                  { description: { contains: brand, mode: 'insensitive' } },
                  { name: { contains: brand, mode: 'insensitive' } },
                  { sku: { contains: brand, mode: 'insensitive' } },
                ]),
              }
            : {},
        // Storage filter (array of substrings)
          filter.selectedStorage?.length
            ? {
                OR: filter.selectedStorage.flatMap((storage) => [
                  { description: { contains: storage, mode: 'insensitive' } },
                  { name: { contains: storage, mode: 'insensitive' } },
                  { sku: { contains: storage, mode: 'insensitive' } },
                ]),
              }
            : {},
        // Price filter (max price)
          filter.priceRange ? { price: { lte: filter.priceRange * 1000000  } } : {},
      ],
      }
    });
    
    return products.map(product => ({
      ...product,
      price: Number(product.price),
    }));
  }

  async getById(id: string): Promise<Product | null> {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) return null;
    return {
      ...product,
      price: Number(product.price),
    };
  }

  async create(data: Prisma.ProductCreateInput): Promise<Product> {
    const product = await prisma.product.create({ data });
    return {
      ...product,
      price: Number(product.price),
    };
  }

  async update(id: string, data: Partial<Product>): Promise<Product> {
    const product = await prisma.product.update({ where: { id }, data });
    return {
      ...product,
      price: Number(product.price),
    };
  }

  async delete(id: string): Promise<void> {
    await prisma.product.delete({ where: { id } });
  }
}
