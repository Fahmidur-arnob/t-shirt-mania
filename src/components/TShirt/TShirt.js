import React from 'react';
import './TShirt.css';

const TShirt = ({tShirt}) => {
    const {picture, name, price} = tShirt;
    return (
        <div className='T-shirt'>
            <img src={picture}></img>
            <h1>Name: {name}</h1>
            <h2>Price: {price}</h2>
            <button>Add to Cart</button>
        </div>
    );
};

export default TShirt;