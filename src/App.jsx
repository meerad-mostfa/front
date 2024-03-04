import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';
import Cart from './pages/Cart/Cart';
import Categories from './pages/Categories/Categories';
import Sigin from './pages/Signin/Sigin';
import SignUp from './pages/Signup/SignUp';
import Products from './pages/products/Products';
import Home from './Home/Home';


const router = createBrowserRouter([
  {
    path: "/",//مجرد ما يفتح اليوزر البرنامج رح يظهرلو هاي الصفحه 
    element: <Root/>
   , children : [{
    path: '/Cart',
    element: <Cart />
   
  },{
    path: "/", 
    element: <Home />
  },

  {
    path: "/Categories",
   element : <Categories />

  },
{
  path: "/Sigin",
  element: <Sigin />
},
{
  path : "/SignUp" ,
  element : <SignUp />
}
,
{
  path : "/Products",
  element: <Products />
}
] 
  }

]) 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<RouterProvider router={router} />
    </>
  )
}

export default App
