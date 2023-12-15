import { useState } from "react";

import Navigation from "./components/Navigation";

import { CiLight, CiDark } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { PiInstagramLogo, PiLinkedinLogo } from "react-icons/pi";
import { FaReact, FaJava, FaNode } from "react-icons/fa";
import yump from './ui/yump.png'
import studium from './ui/logo.png'

function App() {

  const [isClicked, setisClicked] = useState(true);

  function modeHandler() {
    setisClicked(!isClicked);
  }

  return (
    <div className="font-main">
        <Navigation />
        <div className="p-8 flex justify-between">
          <div className="flex space-x-4">
            {isClicked ? <CiLight className="text-2xl cursor-pointer my-auto" onClick={modeHandler}/> : <CiDark className="text-2xl cursor-pointer" onClick={modeHandler}/>}
            <h3 className="text my-auto text-[#A9A9A9]">14:03</h3>
          </div>
          <div className="flex space-x-4">
            <div className="h-2 w-2 rounded-full bg-green-500 my-auto"></div>
            <h3 className="text my-auto text-[#A9A9A9]">Available for new opportunities!</h3>
          </div>
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="bg-profile w-36 h-36 bg-center bg-cover rounded-full">

          </div>
          <h1 className="text-3xl mt-2">Sead Mašetić</h1>
          <h3 className="text-[#A9A9A9] text-lg">IT Student at International Burch University</h3>
          <div className="flex p-3 space-x-8 text-3xl text-[#A9A9A9]">
            <VscGithub className="transition hover:text-black cursor-pointer"/>
            <PiInstagramLogo className="transition hover:text-black cursor-pointer"/>
            <PiLinkedinLogo className="transition hover:text-black cursor-pointer"/>
          </div>
          <div className="flex space-x-6 mt-8 ml-28">
            <div className="text-end text-[#A9A9A9]">
              <h3 className="pb-14">About</h3>
              <h3 className="mt-[295px] pb-10">Tech stack</h3>
              <h3 className="pb-36">Academic journey</h3>
              <h3 className="pb-24">Career path</h3>
              <h3 className="mb-44 pb-96">Projects</h3>
              <h3>Contact me</h3>
            </div>
            <div>
              <p className="w-80 pb-16">
                  I am second year IT student at International Burch University
                  who is looking for new opportunities to gain more knowledge
                  and experience. I would say that I am hard-working, ambitious
                  and passionate. I live in Sarajevo.
                  <br /><br />
                  Currently, my main fields of interest are web and mobile
                  programming, but recently I got very interested in blockchain.
                  <br /><br />
                  My hobbies the gym and reading books. I trained Karate for
                  12 years and I am a second degree black belt and also was
                  a national team member.
              </p>
              <div className="flex text-xl space-x-8 pb-11">
                <FaReact className="cursor-pointer"/>
                <FaReact />
                <FaNode />
                <FaJava />
              </div>
              <div>
                <h1 className="font-bold">2018 - 2022 | GPA: 5.0/5.0</h1>
                <h3 className="text-[#A9A9A9] pb-14">Mixed high school “Gornji Vakuf” - Computer and IT electrical technician</h3>

                <h1 className="font-bold">2022 - 2025</h1>
                <h3 className="text-[#A9A9A9] pb-4">International Burch University - Department of Information Technology</h3>
              </div>
              <div>
                <h1 className="font-bold">2023 -</h1>
                <h3 className="text-[#A9A9A9]">Laboratory demonstrator for the course Programming I</h3>
              </div>
              <div>
                <h1 className="mt-[72px] font-bold">YUMP.IN</h1>
                <img src={yump} alt="" className="h-52 w-96 rounded-xl cursor-pointer"></img>

                <h1 className="mt-[72px] font-bold">STUDIUM</h1>
                <img src={studium} className="h-52 w-96 rounded-xl cursor-pointer" alt=""></img>
              </div>
              <div>
                <div className="flex mt-10 space-x-8">
                  <input type="text" placeholder="Your name" className="border border-black p-3 rounded-full outline-none"></input>
                  <input type="email" placeholder="Your email" className="border border-black p-3 rounded-full outline-none"></input>
                </div>
                <input type="text" placeholder="Your message" className="resize-none border p-1 h-48 w-96 outline-none rounded-2xl border-black mt-6 text"></input>
              </div>
              <div className="text-center border border-black w-10/12 my-8 rounded-full cursor-pointer hover:bg-black hover:text-white transition">
                <button className="p-3">Send message</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
