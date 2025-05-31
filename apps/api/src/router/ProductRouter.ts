import { z } from 'zod'
import { router, protectedProcedure } from '@repo/trpc'
import { filterProductSchema } from '@repo/model'
import { ProductService } from '../application/productService'
import { ProductRepository } from '../infrastructure/productRepository'

const usecase = new ProductService(new ProductRepository());

export const productRoutes = router({
  getAll: protectedProcedure.input(filterProductSchema).query(({ input }) => usecase.getAll(input)),

  getById: protectedProcedure.input(z.string()).query(({ input }) => usecase.getById(input)),
});