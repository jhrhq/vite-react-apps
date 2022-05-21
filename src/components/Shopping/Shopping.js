import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shopping.css";

const Shopping = () => {
  // set state for prodcuts from json
  const [laptops, setLaptops] = useState([]);
  // set state for cart
  const [cart, setCart] = useState([]);
  // set state for random number
  const [randomProduct, setRandomProduct] = useState("");
  // fetching fake json data from fake data
  useEffect(() => {
    fetch("fakeDb.json")
      .then((res) => res.json())
      .then((data) => setLaptops(data));
  }, []);
  // add products name and count the expenses for the product in the cart
  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((Product) => Product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
  };
  // clear all cart data
  const handleEmptyCart = () => {
    setCart([]);
    setRandomProduct("");
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
        <Cart
          cart={cart}
          handleEmptyCart={handleEmptyCart}
          randomProduct={randomProduct}
          setRandomProduct={setRandomProduct}
        />
      </div>
    </div>
  );
};

export default Shopping;
