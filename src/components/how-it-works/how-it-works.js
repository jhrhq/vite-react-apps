import React from "react";
import CirlceFeature from "../reusable-components/circle-feature";
import SectionHeader from "../reusable-components/section-header";

const HowItWorks = () => {
  return (
    <div>
      <SectionHeader underline={"after:-top-3.5"}>
        Let’s See <br />
        how it works
      </SectionHeader>

      <CirlceFeature />
    </div>
  );
};

export default HowItWorks;
