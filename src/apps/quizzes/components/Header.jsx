import logo from "@quizzes/assets/logo.svg";
import Button from "@quizzes/components/ui/button";
import useAuth from "@quizzes/hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const { isLoggedIn, logout, user } = useAuth();

  return (
    <header className="flex justify-between items-center mb-12">
      <img src={logo} className="h-7" />

      <div>
        {isLoggedIn ? (
          <>
            {user.role == "admin" && (
              <Button
                asChild
                className="px-4 py-2.5 mr-3 rounded-sm bg-primary/5 text-primary hover:bg-primary hover:text-white transition-colors"
                style={{ fontFamily: "Jaro" }}
              >
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            )}
            <Button
              onClick={logout}
              className="px-4 py-2 rounded-sm hover:bg-primary hover:text-white transition-colors"
              style={{ fontFamily: "Jaro" }}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="px-4 py-2 rounded-sm hover:bg-primary hover:text-white transition-colors"
              style={{ fontFamily: "Jaro" }}
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className="px-4 py-2 rounded-sm hover:bg-primary hover:text-white transition-colors"
              style={{ fontFamily: "Jaro" }}
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
