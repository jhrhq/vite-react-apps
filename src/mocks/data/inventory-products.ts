import type { InventoryProduct } from "@/@types/inventory";

export const mockInventoryProducts: InventoryProduct[] = [
  {
    id: "1",
    name: "Dewalt Cordless Drill",
    model: "DCD771C2",
    location: { room: "Garage", subLocation: "Tool Cabinet" },
    labels: ["power tools", "warranty"],
    quantity: 1,
    updatedAt: "2024-03-10T10:00:00Z",
    imageUrl:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "2",
    name: 'Samsung 55" 4K TV',
    model: "UN55TU8000",
    location: { room: "Living Room" },
    labels: ["electronics", "warranty"],
    quantity: 1,
    updatedAt: "2024-03-05T08:30:00Z",
    imageUrl:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "3",
    name: 'MacBook Pro 16"',
    model: "2021 M1 Max",
    location: { room: "Home Office", subLocation: "Desk" },
    labels: ["electronics", "warranty", "high value"],
    quantity: 1,
    updatedAt: "2024-03-07T14:20:00Z",
    imageUrl:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Instant Pot Duo 7-in-1",
    model: "IP-DUO60",
    location: { room: "Kitchen", subLocation: "Pantry" },
    labels: ["appliances", "kitchen"],
    quantity: 1,
    updatedAt: "2024-03-11T16:45:00Z",
    imageUrl:
      "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "Sony WH-1000XM4 Headphones",
    model: "WH1000XM4/B",
    location: { room: "Home Office", subLocation: "Drawer" },
    labels: ["electronics", "audio"],
    quantity: 1,
    updatedAt: "2024-03-12T09:15:00Z",
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "6",
    name: "Nintendo Switch OLED",
    model: "HEG-S-KAAAA",
    location: { room: "Living Room", subLocation: "TV Stand" },
    labels: ["electronics", "gaming"],
    quantity: 1,
    updatedAt: "2024-03-09T22:10:00Z",
    imageUrl:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "7",
    name: "Ergonomic Office Chair",
    model: "Steelcase Gesture",
    location: { room: "Home Office" },
    labels: ["furniture", "office"],
    quantity: 1,
    updatedAt: "2024-03-01T11:00:00Z",
    imageUrl:
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "8",
    name: "Adjustable Dumbbells (Pair)",
    model: "Bowflex SelectTech 552",
    location: { room: "Garage", subLocation: "Gym Corner" },
    labels: ["fitness", "sports"],
    quantity: 2,
    updatedAt: "2024-03-14T07:25:00Z",
    imageUrl:
      "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "9",
    name: "Nest Thermostat E",
    model: "T4000ES",
    location: { room: "Hallway" },
    labels: ["smart home", "appliances"],
    quantity: 1,
    updatedAt: "2024-02-28T18:40:00Z",
    imageUrl:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600&auto=format&fit=crop",
  },
];
