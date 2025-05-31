import { z } from "zod"

export const productSchema = z.object({
    id: z.string().uuid(),
    sku : z.string(),
    slug: z.string(),
    name: z.string(),
    description: z.string().optional(),
    price: z.number().optional(),
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

export const filterProductSchema = z.object({
    keyword: z.string().optional(),
    selectedBrands: z.array(z.string()).optional(),
    priceRange: z.number().optional(),
    selectedStorage: z.array(z.string()).optional(),
})

export type FilterProduct = z.infer<typeof filterProductSchema>

export const JWT_SECRET = "D27gijdvth3Ul3DjGcexjcFfgCHc8jWd"