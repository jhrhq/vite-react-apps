import React from "react";
import design from "../../Resources/svg-icons/design.svg";
import development from "../../Resources/svg-icons/development.svg";
import production from "../../Resources/svg-icons/production.svg";
import query from "../../Resources/svg-icons/query.svg";
import CirlceFeature from "../reusable-components/circle-feature";
import SectionHeader from "../reusable-components/section-header";

const HowItWorks = () => {
  return (
    <div>
      <SectionHeader underline={"after:-top-3.5"}>
        Let’s See <br />
        how it works
      </SectionHeader>

      <div className="grid grid-cols-4 gap-4 mt-24">
        <CirlceFeature svgIcon={query}>QUERY SENT </CirlceFeature>
        <CirlceFeature svgIcon={design}>Designing</CirlceFeature>
        <CirlceFeature svgIcon={development}>Development </CirlceFeature>
        <CirlceFeature svgIcon={production}>Production</CirlceFeature>
      </div>
    </div>
  );
};

export default HowItWorks;
