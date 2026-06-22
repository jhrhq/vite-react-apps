import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons' ;
import './Product.css'

const Product = (props) => {
    const {img, name, seller, price, stock}= props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div className ='product-details'>
                <h3>{name}</h3>
                <p><small>by: {seller}</small></p> 
                <p><small> ${price}</small></p>
                <p><small>only {stock} left in stock</small></p> 
                <button onClick={() => props.handleAddProduct(props.product)} className="main-button"><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;