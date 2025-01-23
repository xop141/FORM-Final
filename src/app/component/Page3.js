import React from 'react';

const Step3 = ({ nextStep, prevStep, handleChange, values }) => {
  return (

      <div className='flex justify-between'>
      <button onClick={prevStep} className='h-[44px] w-[128px] border rounded-[12px]'>  Back </button>
      <button onClick={nextStep} className='h-[44px] w-[280px] bg-black text-white rounded-[12px]' >Continue  </button>
      </div>
   
  );
};

export default Step3;