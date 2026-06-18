import { getInventoryProductById } from "@home-inventory/api/get-inventory-products-details";
import { useQuery } from "@tanstack/react-query";

export const inventoryKeys = {
  detail: (id: string) => ["inventory", "detail", id] as const,
};

export const useInventoryProduct = (id: string) => {
  return useQuery({
    queryKey: inventoryKeys.detail(id),
    queryFn: () => getInventoryProductById(id),
    enabled: !!id,
    staleTime: 1000,
  });
};
