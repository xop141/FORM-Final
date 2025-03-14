import React from 'react'
import Logo from "../component/logo.svg";
import Image from 'next/image'


const HeaderShieet = () => {
  return (
    <div className='w-full h-max flex flex-col gap-[8px]'>
      <Image src={Logo} alt='logo'/>
        <h1 className='text-[26px] h-[31px] font-600 '>Join Us! 😎</h1>
        <h1 className='text-[18px] h-[22px] font-400 text-customgray '>Please provide all current information accurately.</h1>
   
      
      </div>    
  )
}
export default HeaderShieet