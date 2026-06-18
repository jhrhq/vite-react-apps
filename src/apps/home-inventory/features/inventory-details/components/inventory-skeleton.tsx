/** biome-ignore-all lint/suspicious/noArrayIndexKey: false  */

import { Skeleton } from "@home-inventory/components/ui/skeleton";
import { Sidebar } from "lucide-react";

export function InventoryDetailViewSkeleton() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/30 animate-pulse">
      {/* --- Global Header (Matches your image_501b47) --- */}
      <div className="flex items-center justify-between border-b px-6 py-3 bg-white">
        <div className="flex items-center gap-4 flex-1">
          <Sidebar className="h-5 w-5 text-slate-200" />
          <div className="h-6 w-px bg-slate-100" />
          <Skeleton className="h-6 w-32" />
          <div className="relative w-full max-w-md ml-4">
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-24 rounded-md" />
          <Skeleton className="h-10 w-32 rounded-md bg-blue-50" />
        </div>
      </div>
      <div className="space-y-4 pt-8 px-8">
        <Skeleton className="h-10 w-3/4" />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-6 w-32 rounded-full" />
        </div>
      </div>
      <main className="max-w-7xl mx-auto w-full p-8 space-y-10">
        {/* --- Product Hero Section (Matches image_5a8893) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <div className="space-y-4">
            <Skeleton className="aspect-square w-full rounded-3xl" />
            <div className="grid grid-cols-3 gap-4">
              <Skeleton className="aspect-square rounded-2xl" />
              <Skeleton className="aspect-square rounded-2xl" />
              <Skeleton className="aspect-square rounded-2xl" />
            </div>
          </div>

          {/* Key Details Card */}
          <div className="space-y-8">
            <div className="rounded-3xl border border-slate-100 p-8 bg-white shadow-sm space-y-6">
              <Skeleton className="h-6 w-32" />
              <div className="space-y-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-5 w-48" />
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-5 w-48" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- Tabs & Data Grid (Matches image_5a8b73) --- */}
        <div className="rounded-3xl border border-slate-100 bg-white overflow-hidden shadow-sm">
          <div className="flex gap-10 px-8 h-16 items-center border-b bg-slate-50/50">
            <Skeleton className="h-4 w-16" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-5 w-5 rounded-full" />
            </div>
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-10">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b border-slate-50 pb-4"
              >
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-4 w-40" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
