import React from "react";
import contactus from "../../Resources/contact-us.gif";
import SectionHeader from "../reusable-components/section-header";

const FormSection = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <SectionHeader underline={"after:-top-3.5"}>
            Let’s Buid Something <br /> AWESOME !
          </SectionHeader>
          <p className="mt-3 text-lg font-medium">
            One of the Tech Experts will reach out to you within next 48
            business hours.
          </p>
          <div>
            <img src={contactus} alt="" />
          </div>
        </div>
        <div>
          <div className="mt-8  rounded-[40px] pt-[46px] px-10 pb-[76px]  bg-gradient-to-r from-simple-yellow to-simple-blue">
            <h3>Drop us a message</h3>
            <p>We would love to hear everything from you</p>
            <div>
              <label class="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg
                    className="h-5 w-5 fill-slate-300"
                    viewBox="0 0 20 20"
                  ></svg>
                </span>
                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Search for anything..."
                  type="text"
                  name="search"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
