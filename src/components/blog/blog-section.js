import React from "react";
import officeImage from "../../Resources/office-image.png";
import SectionHeader from "../reusable-components/section-header";
const Blog = () => {
  return (
    <>
      <div className="grid place-items-center grid-cols-2">
        <div className="w-[67rem] h-[629px] bg-[#FFE5F7] rounded-[50px] z-0 col-span-full row-span-full"></div>
        <div className=" grid place-items-center z-10 col-span-full row-span-full pt-14">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center mb-6">
              <SectionHeader
                underline={"after:-top-3.5 after:left-32 text-center "}
              >
                Still have a doubt ?
              </SectionHeader>
            </div>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-14 z-10 place-content-center">
            <div className="grid grid-cols-2 gap-3">
              <div className=" ">
                <img
                  src={officeImage}
                  alt=""
                  className=" w-64 h-72 bg-cover ounded-[50px] rounded-[50px] "
                />
              </div>
              <SectionHeader underline={"after:-top-3.5"}>
                About Infenito, insights about us
              </SectionHeader>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="">
                <img src={officeImage} alt="" />
              </div>
              <SectionHeader underline={"after:-top-3.5"}>
                About Infenito, insights about us
              </SectionHeader>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="">
                <img src={officeImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
