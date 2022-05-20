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
  return (
    <div className="shopping">
      <Product laptops={laptops} />
      <Cart laptops={laptops} />
    </div>
  );
};

export default Shopping;
