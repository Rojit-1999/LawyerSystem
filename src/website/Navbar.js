import React, { useState } from 'react';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import favicon from '../assets/favicon.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4 text-white'>
      <img src={favicon} className="w-20 pt-8 hover:scale-105 duration-300 cursor-pointer mx-auto mt-[-2.8rem] bg-transparent" alt='Logo' />
      <h1 className='w-full text-3xl cursor-pointer font-bold text-aqua'>HAMROWAKIL</h1>
      <ul className='hidden md:flex'>
      <Link to="/"><li className='p-4 button-hover'>Home</li></Link>
        <li className='p-4 button-hover'>Lawyers</li>
        <Link to="/features"><li className='p-4 button-hover'>Services</li></Link>
        <Link to="/aboutus"><li className='p-4 button-hover' >About</li></Link>
        <Link to="/contactus"><li className='p-4 button-hover'>Contact</li></Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <CloseIcon /> : <MenuIcon />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-aqua m-4'>HAMROWAKIL</h1>
        <Link to="/"><li className='p-4 border-b button-hover border-gray-600'>Home</li></Link>
          <li className='p-4 border-b button-hover border-gray-600'>Lawyers</li>
          <Link to="/features"><li className='p-4 border-b button-hover border-gray-600'>Services</li></Link>
          <Link to="/aboutus"><li className='p-4 border-b button-hover border-gray-600'>About</li></Link>
          <Link to="/contactus"><li className='p-4 border-b button-hover border-gray-600'>Contact</li></Link>
      </ul>
    </div>
  );
};

export default Navbar;