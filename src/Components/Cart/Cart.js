import React from 'react';
import {Card} from 'react-bootstrap';

const Cart = (props) => {
    const cart = props.cart;

        const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const buyProduct = cart[i];
    //     total = total + buyProduct.price;
    // };

    
    return (
    <div>
    <Card>
        <Card.Body>
            <Card.Title>Courses Added</Card.Title>
            <Card.Title>Total Course: {cart.length}</Card.Title>
            <Card.Title>Total price: ${totalPrice}</Card.Title>
        </Card.Body>
    </Card>
    </div>
    );
};

export default Cart;