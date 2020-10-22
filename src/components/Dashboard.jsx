import React from 'react';
import { Redirect } from '@reach/router';

const Dashboard = (props) => {
  // check local storage HERE -- if the user is authenticated :)
  if (true) {
    return <Redirect noThrow to='/' />;
  }

  return (
    <>
      <h1 className='text-center text-6xl text-red-500 mt-5'>User Dashboard</h1>
    </>
  );
};

export default Dashboard;
