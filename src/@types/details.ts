// src/features/products/types/details.ts
import { z } from "zod";

// 1. Define the literal values in a const array for Zod
export const LABEL_VALUES = [
  "power tools",
  "warranty",
  "electronics",
  "appliances",
  "outdoor",
  "seasonal",
  "high value",
  "active warranty",
] as const;
export const LEVELS_VALUES = ["electronics", "audio", "premium"] as const;

// 2. Create the Zod schema from those values
export const LabelSchema = z.enum(LABEL_VALUES);
export const LevelSchema = z.enum(LEVELS_VALUES);

// 3. Derive the TypeScript type from the Zod schema
export type Label = z.infer<typeof LabelSchema>;
export type Level = z.infer<typeof LevelSchema>;

export const InventoryProductDetailSchema = z.object({
  id: z.string(),
  name: z.string(),
  brand: z.string(),
  model: z.string(),
  color: z.string(),
  condition: z.enum(["New", "Excellent", "Good", "Fair"]),
  subLocation: z.string().optional(),
  price: z.number(),
  quantity: z.number(),
  location: z.string(),
  serialNumber: z.string(),
  purchasedFrom: z.string(),
  warranty: z.string(),
  purchaseDate: z.string(),
  category: z.string(),
  dimensions: z.string(),
  weight: z.string(),
  labels: z.array(LabelSchema),
  notes: z.string(),
  levels: z.array(LevelSchema),
  images: z.array(z.string()),
  updatedAt: z.string(),
});

export type InventoryProductDetail = z.infer<
  typeof InventoryProductDetailSchema
>;
