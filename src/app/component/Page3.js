import React from 'react';
import {motion} from "framer-motion";
import HeaderShieet from './HeaderShieet';
const Step3 = ({ nextStep, prevStep, handleChange, values,step }) => {
  return (
    <motion.div
    initial={{opacity: 0, x: 300}}
    animate={{
      opacity: 1,
      x: 0,
  transition:{duration:0.8}
    }}
  >
    <div className='w-[480px] h-[655px] bg-white p-[32px] rounded-[8px] flex flex-col justify-between'>
      <HeaderShieet/>
      <div className='flex justify-between'>
      <button onClick={prevStep} className='h-[44px] w-[128px] border rounded-[12px] hover:bg-gray-100'>  Back </button>
      <button onClick={nextStep} className='h-[44px] w-[280px] bg-black text-white rounded-[12px] hover:bg-gray-800' > {step}/3 Continue  </button>
      </div>
   </div>
   </motion.div>
  );
};
export default Step3;