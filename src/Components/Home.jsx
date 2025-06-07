import React from 'react'
import hero from '/assets/hero.png';

import { NavLink } from 'react-router-dom';
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import Skills from './Skills';
import Project from './Project3';
const Home = () => {
  return (
    <>
     <section className="relative h-screen w-full bg-[#1e1e1e] overflow-hidden flex items-center justify-center px-6 md:hidden">
        {/* Background image */}
        <img
          src={hero}
          alt="Hero"
          className="absolute top-[10%] left-0 w-full h-[75%] object-cover opacity-100"
        />

        {/* Text on top */}
        <div className="relative z-10 text-center text-white max-w-md">
          <p className="text-lg text-white">Hello,</p>
          <h1 className="text-4xl font-bold">
            I’m <span className="text-yellow-400">Rinki</span>
          </h1>
          <h2 className="text-2xl font-semibold mt-2">Software Developer</h2>
          <p className="mt-4 text-sm text-white">
            I am a skilled software developer with experience in creating visually appealing and user-friendly websites.
          </p>
          <NavLink to="/Contact">
            <button className="mt-6 inline-flex items-center gap-2 bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-yellow-300 transition">
              <PiSuitcaseSimpleFill className="text-xl" />
              Hire Me
            </button>
          </NavLink>
        </div>
      </section>

      {/* ----- ✅ Desktop View (Side by side) ----- */}
      <section className="hidden md:flex relative w-full overflow-hidden h-[calc(100vh-7rem)] mx-auto pt-[6rem] md:px-28">
        <div className="h-full w-3/4 p-8 text-5xl font-bold flex flex-col justify-center leading-[5rem] text-white">
          <span className="text-3xl font-[100]">Hello<br /></span>
          <span> I am <span className="text-amber-400"> Rinki</span><br /></span>
          <span>Software developer<br /></span>
          <p className="text-2xl font-[100]">
            I am Skilled Software developer with experience in creating visually appealing and user friendly website
          </p>
          <NavLink to="/Contact">
            <button className="text-center bg-white rounded-xl px-2.5 pt-1.5 text-black flex text-xl mt-[10px]">
              <PiSuitcaseSimpleFill className="px-1.5 text-4xl" /> Hire Me
            </button>
          </NavLink>
        </div>

        <div>
          <img src={hero} alt="Main Image" className="h-full object-cover z-[-1] top-[4rem] right-0" />
        </div>
      </section>
     <Skills/>
     <Project/>
    </>

  )
}

export default Home