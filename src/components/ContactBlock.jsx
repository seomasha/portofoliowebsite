import React from 'react'

import { RxExternalLink, RxSketchLogo } from "react-icons/rx";

function ContactBlock({height, width}) {
  return (
    <div className='bg-gradient-to-r from-[#232526] to-[#414345] flex rounded-3xl p-4 justify-between mx-auto mt-4' style={{height: height, width: width}}>
        <h1 className='text-4xl mt-auto p-3'>Let's work <br /><span className='text-[100px] text-[#a67c00] font-bold flex'>together <RxSketchLogo className='ml-4 text-6xl text-[#a67c00]'/></span></h1>
        <RxExternalLink className='mt-auto text-6xl text-[#A9A9A9] hover:text-[#a67c00] transition cursor-pointer'/>
    </div>
  )
}

export default ContactBlock