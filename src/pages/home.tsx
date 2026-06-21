// pages/Home.tsx
import React from "react";
import { Link } from "react-router";
import { APPS_REGISTRY, type AppItem } from "../apps-config";

export default function Home(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Application Hub Launcher
        </h2>
        <p className="mt-2 text-base text-slate-500">
          Select an application module workspace below to enter its execution
          context.
        </p>
      </div>

      {/* Responsive 12 App Grid Layer */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {APPS_REGISTRY.map((app: AppItem) => (
          <Link
            key={app.id}
            to={`${app.id}`}
            className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
          >
            <div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600">
                {app.name}
              </h3>
              <p className="mt-2 text-sm text-slate-500 line-clamp-2">
                {app.desc}
              </p>
            </div>

            <div className="mt-6 flex items-center text-xs font-semibold text-indigo-600 opacity-80 group-hover:opacity-100">
              Launch Module{" "}
              <span className="ml-1 transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
