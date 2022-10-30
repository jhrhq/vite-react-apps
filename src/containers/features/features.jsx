import React from "react";
import Feature from "../../components/feature/feature";
import "./features.css";

const featuresData = [
  {
    title: "Improving and distrusts instantly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ipsum consequuntur voluptates tempora fugit ea repellat autem blanditiis dolores deleniti unde",
  },
  {
    title: "Improving and distrusts instantly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ipsum consequuntur voluptates tempora fugit ea repellat autem blanditiis dolores deleniti unde",
  },
  {
    title: "Improving and distrusts instantly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ipsum consequuntur voluptates tempora fugit ea repellat autem blanditiis dolores deleniti unde",
  },
  {
    title: "Improving and distrusts instantly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ipsum consequuntur voluptates tempora fugit ea repellat autem blanditiis dolores deleniti unde",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and Yout Just Need to Realize It. Step into Future
          Today & Make it Happen
        </h1>
        <p>Request Eary Access</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            key={item.title + index}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
