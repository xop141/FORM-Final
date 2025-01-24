
import React from 'react';
import {motion} from "framer-motion";

const Success = () => {
  return (
     <motion.div
        initial={{opacity: 0, x: 300}}
        animate={{
          opacity: 1,
          x: 0,
      transition:{duration:0.8}
        }}
      >
    <div className='w-[480px] h-max bg-white p-[32px] rounded-[8px]'>
    <div className='w-[416px] h-[129px] flex flex-col justify-between'> 
      <div className='w-[60px] h-[60px] bg-black'></div>
      <p className='font-[600] text-[26px]'>You're All Set 🔥</p>
      <p className='font-[400] text-[18px] text-customgray'>We have received your submission. Thank you! </p>
    </div>
    </div>
    </motion.div>
  );
};

export default Success;
