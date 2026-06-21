import Loadable from "@quizzes/components/Loadable";
import adminRoutes from "@quizzes/routes/admin";
import auth from "@quizzes/routes/auth";
import mainRoutes from "@quizzes/routes/main";
import PublicRoutes from "@quizzes/routes/public";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Error = Loadable(lazy(() => import("@quizzes/pages/error")));

const router = createBrowserRouter([
  PublicRoutes,
  auth,
  mainRoutes,
  adminRoutes,
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
