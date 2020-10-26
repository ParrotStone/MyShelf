import React from 'react';
import { Link } from '@reach/router';
import Nav from './common/Nav';
import bookLoverImg from '../images/undraw-book-lover.svg';

const Homepage = (props) => {
  return (
    <>
      <Nav />
      <div className='container mx-auto mt-20 text-gray-800 text-center lg:text-left lg:flex lg:justify-between'>
        <div className='max-w-3/4 mx-auto lg:max-w-1/2 lg:mr-20'>
          <h1 className='text-5xl capitalize'>
            Stay home and{' '}
            <span className='block text-primary italic -mt-4'>read books</span>
          </h1>
          <p className='text-xl mt-6'>
            MyShelf lets you to organize your favorite books into different book
            shelves and connect with other book lovers and keep up with the
            latest book trends.
          </p>
          <Link
            to='/sign-up'
            className='block py-3 px-6 mt-12 mb-6 text-base text-center lg:text-xl font-bold text-gray-800 bg-transparent border-2 border-primary transition-all duration-300 ease-out hover:bg-primary hover:text-white rounded mx-auto max-w-1/2 md:max-w-1/3'
          >
            Get Started
          </Link>
        </div>
        <div className='max-w-3/4 mt-20 mx-auto lg:m-0 lg:max-w-1/2'>
          <img
            src={bookLoverImg}
            className='max-w-full'
            width='3000'
            height='2000'
            loading='eager'
            alt='Book Lover Reading'
          />
        </div>
      </div>
    </>
  );
};

export default Homepage;
