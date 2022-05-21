import React from "react";
import "./Cart.css";
const CartCounter = ({ cart }) => {
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
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  // random number and check handler
  const selectRandomProduct = () => {
    console.log("selected");
    const randomNumber = Math.trunc(Math.random() * 4 + 1);
  };
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <h4>
        {productName.map((item) => (
          <p key={Math.floor(Math.random() * 100)}>{item.name}</p>
        ))}
      </h4>
      <p>Selected Items: {quantity}</p>
      <p>Total price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax: {tax}</p>
      <h5>Grand Total: {grandTotal}</h5>
      <button onClick={selectRandomProduct}>Select any product</button>
    </div>
  );
};

export default CartCounter;
