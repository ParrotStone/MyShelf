import React from 'react';
import { Link } from '@reach/router';
import logo from '../../images/myshelf-logo.svg';

const Logo = ({ logoStyles }) => {
  return (
    <Link to='/'>
      <img
        src={logo}
        alt='MyShelf Logo'
        width='3000'
        height='1200'
        loading='eager'
        className={logoStyles}
      />
    </Link>
  );
};

export default Logo;
