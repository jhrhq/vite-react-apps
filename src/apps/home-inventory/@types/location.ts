export type ItemStatus = "Good" | "Fair" | "Poor";

export interface Location {
  id: string;
  name: string;
  category: string;
  addedTimeAgo: string;
  price: number;
  status: ItemStatus;
}

export interface LocationDetailResponse {
  id: string;
  name: string;
  breadcrumbs: string[]; // ["Home", "Living Room"]
  description: string;
  stats: {
    itemCount: number;
    totalValue: number;
    createdDate: string;
  };
  items: Location[];
}
