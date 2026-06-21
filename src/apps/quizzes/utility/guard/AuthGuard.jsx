/* eslint-disable react/prop-types */
import Button from "@quizzes/components/ui/button";
import useAuth from "@quizzes/hooks/useAuth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const AuthGuard = ({ allowedRoles, children }) => {
  const { isLoggedIn, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl">Permission Denied</h1>
        <Button onClick={() => navigate(-1)} className="w-ful px-5">
          Back
        </Button>
      </div>
    );
  }

  return children;
};

export default AuthGuard;
