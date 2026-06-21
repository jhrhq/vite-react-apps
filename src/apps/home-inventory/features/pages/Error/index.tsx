import { Button } from "@home-inventory/components/ui/button";
import {
  AlertCircle,
  ArrowLeft,
  RefreshCw,
  Search,
  Sidebar,
} from "lucide-react";

interface InventoryErrorPageProps {
  message?: string;
  reset: () => void;
}

export function ErrorPage({ message, reset }: InventoryErrorPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/30">
      {/* --- Keep Global Header Layout (image_501b47) --- */}
      <div className="flex items-center justify-between border-b px-6 py-3 bg-white">
        <div className="flex items-center gap-4 flex-1">
          <Sidebar className="h-5 w-5 text-slate-400" />
          <div className="h-6 w-px bg-slate-100" />
          <span className="font-semibold text-slate-900">Inventory</span>
          <div className="relative w-full max-w-md ml-4">
            <div className="h-10 w-full rounded-lg bg-slate-50 border border-slate-100 px-10 flex items-center">
              <Search className="h-4 w-4 text-slate-300 mr-2" />
              <span className="text-slate-300 text-sm">Search...</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Error Content --- */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md space-y-6">
          {/* Visual Indicator */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
            <AlertCircle className="h-10 w-10 text-red-500" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Something went wrong
            </h1>
            <p className="text-slate-500 text-sm leading-relaxed">
              {message ||
                "We couldn't retrieve the product details. This might be due to a connection issue or the product no longer exists."}
            </p>
          </div>

          {/* Actions - Matching the button styles in your images */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Button
              onClick={() => reset()}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>

            <a
              href="dashboard"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-slate-200 text-slate-600 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Inventory
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
