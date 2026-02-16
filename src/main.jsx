import React from "react";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { router } from './router/Router.jsx';
import {RouterProvider} from "react-router";
import AuthProvider from './Contexts/AuthContext/AuthProvider.jsx';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

      <div className='font-urbanist'>
       <RouterProvider router={router} />,
    </div>
    </AuthProvider>
    
   
  </StrictMode>,
)
