import React, {useEffect, useRef} from 'react'

import { Link } from 'react-router-dom';

import profile from '../ui/profile2.png'

import { RxGithubLogo, RxLinkedinLogo, RxInstagramLogo, RxTwitterLogo, RxReset } from "react-icons/rx";

import ProgressBar from '../components/ProgressBar';

import { motion, useInView, useAnimation } from 'framer-motion';

function AboutMe() {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView, mainControls])

    return (
        <div className="bg-[#060606] h-full text-white font-main lg:flex lg:space-x-8 xl:flex xl:space-x-8 md:flex md:space-x-8">
            <div className='p-4'>
                <Link to="/"><RxReset className='fixed text-3xl text-[#A9A9A9] hover:text-[#a67c00] cursor-pointer'/></Link>
            </div>
            <div className='w-5/12 h-full mx-12 mt-4 sm:mx-56'>
                <motion.div className='xl:fixed lg:fixed md:fixed min-w-[300px] bg-gradient-to-r from-[#232526] to-[#414345] h-5/12 w-3/12 text-center rounded-3xl p-3 xl:top-[20%] xl:left-[8%] lg:top-[20%] lg:left-[8%] md:left-[8%] md:top-[20%] '
                initial={{scale: 1.1}}
                animate={{scale: 1}}
                transition={{ type: "spring", stiffness: 100, duration: 1 }}>
                    <img src={profile} className='w-11/12 h-11/12 mx-auto rounded-3xl' alt={profile}/>
                    <h1 className='text-3xl mt-8'>Sead Masetic</h1>
                    <h3 className='text-[#A9A9A9]'>Feel free to contact me</h3>
                    <div className='flex justify-evenly text-2xl text-[#A9A9A9] mt-8'>
                        <Link target="_blank" to="https://www.github.com/seomasha"><RxGithubLogo className='hover:text-[#a67c00] cursor-pointer transition'/></Link>
                        <Link target="_blank" to="https://www.linkedin.com/in/sead-masetic-26871a202/"><RxLinkedinLogo className='hover:text-[#a67c00] cursor-pointer transition'/></Link>
                        <Link target="_blank" to="https://www.instagram.com/sead.masetic/"><RxInstagramLogo className='hover:text-[#a67c00] cursor-pointer transition'/></Link>
                        <Link target="_blank" to="https://www.twitter.com/seadmasetic"><RxTwitterLogo className='hover:text-[#a67c00] cursor-pointer transition'/></Link>
                    </div>
                    <Link to="/"><h1 className="text-[#a67c00] w-10/12 mx-auto text-xl border border-[#a67c00] py-1 px-2 rounded-3xl hover:bg-[#a67c00] hover:text-white transition cursor-pointer mt-4">Open for work</h1></Link>
                </motion.div>
            </div>
            <motion.div className='sm:w-7/12 pb-8'
            ref={ref}
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5, delay: 0.25}}>
                <h1 className='text-xl uppercase mt-16'>About me</h1>
                <p className='sm:w-8/12 mt-4 w-full px-4 sm:p-0'>
                    Hey, I'm <span className='text-[#a67c00]'>Sead Masetic</span>, a 21-year-old navigating my way through the second year of IT at International Burch University. I am passionate about the world of Web and Mobile development. Open to opportunities? Always. I'm all about learning and beefing up my skillset. If you're into tech talks and chasing innovation, you'll find me in the mix. 
                    <br /><br />
                    My primary areas of interest is developing front end web applications using React and adding back end with Node.js. In the future I consider mixing up the back end using Java Spring and see what suits me the best! Recently I got very interested in mobile development so I started developing apps using React Native.
                </p>

                <h1 className='text-xl uppercase mt-16'>Experience</h1>

                <h3 className='mt-8 text-[#A9A9A9] sm:p-0 px-4'>2023 - PRESENT | International Burch University</h3>
                <h3 className='text-lg leading-4 text-[#a67c00] sm:p-0 px-4'>Laboratory demonstrator</h3>
                <p className='mt-4 sm:w-8/12 w-full sm:p-0 px-4'>At the first semester of my second year studies, I was a laboratory demonstrator for first year IT students. I was helping them understand programming fundamentals using Python.</p>

                <h1 className='text-xl uppercase mt-16'>Education</h1>

                <h3 className='mt-8 text-[#A9A9A9] sm:p-0 px-4'>2018 - 2022 | Mixed high school in Gornji Vakuf</h3>
                <h3 className='text-lg leading-4 text-[#a67c00] sm:p-0 px-4'>Computer and IT Electrician</h3>
                <p className='mt-4 sm:w-8/12 sm:p-0 px-4'>I finished my high school studies in my local town. Here I started exploring more about the IT world and fell in love with web development. I was awarded with "The student of the generation" award because I had a GPA of 5.0/5.0 through all 4 years of my studies.</p>

                <h3 className='mt-8 text-[#A9A9A9] sm:p-0 px-4'>2022 - PRESENT | International Burch University</h3>
                <h3 className='text-lg leading-4 text-[#a67c00] sm:p-0 px-4'>Bachelor of Information Technologies</h3>
                <p className='mt-4 sm:w-8/12 sm:p-0 px-4'>At the moment, I am a undergraduate student at International Burch University and I just finished my third semester of studies. I enjoy studying here because the professors at the Univeristy are keeping up to date with the latest trends in the IT world.</p>

                <h1 className='text-xl uppercase mt-16'>Skills</h1>
                <div className='grid grid-row-cols grid-row-2 my-8 text-center'>

                    <h1 className='sm:w-8/12 text-lg'>Java</h1>
                    <ProgressBar bgcolor={"#a67c00"} completed={70} />

                    <h1 className='sm:w-8/12 mt-4 text-lg'>React</h1>
                    <ProgressBar bgcolor={"#a67c00"} completed={90} />

                    <h1 className='sm:w-8/12 mt-4 text-lg'>React Native</h1>
                    <ProgressBar bgcolor={"#a67c00"} completed={90} />

                    <h1 className='sm:w-8/12 mt-4 text-lg'>SQL</h1>
                    <ProgressBar bgcolor={"#a67c00"} completed={80} />

                    <h1 className='sm:w-8/12 mt-4 text-lg'>Python</h1>
                    <ProgressBar bgcolor={"#a67c00"} completed={70} />

                    <h1 className='sm:w-8/12 mt-4 text-lg'>CSS</h1>
                    <ProgressBar bgcolor={"#a67c00"} completed={90} />

                    <h1 className='sm:w-8/12 mt-4 text-lg'>Node.js</h1>
                    <ProgressBar bgcolor={"#a67c00"} completed={70} />

                    <h1 className='sm:w-8/12 mt-4 text-lg'>Java Spring</h1>
                    <ProgressBar bgcolor={"#a67c00"} completed={40} />
                </div>
                <h1 className='text-xl uppercase mt-16'>Awards, certifications, courses</h1>

                <h3 className='mt-8 text-[#A9A9A9] sm:p-0 px-4'>2019 | Mixed high school in Gornji Vakuf</h3>
                <h3 className='text-lg leading-4 text-[#a67c00] sm:p-0 px-4'>Student of generation award</h3>

                <h3 className='mt-8 text-[#A9A9A9] sm:p-0 px-4'>2023 | GOOD HACKathon</h3>
                <h3 className='text-lg leading-4 text-[#a67c00] sm:p-0 px-4'>Developed a mobile application on the theme "Modern ways of studying"</h3>

                <h3 className='mt-8 text-[#A9A9A9] sm:p-0 px-4'>2021 | The Web Developer Bootcamp</h3>
                <h3 className='text-lg leading-4 text-[#a67c00] sm:p-0 px-4'>Upgraded my previous knowledge about web development</h3>

                <h3 className='mt-8 text-[#A9A9A9] sm:p-0 px-4'>2023 | React Native - The Practical Guide</h3>
                <h3 className='text-lg leading-4 text-[#a67c00] sm:p-0 px-4'>Started getting interested in mobile development, so I followed this course to learn more about.</h3>

                <h3 className='mt-8 text-[#A9A9A9] sm:p-0 px-4'>2024 | Node.js, Express, MongoDB & More: The Complete Bootcamp</h3>
                <h3 className='text-lg leading-4 text-[#a67c00] sm:p-0 px-4'>At the moment, expanding my knowledge about Back End development</h3>
            </motion.div>
        </div>
  )
}

export default AboutMe