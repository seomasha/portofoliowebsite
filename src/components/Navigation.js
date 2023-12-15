import React from 'react'

import { PiUserCircleLight, PiGraduationCapThin, PiBriefcaseLight, PiPhoneCallLight, PiCopyLight, PiNewspaperClippingLight } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";
import { BsGraphUpArrow } from "react-icons/bs";

function Navigation() {
  return (
    <div className='fixed p-4 top-1/2'>
        <div className='border p-4 border-black rounded-2xl text-xl space-y-4 text-[#A9A9A9]'>
            <PiUserCircleLight className='hover:text-black transition cursor-pointer'/>
            <SlSettings className='hover:text-black transition cursor-pointer'/>
            <PiGraduationCapThin className='hover:text-black transition cursor-pointer'/>
            <PiBriefcaseLight className='hover:text-black transition cursor-pointer'/>
            <BsGraphUpArrow className='hover:text-black transition cursor-pointer'/>
            <PiPhoneCallLight className='hover:text-black transition cursor-pointer'/>
            <PiNewspaperClippingLight className='hover:text-black transition cursor-pointer'/>
            <PiCopyLight className='hover:text-black transition cursor-pointer'/>
        </div>
    </div>
  )
}

export default Navigation