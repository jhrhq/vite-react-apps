import React from "react";
import { Link } from "react-router";
import { APPS_REGISTRY, type AppItem } from "../apps-config";

export default function Home(): React.JSX.Element {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <section className="relative overflow-hidden bg-white py-12 sm:py-32">
        {/* Subtle Background Grid Pattern (Optional) */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />

        <div className="mx-auto max-w-4xl px-6 text-center">
          {/* Tech Stack Badge */}
          {/* <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-xs font-medium text-neutral-800 border border-neutral-200/60 select-none">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Monorepo Workspace Verified
          </div> */}

          {/* Main Headline */}
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-6xl max-w-2xl mx-auto leading-[1.1]">
            Simple React Apps
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-neutral-600 max-w-2xl mx-auto">
            Built on <span className="font-medium text-neutral-900">Vite</span>,{" "}
            <span className="font-medium text-neutral-900">Tailwind</span>, and{" "}
            <span className="font-medium text-neutral-900">React Router</span>.
            A clean, single-workspace collection showcasing{" "}
            {APPS_REGISTRY.length} standalone frontend projects under a unified
            dashboard.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {APPS_REGISTRY.map((app: AppItem) => (
          <Link
            key={app.id}
            to={`${app.id}`}
            target="_blank"
            className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
          >
            <div>
              <img src={app.img} alt={app.name} />
            </div>
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
