import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OpeningPage from './OpeningPage.jsx'
import ShoppingPage from './ShoppingPage/ShoppingPage.jsx'
import ProductPage from './ProductPage.jsx'
import CartCheckout from './ShoppingCart/CartCheckout.jsx'
import ProductsBuilder from './Builders/ProductsBuilder.jsx';
import CartBuilder from './Builders/CartBuilder.jsx';

function App () {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <OpeningPage />,
    },
    {
      path: "/shopping",
      element: <ShoppingPage />,
    },
    {
      path: "/shopping/:id",
      element: <ProductPage />,
    },
    {
      path: "/cart",
      element: <CartCheckout />,
    },
  ]);

  return (
    <ProductsBuilder>
      <CartBuilder>
        <RouterProvider router={router} />
      </CartBuilder>
    </ProductsBuilder>
  );
}

export default App;
