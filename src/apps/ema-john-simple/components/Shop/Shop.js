import React, { useState } from 'react';
import fakeData from '..//../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
  const first10 = fakeData.slice(0,10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (prodts) => {
      console.log(prodts);
      const newCart = [...cart, prodts];
      setCart(newCart);
  }

    return (
      <div className="shop-container">
          <div className="product-container">
         
               {
                   products.map(pditem => <Product 
                    handleAddProduct= {handleAddProduct}
                    product={pditem}
                    ></Product>)
               }
           
           
          </div>
          <div>
            <Cart cart = {cart}></Cart>
              
          </div>
        
      </div>
      )
};

export default Shop;