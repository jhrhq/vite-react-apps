export interface InventoryProductLocation {
  room: string;
  subLocation?: string;
}

export interface InventoryProduct {
  id: string;
  name: string;
  model: string;
  location: InventoryProductLocation;
  labels: string[];
  quantity: number;
  updatedAt: string;
  imageUrl: string;
}
export interface InventoryPaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}
