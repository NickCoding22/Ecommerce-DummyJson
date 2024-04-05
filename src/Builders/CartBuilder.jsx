import { createContext, useEffect, useState, useContext } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

function updateCart(car) {
    /**
     * Makes a call to the DummyJson but does not actually
     * do anything, just represents updating the cart with each iteration.
     */
    fetch('https://dummyjson.com/carts/1', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            merge: false, 
            products: car.products,
        })
        })
        .then(res => res.json())
        .then(console.log);
}

const CartBuilder = ({ children }) => {
    /**
     * Default cartId is 1, gets the carts and gets the first cart
     * Fetch does not do anything but represents getting the actual cart.
     * Will use an empty cart for demonstration.
     */
    const [cart, setCart] = useState({cartId: 1, products: [{id: 0, quantity: 0}]});
    useEffect(() => {
        fetch('https://dummyjson.com/cart/' + cart.cartId)
            .then(res => res.json())
            .then(res => {return res})
            .then(console.log)
    }, []);

    const alterCount = (pID, inc) => {
        const pL = cart.products.slice();
        for (let i = 1; i < pL.length; i++) {
            if (pL[i].id == pID) {
                if (pL[i].quantity == 1 && inc == -1) {
                    pL.splice(i, 1);
                } else {
                    pL[i].quantity = pL[i].quantity + inc;
                }
                return pL
            }
        };
        if (inc == 1) {
            pL.push({id: pID, quantity: 1});
        }
        return pL
    }
    
    const addOne = (id) => {
        setCart({cartId: cart.cartId, 
                 products: alterCount(id, 1)});
        updateCart(cart);
    }

    const removeOne = (id) => {
        setCart({cartId: cart.cartId, 
                 products: alterCount(id, -1)})
        updateCart(cart);
    }

    const value = {
        cart,
        setCart,
        addOne,
        removeOne,
    }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}

export default CartBuilder;