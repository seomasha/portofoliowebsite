import React from 'react'

import { RxDownload } from "react-icons/rx";

function DownloadBlock({height, width, image, subtitle, title, icon, button}) {
  return (
    <div className='bg-gradient-to-r from-[#232526] to-[#414345] flex rounded-3xl p-4 mt-auto flex-col' style={{height: height, width: width}}>
        <img src={image} className='h-[100px] w-[100px] my-auto mx-auto' alt={title}/>
        <h3 className='text-[#A9A9A9] text-sm uppercase'>{subtitle}</h3>
        <div className='flex justify-between'>
            <h1 className='uppercase text-lg'>{title}</h1>
            <RxDownload className='my-auto text-lg text-[#A9A9A9] hover:text-[#a67c00] transition cursor-pointer'/>
        </div>
    </div>
  )
}

export default DownloadBlock;