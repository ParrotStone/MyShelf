import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Nav from './Nav';
import InputErrorMsg from './InputErrorMsg';

import toast from 'cogo-toast';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Required'),
});

const ResetPasswordForm = (props) => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: (values) => {
      toast.success(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Nav />
      <div className='container mx-auto text-gray-800 mt-32 md:mt-12 lg:mt-20'>
        <h1 className='text-center text-5xl text-primary'>Reset Password</h1>
        <div className='bg-gray-100 py-12 px-6 border-2 border-gray-200 rounded w-3/4 lg:w-1/2 mx-auto'>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor='email' className='font-bold'>
                Email
              </label>
              <input
                id='email'
                name='email'
                type='email'
                className={`bg-white appearance-none h-12 w-full border-2 border-primary rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ${
                  formik.errors.email ? 'border-red-600' : ''
                }`}
                placeholder='Email'
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
                <InputErrorMsg msg={formik.errors.email} />
              ) : null}
            </div>
            <div className='mt-8'>
              <button
                className={`${
                  Object.keys(formik.errors).length
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                } block mx-auto w-full sm:w-1/2 bg-green-600 py-2 px-4 text-white text-lg font-bold rounded transition-all duration-300 ease-out hover:bg-green-800`}
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordForm;
