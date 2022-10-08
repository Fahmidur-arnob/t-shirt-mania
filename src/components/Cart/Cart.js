import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Order Quantity: {cart.length}</h3>
        </div>
    );
};

export default Cart;