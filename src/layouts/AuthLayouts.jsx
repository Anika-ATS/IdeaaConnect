import React from 'react';
import Logo from '../pages/Shared/Logo/Logo';
import { Outlet } from 'react-router';
import authImage from '../assets/Auth1.jpg'
const AuthLayouts = () => {
    return (
        <div className='p-12 bg-base-200'>
            <div><Logo></Logo></div>

            <div className='flex items-center gap-10'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                    <img src={authImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayouts;