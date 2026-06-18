import { Skeleton } from "@/components/ui/skeleton";

export function LocationSidebarSkeleton() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6 animate-pulse">
      {/* --- Top Card Container --- */}
      <div className="rounded-2xl border border-slate-100 bg-white p-6 space-y-6 shadow-sm">
        {/* Header: Icon, Title, and Action Buttons */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="flex gap-4">
            {/* Teal Icon Box */}
            <Skeleton className="h-14 w-14 rounded-xl bg-teal-50" />

            <div className="space-y-2">
              {/* "Bookshelf" Title */}
              <Skeleton className="h-7 w-40 bg-slate-200" />
              {/* Breadcrumbs: Home > Living Room */}
              <Skeleton className="h-4 w-32 bg-slate-100" />
            </div>
          </div>

          {/* Action Buttons: Edit, Add Child, Delete */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-9 w-20 rounded-md bg-slate-100" />
            <Skeleton className="h-9 w-28 rounded-md bg-blue-50" />
            <Skeleton className="h-9 w-20 rounded-md bg-red-50" />
          </div>
        </div>

        {/* Description Section */}
        <div className="space-y-2">
          <Skeleton className="h-3 w-24 bg-slate-200" />{" "}
          {/* "DESCRIPTION" label */}
          <Skeleton className="h-4 w-full bg-slate-100" />
          <Skeleton className="h-4 w-3/4 bg-slate-100" />
        </div>

        {/* Horizontal Divider Line */}
        <div className="h-px bg-slate-100 w-full" />

        {/* Stats Grid: Items, Total Value, Created */}
        <div className="grid grid-cols-3 gap-4 pt-2">
          <div className="space-y-2">
            <Skeleton className="h-3 w-12 bg-slate-100" />
            <Skeleton className="h-8 w-10 bg-slate-200" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-3 w-20 bg-slate-100" />
            <Skeleton className="h-8 w-20 bg-slate-200" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-3 w-16 bg-slate-100" />
            <Skeleton className="h-6 w-24 bg-slate-200 mt-1" />
          </div>
        </div>
      </div>

      {/* --- Items Section --- */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <Skeleton className="h-6 w-48 bg-slate-200" />{" "}
          {/* "Items in this Location" */}
          <Skeleton className="h-4 w-16 bg-blue-100" /> {/* "View All" */}
        </div>

        {/* Item Cards List */}
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-white"
            >
              <div className="flex items-center gap-4 flex-1">
                {/* Item Thumbnail (Purple icon in image) */}
                <Skeleton className="h-12 w-12 rounded-lg bg-purple-50" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-44 bg-slate-200" />
                  <Skeleton className="h-3 w-32 bg-slate-100" />
                </div>
              </div>

              {/* Price and Status Badge */}
              <div className="flex flex-col items-end gap-2">
                <Skeleton className="h-4 w-12 bg-slate-200" />
                <Skeleton className="h-5 w-14 rounded-full bg-green-50" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer: + Add Item Link */}
        <div className="flex justify-center py-4">
          <Skeleton className="h-5 w-56 bg-slate-100 rounded-full" />
        </div>
      </div>
    </div>
  );
}
