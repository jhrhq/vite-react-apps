import { createBrowserRouter, type RouteObject } from "react-router";
import Dashboard from "@/features/pages/dashboard";
import DashboardLayout from "@/features/pages/dashboard/layout";
import RouteNotMatched from "@/features/pages/Error";
import InventoryDetailsPage from "@/features/pages/inventory-details";
import LocationPage from "@/features/pages/location";
import { ProtectedLayout } from "@/routes/protected-routes";
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
