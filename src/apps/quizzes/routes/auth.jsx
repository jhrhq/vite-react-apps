import { lazy } from "react";

import Loadable from "@quizzes/components/Loadable";
import MinimalLayout from "@quizzes/layouts/MinimalLayout";
import GuestGuard from "@quizzes/utility/guard/GuestGuard";

const AuthLogin = Loadable(lazy(() => import("@quizzes/pages/auth/login")));
const AuthRegister = Loadable(lazy(() => import("@quizzes/pages/auth/registration")));
const Error = Loadable(lazy(() => import("@quizzes/pages/error")));
const AuthenticationRoutes = {
  element: (
    <GuestGuard>
      <MinimalLayout />
    </GuestGuard>
  ),
  errorElement: <Error />,
  children: [
    {
      path: "/login",
      element: <AuthLogin />,
    },
    {
      path: "/register",
      element: <AuthRegister />,
    },
  ],
};

export default AuthenticationRoutes;
