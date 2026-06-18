import type {
  InventoryPaginatedResponse,
  InventoryProduct,
} from "@home-inventory/@types/inventory";
import { mockInventoryProducts } from "@home-inventory/mocks/data/inventory-products";

/**
 * Simulates a production server request with latency and pagination
 */
export const fetchInventoryProductsMock = async (
  page: number,
  limit: number,
): Promise<InventoryPaginatedResponse<InventoryProduct>> => {
  // 1. Simulate Network Latency (800ms)
  await new Promise((resolve) => setTimeout(resolve, 800));

  // 2. Handle Pagination Logic
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = mockInventoryProducts.slice(startIndex, endIndex);

  // 3. Return Production-Grade Response Shape
  return {
    data: paginatedData,
    total: mockInventoryProducts.length,
    page,
    pageSize: limit,
  };
};
