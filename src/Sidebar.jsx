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
export default function Sidebar() {
  return (
    <aside className="hidden w-64 bg-gray-800 p-6 lg:block">
      <div className="mb-8 flex items-center">
        <div className="flex items-center justify-center rounded-full text-xl font-bold">
          <img src={logo} className="mx-auto h-10 text-center" />
        </div>
      </div>
      <button className="mb-8 w-full rounded-md bg-green-500 py-2 text-white">
        + New Project
      </button>
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center">
              <HiOutlineHome className="mr-3 size-5 fill-none" />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <HiOutlineClipboardList className="mr-3 size-5 fill-none" />
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <HiOutlineUserGroup className="mr-3 size-5 fill-none" />
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <HiOutlineClipboard className="mr-3 size-5 fill-none" />
              Kanban
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <HiOutlineCalendar className="mr-3 size-5 fill-none" />
              Calendar
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <HiOutlineChatAlt className="mr-3 size-5 fill-none" />
              Messages
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <HiOutlineCog className="mr-3 size-5 fill-none" />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
