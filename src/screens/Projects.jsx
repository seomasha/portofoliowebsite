import React, {useRef, useState, useEffect} from 'react'

import { Link } from 'react-router-dom'

import { RxReset } from 'react-icons/rx'

import ProjectBlock from '../components/ProjectBlock'
import projects from '../json/projects.json'

import { motion } from 'framer-motion';

function Projects() {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <div className="bg-[#060606] h-screen w-screen text-white font-main p-4">
        <div>
            <Link to="/"><RxReset className='fixed text-3xl text-[#A9A9A9] hover:text-[#a67c00] cursor-pointer'/></Link>
        </div>
        <motion.div ref={carousel} className="cursor-grab overflow-hidden my-24 lg:my-48 xl:my-48" whileTap={{cursor: "grabbing"}}>
          <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className='flex'>
            {projects.map(project => {
              console.log(project.image)
              return(
                <motion.div className='min-h-[30rem] min-w-[30rem] p-8' key={project.id}>
                    <ProjectBlock 
                      image={project.image}
                      title={project.title}
                      subtitle={project.subtitle}
                      path={project.path}
                    />
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
    </div>
  )
}

export default Projects