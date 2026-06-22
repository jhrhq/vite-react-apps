import {
  HiOutlineCalendar,
  HiOutlineChatAlt,
  HiOutlineClipboard,
  HiOutlineClipboardList,
  HiOutlineCog,
  HiOutlineHome,
  HiOutlineUserGroup,
} from "react-icons/hi";
import logo from "./assets//lws-logo-en.svg";

const menuIcons = {
  Dashboard: <HiOutlineHome className="mr-3 size-5 fill-none" />,
  Projects: <HiOutlineClipboardList className="mr-3 size-5 fill-none" />,
  Contact: <HiOutlineUserGroup className="mr-3 size-5 fill-none" />,
  Kanban: <HiOutlineClipboard className="mr-3 size-5 fill-none" />,
  Calendar: <HiOutlineCalendar className="mr-3 size-5 fill-none" />,
  Messages: <HiOutlineChatAlt className="mr-3 size-5 fill-none" />,
  Settings: <HiOutlineCog className="mr-3 size-5 fill-none" />,
};

function Menu({ title }) {
  return (
    <li>
      <a href="#" className="flex items-center text-white">
        {menuIcons[title]}
        {title}
      </a>
    </li>
  );
}

export default function Sidebar() {
  return (
    <aside className="hidden w-64 bg-gray-800 p-6 lg:block">
      <div className="mb-8 flex items-center">
        <div className="flex items-center justify-center rounded-full text-xl font-bold">
          <img src={logo} className="mx-auto h-10 text-center" />
        </div>
      </div>
      <button className="mb-8 w-full rounded-md bg-green-500 py-2 text-white cursor-not-allowed" disabled>
        + New Project
      </button>
      <nav>
        <ul className="space-y-4">
          {Object.keys(menuIcons).map((menu) => (
            <Menu key={menu} title={menu} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
