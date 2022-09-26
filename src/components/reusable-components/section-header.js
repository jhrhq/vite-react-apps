import React from "react";
import "./section-header.css";
const SectionHeader = ({ underline, children }) => {
  return (
    <div className="mt-5 ">
      <h3
        className={`text-2xl font-bold relative after:absolute after:content-[''] after:left-0  after:w-28 after:h-1 section-header  ${underline}`}
      >
        {children}
      </h3>
    </div>
  );
};

export default SectionHeader;
