import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shopping.css";

const Shopping = () => {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    fetch("fakeDb.json")
      .then((res) => res.json())
      .then((data) => setLaptops(data));
  }, []);
  const handleAddToCart = () => {
    console.log("click");
  };
  return (
    <div className="shopping">
      <div className="cards">
        {laptops.map((laptop) => (
          <Product
            key={laptop.id}
            laptop={laptop}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <div>
        <Cart laptops={laptops} />
      </div>
    </div>
  );
};

export default Shopping;
