import React from 'react';
import HeaderShieet from './HeaderShieet';


const Step1 = ({ nextStep, handleChange, values }) => {
  return (
    <div className='w-[416px] h-[591px] flex flex-col justify-between'>
      <div className='w-full h-[385px] flex flex-col justify-between'>
    <HeaderShieet/>
    <div className='flex flex-col gap-[12px]'>
      <div className='flex flex-col h-max justify-between gap-[8px]'>
        First Name:
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          className='h-[44px] rounded-[8px] border'
        />
      </div>
      
      <div className='flex flex-col h-[68px] justify-between gap-[8px]'>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          className='h-[44px] rounded-[8px] border'
        />
        <p>asd</p>
        
      </div>
      <div className='flex flex-col h-[68px] justify-between gap-[8px]'>
        User Name:
        <input
          type="text"
          name="userName"
          value={values.userName}
          onChange={handleChange}
          className='h-[44px] rounded-[8px] border'
        />
      </div>
      </div>
    
      </div>
      <button onClick={nextStep} className='h-[44px] bg-black text-white rounded-[12px]' >Continue</button>
    </div>
  
  );
};

export default Step1;