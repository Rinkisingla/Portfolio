import React from 'react'
import projects from '../api/project.json'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
 import { FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Project3 = () => {
    const featuredProjects = projects.slice(0, 3);
  return (
    <section className='py-16 md:px-28 px-8'>
      <div>
        <h1 className='flex items-center justify-center text-4xl  font-bold  text-white '>Projects</h1>
        <p className=' text-m py-12'>Here are the some of my recent projects. Each projects was carefully crafted with attention to detail , performance and user experience</p>
          <div className="max-w-6xl  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 md:px-6">
             {featuredProjects.map((project, index)=>{
               const{id, title, description, image, tags, github,url}= project;
                return(
                  <div   key ={index} className=" bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center m-6">
                    <div className='w-full max-w-sm aspect-video overflow-hidden rounded-md'>
                      <img src={image} alt ={title} className='w-full h-full object-cover'/>
                    </div>
                    <div className='flex flex-wrap gap-2 py-3'>
                       {tags.map((tag,index)=>{
                      return(
                        <span className="text-xs font-thin rounded-xl bg-gray-500 p-2">{tag}</span>
                      );
                     })}
                      </div>
                    <div>
                      <span className="flex text-xs font-thin items-center justify-center p-2">{title}</span>
                      <p className="text-xs font-thin ">{description}</p>
                     <div className="flex p-2 gap-2 items-center justify-center">
                       <a href={github}><FaGithub /></a>
                      <a href={url}> <FaArrowUpRightFromSquare /></a>
                      </div>
                      </div>

                  </div>
                );

             })}
          </div>
      </div>
             <div className="mt-8 text-center">
        <NavLink
          to="/projects"
          className="inline-block bg-white text-black px-4 py-2 rounded hover:bg-amber-400"
        >
          See More Projects
        </NavLink>
      </div>
    </section>
    
  )
}

export default Project3