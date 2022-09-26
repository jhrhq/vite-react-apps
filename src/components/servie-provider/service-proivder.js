import React from "react";
import SectionHeader from "../reusable-components/section-header";

const ServiceProvider = () => {
  return (
    <div>
      <div className="text-center">
        <div className="flex items-center justify-center mb-8">
          <SectionHeader
            underline={"after:-top-3.5 after:left-32 text-center "}
          >
            Services we provide
          </SectionHeader>
        </div>
        <p>We serve the users in different categories with latest tools</p>
      </div>
    </div>
  );
};

export default ServiceProvider;
