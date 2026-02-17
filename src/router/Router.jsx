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
import SignIn from "../pages/Authentication/SignIn/SignIn";
import PrivateRoute from "../routes/PrivateRoute";
import TeacherDashboard from "../pages/dashboard/TeacherDashboard/TeacherDashBoard";
import AdminDashboard from "../pages/dashboard/AdminDashboard/AdminDashboard";


export  const router = createBrowserRouter([

  { path: "/", 
     Component: RootLayout ,
      children: [
      { index: true, 
        Component: Home 
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

      // protection
      
      {
        path:'submit',
        element: <PrivateRoute allowedRoles={['student']}><SubmitWork></SubmitWork></PrivateRoute>  
      },
       {
        path:'teacher',
        element: <PrivateRoute allowedRoles={['teacher']}><TeacherDashboard></TeacherDashboard></PrivateRoute>  
      },
        {  
        path:'admin',
        element:<PrivateRoute allowedRoles={['admin']}><AdminDashboard></AdminDashboard></PrivateRoute>
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

       { 
        path:'signin',
        Component: SignIn, 
      },
    
    
    ]


  }

]);