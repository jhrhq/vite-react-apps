import React from "react";
import contact from "../Resources/contact-us.gif";
import yoga from "../Resources/meditation-man.gif";
import car from "../Resources/support-system.gif";

const Overflow = () => {
  return (
    <div className="border border-green-500 overflow-hidden pt-20 ">
      <div className="flex gap-11 justify-between justify-items-end ">
        <div className="relative h-96 w-96">
          <img src={car} alt="" className="absolute top-16 -left-11 h-96 " />
        </div>
        <div className="relative h-96 w-96">
          <img src={yoga} alt="" className="absolute top-12 left-0 h-96 " />
        </div>
        <div className="relative h-96 w-96">
          <img src={contact} alt="" className="absolute top-6 left-0 h-96 " />
        </div>
        <div className="relative h-96 w-96">
          <img src={car} alt="" className="absolute top-16 left-11 h-96 " />
        </div>
      </div>
    </div>
  );
};

export default Overflow;
