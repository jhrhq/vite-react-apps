const navLinks = ["home", "about", "pricing", "blog"];

function NavButton({ text, variant, to }) {
  return (
    <a
      href={to}
      className={`font-medium text-base py-2 text-white ${
        variant
          ? "flex-1 loginBtn px-[22px] hover:opacity-70"
          : "signUpBtn rounded-md bg-white bg-opacity-20 px-6 duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
      }`}
    >
      {text}
    </a>
  );
}

function NavLinks({ text }) {
  return (
    <li className="group relative">
      <a
        href={`#${text}`}
        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 capitalize"
      >
        {text}
      </a>
    </li>
  );
}

function Navbar() {
  return (
    <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="flex w-full items-center justify-between px-4 py-3">
            <a
              href="index.html"
              className="navbar-logo block w-60 max-w-full px-4"
            >
              <img
                src="../assets/images/logo/logo.svg"
                alt="logo"
                className="header-logo h-12"
              />
            </a>

            <ul className="hidden lg:flex ">
              {navLinks.map((navLink) => (
                <NavLinks key={navLink} text={navLink} />
              ))}
            </ul>

            <div className="sm:flex">
              <NavButton text="Sign In" variant={true} to="signin.html" />
              <NavButton text="Sign Up" variant={false} to="signup.html" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
