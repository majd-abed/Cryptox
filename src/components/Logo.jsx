import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to='/' className='flex items-center h-[3.5rem] overflow-hidden w-48 mt-[0.07rem]'>
      
      <img src='logo.png' alt='logo' className='w-12 fill-blue-900' />
      <h1 className='pr-1 font-Righteous text-3xl text-blue-900'>
        CRYPTOX
      </h1>
    </Link>
  );
};
export default Logo;
