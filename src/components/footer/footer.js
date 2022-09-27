import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-midnight sm:p-6 container px-32 font-work text-white">
      <div className="md:flex md:justify-between grid grid-cols-3">
        <div className="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
              Resources
            </h2>
            <ul className="text-gray-600 ">
              <li className="mb-4">
                <a href="https://flowbite.com/" className="hover:underline">
                  Flowbite
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" className="hover:underline">
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
              Follow us
            </h2>
            <ul className="text-gray-600 ">
              <li className="mb-4">
                <a
                  href="https://github.com/themesberg/flowbite"
                  className="hover:underline "
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
              Legal
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-6 md:mb-0"></div>
      </div>
    </footer>
  );
};

export default Footer;
