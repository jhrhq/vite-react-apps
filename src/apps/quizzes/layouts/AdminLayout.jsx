import logoWhite from "@/assets/logo-white.svg";
import AdminNav from "@/pages/admin/dashboard/AdminNav";
import { Outlet } from "react-router-dom";

import avatar from "@/assets/avater.webp";
import useAuth from "@/hooks/useAuth";

const AdminLayout = () => {
  const { user } = useAuth();
  return (
    <div className="bg-[#F5F3FF] min-h-screen flex">
      <aside className="hidden md:w-64 bg-primary p-6 md:flex flex-col">
        <div className="mb-10">
          <img src={logoWhite} className="h-7" />
        </div>
        <AdminNav />
        <div className="mt-auto flex items-center">
          <img
            src={avatar}
            alt={user.full_name}
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
          <span className="text-white font-semibold">{user.full_name}</span>
        </div>
      </aside>

      <Outlet />
    </div>
  );
};

export default AdminLayout;
