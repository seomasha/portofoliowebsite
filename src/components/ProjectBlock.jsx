import React from 'react'

import { Link } from 'react-router-dom';

import { RxExternalLink } from "react-icons/rx";

import { motion } from 'framer-motion';

function ProjectBlock({image, title, subtitle, path}) {
  return (
    <motion.div className='bg-gradient-to-r from-[#232526] to-[#414345] h-full rounded-3xl p-3 mx-auto'
    initial={{scale: 1.1}}
    animate={{scale: 1}}
    transition={{ type: "spring", stiffness: 100, duration: 1 }}>
        <img src={image} className='mx-auto rounded-3xl p-3 pointer-events-none' alt={title}/>
        <div className='mx-4'>
            <h3 className='text-[#A9A9A9] uppercase'>{subtitle}</h3>
            <div className='flex justify-between'>
                <h1 className='text-xl uppercase'>{title}</h1>
                <Link to={path}><RxExternalLink className='my-auto text-lg text-[#A9A9A9] hover:text-[#a67c00] transition cursor-pointer'/></Link>
            </div>
        </div>
    </motion.div>
  )
}

export default ProjectBlock