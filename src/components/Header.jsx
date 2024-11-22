import logo from "@/assets/logo.svg";
import Button from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const { isLoggedIn, logout, user } = useAuth();

  return (
    <header className="flex justify-between items-center mb-12">
      <img src={logo} className="h-7" />

      <div>
        {isLoggedIn ? (
          <>
            <Button
              onClick={logout}
              className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
              style={{ fontFamily: "Jaro" }}
            >
              Logout
            </Button>

            {user.role == "admin" && (
              <Button
                asChild
                className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
                style={{ fontFamily: "Jaro" }}
              >
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            )}
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
              style={{ fontFamily: "Jaro" }}
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
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
