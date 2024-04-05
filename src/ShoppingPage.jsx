import ItemBox from './ItemBox.jsx'
import SearchMenu from './SearchMenu.jsx'
import ShoppingHeader from './ShoppingHeader.jsx';
import { useProducts } from './ProductsBuilder.jsx'
import {useEffect, useState} from "react";

function ShoppingPage() {
    //const {products, categories, loading, error} = useShoppingPage();
    const {products, categories, loading, error} = useProducts();
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState([]);

    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;

    let productsFiltered = products;
    
    if (search != "") {
        productsFiltered = products.filter((product) => {
            return product.title.toLowerCase().includes(search.toLowerCase());
    })} else { productsFiltered = products };

    if (filters.length != 0) {
        console.log(filters);
        productsFiltered = productsFiltered.filter((product) => {
            return filters.includes(product.category);
    })}

    console.log(productsFiltered);

    return (
        <div className = "main-container">
            <ShoppingHeader/>
            <div id = "secondary-container">
                <div id = "search-menu">
                    <SearchMenu 
                    categories = {categories}
                    setSearch = {setSearch}
                    filters = {filters}
                    setFilters = {setFilters}
                    />
                </div>
                <div id = "product-container">
                    {productsFiltered.map((product) => {
                        return <ItemBox 
                        key = {product.id} 
                        id = {product.id}
                        text={product.title} 
                        price = {product.price} 
                        imageURL = {product.images[0]}
                        />
                    })}
                </div>
            </div>
            <footer>
                <b>Created by Nicholas Angelici</b>
            </footer>
        </div>
    );
};

export default ShoppingPage