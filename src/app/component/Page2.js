
import React from 'react';
import HeaderShieet from './HeaderShieet';
import {motion} from "framer-motion";
const Page2 = ({ prevStep, nextStep, handleChange, values, errors, step }) => {
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
    <div className="w-[416px] h-max flex flex-col justify-between">
      <div className="w-full h-fit flex flex-col justify-between gap-[82px] ">
        <div className='flex flex-col gap-[28px]'>
        <HeaderShieet />
        <div className="flex flex-col gap-[12px] ">
          <div className="flex flex-col h-fit justify-between gap-[8px]">
            <label htmlFor="email" className="text-sm font-medium">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className={`h-[44px] rounded-[8px] border ${errors.email ? 'border-red-500 text-red-500' : 'border-gray-300'}`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>
          <div className="flex flex-col gap-[8px] justify-between">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone:
            </label>
            <input
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              className={`h-[44px] rounded-[8px] border ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone}</span>
            )}
          </div>
          {/* Password Field */}
          <div className="flex flex-col h-fit gap-[8px] justify-between">
            <label htmlFor="password" className="text-sm font-medium">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className={`h-[44px] rounded-[8px] border ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}
          </div>
          <div className="flex flex-col h-fit justify-between gap-[8px]">
            <label htmlFor="password2" className="text-sm font-medium">
              Repeat Password:
            </label>
            <input
              type="password"
              name="password2"
              value={values.password2}
              onChange={handleChange}
              className={`h-[44px] rounded-[8px] border ${errors.password2 ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.password2 && (
              <span className="text-red-500 text-sm">{errors.password2}</span>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="h-[44px] w-[128px] border rounded-[12px] hover:bg-gray-100"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          className="h-[44px] w-[280px] bg-black text-white rounded-[12px] hover:bg-gray-800"
        >
         {step}/3 Continue
        </button>
      </div>
    </div>
    </div>
    </div>
    </motion.div>
  );
};
export default Page2;
