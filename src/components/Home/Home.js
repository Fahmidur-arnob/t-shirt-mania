import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
    const tShirts = useLoaderData();

    const [cart, setCart] = useState([])


    const handleAddToCart = tShirt => {
        const exists = cart.find(ts => ts._id === tShirt._id);
        if (exists) {
            alert('T-Shirt has already been added to the cart.');
        }
        else {
            const newCart = [...cart, tShirt];//notun ekta cart hoye gelo.. mutation korar drkr porlo na .. new ekta array create kore fellam .. 

            setCart(newCart);//state e set hoye gelo
        }

    }
    return (
        <div className='home-container'>
            <div className="tshirt-continer">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt.id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
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