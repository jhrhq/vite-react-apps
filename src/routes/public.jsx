import Loadable from "@/components/Loadable";
import MinimalLayout from "@/layouts/MinimalLayout";
import { lazy } from "react";

const Home = Loadable(lazy(() => import("@/pages/home")));

const PublicRoutes = {
  element: <MinimalLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
  ],
};

export default PublicRoutes;
