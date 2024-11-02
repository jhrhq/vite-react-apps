import { HiOutlineSearch } from "react-icons/hi";
import { HiMiniChevronDown, HiOutlineShoppingBag } from "react-icons/hi2";

function App() {
  return (
    <>
      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-teal-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -> */}
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* {/*<!-- Logo ->*/}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img className="h-8 w-auto" src="./assets/logo.svg" alt="" />
                </a>
              </div>

              {/*<!-- Flyout menus ->*/}
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

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Sign in
                  </a>
                  <span
                    className="h-6 w-px bg-gray-200"
                    aria-hidden="true"
                  ></span>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Create account
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a
                    href="#"
                    className="flex items-center text-gray-700 hover:text-gray-800"
                  >
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Summer styles are finally here
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the
                harsh elements of a world that doesn&apos;t care if you live or
                die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/*<!-- Decorative image grid ->*/}

                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-teal-600 px-8 py-3 text-center font-medium text-white hover:bg-teal-700"
                >
                  Shop Collection
                </a>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1540827109409-17f40944f276?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1610419993549-7429619cdbd1?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1505022610485-0249ba5b3675?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1597196526281-fe4861daa915?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="pt-16 sm:pt-24 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
              New Arrivals
            </h1>
            <p className="mt-4 text-xl text-gray-500 text-center">
              Thoughtfully designed objects for the workspace, home, and travel.
            </p>
          </div>
          <div className="mt-10">
            <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              {/*<!-- Sort & Filter->*/}
              <div className="w-full">
                {/*<!-- Sort Start ->*/}
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      Sort
                      <HiMiniChevronDown className="-mr-1 size-5 text-gray-400" />
                    </button>
                  </div>

                  {/*<!-- Sort Options ->*/}
                  <div
                    className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      <span
                        className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                        role="menuitem"
                        tabIndex="-1"
                        // onClick="toggleDropdown()"
                        id="menu-item-0"
                      >
                        Low to High
                      </span>
                      <span
                        href=""
                        className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                        role="menuitem"
                        tabIndex="-1"
                        // onClick="toggleDropdown()"
                        id="menu-item-0"
                      >
                        High to Low
                      </span>
                    </div>
                  </div>
                </div>
                {/*<!-- Sort End ->*/}

                {/*<!-- Filter Start ->*/}
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
                      id="filter-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      Filter
                      <HiMiniChevronDown className="-mr-1 size-5 text-gray-400" />
                    </button>
                  </div>
                  {/*<!-- Filter options ->*/}
                  <div
                    className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="filter-button"
                    tabIndex="-1"
                    id="filter-dropdown"
                  >
                    <div className="py-1" role="none">
                      <label className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4"
                          id="filter-option-1"
                        />
                        <span className="ml-2">Category 1</span>
                      </label>
                      <label className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4"
                          id="filter-option-2"
                        />
                        <span className="ml-2">Category 2</span>
                      </label>
                      <label className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4"
                          id="filter-option-3"
                        />
                        <span className="ml-2">Category 3</span>
                      </label>
                    </div>
                  </div>
                </div>
                {/*<!-- Filter End ->*/}
              </div>

              {/*<!-- Search and Cart ->*/}
              <div className="flex gap-2 items-center">
                {/*<!-- Search ->*/}
                <div className="flex flex-1 items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-gray-300 focus-within:!ring-2 ring-inset focus-within:!ring-teal-500 rounded-md">
                  <HiOutlineSearch
                    className="mr-2 h-5 w-5 stroke-slate-400"
                    fill="none"
                  />

                  <input
                    className="block w-full appearance-none bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none placeholder:text-sm sm:text-sm sm:leading-6"
                    placeholder="Find anything..."
                    aria-label="Search components"
                    id="headlessui-combobox-input-:r5n:"
                    role="combobox"
                    type="text"
                    aria-expanded="false"
                    aria-autocomplete="list"
                    // value=""
                    // style="caret-color: rgb(107, 114, 128)"
                  />
                </div>

                {/*<!-- Cart ->*/}
                <div className="flow-root">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <HiOutlineShoppingBag
                      className="size-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      fill="none"
                    />

                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white">
              <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {/*<!-- Card ->*/}
                  <div className="relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
                      <img
                        src="./assets/products/shirt-2.png"
                        alt="Front of men&#039;s Basic Tee in black."
                        className="h-full w-full object-cover object-top lg:h-full lg:w-full p-4 bg-gray-100"
                      />
                    </div>
                    <div className="mt-4 px-3 pb-4">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          Green grandad Shirt
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Men&apos;s clothing
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">$35</p>
                    </div>
                    {/*<!-- Button ->*/}
                    <div className="cursor-pointer rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1 ring-slate-700/10  hover:ring-1 hover:bg-slate-50 hover:text-slate-900 items-center text-center mb-3 mx-3 flex-1">
                      <div className="flex px-3 py-2 justify-center">
                        <HiOutlineShoppingBag
                          stroke="currentColor"
                          className="mr-2.5 size-5 flex-none stroke-slate-400"
                        />
                        Add To Cart
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow animate-pulse">
                    {/*<!-- Image skeleton ->*/}
                    <div className="bg-gray-300 h-48 rounded-md mb-4"></div>
                    {/*<!-- Title skeleton ->*/}
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    {/*<!-- Category skeleton ->*/}
                    <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
                    {/*<!-- Price skeleton ->*/}
                    <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                    {/*<!-- Button skeleton ->*/}
                    <div className="h-10 bg-gray-300 rounded"></div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow animate-pulse">
                    {/*<!-- Image skeleton ->*/}
                    <div className="bg-gray-300 h-48 rounded-md mb-4"></div>
                    {/*<!-- Title skeleton ->*/}
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    {/*<!-- Category skeleton ->*/}
                    <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
                    {/*<!-- Price skeleton ->*/}
                    <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                    {/*<!-- Button skeleton ->*/}
                    <div className="h-10 bg-gray-300 rounded"></div>
                  </div>
                  {/*<!-- More products... ->*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer
        className="mx-auto mt-20 w-full max-w-container px-4 sm:px-6 lg:px-8"
        aria-labelledby="footer-heading"
      >
        <div className="items-centers grid grid-cols-1 justify-between gap-4 border-t border-gray-100 py-6 md:grid-cols-2">
          <p className="text-sm/6 text-gray-600 max-md:text-center">
            ©{/*<!-- ->*/}2024{/*<!-- ->*/}
            <a href="https://learnwithsumit.com/">Learn with Sumit</a>. All
            rights reserved.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm/6 text-gray-500 md:justify-end">
            <a href="https://learnwithsumit.com/privacy-policy">
              Privacy policy
            </a>
            <div className="h-4 w-px bg-gray-200"></div>
            <a href="https://learnwithsumit.com/terms">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
