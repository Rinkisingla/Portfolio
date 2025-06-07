import React from 'react'

 import "./App.css"
import Navbar from './Components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import About from './Components/About'
import AppLayout from './Components/Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import Home from './Components/Home'
 
 const router = createBrowserRouter([
    {
  path:'/',
  element:<AppLayout/>,
   errorElement:<ErrorPage/>,
   children:[
    {
        path:'/',
    element:<Home/>
   },
   {
        path:'contact',
    element:<Contact/>,
   },
   {
        path:'about',
    element:<About/>,
   },
   {
        path:'projects',
    element:<Projects/>
   },
  ],
    },
 ])
const App = () => {
  return (

   <RouterProvider router={router} />
    


  )
}

export default App