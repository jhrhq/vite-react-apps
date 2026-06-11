import type { InventoryProductDetail } from "@/@types/details";

export const getInventoryProductById = async (
  id: string,
): Promise<InventoryProductDetail> => {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return {
    id,
    name: "Sony WH-1000XM4 Headphones",
    brand: "Sony",
    model: "WH-1000XM4",
    color: "Black",
    condition: "Excellent",
    price: 349.99,
    quantity: 1,
    location: "Living Room",
    subLocation: "Entertainment Center",
    serialNumber: "SN-982341057",
    purchasedFrom: "Best Buy",
    purchaseDate: "2024-03-15",
    category: "Audio / Electronics",
    dimensions: "7.27 x 3.03 x 9.94 inches",
    weight: "8.96 ounces",
    warranty: "Active until March 15, 2026",
    labels: ["electronics", "warranty"],
    levels: ["electronics", "audio", "premium"],
    notes:
      "Industry-leading noise canceling with Dual Noise Sensor technology. Battery life up to 30 hours with quick charging.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800",
    ],
    updatedAt: "2026-01-12T14:30:00Z",
    attachmentsCount: 3,
  };
};
