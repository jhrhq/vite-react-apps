import React from "react";
import PossibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={PossibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Eary Access To Get Started</h4>
        <h1 className="gradient__text">
          The possibilites are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
          aperiam pariatur veniam consequuntur dolores aliquid facilis nam
          doloribus aut odio praesentium repudiandae distinctio ipsum quas.
          Possimus nam architecto tempore ipsum incidunt delectus pariatur
          voluptate odio sapiente! Nesciunt qui natus quaerat, unde mollitia
          tempore obcaecati, doloribus eligendi quos esse, labore soluta.
        </p>
        <h4>Request Early Acces to get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
