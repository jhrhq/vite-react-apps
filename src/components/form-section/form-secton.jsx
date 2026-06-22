import React from "react";
import contactus from "../../Resources/contact-us.gif";
import insta from "../../Resources/svg-icons/insta.svg";
import linkedin from "../../Resources/svg-icons/linkedin.svg";
import twitter from "../../Resources/svg-icons/twitter.svg";
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
          <div>
            <p className="text-2xl font-bold mb-4">Follow us on</p>
            <div className="flex gap-10">
              <img src={insta} alt="" />
              <img src={twitter} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-8  rounded-[40px] pt-[46px] px-10 pb-[76px] pr-[87px]  bg-gradient-to-r from-simple-blue to-midnight ">
            <div className="text-[#FAFCFE] mb-[38px]">
              <h3 className="font-bold text-2xl mb-3">Drop us a message</h3>
              <p className="text-semilg font-medium">
                We would love to hear everything from you
              </p>
            </div>
            <div className="mb-3">
              <label className="block">
                <span className="block font-medium mb-3 text-semilg text-white">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  class="mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 "
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="block">
                <span className="block font-medium mb-3 text-semilg text-white">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  class="mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 "
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="block">
                <span className="block font-medium mb-3 text-semilg text-white">
                  Contact Number
                </span>
                <input
                  type="text"
                  name="contact"
                  class="mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 "
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="block">
                <span className="block font-medium mb-3 text-semilg text-white">
                  Subject
                </span>
                <input
                  type="text"
                  name="subject"
                  class="mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 "
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="block">
                <span className="block font-medium mb-3 text-semilg text-white">
                  Description
                </span>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
