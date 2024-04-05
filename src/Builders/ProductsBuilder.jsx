import { createContext, useEffect, useState, useContext } from 'react';

const ProductsContext = createContext();
export const useProducts = () => useContext(ProductsContext);

const ProductsBuilder = ({ children }) => {
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

    const value = {
        products,
        categories,
        loading,
        error,
    }

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    );
}

export default ProductsBuilder;