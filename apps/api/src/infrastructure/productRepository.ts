import type { Product } from '../../../../packages/model'
import { PrismaClient } from '@prisma/client'

var prisma = new PrismaClient();

export class ProductRepository {
  async getAll(): Promise<Product[]> {
    const products = await prisma.product.findMany();
    return products.map(product => ({
      ...product,
      price: product.price?.toString(),
    }));
  }

  async getById(id: string): Promise<Product | null> {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) return null;
    return {
      ...product,
      price: product.price?.toString(),
    };
  }

  async create(data: any): Promise<Product> {
    const product = await prisma.product.create({ data });
    return {
      ...product,
      price: product.price?.toString(),
    };
  }

  async update(id: string, data: Partial<Product>): Promise<Product> {
    const product = await prisma.product.update({ where: { id }, data });
    return {
      ...product,
      price: product.price?.toString(),
    };
  }

  async delete(id: string): Promise<void> {
    await prisma.product.delete({ where: { id } });
  }
}
