import React from 'react';
import HeaderShieet from './HeaderShieet';


const Page2 = ({prevStep, nextStep, handleChange, values }) => {
  return (
    <div className='w-[416px] h-[591px] flex flex-col justify-between'>
      <div className='w-full h-max flex flex-col justify-between gap-[28px]'>
    <HeaderShieet/>
    <div className='flex flex-col gap-[12px]'>
      <div className='flex flex-col h-[68px] justify-between gap-[8px]'>
        email:
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className='h-[44px] rounded-[8px] border'
        />
      </div>
      
      <div className='flex flex-col gap-[8px] justify-between'>
        phone:
        <input
          type="text"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          className='h-[44px] rounded-[8px] border'
        />
      </div>
      <div className='flex flex-col h-[68px] gap-[8px] justify-between'>
        Password:
        <input
          type="text"
          name="password"
          value={values.password}
          onChange={handleChange}
          className='h-[44px] rounded-[8px] border'
        />
      </div>
      <div className='flex flex-col h-[68px] justify-between gap-[8px]'>
        Repeat Password:
        <input
          type="text"
          name="password"
          value={values.password}
          onChange={handleChange}
          className='h-[44px] rounded-[8px] border'
        />
      </div>
      </div>
    
      </div>
      <div className='flex justify-between'>
      <button onClick={prevStep} className='h-[44px] w-[128px] border rounded-[12px]'>  Back </button>
      <button onClick={nextStep} className='h-[44px] w-[280px] bg-black text-white rounded-[12px]' >Continue  </button>
      </div>
     
    </div>
  
  );
};

export default Page2;