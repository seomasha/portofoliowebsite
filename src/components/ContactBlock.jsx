import React from 'react'

import { RxExternalLink } from "react-icons/rx";

function ContactBlock() {
  return (
    <div className='h-[450px] w-[700px] bg-gradient-to-r from-[#232526] to-[#414345] rounded-3xl p-4 justify-between flex flex-col'>
        <div className='flex justify-evenly p-4'>
          <input type='text' placeholder='Your name' className='py-3 px-6 rounded-3xl border-2 outline-none bg-transparent'/>
          <input type='email' placeholder='Your email' className='py-3 px-6 rounded-3xl border-2 outline-none bg-transparent'/>
        </div>
        <textarea className='resize-none h-44 p-2 rounded-3xl border-2 outline-none bg-transparent' placeholder='Your message'/>
        <button className='w-full p-3 border-2 bg-transparent rounded-3xl border-[#a67c00] text-[#a67c00] hover:bg-[#a67c00] hover:text-white transition'>SUBMIT</button>
        <div>
            <h3 className='text-[#A9A9A9] text-sm uppercase'>feel free to</h3>
            <h1 className='uppercase text-lg'>contact me</h1>
        </div>
    </div>
  )
}

export default ContactBlock