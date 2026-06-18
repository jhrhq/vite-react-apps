import { lazy } from "react";

import Loadable from "@/components/Loadable";
import MainLayout from "@/layouts/MainLayout";
import AuthGuard from "@/utility/guard/AuthGuard";
import { Navigate } from "react-router-dom";

const HomePage = Loadable(lazy(() => import("@/pages/home")));
const QuizPage = Loadable(lazy(() => import("@/pages/quiz")));
const ResultPage = Loadable(lazy(() => import("@/pages/result")));
const LeaderBoard = Loadable(lazy(() => import("@/pages/leaderboard")));
const Error = Loadable(lazy(() => import("@/pages/error")));
const MainRoutes = {
  path: "/",
  element: (
    <AuthGuard allowedRoles={["user"]}>
      <MainLayout />
    </AuthGuard>
  ),
  errorElement: <Error />,
  children: [
    {
      path: "/",
      element: <Navigate to="/" />,
    },
    {
      path: "/",
      element: <HomePage to="/" />,
    },
    {
      path: "/quiz/:quizId",
      element: <QuizPage />,
    },
    {
      path: "/result/:quizId",
      element: <ResultPage />,
    },
    {
      path: "/leaderboard/:quizId",
      element: <LeaderBoard />,
    },
  ],
};

export default MainRoutes;
