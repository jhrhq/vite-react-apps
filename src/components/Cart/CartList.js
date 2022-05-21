import React from "react";
import "./CartList.css";

const CartList = ({ product }) => {
  const { name, price, quantity } = product;
  return (
    <div className="cartList">
      <div>
        <p>Name: {name}</p>
        <span> Price: ${price} </span>
        <span> Quantity: {quantity}</span>
      </div>
      <div>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default CartList;
