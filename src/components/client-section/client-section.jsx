import React from "react";
import smile from "../../Resources/smile.jpg";

const ClientSection = () => {
  return (
    <div className="flex  gap-20 text-midnight mb-28">
      <div className="flex items-center">
        <p className="text-2xl ">What you get besides the above things</p>
      </div>
      <div className="flex items-center justify-center gap-5">
        <div className="w-[629px] h-[221px] px-[52px] py-[46px] bg-copper-rust rounded-tr-[90px] rounded-tl-[90px] rounded-bl-[90px] rounded-br-none  text-white  ">
          <p className="mb-3">
            Look no further. These guys are great to work with! VERY GOOD
            COMPANY & GREAT TEAM SPIRIT! , strongly recommend them.
          </p>
          <p className="text-xl text-[18px] uppercase font-semibold mb-1">
            DAVID
          </p>
          <p className="text-smaller">Jr. Manager at SUBROS, India</p>
        </div>
        <div className="w-[94px] h-[94px] bg-copper-rust rounded-tr-[40px] rounded-tl-[40px] rounded-bl-none rounded-br-[40px]  overflow-hidden place-self-end">
          <img src={smile} alt="" className="object-cover " />
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
