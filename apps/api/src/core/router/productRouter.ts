import { z } from 'zod';
import { router, protectedProcedure } from '../../../../../packages/trpc'
import { ProductService } from '../../application/ProductService';
import { ProductRepository } from '../../infrastructure/ProductRepository';

const usecase = new ProductService(new ProductRepository());

export const productRoutes = router({
  getAll: protectedProcedure.query(() => usecase.getAll()),

  getById: protectedProcedure.input(z.string()).query(({ input }) => usecase.getById(input)),

  create: protectedProcedure.input(
    z.object({
      sku: z.string(),
      slug: z.string(),
      name: z.string(),
      description: z.string(),
      price: z.number(),
      imageUrl: z.string().nullable(),
      stockQuantity: z.number(),
      minimumOrderQuantity: z.number(),
    })
  ).mutation(({ input }) => usecase.create(input)),

  update: protectedProcedure.input(
    z.object({
      id: z.string(),
      data: z.object({
        sku: z.string().optional(),
        name: z.string().optional(),
        description: z.string().optional(),
        price: z.number().optional(),
      }),
    })
  ).mutation(({ input }) => usecase.update(input.id, input.data)),

  delete: protectedProcedure.input(z.string()).mutation(({ input }) => usecase.delete(input)),

  //  getPublic: publicProcedure.query(() => 'Anyone can see this'),
  //  getPrivate: protectedProcedure.query(({ ctx }) => {
  //     return { user: ctx.user }
  //   }),
});