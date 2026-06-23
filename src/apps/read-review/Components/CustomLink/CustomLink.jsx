import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  const resolved = useResolvedPath(to);

  const match = useMatch({
    path: resolved.pathname,
    end: true,
  });

  return (
    <Link
      to={to}
      className={`transition-colors ${
        match
          ? "font-medium text-blue-500"
          : "text-white hover:text-blue-400"
      }`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;