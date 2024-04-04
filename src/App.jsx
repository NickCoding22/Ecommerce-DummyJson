import { useState } from 'react'
import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import CartBuilder from './CartBuilder'
import ShoppingHeader from "./ShoppingHeader";

function App() {
  return (
    <div id = "main">
      <ShoppingHeader/>
      <div id = "opener">
          <h2>
            InnoCaption Submission 
          </h2>
          <h3>
            Shopping made easy
          </h3>
      </div>
    </div>
  )
}

export default App
/*import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OpeningPage from './OpeningPage'
import ShoppingPage from './ShoppingPage'
import ProductPage from './ProductPage'
import CartCheckout from './CartCheckout'

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

  return <RouterProvider router={router} />
}

export default App;*/
