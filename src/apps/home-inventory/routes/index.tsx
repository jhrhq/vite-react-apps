// import Dashboard from "@home-inventory/features/pages/dashboard";
// import InventoryDetailsPage from "@home-inventory/features/pages/inventory-details";
// import LocationPage from "@home-inventory/features/pages/location";
// import { createBrowserRouter, type RouteObject } from "react-router";
// import LoginPage from "../App.js";

// const mainRoutes: RouteObject = {
//   element: <ProtectedLayout />,
//   children: [
//     {
//       element: <DashboardLayout />,
//       children: [
//         {
//           path: "dashboard",
//           element: <Dashboard />,
//         },
//         {
//           path: "/dashboard/inventory/:id",
//           element: <InventoryDetailsPage />,
//         },
//         {
//           path: "/dashboard/inventory",
//           element: <InventoryDetailsPage />,
//         },
//         {
//           path: `/dashboard/location`,
//           element: <LocationPage />,
//         },
//       ],
//     },
//   ],
//   /* children: [
//     {
//       path: `/`,
//       element: <Navigate to={`/dashboard`} />,
//     },
//     {
//       path: `/dashboard`,
//       element: <Dashboard />,
//     },
//     {
//       path: `/dashboard/product-details`,
//       element: <ProductDetailPage />,
//     },

//     {
//       path: `/dashboard/location`,
//       element: <LocationPage />,
//     },
//   ], */
// };
// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LoginPage />,
//   },
//   mainRoutes,
//   {
//     path: "*",
//     element: <RouteNotMatched />,
//   },
// ]);

import DashboardLayout from "@home-inventory/features/pages/dashboard/layout";
import RouteNotMatched from "@home-inventory/features/pages/Error/url-not-matched";
import {
  ProtectedLayout,
  RedirectIfAuthed,
} from "@home-inventory/routes/protected-routes";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("../App"));
const Dashboard = lazy(
  () => import("@home-inventory/features/pages/dashboard"),
);
const InventoryDetailsPage = lazy(
  () => import("@home-inventory/features/pages/inventory-details"),
);
const LocationPage = lazy(
  () => import("@home-inventory/features/pages/location"),
);

export default function AppRoutes() {
  return (
    <Routes>
      {/* Logged out → index shows login. Logged in → index bounces to dashboard. */}
      <Route element={<RedirectIfAuthed redirectTo="products" />}>
        <Route index element={withSuspense(LoginPage)} />
      </Route>

      <Route element={<ProtectedLayout />}>
        <Route element={<DashboardLayout />}>
          <Route path="products" element={withSuspense(Dashboard)} />
          <Route
            path="products/:id"
            element={withSuspense(InventoryDetailsPage)}
          />
          <Route path="product" element={withSuspense(InventoryDetailsPage)} />
          <Route path="location" element={withSuspense(LocationPage)} />
        </Route>
      </Route>

      <Route path="*" element={<RouteNotMatched />} />
    </Routes>
  );
}

const withSuspense = (Component) => (
  <Suspense fallback={<RouteLoadingFallback />}>
    <Component />
  </Suspense>
);
// src/apps/home-inventory/RouteLoadingFallback.jsx
export function RouteLoadingFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="flex items-center gap-3 text-sm text-zinc-400">
        <span className="h-3 w-3 animate-spin rounded-full border-2 border-zinc-600 border-t-zinc-200" />
        Loading…
      </div>
    </div>
  );
}
