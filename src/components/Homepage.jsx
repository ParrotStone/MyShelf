import React from 'react';
import { Link } from '@reach/router';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Nav from './common/Nav';
import InputErrorMsg from './common/InputErrorMsg';
// import ScrollTop from './common/ScrollTop';
import bookLoverImg from '../images/undraw-book-lover.svg';
import readingTimeImg from '../images/undraw-reading-time.svg';
import reviewBooksImg from '../images/undraw-reviews.svg';

const validationSchema = yup.object({
  searchText: yup
    .string()
    .required('Required')
    .min(3, 'Please enter a minimum of three characters'),
});

const Homepage = (props) => {
  // Check me out later
  // const [show, setShow] = useState(false);
  const currentYear = new Date().getFullYear();

  const formik = useFormik({
    initialValues: {
      searchText: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // ...
    },
  });

  const isErrorSearchText =
    formik.touched.searchText && formik.errors.searchText;

  // Check this code later on
  // ------------------------
  // useEffect(() => {
  //   console.log('called');

  //   function handleScroll() {
  //     console.log(window.scrollY, 'called!');

  //     if (window.scrollY > 550 && !show) {
  //       setShow((prevShow) => true);
  //     }

  //     if (window.scrollY < 550 && show) {
  //       setShow((prevShow) => false);
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll);
  //   return window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <>
      <Nav />

      <div className='container mx-auto mt-20 text-gray-800 text-center sm:mt-16 lg:mt-20 lg:text-left'>
        <div className='lg:flex lg:justify-between'>
          <div className='max-w-3/4 mx-auto lg:max-w-1/2 lg:mr-20'>
            <h1 className='text-5xl capitalize'>
              Stay home and{' '}
              <span className='block text-primary italic -mt-4'>
                read books
              </span>
            </h1>
            <p className='text-xl mt-6'>
              MyShelf lets you to organize your favorite books into different
              book shelves and connect with other book lovers and keep up with
              the latest book trends.
            </p>
            <Link
              to='/sign-up'
              className='block py-3 px-6 mt-12 mb-6 text-base text-center shadow-lg lg:text-xl font-bold text-gray-800 bg-transparent border-2 border-primary transition-all duration-300 ease-out hover:bg-primary hover:text-white rounded mx-auto max-w-1/2 xl:max-w-1/3'
            >
              Get Started
            </Link>
          </div>
          <div className='max-w-3/4 mt-20 mx-auto hidden lg:m-0 lg:max-w-1/2 lg:block'>
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
      </div>

      <div className='container mx-auto mt-20 text-gray-800 text-center lg:text-left'>
        <div className='mt-16 lg:flex lg:justify-between'>
          <div className='max-w-3/4 mx-auto lg:mr-20 lg:max-w-1/2'>
            <img
              src={readingTimeImg}
              alt='Find Your Favorite Books'
              width='3000'
              height='2000'
              loading='lazy'
              className='max-w-full'
            />
          </div>
          <div className='max-w-3/4 mx-auto mt-12 lg:mt-0 lg:max-w-1/2'>
            <h1 className='text-5xl capitalize'>
              Meet your next <span className='text-blue-700'>favorite</span>{' '}
              Book
            </h1>
            <p className='text-xl mt-6'>
              Review book titles and discover new books plus gaining access to a
              massive list of book genres that will keep you busy.
            </p>
            <Link
              to='/how-it-works'
              className='block py-3 px-6 mt-12 mb-6 text-base text-center shadow-lg lg:text-xl font-bold text-white bg-blue-700 transition-all duration-300 ease-out hover:bg-blue-500 rounded mx-auto max-w-1/2 xl:max-w-1/3'
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className='bg-gray-800 h-64 w-full text-white mt-24 pt-5 px-4'>
        <h1 className='text-center text-3xl md:text-4xl'>
          Search for your favorite books
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className='container mx-auto h-full flex flex-col justify-center px-24 mt-5 lg:px-48 lg:mt-10 lg:flex-row'>
            <div className='w-full mb-4 lg:mb-0 lg:w-3/4 lg:mr-4'>
              <input
                name='searchText'
                className={`bg-gray-200 appearance-none h-12 w-full border-2 border-gray-600 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ${
                  isErrorSearchText ? 'border-red-600' : ''
                }`}
                type='text'
                placeholder='Book title...'
                {...formik.getFieldProps('searchText')}
              />
              {isErrorSearchText ? (
                <InputErrorMsg msg={formik.errors.searchText} />
              ) : null}
            </div>
            <div className='w-full lg:w-1/4'>
              <button
                type='submit'
                disabled={Object.keys(formik.errors).length}
                className={`${
                  formik.errors.searchText
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                } inline-block h-12 py-3 px-6 text-white text-lg font-bold bg-green-500 transition-all duration-300 text-center ease-out hover:bg-green-600 rounded w-full`}
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className='container mx-auto mt-24 text-gray-800 text-center lg:text-left'>
        <div className='mt-16 lg:flex lg:justify-between'>
          <div className='max-w-3/4 mx-auto lg:max-w-1/2 lg:order-last'>
            <img
              src={reviewBooksImg}
              alt='Review Books and view their rating details'
              width='3000'
              height='2000'
              loading='lazy'
              className='max-w-full'
            />
          </div>
          <div className='max-w-3/4 mx-auto mt-12 lg:mt-0 lg:max-w-1/2 lg:order-first'>
            <h1 className='text-5xl capitalize'>
              <span className='text-primary'>review</span> & rate books{' '}
            </h1>
            <p className='text-xl mt-6'>
              View rating details of your favorite books, rate other books and
              organize your want-to-read books into different custom shelves.
            </p>
            <Link
              to='/sign-up'
              className='block py-3 px-6 mt-12 mb-6 text-base text-center shadow-lg lg:text-xl font-bold text-white bg-primary transition-all duration-300 ease-out hover:bg-secondary rounded mx-auto max-w-1/2 xl:max-w-1/3'
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      <footer className='container mx-auto mt-32 mb-10 text-center text-gray-800'>
        <p>©{currentYear} MyShelf. All rights reserved.</p>
      </footer>

      {/* show && <ScrollTop /> */}
    </>
  );
};

export default Homepage;
