import React from 'react'

import { Link } from 'react-router-dom'

import { RxReset } from 'react-icons/rx'

import ProjectBlock from '../components/ProjectBlock'
import profile from '../ui/profile.png'

function Projects() {
  return (
    <div className="bg-[#060606] h-full text-white font-main p-4">
        <div>
            <Link to="/"><RxReset className='text-3xl text-[#A9A9A9] hover:text-[#a67c00] cursor-pointer'/></Link>
        </div>
        <div className='grid grid-cols-3 mx-auto gap-8 my-4'>
            <ProjectBlock 
            image={profile}
            subtitle="Mobile application"
            title="Guess my number"
            />
            <ProjectBlock 
            image={profile}
            subtitle="Mobile application"
            title="Guess my number"
            />
            <ProjectBlock 
            image={profile}
            subtitle="Mobile application"
            title="Guess my number"
            />
            <ProjectBlock 
            image={profile}
            subtitle="Mobile application"
            title="Guess my number"
            />
            <ProjectBlock 
            image={profile}
            subtitle="Mobile application"
            title="Guess my number"
            />
            <ProjectBlock 
            image={profile}
            subtitle="Mobile application"
            title="Guess my number"
            />
        </div>
    </div>
  )
}

export default Projects