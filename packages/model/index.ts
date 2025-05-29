import type { Decimal } from "@prisma/client/runtime/library";
import { z } from "zod"

export const productSchema = z.object({
    id: z.string().uuid(),
    sku : z.string(),
    slug: z.string(),
    name: z.string(),
    description: z.string().optional(),
    price: z.string().optional(),
    imageUrl: z.string().url().nullable(),
    stockQuantity: z.number().int().nonnegative(),
    minimumOrderQuantity: z.number().int().min(1),
    createdAt: z.date(),
    updatedAt: z.date(),
})

export type Product = z.infer<typeof productSchema>

export const loginPayloadSchema = z.object({
    sub: z.string(),
    role: z.string(),
})

export type LoginPayload = z.infer<typeof loginPayloadSchema>