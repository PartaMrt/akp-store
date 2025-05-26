import type { Product } from '../model/Product';
import { ProductRepository } from '../repositories/productRepository';

export class ProductService {
  constructor(private repo: ProductRepository) {}

  async getAll(): Promise<Product[]> {
    return this.repo.getAll();
  }

  async getById(id: string): Promise<Product | null> {
    return this.repo.getById(id);
  }

  async create(data: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> {
    return this.repo.create(data);
  }

  async update(id: string, data: Partial<Product>): Promise<Product> {
    return this.repo.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return this.repo.delete(id);
  }
}