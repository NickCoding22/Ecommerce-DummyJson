import { useParams } from "react-router-dom";
import { useProducts } from "./ShoppingPage";
import { useEffect, useState } from "react";
import ShoppingHeader from './ShoppingHeader.jsx';

const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState({userId: 123, products: []})
    fetch('https://dummyjson.com/carts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(shoppingCart)
    })
    .then(res => res.json())
    .then(console.log);
            
    return [shoppingCart, setShoppingCart]
}

function ProductPage() {
    const {products, categories, loading, error} = useProducts();
    const {shoppingCart, setShoppingCart} = useShoppingCart();
    const { id } = useParams();

    const product = products.filter((p) => {
        return p.id == id;
    })[0];

    if (product == undefined) {
        return(
            <div>
                <h1>Current ID : {id}</h1>
            </div>
        )
    } else {
        return(
            <div>
            <ShoppingHeader/>
            <div id = "big-container">
                <div id = "big-item-box">
                    <img id = "big-img" src = {product.images[0]}></img>
                    <div id = "product-info">
                        <h3>{product.title}</h3>
                        <h6>{product.description}</h6>
                        <p>${product.price}</p>
                        <p>Rating: {product.rating}</p>
                        <p>Stock: {product.stock}</p>
                        <p>Category: {product.category}</p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
};

export default ProductPage;