import { lazy } from "react";

import Loadable from "@/components/Loadable";
import MinimalLayout from "@/layouts/MinimalLayout";
import GuestGuard from "@/utility/guard/GuestGuard";

const AuthLogin = Loadable(lazy(() => import("@/pages/auth/login")));
const AuthRegister = Loadable(lazy(() => import("@/pages/auth/registration")));

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
      path: "/register",
      element: <AuthRegister />,
    },
  ],
};

export default AuthenticationRoutes;
