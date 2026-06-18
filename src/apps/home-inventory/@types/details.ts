export type InventoryProductDetailLabel =
  | "power tools"
  | "warranty"
  | "electronics"
  | "appliances"
  | "outdoor"
  | "seasonal"
  | "high value"
  | "active warranty";

export type InventoryProductDetailLevels = "electronics" | "audio" | "premium";

export type InventoryProductDetail = {
  id: string;
  name: string;
  brand: string;
  model: string;
  color: string;
  condition: "New" | "Excellent" | "Good" | "Fair";
  price: number;
  quantity: number;
  location: string;
  serialNumber: string;
  purchasedFrom: string;
  warranty: string;
  purchaseDate: string;
  category: string;
  dimensions: string;
  weight: string;
  labels: InventoryProductDetailLabel[];
  notes: string;
  levels: InventoryProductDetailLevels[];
  images: string[];
  updatedAt: string;
  subLocation?: string | undefined;
};
