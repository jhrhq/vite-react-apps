import React from "react";

const Header = () => {
  return (
    <div
      className="hero min-h-screen"
      //   style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col lg:flex-row lg:justify-between lg:flex-1">
        <div className="text-left w-full">
          <h1 className="text-5xl font-bold">
            Hi
            <br />
            I'm Johir Haque Dipok
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="w-full flex items-center justify-center flex-col">
          <button className="btn btn-wide mb-2 lg:mb-4">My Repositories</button>
          <button className="btn btn-wide">My Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
