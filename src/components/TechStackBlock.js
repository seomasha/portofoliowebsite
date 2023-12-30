import React from 'react'


function TechStackBlock({height, width, image, subtitle, title, icon, icon2, icon3, icon4, link, link2, link3, link4, link5, link6, icon5, icon6}) {
  return (
    <div className='bg-[#1D1D1D] flex rounded-3xl p-4 mt-auto flex-col justify-between' style={{height: height, width: width}}>
        <div className='flex my-auto justify-evenly text-3xl'>
            <a href={link} target="_" className='text-[#A9A9A9] hover:text-[#a67c00] transition cursor-pointer'>{icon}</a>
            <a href={link2} target="_" className='text-[#A9A9A9] hover:text-[#a67c00] transition cursor-pointer'>{icon2}</a>
            <a href={link3} target="_" className='text-[#A9A9A9] hover:text-[#a67c00] transition cursor-pointer'>{icon3}</a>
            <a href={link4} target="_" className='text-[#A9A9A9] hover:text-[#a67c00] transition cursor-pointer'>{icon4}</a>
            <a href={link5} target="_" className='text-[#A9A9A9] hover:text-[#a67c00] transition cursor-pointer'>{icon5}</a>
            <a href={link6} target="_" className='text-[#A9A9A9] hover:text-[#a67c00] transition cursor-pointer'>{icon6}</a>
        </div>
        <div>
            <h3 className='text-[#A9A9A9] text-sm uppercase'>{subtitle}</h3>
            <h1 className='uppercase text-lg'>{title}</h1>
        </div>
    </div>
  )
}

export default TechStackBlock