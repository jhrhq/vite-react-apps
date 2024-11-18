import logo from "@/assets/logo.svg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex justify-between items-center mb-12">
      <img src={logo} className="h-7" />
      <div>
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
      </div>
    </header>
  );
};

export default Header;
