import React from "react";

const Feature = ({ svg, featureTitle, underline, children }) => {
  return (
    <div>
      {svg && (
        <div className="mb-4">
          <img src={svg} alt="" />
        </div>
      )}

      <div className="pb-5">
        {featureTitle && (
          <p
            className={`text-midnight text-lg font-semibold relative after:absolute after:content-[''] after:left-0 after:top-8 after:w-28 after:h-1 ${underline}`}
          >
            {featureTitle}
          </p>
        )}
      </div>
      {children && <p className="mt-5">{children}</p>}
    </div>
  );
};

export default Feature;
