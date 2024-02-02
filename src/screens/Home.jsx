import React from 'react'

import Header from '../components/Header'
import ProfileBlock from '../components/ProfileBlock'
import NavBlock from "../components/NavBlock";
import DownloadBlock from "../components/DownloadBlock";
import IconBlock from "../components/IconBlock";
import ContactBlock from "../components/ContactBlock";
import TechItem from "../components/TechItem";

import profile from '../ui/profile.png';
import credentials from '../ui/credentials.png';
import projects from '../ui/projects.png'
import cv from '../ui/cv.png'

import { RxGithubLogo, RxLinkedinLogo, RxInstagramLogo, RxTwitterLogo } from "react-icons/rx";
import { FaReact, FaJava } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { SiSolidity, SiMysql } from "react-icons/si";
import TechStackBlock from "../components/TechStackBlock";

function Home() {
  return (
    <div className="bg-[#060606] h-full text-white font-main ">
      <Header />
      <div className="flex justify-center space-x-4">
        <ProfileBlock 
        height={300} 
        width={600} 
        image={profile}
        subtitle="Who am I?"
        title="Sead Masetic"
        description="Second year IT student at International Burch University who is passionate about Web and Mobile development"/>

        <NavBlock 
        height={250} 
        width={250}
        image={credentials}
        subtitle="Find more"
        title="About me"
        path="/aboutme"/>


        <NavBlock 
        height={250} 
        width={250}
        image={projects}
        subtitle="Explore"
        title="my projects"
        path="/projects"/>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
          <DownloadBlock 
          height={250} 
          width={250}
          image={cv}
          subtitle="download"
          title="my cv"/>

          <TechStackBlock 
          height={250} 
          width={600}
          icon={<TechItem icon={<FaReact />} label="React & React native"/>}
          icon2={<TechItem icon={<FaJava />} label="Java & Java Spring"/>}
          icon3={<TechItem icon={<FaNode />} label="Node.js"/>}
          icon4={<TechItem icon={<DiMongodb />} label="MongoDB"/>}
          icon5={<TechItem icon={<SiSolidity />} label="Solidity"/>}
          icon6={<TechItem icon={<SiMysql />} label="MySQL"/>}
          subtitle="This is my"
          title="Tech stack"/>

          <IconBlock 
          height={250} 
          width={250}
          icon={<RxGithubLogo />}
          icon2={<RxLinkedinLogo />}
          icon3={<RxInstagramLogo />}
          icon4={<RxTwitterLogo />}
          link="https://www.github.com/seomasha"
          link2="https://www.linkedin.com/in/sead-masetic-26871a202/"
          link3="https://www.instagram.com/sead.masetic/"
          link4="https://www.twitter.com/seadmasetic"
          subtitle="Explore"
          title="my socials"/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
          <ContactBlock />
      </div>
      <h1 className="text-center p-4">Copyright © 2024. All rights are reserved</h1>
    </div>
  )
}

export default Home