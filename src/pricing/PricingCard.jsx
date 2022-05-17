import React from "react";
import MyButton from "../utils/MyButton";

const PricingCard = ({ price, position, description }) => {
  return (
    <div className="pricing_item">
      <div className="pricing_inner_wrapper">
        <div className="pricing_title">
          <span>${price}</span>
          <span>{position}</span>
        </div>
        <div className="pricing_description">{description}</div>
        <div className="pricing_buttons">
          <MyButton text='purchase' />
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
