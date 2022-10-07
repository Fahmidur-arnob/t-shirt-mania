import React from 'react';

const TShirt = ({tShirt}) => {
    const {picture, name} = tShirt;
    return (
        <div>
            <img src={picture}></img>
            <h1>Name: {name}</h1>
        </div>
    );
};

export default TShirt;