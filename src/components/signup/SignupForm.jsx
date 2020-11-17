import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from '@reach/router';
import Nav from '../common/Nav';
import ProgressCircles from '../common/progress-circles/ProgressCircles';
import InputErrorMsg from '../common/InputErrorMsg';
import CustomCheckbox from '../common/custom-checkbox/CustomCheckbox';

// REview this line here later on
const validationSchema = yup.object({
  firstName: yup
    .string()
    .required('Required')
    .min(2, 'Too Short!')
    .max(30, 'Firstname must be 30 characters or less'),
  lastName: yup
    .string()
    .required('Required')
    .min(2, 'Too Short!')
    .max(30, 'Lastname must be 30 characters or less'),
  username: yup
    .string()
    .required('Required')
    .min(2, 'Too Short!')
    .max(20, 'Username must be 20 characters or less'),
  password: yup
    .string()
    .required('Required')
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@_$!'"`^%*#?&-])[A-Z\d@_$'"`^!%*#?&\- ]{8,}$/gi,
      'Must be at least 8 characters long and contain one letter, symbol, and number'
    ),
  email: yup
    .string()
    .required('Required')
    .email('Invalid email address'),
  gender: yup
    .string()
    .required('Please choose a gender')
    .oneOf(['male', 'female', 'other']),
  birthdate: yup.date('Please enter a valid date').required('Required'),
  website: yup.string().url('Invalid URL!'),
  bio: yup
    .string()
    .min(10, 'Too Short!')
    .max(200, 'Bio must be 200 characters or less'),
  acceptTerms: yup
    .boolean('Required')
    .oneOf([true], 'You must accept to proceed'),
});

const SignupForm = (props) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      gender: '',
      birthdate: '',
      website: '',
      bio: '',
      acceptTerms: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const handleProgressChange = (step) => {
    console.log(step);
  };

  const { touched, errors } = formik;

  const isErrorFirstName = touched.firstName && errors.firstName;
  const isErrorLastName = touched.lastName && errors.lastName;
  const isErrorUsername = touched.username && errors.username;
  const isErrorEmail = touched.email && errors.email;
  const isErrorPassword = touched.password && errors.password;
  const isErrorGender = touched.gender && errors.gender;
  const isErrorBirthdate = touched.birthdate && errors.birthdate;
  const isErrorWebsite = touched.website && errors.website;
  const isErrorBio = touched.bio && errors.bio;
  const isErrorAcceptTerms = touched.acceptTerms && errors.acceptTerms;

  return (
    <>
      <Nav />
      <div className='container mx-auto mt-10 text-gray-800     mb-56'>
        <h1 className='text-center text-5xl text-primary'>Sign Up!</h1>
        <div className='bg-gray-100 py-12 px-6 w-3/4 shadow-lg mx-auto border-2 border-gray-200 rounded lg:w-1/2'>
          <div className='mb-8'>
            <ProgressCircles
              currentStep={1}
              stepsNum={2}
              handleProgressChange={(ev) => handleProgressChange(ev.target)}
            />
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor='firstName' className='font-bold'>
                Firstname
              </label>
              <input
                id='firstName'
                name='firstName'
                className={`bg-white appearance-none h-12 w-full border-2 border-primary rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ${
                  isErrorFirstName ? 'border-red-600' : ''
                }`}
                type='text'
                placeholder='Jane'
                {...formik.getFieldProps('firstName')}
              />
              {isErrorFirstName ? (
                <InputErrorMsg msg={formik.errors.firstName} />
              ) : null}
            </div>
            <div className='mt-8'>
              <label htmlFor='lastName' className='font-bold'>
                Lastname
              </label>
              <input
                id='lastName'
                name='lastName'
                className={`bg-white appearance-none h-12 w-full border-2 border-primary rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ${
                  isErrorLastName ? 'border-red-600' : ''
                }`}
                type='text'
                placeholder='Doe'
                {...formik.getFieldProps('lastName')}
              />
              {isErrorLastName ? (
                <InputErrorMsg msg={formik.errors.lastName} />
              ) : null}
            </div>
            <div className='mt-8'>
              <label htmlFor='username' className='font-bold'>
                Username
              </label>
              <input
                id='username'
                name='username'
                className={`bg-white appearance-none h-12 w-full border-2 border-primary rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ${
                  isErrorUsername ? 'border-red-600' : ''
                }`}
                type='text'
                placeholder='Jane234'
                {...formik.getFieldProps('username')}
              />
              {isErrorUsername ? (
                <InputErrorMsg msg={formik.errors.username} />
              ) : null}
            </div>
            <div className='mt-8'>
              <label htmlFor='email' className='font-bold'>
                Email
              </label>
              <input
                id='email'
                name='email'
                className={`bg-white appearance-none h-12 w-full border-2 border-primary rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ${
                  isErrorEmail ? 'border-red-600' : ''
                }`}
                type='email'
                placeholder='jane@email.com'
                {...formik.getFieldProps('email')}
              />
              {isErrorEmail ? (
                <InputErrorMsg msg={formik.errors.email} />
              ) : null}
            </div>
            <div className='mt-8'>
              <label htmlFor='password' className='font-bold'>
                Password
              </label>
              <input
                id='password'
                name='password'
                className={`bg-white appearance-none h-12 w-full border-2 border-primary rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ${
                  isErrorPassword ? 'border-red-600' : ''
                }`}
                type='password'
                placeholder='************************'
                {...formik.getFieldProps('password')}
              />
              {!formik.errors.password ? (
                <span className='text-sm text-gray-500 mt-6'>
                  Make it as long and as crazy as you'd like
                </span>
              ) : null}
              {isErrorPassword ? (
                <InputErrorMsg msg={formik.errors.password} />
              ) : null}
            </div>
            <div className='mt-8'>
              <label htmlFor='gender' className='font-bold'>
                Gender
              </label>
              <select
                name='gender'
                id='gender'
                className={`bg-white appearance-none h-12 w-full border-2 border-primary rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ${
                  isErrorPassword ? 'border-red-600' : ''
                }`}
              >
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </select>
              {isErrorGender ? (
                <InputErrorMsg msg={formik.errors.gender} />
              ) : null}
            </div>
            <div className='mt-12'>
              <div className='flex items-center'>
                <CustomCheckbox
                  id='acceptTerms'
                  name='acceptTerms'
                  className='bg-white p-2 mr-4 border-2 border-gray-500 rounded focus:shadow-outline '
                  {...formik.getFieldProps('acceptTerms')}
                />
                <label
                  htmlFor='acceptTerms'
                  className='font-bold cursor-pointer'
                >
                  I accept{' '}
                  <Link to='/terms-conditions' className='text-primary'>
                    the terms and conditions
                  </Link>{' '}
                  &amp;{' '}
                  <Link to='/privacy-policy' className='text-primary'>
                    privacy policy
                  </Link>
                </label>
              </div>
              {isErrorAcceptTerms ? (
                <p>
                  <InputErrorMsg msg={`${formik.errors.acceptTerms}`} />
                </p>
              ) : null}
            </div>
            <div className='mt-12'>
              <button
                disabled={Object.keys(formik.errors).length}
                className={`${
                  Object.keys(formik.errors).length
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                } block mx-auto w-1/2 bg-green-600 py-2 px-4 text-white text-lg font-bold rounded transition-all duration-300 ease-out hover:bg-green-800`}
              >
                Sign Up
              </button>
            </div>
            <div className='font-bold mt-8'>
              <span>
                Already have an account?{' '}
                <Link to='/login' className='text-primary'>
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
