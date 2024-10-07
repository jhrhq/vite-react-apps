import React from "react";
import LocationIcon from "../svg/LocationIcon";
import MailIcon from "../svg/MailIconSvg";

const ContactCard = ({ title, address, type }) => {
  return (
    <div className="mb-8 flex w-[330px] max-w-full">
      <div className="mr-6 text-[32px] text-primary">
        {type == "location" ? <LocationIcon /> : <MailIcon />}
      </div>
      <div>
        <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
          {title}
        </h5>
        {type == "location" ? (
          <p className="text-base text-body-color dark:text-dark-6">
            {address}
          </p>
        ) : (
          <>
            {address.map((mail, index) => (
              <p
                key={index}
                className="text-base text-body-color dark:text-dark-6"
              >
                {mail}
              </p>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
