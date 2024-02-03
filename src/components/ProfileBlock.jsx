import React from 'react'

import { motion } from 'framer-motion'

function Block({image, subtitle, title, description}) {
  return (
    <motion.div className='bg-gradient-to-r from-[#232526] to-[#414345] flex rounded-3xl p-3 max-h-[300px] max-w-[600px] lg:mr-2'
    initial={{scale: 1.1}}
    animate={{scale: 1}}
    transition={{ type: "spring", stiffness: 100, duration: 1 }}>
        <img alt={title} src={image} className='min-h-[150px] min-w-[150px] p-3 rounded-3xl my-auto'/>
        <div className='my-auto'>
            <h3 className='uppercase text-[#A9A9A9] text-sm mt-2 md:mt-0'>{subtitle}</h3>
            <h1 className='text-xl uppercase font-bold md:mt-4'>{title}</h1>
            <p className='text-[#A9A9A9] leading-4 md:mt-4 text-xs md:text-base'>{description}</p>
        </div>
    </motion.div>
  )
}

export default Block