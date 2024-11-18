import { lazy } from "react";

import Loadable from "@/components/Loadable";
import MinimalLayout from "@/layouts/MinimalLayout";
import GuestGuard from "@/utils/guards/GuestGuard";

const AuthLogin = Loadable(lazy(() => import("@/views/auth/Login")));
const AuthForgotPassword = Loadable(
  lazy(() => import("@/views/auth/ForgotPassword"))
);
const AuthCheckMail = Loadable(lazy(() => import("@/views/auth/CheckMail")));
const AuthResetPassword = Loadable(
  lazy(() => import("@/views/auth/ResetPassword"))
);
const AuthCodeVerification = Loadable(
  lazy(() => import("@/views/auth/CodeVerification"))
);

const AuthenticationRoutes = {
  element: (
    <GuestGuard>
      <MinimalLayout />
    </GuestGuard>
  ),
  children: [
    {
      path: "/login",
      element: <AuthLogin />,
    },
    {
      path: "/forgot-password",
      element: <AuthForgotPassword />,
    },
    {
      path: "/check-mail",
      element: <AuthCheckMail />,
    },
    {
      path: "/reset-password",
      element: <AuthResetPassword />,
    },
    {
      path: "/code-verification",
      element: <AuthCodeVerification />,
    },
  ],
};

export default AuthenticationRoutes;
