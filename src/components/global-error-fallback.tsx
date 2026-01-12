/** biome-ignore-all lint/suspicious/noAssignInExpressions: false */
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

interface GlobalErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export function GlobalErrorFallback({
  error,
  resetErrorBoundary,
}: GlobalErrorFallbackProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-200">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-50 rounded-full">
            <AlertTriangle className="w-12 h-12 text-red-600" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Something went wrong
        </h1>
        <p className="text-slate-500 mb-8 text-sm leading-relaxed">
          {error.message ||
            "An unexpected error occurred. Please try again or return home."}
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={resetErrorBoundary}
            className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>

          <a
            onClick={() => (window.location.href = "/")}
            className="flex items-center justify-center gap-2 w-full py-3 bg-white text-slate-600 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all"
          >
            <Home className="w-4 h-4" />
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}
