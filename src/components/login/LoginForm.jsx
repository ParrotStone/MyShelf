import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from '@reach/router';
import Nav from '../common/Nav';
import InputErrorMsg from '../common/InputErrorMsg';

import toast from 'cogo-toast';

// See the proper regex for username & email later
const validationSchema = yup.object({
  usernameOrEmail: yup
    .string()
    .required('Required')
    .min(2, 'Too Short!'),
  password: yup.string().required('Required'),
});

const LoginForm = (props) => {
  const formik = useFormik({
    initialValues: {
      usernameOrEmail: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      toast.success(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Nav />
      <div className='container mx-auto text-gray-800 mt-20 md:mt-6'>
        <h1 className='text-5xl text-center text-primary'>Login</h1>
        <div className='bg-gray-100 border-2 border-gray-200 rounded w-3/4 mx-auto py-12 px-6 lg:w-1/2'>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor='usernameOrEmail' className='font-bold'>
                Username Or Email
              </label>
              <input
                id='usernameOrEmail'
                name='usernameOrEmail'
                className={`bg-white appearance-none h-12 w-full border-2 border-primary rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ${
                  formik.errors.usernameOrEmail ? 'border-red-600' : ''
                }`}
                type='text'
                placeholder='Username Or Email'
                {...formik.getFieldProps('usernameOrEmail')}
              />
              {formik.touched.usernameOrEmail &&
              formik.errors.usernameOrEmail ? (
                <InputErrorMsg msg={formik.errors.usernameOrEmail} />
              ) : null}
            </div>
            <div className='mt-8'>
              <label htmlFor='password' className='font-bold'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                className={`bg-white appearance-none h-12 w-full border-2 border-primary rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ${
                  formik.errors.password ? 'border-red-600' : ''
                }`}
                placeholder='************************'
                {...formik.getFieldProps('password')}
              />
              {!formik.errors.password && (
                <div className='text-sm text-primary font-bold mt-2'>
                  <Link to='/reset-password'>Forgot Password?</Link>
                </div>
              )}
              {formik.touched.password && formik.errors.password ? (
                <InputErrorMsg msg={formik.errors.password} />
              ) : null}
            </div>
            <div className='mt-12 mx-auto text-center'>
              <button
                type='submit'
                className={`${
                  Object.keys(formik.errors).length
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                } block mx-auto w-1/2 bg-green-600 py-2 px-4 text-white text-lg font-bold rounded transition-all duration-300 ease-out hover:bg-green-800`}
              >
                Login
              </button>
              {/* The center/left thingie figure it out and make peace with the one in the SignupForm :) */}
              <div className='font-bold mt-8'>
                <span>
                  Don't have an account?{' '}
                  <Link to='/sign-up' className='text-primary'>
                    Sign Up
                  </Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
