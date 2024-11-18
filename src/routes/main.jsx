import { lazy } from "react";

import Loadable from "@/components/Loadable";
import AuthGuard from "@/utility/guard/AuthGuard";

const HomePage = Loadable(lazy(() => import("@/pages/home")));
const QuizPage = Loadable(lazy(() => import("@/pages/quiz")));
const ResultPage = Loadable(lazy(() => import("@/pages/result")));

const MainRoutes = {
  element: <AuthGuard />,
  children: [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/quiz",
      element: <QuizPage />,
    },
    {
      path: "/result",
      element: <ResultPage />,
    },
  ],
};

export default MainRoutes;
