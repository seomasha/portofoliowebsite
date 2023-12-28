import React from 'react'

import { VscGithub } from "react-icons/vsc";
import { GoProjectSymlink } from "react-icons/go";

function Project({image, title, description, code, demo}) {
  return (
    <div className='rounded-3xl mt-4 w-96'>
        <img src={image} alt='title' className='h-64 w-full rounded-2xl'></img>
        <h1 className='uppercase text-center text-2xl mt-4'>{title}</h1>
        <p className='w-full text-center text-sm mt-4 text-[#A9A9A9]'>
          {description}
        </p>
        <div className='flex justify-evenly mt-4'>
          <a href={code} target='_' className='uppercase text-[#A9A9A9] text-xl hover:text-[#0096FF] transition flex'><VscGithub className='my-auto mr-2'/>Code</a>
          <a href={demo} target='_' className='uppercase text-[#A9A9A9] text-xl hover:text-[#0096FF] transition flex'><GoProjectSymlink className='my-auto mr-2'/>Live demo</a>
        </div>
    </div>
  )
}

export default Project