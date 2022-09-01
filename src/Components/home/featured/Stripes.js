import React, { useState } from "react";
const Stripes = () => {
  const [stripe, setStripe] = useState(
    /* [
    { background: "#98c5e9" },
    { background: "#ffffff" },
    { background: "#98c5e9" },
  ] */
    "hello"
  );
  /* const showStripes = () => {
    setStripe(
      stripe.map((stripe, i) => (
        <Animate
          key={i}
          show={true}
          start={{
            background: "#ffffff",
          }}
          enter={{
            background: [stripe.background],
          }}
        >
          {({ background }) => {
            return (
              <div
                className="stripe"
                style={{
                  background,
                }}
              ></div>
            );
          }}
        </Animate>
      ))
    );
  }; */

  return (
    <div className="featured_stripes" style={{ color: "#fff" }}>
      {stripe}
    </div>
  );
};

export default Stripes;
