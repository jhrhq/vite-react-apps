import "./Cart.css";
import CartList from "./CartList";
const Cart = ({ cart, handleEmptyCart, randomProduct, setRandomProduct }) => {
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
  const grandTotal = total + shipping;
  // random number and check handler
  let selectProductName = [];
  const handleRandomProduct = () => {
    const randomNumber = Math.trunc(Math.random() * productName.length);
    selectProductName.push(productName[randomNumber]);
    setRandomProduct(selectProductName);
  };
  return (
    <div className="cart">
      <h2>Product Lists</h2>

      <div>
        {cart.map((product) => (
          <CartList product={product} key={product.id} />
        ))}
      </div>

      <p>Selected Items: {quantity}</p>
      <p>Total price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <h5>Grand Total: ${grandTotal}</h5>
      <button onClick={handleRandomProduct}>select Any</button>
      <p>You can select : {randomProduct} </p>
      <button onClick={handleEmptyCart}>Reset Cart</button>
    </div>
  );
};

export default Cart;
