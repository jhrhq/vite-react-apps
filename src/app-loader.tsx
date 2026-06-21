import React from "react";

export default function AppLoader(): React.JSX.Element {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center py-12">
      {/* Tailwind native loading spinner ring */}
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />
      <h3 className="mt-4 text-base font-medium text-slate-700">
        Initializing Application Scope...
      </h3>
      <p className="text-xs text-slate-400">
        Downloading isolated chunks over runtime network fabric
      </p>
    </div>
  );
}
