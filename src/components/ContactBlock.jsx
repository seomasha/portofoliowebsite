import React from 'react'

import { motion } from 'framer-motion'

function ContactBlock() {
  return (
    <motion.div className='h-[450px] w-[700px] bg-gradient-to-r from-[#232526] to-[#414345] rounded-3xl p-4 justify-between flex flex-col'
    initial={{scale: 1.1}}
    animate={{scale: 1}}
    transition={{ type: "spring", stiffness: 100, duration: 1 }}>
        <form action="https://formsubmit.co/maseticsead@gmail.com" method="POST">
          <input type='hidden' name='_subject' value="New email!" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://seadmasetic.com/thankyou" />
          <div className='flex justify-evenly p-4'>
            <input type='text' name="name" placeholder='Your name' className='py-3 px-6 rounded-3xl border-2 outline-none bg-transparent border-[#A9A9A9]' required/>
            <input type='email' name='mail' placeholder='Your email' className='py-3 px-6 rounded-3xl border-2 outline-none bg-transparent border-[#A9A9A9]' required/>
          </div>
          <textarea name='message' className='w-full mt-8 mb-2 resize-none h-44 p-2 rounded-3xl border-2 outline-none bg-transparent border-[#A9A9A9]' placeholder='Your message'/>
          <button type="submit" className='w-full p-3 border-2 bg-transparent rounded-3xl border-[#a67c00] text-[#a67c00] hover:bg-[#a67c00] hover:text-white transition'>SUBMIT</button>
        </form>
        <div>
            <h3 className='text-[#A9A9A9] text-sm uppercase'>feel free to</h3>
            <h1 className='uppercase text-lg'>contact me</h1>
        </div>
    </motion.div>
  )
}

export default ContactBlock