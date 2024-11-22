import useAuth from "@/hooks/useAuth";

const AdminNav = () => {
  const { logout } = useAuth();
  return (
    <nav className="flex-grow">
      <ul className="space-y-2">
        <li>
          <a
            href="#"
            className="block py-2 px-4 rounded-lg bg-buzzr-purple bg-white text-primary font-bold"
          >
            Quizzes
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary"
          >
            Settings
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary"
          >
            Manage Users
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary"
          >
            Manage Roles
          </a>
        </li>

        <li>
          <a
            onClick={logout}
            className="block py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary"
          >
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNav;
