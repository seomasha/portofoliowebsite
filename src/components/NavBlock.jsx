import { Link } from 'react-router-dom';

import React from 'react'

import { RxExternalLink } from "react-icons/rx";

import { motion } from 'framer-motion';

function NavBlock({image, subtitle, title, button, path}) {
  return (
    <motion.div className='bg-gradient-to-r from-[#232526] to-[#414345] flex rounded-3xl p-4 mt-auto flex-col h-[200px] w-[200px] max-h-[250px] max-w-[250px] md:h-[250px] md:w-[250px]'
    initial={{scale: 1.1}}
    animate={{scale: 1}}
    transition={{ type: "spring", stiffness: 100 }}>
        <img src={image} className='h-[50px] w-[50px] md:h-[100px] md:w-[100px] my-auto mx-auto' alt={title}/>
        <h3 className='text-[#A9A9A9] text-[8px] md:text-sm uppercase'>{subtitle}</h3>
        <div className='flex justify-between'>
            <h1 className='uppercase text-xs md:text-lg'>{title}</h1>
            <Link to={path}><RxExternalLink className='my-auto text-lg text-[#A9A9A9] hover:text-[#a67c00] transition cursor-pointer'/></Link>
        </div>
    </motion.div>
  )
}

export default NavBlock