import Logo from "./assets/image/favicon.svg";

const Header = () => {
  return (
    <nav>
      <div className="flex max-w-7xl items-center bg-[#F9FAFB] dark:bg-gray-800 w-full justify-between py-1 border border-gray-200 dark:border-gray-700 px-4 rounded-md mx-auto transition-colors duration-200">
        <div>
          <img src={Logo} className="h-14" />
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-4 text-gray-500 dark:text-gray-400 font-medium">
            <li className="hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer">Home</li>
            <li className="hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer">App</li>
            <li className="hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer">Account</li>
            <li className="hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer">Export</li>
          </ul>
        </div>
        <div className="px-6 py-2 bg-teal-600 dark:bg-teal-500 text-white w-fit rounded-md cursor-pointer hover:bg-teal-500 dark:hover:bg-teal-400 transition-colors">
          Get App
        </div>
      </div>
    </nav>
  );
};

export default Header;