import React from 'react';
import './customCheckboxStyles.css';

const CustomCheckbox = ({ className, ...props }) => {
  className += `custom-checkbox appearance-none cursor-pointer`;

  return (
    <>
      <input {...props} type='checkbox' className={className} />
    </>
  );
};

export default CustomCheckbox;
