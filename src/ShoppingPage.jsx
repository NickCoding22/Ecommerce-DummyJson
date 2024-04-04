import ItemBox from './ItemBox.jsx'
import SearchMenu from './SearchMenu.jsx'
import ShoppingHeader from './ShoppingHeader.jsx';
import {useEffect, useState} from "react";

function useShoppingPage() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Get all products and place them in "products"
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=0')
            .then(res => res.json())
            .then((res) => setProducts(res['products']))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    // Get all categories and place them in "categories"
    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then((res) => res.json())
            .then((res) => setCategories(res))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return {products, categories, loading, error};
}

export const useProducts = (() => {return useShoppingPage()})

function ShoppingPage() {
    const {products, categories, loading, error} = useShoppingPage();
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
        <div id = "shopping-page">
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
                Created by Nicholas Angelici
            </footer>
        </div>
    );
};

export default ShoppingPage