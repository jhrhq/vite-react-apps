import React, { useState } from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  const [randomProduct, setRandomProduct] = useState("");
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  let productName = [];
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
    productName.push(product.name);
  }

  // random number and check handler
  let selectProductName = [];
  const handleRandomProduct = () => {
    selectProductName = [];
    const randomNumber = Math.trunc(
      Math.random() * (productName.length - 1) + 1
    );
    selectProductName.push(productName[randomNumber]);
    setRandomProduct(selectProductName);
  };

  return (
    <div className="cart">
      <h4>{productName}</h4>
      <button onClick={handleRandomProduct}>select Any</button>
      <p>You can select : {randomProduct} </p>
    </div>
  );
};

export default Cart;
