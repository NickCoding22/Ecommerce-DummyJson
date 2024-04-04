import {useEffect, useState} from "react";
import {useCart} from './CartBuilder';
import ShoppingHeader from "./ShoppingHeader";

function CartCheckout () {
    const {cart, setCart, addOne, removeOne} = useCart();

    return (
        <div id = "main">
        <ShoppingHeader/>
        <div id = "big-container">
            <div id = "big-item-box">

            </div>
        </div>
        </div>
    )
};

export default CartCheckout;