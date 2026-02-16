import React from 'react';
import { Link } from 'react-router';
import logo from '../../../assets/logo.png';

const Logo = () => {
    return (

       <Link to="/">
            <div className='flex items-end'>
                <img className='w-32 h-20 p-1 space-x-3 rounded-full  ' src={logo} alt="" />
             
            </div>
        </Link>


    );



};
export default Logo;