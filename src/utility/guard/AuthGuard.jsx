import useAuth from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AuthGuard;
