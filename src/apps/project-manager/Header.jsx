import { HiOutlineMenu } from "react-icons/hi";
import { TbBell, TbMail } from "react-icons/tb";
import Search from "./project/Search";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-800 p-4">
      <button className="lg:hidden hover:cursor-pointer">
        <HiOutlineMenu className="size-6 fill-none text-white" />
      </button>
      <div className="mx-4 flex-1">
        <Search />
      </div>
      <div className="flex items-center">
        <button className="relative mr-4">
          <TbBell className="size-6 fill-none text-white" />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <button className="relative mr-4">
          <TbMail className="size-6 fill-none text-white" />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
      </div>
    </header>
  );
}
