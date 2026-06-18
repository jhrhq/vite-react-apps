import React from "react";
import { SubHeading } from "../../components";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">subscribe to our newsletter</h1>
      <p className="p__opensans">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
        nesciunt?
      </p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="input your email" />
      <button className=" custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
