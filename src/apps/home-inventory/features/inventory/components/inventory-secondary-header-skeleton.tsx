import { Skeleton } from "@home-inventory/components/ui/skeleton";

export function ProductFiltersSkeleton() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 px-8 border-b animate-pulse">
      {/* Left side: Label and Filter Badges */}
      <div className="flex flex-wrap items-center gap-2">
        {/* "Filters:" text placeholder */}
        <Skeleton className="h-4 w-12 rounded-sm mr-2" />

        {/* Active Filter Badge 1 */}
        <Skeleton className="h-8 w-28 rounded-md border border-dashed" />

        {/* Active Filter Badge 2 */}
        <Skeleton className="h-8 w-28 rounded-md border border-dashed" />

        {/* "Add Filter" dashed button placeholder */}
        <Skeleton className="h-8 w-28 rounded-md border border-dashed" />
      </div>

      {/* Right side: Item count and Sort button */}
      <div className="flex items-center gap-4">
        {/* "248 items" text placeholder */}
        <Skeleton className="h-4 w-16" />

        {/* "Sort: Updated" button placeholder */}
        <Skeleton className="h-9 w-32 rounded-md" />
      </div>
    </div>
  );
}
