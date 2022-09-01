import React from "react";
import { Link } from "react-router-dom";
import mcitylogo from "../../Resources/images/logos/manchester_city_logo.png";

export const CityLogo = (props) => {
  const template = (
    <div
      className="img_cover"
      style={{
        width: props.width,
        height: props.height,
        backgroundImage: `url(${mcitylogo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 100%",
      }}
    ></div>
  );
  if (props.link) {
    <Link to={props.to} className="link_logo">
      {template}
    </Link>;
  } else {
    return template;
  }
};
