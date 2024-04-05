import { useEffect, useState } from "react";
import { useCart } from './CartBuilder';
import { useProducts } from "./ProductsBuilder";
import ShoppingHeader from "./ShoppingHeader";
import CartBox from "./CartBox";

function getProduct(products, id) {
    const filtered = products.filter((product) => { return product.id == id })
    console.log(filtered[0]);
    return filtered[0];
}

function useCartCheckout() {
    const {cart} = useCart();
    const {products} = useProducts();
    let checkout = [];
    const items = cart.products;
    console.log(items);

    for (const item of items) {
        if (item.id != 0) {
            const p = getProduct(products, item.id);
            p.quantity = item.quantity;
            checkout.push(p);
        }
    }
    console.log(checkout);
    return checkout
}

function CartCheckout () {
    const checkout = useCartCheckout();

    function getTotal() {
        let t = 0;
        for (const c of checkout) {
            t += (c.price * c.quantity);
        }
        return t
    }

    return (
        <div className = "main-container">
        <ShoppingHeader/>
        <div id = "big-container">
            <div id = "cart-container">
                <h2 id = "checkout-title">Your total is: ${getTotal()}</h2>
                <div id = "checkout-item-container">
                    {checkout.map( (c) => { 
                        return <CartBox 
                                key = {c.id}
                                id = {c.id}
                                name = {c.title}
                                quantity = {c.quantity}
                                totalPrice = {c.price * c.quantity}
                                />
                    })}
                </div>
            </div>
        </div>
        <footer>
            <b>Created by Nicholas Angelici</b>
        </footer>
        </div>
    )
};

export default CartCheckout;