import Logo from "@/assets/logo.svg";
import AuthMenu from "@/components/header/AuthMenu";
import FlyoutMenu from "@/components/header/FlyoutMenu";
import TopBanner from "@/components/header/TopBanner";
import { HiOutlineBars3 } from "react-icons/hi2";

export default function Header() {
  return (
    <header className="relative bg-white">
      <TopBanner />

      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center">
            {/* <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -> */}
            <button
              type="button"
              className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open menu</span>
              <HiOutlineBars3
                className="size-6"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              />
            </button>

            {/* {/*<!-- Logo ->*/}
            <div className="ml-4 flex lg:ml-0">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src={Logo} alt="" />
              </a>
            </div>
            <FlyoutMenu />

            <div className="ml-auto flex items-center">
              <AuthMenu />

              <div className="hidden lg:ml-8 lg:flex">
                <a
                  href="#"
                  className="flex items-center text-gray-700 hover:text-gray-800"
                >
                  <img
                    src="https://tailwindui.com/img/flags/flag-canada.svg"
                    alt=""
                    className="block h-auto w-5 shrink-0"
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
  );
}
