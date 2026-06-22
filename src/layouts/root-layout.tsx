import React from "react";
import { Outlet, useLocation } from "react-router";

export default function RootLayout(): React.JSX.Element {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {/* Global Header Navigation bar */}
      {/* <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🎯</span>
          <h1 className="text-xl font-bold tracking-tight text-slate-800">
            Enterprise Portal Gateway
          </h1>
        </div>

        {!isHome && (
          <Link
            to="/"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-500 active:scale-95"
          >
            ← Back to App Launcher
          </Link>
        )}
      </header> */}

      {/* App Workspace Injection Viewport */}
      <Outlet />
    </>
  );
}
