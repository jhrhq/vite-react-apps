import Loadable from "@/components/Loadable";
import auth from "@/routes/auth";
import mainRoutes from "@/routes/main";
import PublicRoutes from "@/routes/public";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Error = Loadable(lazy(() => import("@/pages/error")));

const router = createBrowserRouter([
  PublicRoutes,
  auth,
  mainRoutes,
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
