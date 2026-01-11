// src/features/products/types/index.ts
import { z } from "zod";

export const InventoryProductSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  model: z.string().optional(),
  location: z.object({
    room: z.string(),
    subLocation: z.string().optional(),
  }),
  labels: z.array(z.string()),
  quantity: z.number().int().min(0),
  updatedAt: z.string(), // ISO Date
  imageUrl: z.string().url().optional(),
});

export type InventoryProduct = z.infer<typeof InventoryProductSchema>;

export interface InventoryPaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}
