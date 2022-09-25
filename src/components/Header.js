import React from "react";

const Header = () => {
  console.log("header");
  return (
    <div
      className="hero min-h-screen text-base-content mx-auto  max-w-md md:max-w-full"
      //   style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content px-4 text-center md:px-0">
        <div className="hero-content flex-col lg:flex-row lg:justify-between lg:flex-1">
          <div className="text-left w-full">
            <h1 className="text-5xl font-bold">
              Hi
              <br />
              I'm Johir Haque Dipok
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="w-full flex items-center justify-center flex-col">
            <button className="btn btn-wide mb-2 lg:mb-4">
              My Repositories
            </button>
            <button className="btn btn-wide">
              My Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
