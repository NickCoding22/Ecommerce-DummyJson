import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import OpeningPage from './OpeningPage'
import ShoppingPage from './ShoppingPage'
import ProductPage from './ProductPage'
import CartCheckout from './CartCheckout'
import CartBuilder from './CartBuilder'
import ProductsBuilder from './ProductsBuilder'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsBuilder>
      <CartBuilder>
        <RouterProvider router={router} />
      </CartBuilder>
    </ProductsBuilder>
  </React.StrictMode>
);

/*import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
