import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './TShirt.css';

const TShirt = ({tShirt, handleAddToCart}) => {
    const {picture, name, price} = tShirt;


    return (
        <div className='T-shirt'>
            <img src={picture}></img>
            <h1>Name: {name}</h1>
            <h2>Price: {price}</h2>
            <button onClick={() => handleAddToCart(tShirt)} > Add to Cart </button>
            
        </div>
    );
};
//onClick={() => handleAddToCart(tShirt)}
export default TShirt;