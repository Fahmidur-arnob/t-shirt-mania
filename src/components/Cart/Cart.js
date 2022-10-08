import React from 'react';
import TShirt from '../TShirt/TShirt';
import './Cart.css';

const Cart = ({cart, removeItem}) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Order Quantity: {cart.length}</h3>
            {
                cart.map(tShirt => 
                    <p
                    key={tShirt._id}>
                        name: {tShirt.name}
                        <button onClick={() => removeItem(tShirt)}   >Remove Item</button>
                    </p>)
            }
        </div>
    );
};

export default Cart;