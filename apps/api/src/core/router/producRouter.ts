import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import type { Context } from '../trpc/context';
import { ProductService } from '../../application/productService';
import { ProductRepository } from '../../infrastructure/productRepository';

const t = initTRPC.context<Context>().create();

const usecase = new ProductService(new ProductRepository());

export const productRouter = t.router({
  getAll: t.procedure.query(() => usecase.getAll()),

  getById: t.procedure.input(z.string()).query(({ input }) => usecase.getById(input)),

  create: t.procedure.input(
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

  update: t.procedure.input(
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

  delete: t.procedure.input(z.string()).mutation(({ input }) => usecase.delete(input)),
});