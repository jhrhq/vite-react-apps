// src/components/auth/protected-layout.tsx
/* import { FullPageSpinner } from "@/components/ui/spinner";
import { useAuth } from "@/providers/auth-provider";
 */
// export function ProtectedLayout() {
//   /* const { isAuthenticated, isInitializing } = useAuth();
//   const location = useLocation();

//   if (isInitializing) {
//     return <FullPageSpinner />;
//   }

//   if (!isAuthenticated) {
//     return <Navigate to="" state={{ from: location }} replace />;
//   } */

//   return <Outlet />;
// }

// src/apps/home-inventory/routes/protected-routes.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/auth-provider";
import { RouteLoadingFallback } from "./index";

export function ProtectedLayout() {
  const { isAuthenticated, isChecking } = useAuth();

  if (isChecking) return <RouteLoadingFallback />;
  if (!isAuthenticated) return <Navigate to="." replace />; // → app's index = login

  return <Outlet />;
}

export function RedirectIfAuthed({ redirectTo }) {
  const { isAuthenticated, isChecking } = useAuth();

  if (isChecking) return <RouteLoadingFallback />;
  if (isAuthenticated) return <Navigate to={redirectTo} replace />;

  return <Outlet />;
}
