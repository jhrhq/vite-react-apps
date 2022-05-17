import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>pricing</h2>
      </div>
      <div className="pricing_wrapper">
        <PricingCard
        delay={500}
          price={100}
          position={"Balcony"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fugiat minima ab, vero dolor nostrum dolores deserunt fugit nesciunt"
          }
        />
        <PricingCard
        delay={0}
          price={150}
          position={"Medium"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fugiat minima ab, vero dolor nostrum dolores deserunt fugit nesciunt"
          }
        />
        <PricingCard
        delay={500}
          price={250}
          position={"Star"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fugiat minima ab, vero dolor nostrum dolores deserunt fugit nesciunt"
          }
        />
      </div>
    </div>
  );
};

export default Pricing;
