import React from "react";

const Button = ({ text, target, variant, to }) => {
  return (
    <a
      href={to}
      target={target && target}
      className={`inline-flex items-center justify-center rounded-md  px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out 
        ${
          variant
            ? "bg-white hover:bg-gray-2 hover:text-body-color"
            : "bg-white/[0.12] text-white hover:bg-white hover:text-dark"
        }
        `}
    >
      {text}
    </a>
  );
};

export default Button;
