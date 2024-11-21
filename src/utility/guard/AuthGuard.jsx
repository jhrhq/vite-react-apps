/* eslint-disable react/prop-types */
import useAuth from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const AuthGuard = ({ allowedRoles, children }) => {
  const { isLoggedIn, user } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    // return <Navigate to="/login" state={{ from: location }} replace />;
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return (
      <div className="h-screen">
        <h1 className="text-5xl">Permission Denied</h1>
      </div>
    );
  }

  return children;
};

export default AuthGuard;
