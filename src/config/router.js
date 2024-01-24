import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
 import Login from'../views/Login'
import Signup from '../views/Signup'
import Dashboard from "../views/Dashboard";
import Sell from "../views/Postsell";
import Detailcard from "../views/DetailCard";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
    
    {
      path: "/dashboard",
      element: <Dashboard/>,
    },
    {
      path: "/post",
      element: <Sell/>,
    },
     {
      path: "/detail/:adId",
       element: <Detailcard/>,
     },
  ]);
  function Router(){
    return <RouterProvider router={router}/>
  }
  export default Router;