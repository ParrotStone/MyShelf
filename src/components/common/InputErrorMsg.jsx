import React from 'react';

const InputErrorMsg = ({ msg }) => {
  return (
    <span className='text-base text-red-600 mt-6'>
      <span role='img' aria-label='cross mark'>
        ❌
      </span>{' '}
      {msg}
    </span>
  );
};

export default InputErrorMsg;
