import React from "react";


import {createBrowserRouter} from "react-router";
import RootLayout from "../layouts/RootLayouts";
import Home from "../pages/Home/Home/Home";
import SubmitWork from "../pages/SubmitWork/SubmitWork";
import NoticePage from "../pages/Noticepage/NoticePage";
import Project from "../pages/Project/Project";
import Thesis from "../pages/Thesis/Thesis";
import AuthLayouts from "../layouts/AuthLayouts";
import Login from "../pages/Authentication/Login/Login";


export  const router = createBrowserRouter([

  { path: "/", 
     Component: RootLayout ,
      children: [
      { index: true, 
        Component: Home 
      },

      {
        path:'submit',
        element:<SubmitWork></SubmitWork>
      },
      {
        path:'notice',
        element:<NoticePage></NoticePage>
      },
      {
        path:'project',
        element:<Project></Project>
      },
    
      {
        path:'thesis',
        element:<Thesis></Thesis>
      },
    
    
    ]
    
    
    
    
    
    
    
    },


  //it is for authentication layout

  {

    path:'/',
    Component:AuthLayouts,
     children: [
      { 
        path:'login',
        Component: Login, 
      },
    
    
    ]


  }

]);