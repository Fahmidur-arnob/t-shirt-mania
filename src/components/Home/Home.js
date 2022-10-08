import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const tShirts = useLoaderData();

    const [cart, setCart] = useState([])


    const handleAddToCart = tShirt =>{
        const newCart = [...cart, tShirt];//notun ekta cart hoye gelo.. mutation korar drkr porlo na .. new ekta array create kore fellam .. 

        setCart(newCart);//state e set hoye gelo

    }
    return (
        <div className='home-container'>
            <div className="tshirt-continer">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt.id}
                        tShirt={tShirt}
                        handleAddToCart = {handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;