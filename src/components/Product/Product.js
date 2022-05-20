import React from "react";
import "./Product.css";
const Product = ({ laptop, handleAddToCart }) => {
  const { name, cpu, os, screen, images, company, price } = laptop;
  return (
    <div className="product">
      <div className="card">
        <img src={images} alt="name" />
        <h4>Name: {name}</h4>
        <h5>Brand Name: {company}</h5>
        <p>Processor: {cpu}</p>
        <p>Operation System: {os}</p>
        <p>Screen Size: {screen}</p>
        <p>Price : ${price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
