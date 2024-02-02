import React from 'react'

import { RxDownload } from "react-icons/rx";

import { motion } from 'framer-motion';

function DownloadBlock({image, subtitle, title, icon, button}) {
  return (
    <motion.div className='bg-gradient-to-r from-[#232526] to-[#414345] flex rounded-3xl p-4 flex-col md:h-[250px] md:w-[250px] mb-auto'
    initial={{scale: 1.1}}
    animate={{scale: 1}}
    transition={{ type: "spring", stiffness: 100, duration: 1 }}>
        <img src={image} className='h-[100px] w-[100px] my-auto mx-auto' alt={title}/>
        <h3 className='text-[#A9A9A9] text-sm uppercase'>{subtitle}</h3>
        <div className='flex justify-between'>
            <h1 className='uppercase text-lg'>{title}</h1>
            <a href={require("../assets/Sead Mašetić.pdf")} download="Sead Mašetić.pdf"><RxDownload className='my-auto text-lg text-[#A9A9A9] hover:text-[#a67c00] transition cursor-pointer'/></a>
        </div>
    </motion.div>
  )
}

export default DownloadBlock;