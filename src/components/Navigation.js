import React from 'react'

import { PiUserCircleLight, PiGraduationCapThin, PiBriefcaseLight, PiPhoneCallLight, PiCopyLight, PiNewspaperClippingLight } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";
import { BsGraphUpArrow } from "react-icons/bs";

function Navigation() {
  return (
    <div className='fixed p-4 top-1/2'>
        <div className='border p-4 border-[#0096FF] rounded-2xl text-xl space-y-4 text-[#A9A9A9]'>
            <PiUserCircleLight className='hover:text-[#0096FF] transition cursor-pointer'/>
            <SlSettings className='hover:text-[#0096FF] transition cursor-pointer'/>
            <PiGraduationCapThin className='hover:text-[#0096FF] transition cursor-pointer'/>
            <PiBriefcaseLight className='hover:text-[#0096FF] transition cursor-pointer'/>
            <BsGraphUpArrow className='hover:text-[#0096FF] transition cursor-pointer'/>
            <PiPhoneCallLight className='hover:text-[#0096FF] transition cursor-pointer'/>
            <PiNewspaperClippingLight className='hover:text-[#0096FF] transition cursor-pointer'/>
            <PiCopyLight className='hover:text-[#0096FF] transition cursor-pointer'/>
        </div>
    </div>
  )
}

export default Navigation