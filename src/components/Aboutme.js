import React from "react";

const Aboutme = () => {
  return (
    <div className="hero bg-base-200 text-base-content mx-auto  max-w-md md:max-w-full">
      <div className="hero-content px-4 text-center md:px-0">
        <div>
          <h2 class="mt-20 mb-2 text-4xl font-extrabold md:text-6xl">
            About Me
          </h2>
          <p className="mx-auto mb-5 w-full max-w-lg">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {/* other details */}
          <div className="hero-content flex-col lg:flex-row lg:justify-between lg:flex-1">
            <div className="text-left w-full">
              <h1 className="text-5xl font-bold">
                Hi
                <br />
                I'm Johir Haque Dipok
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="w-full flex items-center justify-center flex-col">
              <button className="btn btn-wide mb-2 lg:mb-4">
                My Repositories
              </button>
              <button className="btn btn-wide">My Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
