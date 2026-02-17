import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import Loading from '../componentes/Loading/Loading';

const PrivateRoute = ({ children , allowedRoles }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    
    if (loading) {
        return <Loading></Loading>
    }
     //checking user or not 
    if(!user){
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }
     //redirect unauthorized role person to login
     if (allowedRoles && !allowedRoles.includes(user.role)) {  
    return <Navigate to="/login" />; 
  }

    return children;
};

export default PrivateRoute;