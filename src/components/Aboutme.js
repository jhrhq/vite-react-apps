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
              <h3 className="text-3xl font-bold">Summary</h3>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="w-full flex items-center justify-center flex-col">
              <div className="text-left w-full">
                <h3 className="text-3xl font-bold">Skills</h3>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <h2 className="text-xl">
                  <span className="badge badge-lg"> Heading</span>
                </h2>
                <button className="btn btn-outline btn-secondary">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
