import type { LocationDetailResponse } from "@home-inventory/@types/location";
import { useQuery } from "@tanstack/react-query";

const getLocationDetail = async (
  id: string,
): Promise<LocationDetailResponse> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    id: "bookshelf-1",
    name: "Bookshelf",
    breadcrumbs: ["Home", "Living Room"],
    description:
      "White wooden bookshelf in the living room containing books, decorations, and collectibles. Located to the window.",
    stats: {
      itemCount: 2,
      totalValue: 245,
      createdDate: "Jan 15, 2024",
    },
    items: [
      {
        id: "item-1",
        name: "Vintage Camera Collection",
        category: "Electronics",
        addedTimeAgo: "2 weeks ago",
        price: 180,
        status: "Good",
      },
      {
        id: "item-2",
        name: "Book Collection",
        category: "Books",
        addedTimeAgo: "1 month ago",
        price: 65,
        status: "Good",
      },
    ],
  };
};

export function useLocation(locationId: string) {
  return useQuery({
    queryKey: ["location", locationId],
    queryFn: () => getLocationDetail(locationId),
    // Throw error to trigger our Global Error Boundary if something fails
    // throwOnError: true,
  });
}
