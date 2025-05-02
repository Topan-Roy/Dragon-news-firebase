import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import CatagoriNews from "../Pages/CatagoriNews";

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
      element: <div>auth</div>,
    },
    {
      path: "/news",
      element: <div>Hello news</div>,
    },
    {
      path: "/*",
      element: <div>error 404</div>,
    },
  ]);