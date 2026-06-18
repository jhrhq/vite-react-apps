// src/components/auth/protected-layout.tsx
import { Outlet } from "react-router";
/* import { FullPageSpinner } from "@/components/ui/spinner";
import { useAuth } from "@/providers/auth-provider";
 */
export function ProtectedLayout() {
  /* const { isAuthenticated, isInitializing } = useAuth();
  const location = useLocation();

  if (isInitializing) {
    return <FullPageSpinner />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } */

  return <Outlet />;
}
