import React, { Children } from "react";

const CirlceFeature = ({ svgIcon, children }) => {
  return (
    <div className="grid place-content-center">
      {svgIcon && (
        <div className=" border-[#cfcfcf] border-opacity-20 rounded-full border-solid border-[12px] h-40 w-40 grid place-content-center mb-6">
          <img src={svgIcon} alt="" />
        </div>
      )}

      {Children && (
        <p className="text-lg font-bold text-center uppercase">{children}</p>
      )}
    </div>
  );
};

export default CirlceFeature;
