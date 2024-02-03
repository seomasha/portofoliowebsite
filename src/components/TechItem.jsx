import React, {useState} from 'react'

function TechItem({icon, label}) {

  const [isHovered, setHovered] = useState(false);

  return (

    <div
      className='relative'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span>{icon}</span>
      {isHovered && <h1 className="text-[8px] md:text-sm absolute leading-3 w-12">{label}</h1>}
    </div>
  )
};


export default TechItem