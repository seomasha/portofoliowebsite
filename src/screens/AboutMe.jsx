import React from 'react'

import { Link } from 'react-router-dom';

import profile from '../ui/profile2.png'

import { RxGithubLogo, RxLinkedinLogo, RxInstagramLogo, RxTwitterLogo, RxReset } from "react-icons/rx";

import ProgressBar from '../components/ProgressBar';

function AboutMe() {

    return (
        <div className="bg-[#060606] h-full text-white font-main flex">
            <div className='p-4'>
                <Link to="/"><RxReset className='text-3xl text-[#A9A9A9] hover:text-[#a67c00] cursor-pointer'/></Link>
            </div>
            <div className='w-5/12 h-full'>
                <div className='fixed bg-gradient-to-r from-[#232526] to-[#414345] h-5/12 w-3/12 text-center rounded-3xl p-3 top-[20%] left-[8%]'>
                    <img src={profile} className='w-3/4 h-3/4 mx-auto rounded-3xl' alt={profile}/>
                    <h1 className='text-3xl mt-8'>Sead Masetic</h1>
                    <h3 className='text-[#A9A9A9]'>Feel free to contact me</h3>
                    <div className='flex justify-evenly text-2xl text-[#A9A9A9] mt-8'>
                        <RxGithubLogo className='hover:text-[#a67c00] cursor-pointer transition'/>
                        <RxInstagramLogo className='hover:text-[#a67c00] cursor-pointer transition'/>
                        <RxLinkedinLogo className='hover:text-[#a67c00] cursor-pointer transition'/>
                        <RxTwitterLogo className='hover:text-[#a67c00] cursor-pointer transition'/>
                    </div>
                    <h1 className="text-[#a67c00] w-10/12 mx-auto text-xl border border-[#a67c00] py-1 px-2 rounded-3xl hover:bg-[#a67c00] hover:text-black transition cursor-pointer mt-4">Let's talk</h1>
                </div>
            </div>
            <div className='w-7/12 pb-8'>
                <h1 className='text-xl uppercase mt-16'>About me</h1>
                <p className='w-8/12 mt-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum laudantium, dicta maxime cumque impedit reiciendis numquam id fuga natus, exercitationem repellendus corporis dignissimos, voluptas facere fugiat recusandae eius nemo!
                    <br /><br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut distinctio nisi cum. Iste pariatur alias minima culpa consequatur ipsam eum molestiae similique dicta doloribus esse sint vero dolorem, repudiandae sit?
                </p>

                <h1 className='text-xl uppercase mt-16'>Experience</h1>

                <h3 className='mt-8 text-[#A9A9A9]'>2023 - PRESENT | International Burch University</h3>
                <h3 className='text-lg leading-4 text-[#a67c00]'>Laboratory demonstrator</h3>
                <p className='mt-4 w-8/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis saepe minima atque neque, perspiciatis beatae dolorum facilis! At assumenda eligendi in, ducimus, tenetur amet vitae maiores quo, esse quas a.</p>

                <h1 className='text-xl uppercase mt-16'>Education</h1>

                <h3 className='mt-8 text-[#A9A9A9]'>2018 - 2022 | Mixed high school in Gornji Vakuf</h3>
                <h3 className='text-lg leading-4 text-[#a67c00]'>Computer and IT Electrician</h3>
                <p className='mt-4 w-8/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis saepe minima atque neque, perspiciatis beatae dolorum facilis! At assumenda eligendi in, ducimus, tenetur amet vitae maiores quo, esse quas a.</p>

                <h3 className='mt-8 text-[#A9A9A9]'>2022 - PRESENT | International Burch University</h3>
                <h3 className='text-lg leading-4 text-[#a67c00]'>Bachelor of Information Technologies</h3>
                <p className='mt-4 w-8/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis saepe minima atque neque, perspiciatis beatae dolorum facilis! At assumenda eligendi in, ducimus, tenetur amet vitae maiores quo, esse quas a.</p>

                <h1 className='text-xl uppercase mt-16'>Skills</h1>
                <div className='grid grid-row-cols grid-row-2 my-8 text-center'>

                    <h1 className='w-8/12 text-lg'>Java</h1>
                    <ProgressBar bgcolor={"#a67c00"} completed={33} />

                    <h1 className='w-8/12 mt-4 text-lg'>React</h1>
                    <ProgressBar bgcolor={"#a67c00"} completed={33} />

                    <h1 className='w-8/12 mt-4 text-lg'>React</h1>
                    <ProgressBar bgcolor={"#a67c00"} completed={33} />

                    <h1 className='w-8/12 mt-4 text-lg'>React</h1>
                    <ProgressBar bgcolor={"#a67c00"} completed={33} />

                    <h1 className='w-8/12 mt-4 text-lg'>React</h1>
                    <ProgressBar bgcolor={"#a67c00"} completed={33} />

                    <h1 className='w-8/12 mt-4 text-lg'>React</h1>
                    <ProgressBar bgcolor={"#a67c00"} completed={33} />

                    <h1 className='w-8/12 mt-4 text-lg'>React</h1>
                    <ProgressBar bgcolor={"#a67c00"} completed={33} />

                    <h1 className='w-8/12 mt-4 text-lg'>React</h1>
                    <ProgressBar bgcolor={"#a67c00"} completed={33} />
                </div>
                <h1 className='text-xl uppercase mt-16'>Awards, certifications, courses</h1>

                <h3 className='mt-8 text-[#A9A9A9]'>2023 - PRESENT | International Burch University</h3>
                <h3 className='text-lg leading-4 text-[#a67c00]'>Laboratory demonstrator</h3>

                <h3 className='mt-8 text-[#A9A9A9]'>2023 - PRESENT | International Burch University</h3>
                <h3 className='text-lg leading-4 text-[#a67c00]'>Laboratory demonstrator</h3>
            </div>
        </div>
  )
}

export default AboutMe