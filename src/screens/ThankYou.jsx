import React from 'react'

import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

function ThankYou() {
  return (
    <div className='bg-[#060606] h-screen w-full text-white font-main align-middle p-4'>
        <motion.div className='h-[500px] w-[900px] bg-gradient-to-r from-[#232526] to-[#414345] rounded-3xl p-4 mx-auto my-44 flex flex-col justify-evenly'
        initial={{scale: 1.1}}
        animate={{scale: 1}}
        transition={{ type: "spring", stiffness: 100, duration: 1 }}>
            <h1 className='text-8xl p-4 text-center'>Thank you for sending an email</h1>
            <Link to="/"><h1 className='text-center underline cursor-pointer hover:text-[#a67c00] transition'>Return back to home page</h1></Link>
        </motion.div>
    </div>
  )
}

export default ThankYou