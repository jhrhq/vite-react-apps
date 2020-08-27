import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    return (
        <div>
            <h2>{cart.length}</h2>
        </div>
    );
};

export default Cart;