
import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import InformationShop from './components/InformationShop/InformationShop'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/shop",
      element: <InformationShop />
    },
    {
      path: "/cart",
      element: <ShoppingCart/>
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
