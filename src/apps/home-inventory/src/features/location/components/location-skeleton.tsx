import { Skeleton } from "@/components/ui/skeleton";

export function LocationSkeleton() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 animate-in fade-in duration-500">
      {/* --- Header Section --- */}
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          {/* Main Icon Square */}
          <Skeleton className="h-14 w-14 rounded-xl bg-slate-200" />

          <div className="space-y-2">
            {/* Title */}
            <Skeleton className="h-8 w-48 bg-slate-200" />
            {/* Breadcrumbs (Home > Living Room) */}
            <Skeleton className="h-4 w-32 bg-slate-100" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Skeleton className="h-10 w-20 rounded-lg bg-slate-100" />
          <Skeleton className="h-10 w-24 rounded-lg bg-slate-100" />
          <Skeleton className="h-10 w-20 rounded-lg bg-red-50/50" />
        </div>
      </div>

      {/* --- Description Block --- */}
      <div className="space-y-3">
        <Skeleton className="h-3 w-24 bg-slate-200" />{" "}
        {/* "DESCRIPTION" label */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full bg-slate-100" />
          <Skeleton className="h-4 w-[90%] bg-slate-100" />
        </div>
      </div>

      {/* --- Stats Grid (Items, Total Value, Created) --- */}
      <div className="grid grid-cols-3 gap-8 py-6 border-y border-slate-100">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-3 w-16 bg-slate-100" /> {/* Label */}
            <Skeleton className="h-8 w-24 bg-slate-200" /> {/* Value */}
          </div>
        ))}
      </div>

      {/* --- Items List Section --- */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-40 bg-slate-200" />{" "}
          {/* "Items in this Location" */}
          <Skeleton className="h-4 w-16 bg-slate-100" /> {/* "View All" */}
        </div>

        {/* Item Cards */}
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-white"
            >
              <div className="flex items-center gap-4 flex-1">
                {/* Item Thumbnail */}
                <Skeleton className="h-12 w-12 rounded-lg bg-purple-50" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-40 bg-slate-200" />
                  <Skeleton className="h-3 w-28 bg-slate-100" />
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Skeleton className="h-4 w-12 bg-slate-200" />
                <Skeleton className="h-5 w-14 rounded-full bg-green-50" />
              </div>
            </div>
          ))}
        </div>

        {/* Add Item Placeholder */}
        <div className="flex justify-center pt-4">
          <Skeleton className="h-4 w-48 bg-slate-100" />
        </div>
      </div>
    </div>
  );
}
