import React from "react";
import "./section-header.css";
const SectionHeader = ({ children }) => {
  return (
    <div className="mt-5 ">
      <h3 className=" relative after:absolute after:content-[''] after:left-0 after:-top-3.5 after:w-28 after:h-1 section-header">
        {children}
      </h3>
    </div>
  );
};

export default SectionHeader;
