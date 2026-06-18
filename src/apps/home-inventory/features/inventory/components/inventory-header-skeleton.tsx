// src/features/products/components/product-header-skeleton.tsx

import { Skeleton } from "@home-inventory/components/ui/skeleton";
import { Search, Sidebar } from "lucide-react";

export function InventoryHeaderSkeleton() {
  return (
    <div className="flex items-center justify-between border-b px-6 py-3 bg-white">
      <div className="flex items-center gap-4 flex-1">
        {/* Sidebar Toggle Icon Placeholder */}
        <Sidebar className="h-5 w-5 text-slate-300" />
        <div className="h-6 w-px bg-slate-200" /> {/* Divider */}
        {/* Page Title: "Inventory" */}
        <Skeleton className="h-8 w-28 rounded-md border border-dashed" />
        {/* Search Bar Placeholder */}
        <div className="relative w-full max-w-60 ">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
          <Skeleton className="h-10 w-full border border-dashed" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        {/* Export Button Skeleton */}
        <Skeleton className="h-8 w-28 rounded-md border border-dashed" />

        {/* Add Item Button Skeleton */}
        <div className="flex items-center gap-2 rounded-md">
          <Skeleton className="h-8 w-28 rounded-md border border-dashed" />
        </div>
      </div>
    </div>
  );
}
