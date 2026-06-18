import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

function DataTableFooterSkeleton() {
  return (
    <div className="flex items-center justify-between px-2 pt-4 border-t">
      <Skeleton className="h-4 w-44" /> {/* "Showing 1-8 of..." */}
      <div className="flex items-center gap-1">
        <div className="flex h-9 w-9 items-center justify-center border rounded-md border-slate-200">
          <ChevronLeft className="h-4 w-4 text-slate-300" />
        </div>
        <Skeleton className="h-9 w-9 rounded-md bg-blue-500/20" />{" "}
        {/* Active page */}
        <Skeleton className="h-9 w-9 rounded-md border border-slate-200" />
        <Skeleton className="h-9 w-9 rounded-md border border-slate-200" />
        <MoreHorizontal className="h-4 w-4 mx-1 text-slate-300" />
        <Skeleton className="h-9 w-9 rounded-md border border-slate-200" />
        <div className="flex h-9 w-9 items-center justify-center border rounded-md border-slate-200">
          <ChevronRight className="h-4 w-4 text-slate-300" />
        </div>
      </div>
    </div>
  );
}

export default DataTableFooterSkeleton;
