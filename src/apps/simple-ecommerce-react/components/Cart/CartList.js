import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./CartList.css";

const CartList = ({ product }) => {
  const { name, price, quantity } = product;
  return (
    <div className="cartList">
      <div>
        <p> {name}</p>
        <span> Price: ${price} </span>
        <span> Qty: {quantity}</span>
      </div>
      <div className="trash">
        <button>
          <FontAwesomeIcon icon={faTrash} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default CartList;
