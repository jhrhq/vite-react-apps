import useAuth from "@quizzes/hooks/useAuth";
import { Navigate } from "react-router-dom";

const GuestGuard = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    // return <Navigate to="/" state={{ from: location }} replace />;
    return <Navigate to="/" />;
  }

  return children;
};

export default GuestGuard;
