import React from "react";
import supportImage from "../../Resources/support-system.gif";
import supportIcon from "../../Resources/svg-icons/support-icon.svg";

const SupportSection = () => {
  return (
    <div className="grid grid-cols-3 gap-20 text-midnight">
      <div className="flex items-center">
        <p className="text-2xl ">What you get besides the above things</p>
      </div>
      <div className="flex items-center justify-center gap-5">
        <div>
          <img src={supportIcon} alt="" />
        </div>
        <p>24/7 Support</p>
      </div>
      <div>
        <img src={supportImage} alt="" />
      </div>
    </div>
  );
};

export default SupportSection;
