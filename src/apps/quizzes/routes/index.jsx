import Loadable from "@quizzes/components/Loadable";
import { lazy } from "react";

const Error = Loadable(lazy(() => import("@quizzes/pages/error")));

import { Navigate, Route, Routes } from "react-router";

// Layout Imports
import AdminLayout from "@quizzes/layouts/AdminLayout";
import MainLayout from "@quizzes/layouts/MainLayout";
import MinimalLayout from "@quizzes/layouts/MinimalLayout";

// Guards
import AuthGuard from "@quizzes/utility/guard/AuthGuard";
import GuestGuard from "@quizzes/utility/guard/GuestGuard";

// Lazy Loaded Page Components
const Home = Loadable(lazy(() => import("@quizzes/pages/home")));
const AuthLogin = Loadable(lazy(() => import("@quizzes/pages/auth/login")));
const AuthRegister = Loadable(lazy(() => import("@quizzes/pages/auth/registration")));
const HomePage = Loadable(lazy(() => import("@quizzes/pages/home")));
const QuizPage = Loadable(lazy(() => import("@quizzes/pages/quiz")));
const ResultPage = Loadable(lazy(() => import("@quizzes/pages/result")));
const LeaderBoard = Loadable(lazy(() => import("@quizzes/pages/leaderboard")));
const Dashboard = Loadable(lazy(() => import("@quizzes/pages/admin/dashboard")));
const QuizSetPage = Loadable(lazy(() => import("@quizzes/pages/admin/quizSetPage")));
const QuizSetEntryPage = Loadable(lazy(() => import("@quizzes/pages/admin/quizSetEntryPage")));
const ErrorPage = Loadable(lazy(() => import("@quizzes/pages/error")));

export default function QuizzesRouter() {
  return (
    <Routes>
      
      {/* 1. PUBLIC ROUTES (Unauthenticated Root Layout) */}
      <Route element={<MinimalLayout />}>
        {/* Matches your /app/quizzes base directory */}
        <Route index element={<Home />} />
      </Route>

      {/* 2. AUTHENTICATION ROUTES (Guest Guard Enforced) */}
      <Route
        element={
          <GuestGuard>
            <MinimalLayout />
          </GuestGuard>
        }
      >
        {/* Relative paths allow resolution under parent framework nesting */}
        <Route path="login" element={<AuthLogin />} />
        <Route path="register" element={<AuthRegister />} />
      </Route>

      {/* 3. MAIN ROUTES (User Authenticated App Core Layout) */}
      <Route
        element={
          <AuthGuard allowedRoles={["user"]}>
            <MainLayout />
          </AuthGuard>
        }
      >
        {/* Your object configuration has an index landing layout point */}
        <Route index element={<HomePage />} />
        <Route path="quiz/:quizId" element={<QuizPage />} />
        <Route path="result/:quizId" element={<ResultPage />} />
        <Route path="leaderboard/:quizId" element={<LeaderBoard />} />
      </Route>

      {/* 4. ADMIN ROUTES (Admin/User Authenticated Layout) */}
      <Route
        element={
          <AuthGuard allowedRoles={["admin", "user"]}>
            <AdminLayout />
          </AuthGuard>
        }
      >
        {/* Redirect base admin sub-path hit down to dashboard route */}
        <Route path="admin" element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="quiz-set-page" element={<QuizSetPage />} />
        <Route path="quiz-set-entry-page/:quizId" element={<QuizSetEntryPage />} />
      </Route>

      {/* 5. APP GLOBAL CATCH-ALL ERROR PAGE */}
      <Route path="*" element={<ErrorPage />} />

    </Routes>
  );
}

