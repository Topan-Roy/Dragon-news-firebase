import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import CatagoriNews from "../Pages/CatagoriNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewaDetalis from "../Pages/NewaDetalis";
import PrivetRoute from "../Provider/PrivetRoute";

  export const router = createBrowserRouter([
    {
      path: "/",
    Component:Root,
    children:[
      {
        path:'',
        Component:Home
      },
      {
        path:'/catagori/:id',
        Component:CatagoriNews,
        loader:()=>fetch('/news.json')
      }
    ]
    },
    {
      path: "/auth",
      Component:AuthLayout,
      children:[
        {
          path:'/auth/login',
          Component:Login
        },
        {
          path:'/auth/register',
          Component:Register
        },
      ]
    },
    {
      path: "/news-detales/:id",
    element:<PrivetRoute><NewaDetalis></NewaDetalis></PrivetRoute>,
    loader:()=>fetch("/news.json")
    },
    {
      path: "/*",
      element: <div>error 404</div>,
    },
  ]);