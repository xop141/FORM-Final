import React from 'react';
import {motion} from "framer-motion";
import HeaderShieet from './HeaderShieet';
import { useState } from "react";
import Image from 'next/image';
import img from "../component/image.svg";


const Step3 = ({ nextStep, prevStep, handleChange, values,step, errors }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const handleupload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result); 
      };
      reader.readAsDataURL(file); 
    }
    handleChange(event)
  };
  const triggerFileInput = () => {
    document.getElementById("fileInput").click(); 
  };
  const deleteimg =()=>{
    setImagePreview()
    values.profile = ""
  }
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
   
     <div className='flex flex-col gap-[8px]'>
      <p className='text-[14px] font-[600]'>Date of birth </p>
      <input className='h-[44px] w-full' type='date' name="date" value={values.date} onChange={handleChange} /> 
      {errors.date && (
              <span className="text-red-500 text-sm">{errors.date}</span>
            )}
  {errors.date2 && (
              <span className="text-red-500 text-sm">{errors.date2}</span>
            )}
     </div>
     <input type='file'
    id='fileInput'
     accept="image/*"
     name='profile'

     onChange={handleupload}
     className='w-[416px] h-[180px] bg-green-300'
     style={{ display: "none" }}
     />
     { values.profile ? (
     <div>

    
    
     {imagePreview && (
        <div onDoubleClick={deleteimg} className='bg-green-300'>
        
          <img 
            src={imagePreview}
            alt="Preview"
            layout="fill" 
            
          />
            </div>
      )}
      </div>) :(
        <div>
        <div className='w-[416px] h-[180px] flex-col flex items-center justify-center bg-gray-200 rounded-[12px]' onClick={triggerFileInput} >
          <div className='w-[384px] h-[56px] flex flex-col justify-center items-center'>
<div className='w-[28px] h-[28px] rounded-full bg-white flex items-center justify-center' ><Image src={img} alt='img' /></div>
<p className='text-[14px] font-[500]'>Add image</p>
          </div>
       
       
           
        </div>
        {errors.profile && (
          <span className="text-red-500 text-sm">{errors.profile}</span>
        )}
        </div>
      )
    } 
      <div className='flex justify-between'>
      <button onClick={prevStep} className='h-[44px] w-[128px] border rounded-[12px] hover:bg-gray-100'>  Back </button>
      <button onClick={nextStep} className='h-[44px] w-[280px] bg-black text-white rounded-[12px] hover:bg-gray-800' > {step}/3 Continue  </button>
      </div>
   </div>
   </motion.div>
  );
};
export default Step3;
