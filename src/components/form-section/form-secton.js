import React from "react";
import contactus from "../../Resources/contact-us.gif";
import ButtonCoponent from "../reusable-components/button-component";
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
            <div className="mb-3">
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mb-3">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mb-3">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mb-3">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mb-3">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mb-3">
                  Email
                </span>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </label>
              <ButtonCoponent link={"#"} background={"bg-[#0E0E2C] text-white"}>
                Send
              </ButtonCoponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
