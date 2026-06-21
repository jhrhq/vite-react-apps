import Loadable from "@quizzes/components/Loadable";
import MinimalLayout from "@quizzes/layouts/MinimalLayout";
import { lazy } from "react";

const Home = Loadable(lazy(() => import("@quizzes/pages/home")));

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
