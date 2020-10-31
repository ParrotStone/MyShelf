import React from 'react';

const ScrollTop = (props) => {
  const handleClick = () => {
    console.log('clicked');
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className='fixed bottom-0 right-0 py-2 px-4 rounded-xl bg-blue-700 font-bold text-white transition-all duration-300 ease-out hover:bg-blue-900'
      onClick={handleClick}
    >
      Scroll to Top
    </button>
  );
};

export default ScrollTop;
