import React from 'react';
import { Link } from '@reach/router';
import Nav from './Nav';
import notfoundImg from '../../images/error-404-notfound.svg';

const NotFound = (props) => {
  return (
    <>
      <Nav />
      <div className='container mx-auto mt-12 text-center'>
        <div className='max-w-3/4 mx-auto'>
          <h1 className='p-2 mt-12 text-3xl text-red-500 md:text-5xl lg:text-5xl xl:mt-0'>
            Oops... Page Not Found!
          </h1>
          <img
            src={notfoundImg}
            className='max-w-full p-8 mt-6 mx-auto md:max-w-3/4 lg:max-w-1/2 xl:mt-0'
            width='3000'
            height='2000'
            loading='eager'
            alt='404 - Not Found Page'
          />
        </div>
        <Link
          to='/'
          className='block py-3 px-2 mt-20 mb-12 text-lg lg:text-xl font-bold shadow-lg text-white bg-primary transition-all duration-300 ease-out hover:bg-secondary rounded w-1/2 mx-auto xl:w-1/3 xl:mt-10 xl:mb-8'
        >
          Go back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
