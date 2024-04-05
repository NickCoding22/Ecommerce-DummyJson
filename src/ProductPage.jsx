import { useParams } from "react-router-dom";
import { useProducts } from "./Builders/ProductsBuilder";
import { useEffect, useState } from "react";
import ShoppingHeader from './ShoppingHeader.jsx';
import { useCart } from "./Builders/CartBuilder"

function ProductPage() {
    const {products, categories, loading, error} = useProducts();
    const {addOne, removeOne} = useCart();
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
            <div className = "main-container">
            <ShoppingHeader/>
            <div id = "big-container">
                <div id = "big-item-box">
                    <img id = "big-img" src = {product.images[0]}></img>
                    <div id = "product-info">
                        <h3>{product.title}</h3>
                        <h6>{product.description}</h6>
                        <ul>
                            <li><b>Price:</b> ${product.price}</li>
                            <li><b>Rating:</b> {product.rating}</li>
                            <li><b>Stock:</b> {product.stock}</li>
                            <li><b>Category:</b> {product.category}</li>
                            <li><button className="change-button" type="button" onClick={() => {addOne(product.id)}}>Add to Cart</button></li>
                            <li><button className="change-button" type="button" onClick={() => {removeOne(product.id)}}>Remove from Cart</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <footer>
                <b>Created by Nicholas Angelici</b>
            </footer>
            </div>
        )
    }
};

export default ProductPage;