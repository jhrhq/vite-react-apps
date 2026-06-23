import { Trash2 } from "lucide-react";
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
          <Trash2 />
        </button>
      </div>
    </div>
  );
};

export default CartList;
