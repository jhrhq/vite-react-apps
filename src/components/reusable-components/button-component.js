import React from "react";

const ButtonCoponent = ({ link, background, children }) => {
  return (
    <div className="mt-10">
      <a
        href={link}
        className={`rounded py-[18px] px-[102px] ${
          background ? background : ""
        }`}
      >
        {children}
      </a>
    </div>
  );
};

export default ButtonCoponent;
