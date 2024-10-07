import React from "react";
import BathTubSvg from "../SVG/BathTubSvg";
import BedSvg from "../SVG/BedSvg";

const AvailablePropertyCard = ({ name, price, bedrooms, bathrooms, image }) => {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-600/10">
      <img src={image} alt={name} />

      <div className="p-6">
        <h4 className="text-2xl font-bold cursor-pointer">{name}</h4>
        {/*  <!-- <div>
                    2 beds &bull; 2 baths
                </div> --> */}
        <div className="mt-2">
          <span className="text-xl font-extrabold text-blue-600">{price}</span>{" "}
          /M
        </div>
      </div>
      <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
        <div className="flex items-center">
          <BedSvg />
          <p>
            <span className="font-bold text-gray-900">{bedrooms}</span> Bedrooms
          </p>
        </div>
        <div className="flex items-center">
          <BathTubSvg />
          <p>
            <span className="font-bold text-gray-900">{bathrooms}</span>{" "}
            Bathrooms
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvailablePropertyCard;
