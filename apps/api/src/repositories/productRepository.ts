import { PrismaClient } from '@prisma/client';
import type { Product } from '../model/Product';

export class ProductRepository {
  async getAll(): Promise<Product[]> {
    return PrismaClient.product.findMany();
  }

  async getById(id: string): Promise<Product | null> {
    return PrismaClient.product.findUnique({ where: { id } });
  }

  async create(data: any): Promise<Product> {
    return PrismaClient.product.create({ data });
  }

  async update(id: string, data: Partial<Product>): Promise<Product> {
    return PrismaClient.product.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    await PrismaClient.product.delete({ where: { id } });
  }
}
