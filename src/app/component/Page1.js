
import React from 'react';
import HeaderShieet from './HeaderShieet';
import { motion } from "motion/react"
const Step1 = ({ nextStep, handleChange, values, errors, step }) => {
  return (
    <div className='w-[480px] h-[655px] bg-white p-[32px] rounded-[8px]'>
    <div className="w-[416px] h-[591px] flex flex-col justify-between">
      <div className="w-full h-fit flex flex-col justify-between gap-[28px]">
        <HeaderShieet />
        <div className="flex flex-col gap-[12px]">
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="firstName" className="text-sm font-medium">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              className={`h-[44px] rounded-[8px] border ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">{errors.firstName}</span>
            )}
          </div>
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="lastName" className="text-sm font-medium">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              className={`h-[44px] rounded-[8px] border ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">{errors.lastName}</span>
            )}
          </div>
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="userName" className="text-sm font-medium">
              User Name:
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={values.userName}
              onChange={handleChange}
              className={`h-[44px] rounded-[8px] border ${
                errors.userName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.userName && (
              <span className="text-red-500 text-sm">{errors.userName}</span>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={nextStep}
        className="h-[44px] bg-black text-white rounded-[12px] hover:bg-gray-800"
      >
        {step}/3 Continue
      </button>
    </div>
    </div>
  );
};
export default Step1;
