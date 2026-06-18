import Dashboard from "@home-inventory/features/pages/dashboard";
import DashboardLayout from "@home-inventory/features/pages/dashboard/layout";
import RouteNotMatched from "@home-inventory/features/pages/Error/url-not-matched";
import InventoryDetailsPage from "@home-inventory/features/pages/inventory-details";
import LocationPage from "@home-inventory/features/pages/location";
import { ProtectedLayout } from "@home-inventory/routes/protected-routes";
import { createBrowserRouter, type RouteObject } from "react-router";
import LoginPage from "../App";

const mainRoutes: RouteObject = {
  element: <ProtectedLayout />,
  children: [
    {
      element: <DashboardLayout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "/dashboard/inventory/:id",
          element: <InventoryDetailsPage />,
        },
        {
          path: "/dashboard/inventory",
          element: <InventoryDetailsPage />,
        },
        {
          path: `/dashboard/location`,
          element: <LocationPage />,
        },
      ],
    },
  ],
  /* children: [
    {
      path: `/`,
      element: <Navigate to={`/dashboard`} />,
    },
    {
      path: `/dashboard`,
      element: <Dashboard />,
    },
    {
      path: `/dashboard/product-details`,
      element: <ProductDetailPage />,
    },

    {
      path: `/dashboard/location`,
      element: <LocationPage />,
    },
  ], */
};
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  mainRoutes,
  {
    path: "*",
    element: <RouteNotMatched />,
  },
]);
