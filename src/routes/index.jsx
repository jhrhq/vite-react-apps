import Loadable from "@/components/Loadable";
import auth from "@/routes/auth";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Error = Loadable(lazy(() => import("@/pages/Error")));

const router = createBrowserRouter([
  auth,
  // maintenanceRoutes,
  // errorRoutes,
  // mainRoute,
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
