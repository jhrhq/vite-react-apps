import { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="home" className="text-lg">
            <span className="text-2xl font-bold">Monitor</span> Review
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden"
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <div className="hidden sm:flex sm:items-center sm:ml-auto gap-4">
            <CustomLink to="/read-review/">Home</CustomLink>
            <CustomLink to="/read-review/reviews">Reviews</CustomLink>
            <CustomLink to="/read-review/dashboard">Dashboard</CustomLink>
            <CustomLink to="/read-review/blogs">Blogs</CustomLink>
            <CustomLink to="/read-review/about">About</CustomLink>
          </div>
        </div>

        {isOpen && (
          <div className="flex flex-col gap-2 pb-4 sm:hidden">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/reviews">Reviews</CustomLink>
            <CustomLink to="/dashboard">Dashboard</CustomLink>
            <CustomLink to="/blogs">Blogs</CustomLink>
            <CustomLink to="/about">About</CustomLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;