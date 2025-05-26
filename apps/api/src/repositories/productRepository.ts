import { PrismaClient } from '@prisma/client';
import type { Product } from '../model/Product';

var prisma = new PrismaClient();

export class ProductRepository {
  async getAll(): Promise<Product[]> {
    return prisma.product.findMany();
  }

  async getById(id: string): Promise<Product | null> {
    return prisma.product.findUnique({ where: { id } }); 
  }

  async create(data: any): Promise<Product> {
    return prisma.product.create({ data });
  }

  async update(id: string, data: Partial<Product>): Promise<Product> {
    return prisma.product.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    await prisma.product.delete({ where: { id } });
  }
}
