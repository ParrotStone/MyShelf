import React from 'react';
import { a } from '@reach/router';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import Nav from './common/Nav';

const AboutUs = (props) => {
  return (
    <>
      <Nav />
      <div className='container mx-auto text-center my-24'>
        <h1 className='text-4xl text-primary'>Developers</h1>
        <div className='md:flex'>
          <div className='md:w-1/2 px-3 py-5 h-64 border-2 border-primary'>
            <h1 className='text-3xl text-primary'>Abdulrahman Ali</h1>
            <div>
              <p>
                Full-stack engineer, Pythonist and Blockchain enthusiast. I love
                tinkering, Linux, and reading philosophical topics.
              </p>
            </div>
            <div className='mt-5'>
              <a
                href='https://twitter.com/@abdoalihuss'
                className='inline-block mr-6'
              >
                <FaTwitter className='text-2xl text-primary' />
              </a>
              <a href='https://github.com/parrotstone' className='inline-block'>
                <FaGithub className='text-2xl text-primary' />
              </a>
            </div>
          </div>
          <div className='md:w-1/2 px-3 py-5 h-64 border-2 border-primary'>
            <h1 className='text-3xl text-primary'>Abdulrahman Ibrahim</h1>
            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing, elit.
                Tempore laboriosam cupiditate consequuntur veritatis assumenda
                dolores.
              </p>
            </div>
            <div className='mt-5'>
              <a
                href='https://twitter.com/@a__ibrahiim'
                className='inline-block mr-6'
              >
                <FaTwitter className='text-2xl text-primary' />
              </a>
              <a href='https://github.com/woodyinho' className='inline-block'>
                <FaGithub className='text-2xl text-primary' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
