import React, { useState } from 'react';
import { Link } from '@reach/router';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logo from './Logo';

const Nav = (props) => {
  const [navShown, setNavShown] = useState(false);
  const navLinksClasses = `text-lg ${
    navShown ? 'visible translate-x-none' : 'invisible translate-x-screen'
  } text-center bg-gray-100 p-6 w-full h-screen fixed top-0 right-0 flex flex-col items-cener justify-evenly transition-all duration-500 ease-out sm:static sm:visible sm:translate-x-none sm:bg-white sm:h-auto sm:block sm:mt-6 lg:text-right lg:max-w-1/2 lg:mt-2 xl:mt-4`;

  return (
    <div className='container mx-auto text-left sm:text-center lg:text-left lg:flex lg:justify-between'>
      <div className='m-4 flex justify-between sm:block lg:max-w-1/3 xl:ml-8'>
        <Logo logoStyles='inline-block max-w-1/4 sm:max-w-1/2 lg:max-w-1/3' />
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
