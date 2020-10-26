import React, { useState } from 'react';
import { Link } from '@reach/router';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logo from './Logo';

const Nav = (props) => {
  const [navShown, setNavShown] = useState(false);
  console.log(navShown);
  const navLinksClasses = `text-lg ${
    navShown ? 'visible translate-x-none' : 'invisible translate-x-screen'
  } bg-gray-100 text-center p-6 w-full h-screen fixed top-0 right-0 flex flex-col items-cener justify-evenly transition-all duration-500 ease-out sm:static sm:visible sm:translate-x-none sm:bg-white sm:h-auto sm:block sm:mt-10 lg:text-right lg:max-w-1/2 xl:mt-8`;

  return (
    <div className='container mx-auto text-left sm:text-center xl:text-left lg:flex lg:justify-between'>
      <div className='m-4 flex justify-between sm:block xl:ml-8'>
        <Logo logoStyles='inline-block max-w-1/4 sm:max-w-1/2 lg:max-w-full xl:w-48' />
        <button className='sm:hidden' onClick={() => setNavShown(true)}>
          <AiOutlineMenu className='text-4xl text-primary' />
        </button>
      </div>

      <div className={navLinksClasses}>
        <button className='sm:hidden' onClick={() => setNavShown(false)}>
          <AiOutlineClose className='text-4xl text-primary' />
        </button>
        <Link
          to='/'
          className='text-gray-800 transition-all duration-300 ease-out mr-8 hover:text-secondary'
        >
          Home
        </Link>
        <Link
          to='/how-it-works'
          className='text-gray-800 transition-all duration-300 ease-out mr-8 hover:text-secondary'
        >
          How It Works
        </Link>
        <Link
          to='/about'
          className='text-gray-800 transition-all duration-300 ease-out mr-8 hover:text-secondary'
        >
          About Us
        </Link>
        <Link
          to='/login'
          className='text-gray-800 transition-all duration-300 ease-out mr-8 hover:text-secondary'
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Nav;
