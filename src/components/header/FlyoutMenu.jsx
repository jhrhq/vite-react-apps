export default function FlyoutMenu() {
  return (
    <div className="hidden lg:ml-8 lg:block lg:self-stretch">
      <div className="flex h-full space-x-8">
        <div className="flex">
          <div className="relative flex">
            {/*<!-- Item active: "border-teal-600 text-teal-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" ->*/}
            <button
              type="button"
              className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
              aria-expanded="false"
            >
              Women
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="relative flex">
            {/*<!-- Item active: "border-teal-600 text-teal-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" ->*/}
            <button
              type="button"
              className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
              aria-expanded="false"
            >
              Men
            </button>
          </div>
        </div>

        <a
          href="#"
          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
        >
          Company
        </a>
        <a
          href="#"
          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
        >
          Stores
        </a>
      </div>
    </div>
  );
}
