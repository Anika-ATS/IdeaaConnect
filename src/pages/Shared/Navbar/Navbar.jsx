import React from 'react';
import { Link, NavLink } from 'react-router';



import Logo from '../../Shared/Logo/Logo';
//import { Link, NavLink } from 'react-router';
//import useAuth from '../../../hooks/useAuth';

const Navbar = () => {

    const navItems= <>


      <li><NavLink to='/'> Home</NavLink></li>
      
      <li><NavLink to='/notice'> NoticePage</NavLink></li>
     
      <li><NavLink to='/project'> Project</NavLink></li>
      <li><NavLink to='/thesis'> Thesis</NavLink></li>

      {/* protectedroute */}
       <li><NavLink to='/submit'> SubmitWork</NavLink></li>
       <li><NavLink to='/teacher'> TeacherDashBoard</NavLink></li>
       <li><NavLink to='/admin'> AdminDashBoard</NavLink></li>

      
    </>
return (
<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
        {navItems}
      </ul>
    </div>
    <div className='flex justify-between '>
                    <Logo></Logo>
                    {/* <img className='w-32 h-20 p-1 space-x-3 rounded-full  '
                        src={logo} alt="" /> */}

                    {/* <a className="btn btn-ghost py-2 normal-case text-purple-800">
                        <span className='text-lg '>IdeaConnect</span>
                    </a> */}
                </div>
    {/* <a className="btn btn-ghost text-xl"> IdeaConnect </a> */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navItems}
    </ul>
  </div>
  <div className="navbar-end">
   <Link to='/login'><a className="btn">Login</a> </Link> 
  </div>
</div>

);



};

export default Navbar;