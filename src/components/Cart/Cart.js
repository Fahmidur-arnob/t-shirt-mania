import React from 'react';
// import TShirt from '../TShirt/TShirt';
import './Cart.css';

const Cart = ({cart, removeItem}) => {

    let message;
    if(cart.length === 0){
        message = <p>You haven't bought anything till now.</p>
    }
    else{
        message = <p>Thanks for buying from our store.</p>
    }

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
            {
                message
            }
        </div>
    );
};

export default Cart;


/*
Conditional Rendering:

1. Use element in a variable and then use if-else statements to set a value;

2. Ternary operator er maddhome kora jabe.

*/