import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shopping.css";

const Shopping = () => {
  const [laptops, setLaptops] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("fakeDb.json")
      .then((res) => res.json())
      .then((data) => setLaptops(data));
  }, []);
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
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shopping;
