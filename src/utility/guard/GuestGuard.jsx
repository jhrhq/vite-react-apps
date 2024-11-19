import useAuth from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

const GuestGuard = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default GuestGuard;
