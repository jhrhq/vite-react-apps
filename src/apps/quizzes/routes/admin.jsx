import { lazy } from "react";

import Loadable from "@quizzes/components/Loadable";
import AdminLayout from "@quizzes/layouts/AdminLayout";
import AuthGuard from "@quizzes/utility/guard/AuthGuard";
import { Navigate } from "react-router-dom";

const Dashboard = Loadable(lazy(() => import("@quizzes/pages/admin/dashboard")));
const QuizSetPage = Loadable(lazy(() => import("@quizzes/pages/admin/quizSetPage")));
const QuizSetEntryPage = Loadable(
  lazy(() => import("@quizzes/pages/admin/quizSetEntryPage"))
);
const Error = Loadable(lazy(() => import("@quizzes/pages/error")));
const AdminRoutes = {
  path: "/",
  element: (
    <AuthGuard allowedRoles={["admin", "user"]}>
      <AdminLayout />
    </AuthGuard>
  ),
  errorElement: <Error />,
  children: [
    {
      path: "/",
      element: <Navigate to="/dashboard" />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/quiz-set-page",
      element: <QuizSetPage />,
    },
    {
      path: "/quiz-set-entry-page/:quizId",
      element: <QuizSetEntryPage />,
    },
  ],
};

export default AdminRoutes;
