import React from 'react';
// import { Redirect } from '@reach/router';
import { Link } from '@reach/router';
// import Nav from './common/Nav';

const Dashboard = (props) => {
  // check local storage HERE -- if the user is authenticated :)
  // if (true) {
  //   return <Redirect noThrow to='/login' />;
  // }

  return (
    <>
      <div className='bg-primary w-1/12 lg:w-1/4 h-screen text-white text-center'>
        <div className='user-area'>
          <h1>User Photo</h1>
          <h3>User Email</h3>
        </div>

        <div className='text-lg font-bold mt-24'>
          <div className='mt-4'>
            <Link to=''>My Shelves</Link>
          </div>
          <div className='mt-4'>
            <Link to='/logout'>Logout</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
