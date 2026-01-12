import { useQuery } from "@tanstack/react-query";
import { getInventoryProductById } from "@/api/get-inventory-products-details";

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
