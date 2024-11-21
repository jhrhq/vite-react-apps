import { lazy } from "react";

import Loadable from "@/components/Loadable";
import AdminLayout from "@/layouts/AdminLayout";
import AuthGuard from "@/utility/guard/AuthGuard";
import { Navigate } from "react-router-dom";

const HomePage = Loadable(lazy(() => import("@/pages/home")));
const Dashboard = Loadable(lazy(() => import("@/pages/admin/dashboard")));
const QuizSetPage = Loadable(lazy(() => import("@/pages/admin/quizSetPage")));
const QuizSetEntryPage = Loadable(
  lazy(() => import("@/pages/admin/quizSetEntryPage"))
);

const AdminRoutes = {
  path: "/",
  element: (
    <AuthGuard allowedRoles={["admin"]}>
      <AdminLayout />
    </AuthGuard>
  ),
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
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/quiz-set-page",
      element: <QuizSetPage />,
    },
    {
      path: "/quiz-set-entry-page",
      element: <QuizSetEntryPage />,
    },
  ],
};

export default AdminRoutes;
