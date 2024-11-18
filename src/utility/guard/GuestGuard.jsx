import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const GuestGuard = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (isLoggedIn) {
    return navigate("/", { replace: true });
  }

  return children;
};

export default GuestGuard;
