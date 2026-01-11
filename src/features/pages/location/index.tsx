/** biome-ignore-all lint/suspicious/noArrayIndexKey: false positive */

import { LocationMainHeader } from "@/features/location/components/location-header";
import { LocationItemDetails } from "@/features/location/components/location-items-details";
import { LocationItemsLists } from "@/features/location/components/location-lists";
import { LocationSecondarySidebar } from "@/features/location/components/location-sidebar";
import { cn } from "@/lib/utils";

/* 
type StockStatusCode = "IN_STOCK" | "OUT_OF_STOCK";

interface StockInfo {
  stockStatusCode?: StockStatusCode;
  stockQuantity?: number;
}

type option = {
  id: string;
  label: string;
  stockInfo: StockInfo;
  color?: string;
  value: string;
};

interface Hinges {
  label: string;
  id: string;
  name: string;
  options?: option[];
  min?: number;
  max?: number;
}

interface ProductImagesProps {
  images: Array<{
    srcset: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    sizes: string;
  }>;
}

interface ReviewsProps {
  rate: number;
  totalReviewers: string;
}

interface PriceProps {
  regular: number;
  sale?: number;
  currency: string;
  text?: string;
}

interface ProductInfoProps {
  info?: Array<{
    label: string;
    value: string;
  }>;
} */

const _MAX_STARS = 5;

interface ProductDetail1Props {
  className?: string;
}

export default function LocationPage({ className }: ProductDetail1Props) {
  return (
    <>
      <LocationMainHeader />
      <div className="flex  ">
        <LocationSecondarySidebar />
        <section className={cn("bg-[#F8FAFC] flex-1 p-4", className)}>
          <div className="container space-y-6">
            <LocationItemDetails />
            <LocationItemsLists />
          </div>
        </section>
      </div>
    </>
  );
}
