import React from 'react';
import { FaCheck } from 'react-icons/fa';
import '../../styles/progressCirclesStyles.css';

import generateArrFromNum from '../../utils/generateArrFromNum';

const ProgressCircles = ({ currentStep, stepsNum, handleProgressChange }) => {
  const stepsArr = generateArrFromNum(stepsNum);

  return (
    <>
      <div className='progress-wrapper flex justify-content m-auto text-primary'>
        {stepsArr.map((step) => (
          <span
            key={step}
            onClick={handleProgressChange}
            className={`progress-element transition-all duration-500 ease-out ${
              currentStep >= step ? 'current-step' : ''
            }`}
            id={step}
          >
            <FaCheck />
          </span>
        ))}
      </div>
    </>
  );
};

export default ProgressCircles;
