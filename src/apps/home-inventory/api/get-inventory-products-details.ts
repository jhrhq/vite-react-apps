import type { InventoryProductDetail } from "@home-inventory/@types/details";

export interface InventoryProduct {
  id: string;
  name: string;
  brand: string;
  model: string;
  color: string;
  condition: "New" | "Excellent" | "Good" | "Fair";
  price: number;
  quantity: number;
  location: string;
  subLocation?: string;
  serialNumber: string;
  purchasedFrom: string;
  purchaseDate: string;
  category: string;
  dimensions: string;
  weight: string;
  warranty: string;
  labels: string[];
  levels: string[];
  notes: string;
  images: string[];
  updatedAt: string;
  attachmentsCount: number;
}

export const mockInventoryProducts: Record<string, InventoryProduct> = {
  "1": {
    id: "1",
    name: "Dewalt Cordless Drill",
    brand: "Dewalt",
    model: "DCD771C2",
    color: "Yellow/Black",
    condition: "Good",
    price: 159.0,
    quantity: 1,
    location: "Garage",
    subLocation: "Tool Cabinet",
    serialNumber: "DW-88341092-X",
    purchasedFrom: "The Home Depot",
    purchaseDate: "2023-08-10",
    category: "Hardware / Tools",
    dimensions: "13.80 x 3.90 x 9.90 inches",
    weight: "3.60 pounds",
    warranty: "Expired (3-Year limited ended Aug 2026)",
    labels: ["power tools", "warranty"],
    levels: ["garage", "powertools", "maintenance"],
    notes:
      "Chuck has some minor cosmetic scratching but functions smoothly. Includes two 20V batteries and charger.",
    images: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?w=800&auto=format&fit=crop&q=80",
    ],
    updatedAt: "2024-03-10T10:00:00Z",
    attachmentsCount: 3,
  },
  "2": {
    id: "2",
    name: 'Samsung 55" 4K TV',
    brand: "Samsung",
    model: "UN55TU8000",
    color: "Black",
    condition: "Excellent",
    price: 499.99,
    quantity: 1,
    location: "Living Room",
    subLocation: "TV Stand",
    serialNumber: "SAM-TU8000-55X",
    purchasedFrom: "Best Buy",
    purchaseDate: "2023-11-25",
    category: "Electronics / Video",
    dimensions: "48.40 x 27.80 x 2.40 inches",
    weight: "30.60 pounds",
    warranty: "Expired November 2024",
    labels: ["electronics", "warranty"],
    levels: ["living room", "display", "entertainment"],
    notes:
      "Wall mount spacers are attached to the rear. Crisp display, no dead pixels. Connected to home Wi-Fi natively.",
    images: [
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552533880-12f56d490817?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1601944179066-297add59bc7b?w=800&auto=format&fit=crop&q=80",
    ],
    updatedAt: "2024-03-05T08:30:00Z",
    attachmentsCount: 3,
  },
  "3": {
    id: "3",
    name: 'MacBook Pro 16"',
    brand: "Apple",
    model: "2021 M1 Max",
    color: "Space Gray",
    condition: "Excellent",
    price: 2499.0,
    quantity: 1,
    location: "Home Office",
    subLocation: "Desk",
    labels: ["electronics", "warranty", "high value"],
    levels: ["office", "computers", "apple"],
    serialNumber: "C02FX48HQ05D",
    purchasedFrom: "Apple Store Online",
    purchaseDate: "2022-01-15",
    category: "Computers / Tech",
    dimensions: "14.01 x 9.77 x 0.66 inches",
    weight: "4.80 pounds",
    warranty: "Expired January 2025 (AppleCare+)",
    notes:
      "32GB Unified Memory, 1TB SSD configuration. Mainly kept docked in clamshell mode. Battery cycle count: 142.",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=80",
    ],
    updatedAt: "2024-03-07T14:20:00Z",
    attachmentsCount: 3,
  },
  "4": {
    id: "4",
    name: "Instant Pot Duo 7-in-1",
    brand: "Instant Pot",
    model: "IP-DUO60",
    color: "Stainless Steel/Black",
    condition: "Excellent",
    price: 99.95,
    quantity: 1,
    location: "Kitchen",
    subLocation: "Pantry",
    serialNumber: "IP-60-99281A",
    purchasedFrom: "Amazon",
    purchaseDate: "2023-12-01",
    category: "Appliances / Kitchen",
    dimensions: "13.38 x 12.20 x 12.48 inches",
    weight: "11.80 pounds",
    warranty: "Active until December 01, 2026",
    labels: ["appliances", "kitchen"],
    levels: ["kitchen", "pantry", "cookware"],
    notes:
      "Includes extra sealing ring (red for sweets, clear for savory). Inner stainless steel pot is dishwasher clean.",
    images: [
      "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80",
    ],
    updatedAt: "2024-03-11T16:45:00Z",
    attachmentsCount: 3,
  },
  "5": {
    id: "5",
    name: "Sony WH-1000XM4 Headphones",
    brand: "Sony",
    model: "WH1000XM4/B",
    color: "Black",
    condition: "Excellent",
    price: 349.99,
    quantity: 1,
    location: "Home Office",
    subLocation: "Drawer",
    serialNumber: "SN-982341057",
    purchasedFrom: "Best Buy",
    purchaseDate: "2024-03-15",
    category: "Audio / Electronics",
    dimensions: "7.27 x 3.03 x 9.94 inches",
    weight: "8.96 ounces",
    warranty: "Active until March 15, 2026",
    labels: ["electronics", "audio"],
    levels: ["office", "audio", "premium"],
    notes:
      "Industry-leading noise canceling with Dual Noise Sensor technology. Hard carrying case and airplane adapter included.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&auto=format&fit=crop&q=80",
    ],
    updatedAt: "2024-03-12T09:15:00Z",
    attachmentsCount: 3,
  },
};

export const getInventoryProductById = async (
  id: string,
): Promise<InventoryProductDetail> => {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return mockInventoryProducts[id];
};
