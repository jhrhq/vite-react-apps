import React from "react";

const Tools = () => {
  return (
    <div className=" bg-base-100 flex flex-col items-center gap-20 py-20">
      <div className="text-center">
        <h2 class="mb-3 text-4xl font-extrabold md:text-6xl">Tools</h2>
        <p className="mx-auto mb-5 w-full max-w-lg">
          some of the Tools I've been working with.
        </p>
      </div>
      <div className="text-base-content xl:rounded-box grid max-w-screen-xl gap-4 bg-opacity-60 xl:pb-0">
        <div className="grid w-full lg:grid-flow-row grid-cols-1 md:grid-cols-2  lg:grid-cols-3 items-center gap-4 md:gap-6 lg:gap-8 px-10 pt-1 pb-10 xl:px-4">
          {/* card 1 */}
          <svg
            style={{
              background: "#ec5990",
              height: "60px",
              borderRadius: "12px",
            }}
            viewBox="0 0 100 100"
          >
            <path d="M73.56,13.32H58.14a8.54,8.54,0,0,0-16.27,0H26.44a11,11,0,0,0-11,11V81.63a11,11,0,0,0,11,11H73.56a11,11,0,0,0,11-11V24.32A11,11,0,0,0,73.56,13.32Zm-30.92,2a1,1,0,0,0,1-.79,6.54,6.54,0,0,1,12.78,0,1,1,0,0,0,1,.79h5.38v6.55a3,3,0,0,1-3,3H40.25a3,3,0,0,1-3-3V15.32ZM82.56,81.63a9,9,0,0,1-9,9H26.44a9,9,0,0,1-9-9V24.32a9,9,0,0,1,9-9h8.81v6.55a5,5,0,0,0,5,5h19.5a5,5,0,0,0,5-5V15.32h8.81a9,9,0,0,1,9,9Z"></path>
            <path
              style={{ transform: "translateX(-25px)" }}
              d="M71.6,45.92H54a1,1,0,0,0,0,2H71.6a1,1,0,0,0,0-2Z"
            ></path>
            <path d="M71.6,45.92H54a1,1,0,0,0,0,2H71.6a1,1,0,0,0,0-2Z"></path>
            <path
              style={{ transform: "translateX(-25px)" }}
              d="M71.1,69.49H53.45a1,1,0,1,0,0,2H71.1a1,1,0,0,0,0-2Z"
            ></path>
            <path d="M71.1,69.49H53.45a1,1,0,1,0,0,2H71.1a1,1,0,0,0,0-2Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Tools;
