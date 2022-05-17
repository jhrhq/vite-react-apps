import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391768.3649236592!2d32.481874933591975!3d39.90356456121636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f190a9cea8f%3A0xd3862ea8248d08a0!2sAn%C4%B1tkabir!5e0!3m2!1sen!2sbd!4v1652818368649!5m2!1sen!2sbd"
        width="100%"
        height="500px"
        allowfullscreen
        loading="lazy"
      ></iframe>
      <div className="location_tag"><div>Location</div></div>
    </div>
  );
};

export default Location;
