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

            alert('T-shirt added successfully');
        }

    }

    const removeItem = (tShirt) => {
        const remaining = cart.filter(ts => ts._id !== tShirt._id);
        setCart(remaining);
    }


    return (
        <div className='home-container'>
            <div className="tshirt-continer">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                    cart={cart}
                    removeItem = {removeItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;