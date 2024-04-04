import { createContext, useEffect, useState, useContext } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

//export const useCart = (() => {return [cart, setCart]});

const CartBuilder = ({ children }) => {
    // Default userId 123
    //const [cart, setCart] = useState({userId: 123, products: [{id: 0, quantity: 0}]});
    const [cart, setCart] = useState([]);

    const alterCount = (productList, pID, inc) => {
        const pL = productList.slice();
        for (let i = 0; i < pL.length; i++) {
            if (products[i].id == pID) {
                products[i].quantity = products[i].quantity + inc;
                return pL
            }
        };
        if (inc == 1) {
            pL.pID = inc;
        }
        return pL
    }

    const addOne = (id) => {
        setCart({userId: cart.userId, 
                 products: alterCount(productList, pID, 1)});
    }

    const removeOne = (id) => {
        setCart({userId: cart.userId, 
                 products: alterCount(productList, pID, -1)})
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