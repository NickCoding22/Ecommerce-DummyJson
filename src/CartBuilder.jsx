import { createContext, useEffect, useState, useContext } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const CartBuilder = ({ children }) => {
    // Default userId 123
    const [cart, setCart] = useState({userId: 123, products: [{id: 0, quantity: 0}]});

    const alterCount = (pID, inc) => {
        const pL = cart.products.slice();
        for (let i = 1; i < pL.length; i++) {
            if (pL[i].id == pID) {
                if (pL[i].quantity == 1 && inc == -1) {
                    pL.splice(i, 1);
                } else {
                    pL[i].quantity = pL[i].quantity + inc;
                }
                console.log(true)
                console.log(pL);
                return pL
            }
        };
        if (inc == 1) {
            console.log(false)
            pL.push({id: pID, quantity: 1});
            console.log(pL);
        }
        return pL
    }

    const addOne = (id) => {
        setCart({userId: cart.userId, 
                 products: alterCount(id, 1)});
    }

    const removeOne = (id) => {
        setCart({userId: cart.userId, 
                 products: alterCount(id, -1)})
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