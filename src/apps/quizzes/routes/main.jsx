import { lazy } from "react";

import Loadable from "@quizzes/components/Loadable";
import MainLayout from "@quizzes/layouts/MainLayout";
import AuthGuard from "@quizzes/utility/guard/AuthGuard";
import { Navigate } from "react-router-dom";

const HomePage = Loadable(lazy(() => import("@quizzes/pages/home")));
const QuizPage = Loadable(lazy(() => import("@quizzes/pages/quiz")));
const ResultPage = Loadable(lazy(() => import("@quizzes/pages/result")));
const LeaderBoard = Loadable(lazy(() => import("@quizzes/pages/leaderboard")));
const Error = Loadable(lazy(() => import("@quizzes/pages/error")));
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
