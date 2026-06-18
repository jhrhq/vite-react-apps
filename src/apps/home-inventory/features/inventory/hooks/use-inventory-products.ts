import { fetchInventoryProductsMock } from "@home-inventory/api/mock-inventor-products-api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const productKeys = {
  all: ["products"] as const,
  list: (page: number) => [...productKeys.all, "list", { page }] as const,
};

export const useInventoryProducts = (page: number = 1) => {
  return useQuery({
    queryKey: productKeys.list(page),
    queryFn: () => fetchInventoryProductsMock(page, 8), // Calling our fake request

    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
    // We check the token here to mimic a protected route behavior
  });
};
