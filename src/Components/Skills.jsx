import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaPhp, FaWordpress, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMysql, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-300" /> },
  { name: 'PHP', icon: <FaPhp className="text-indigo-500" /> },
  { name: 'WordPress', icon: <FaWordpress className="text-blue-400" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white" /> },
];

const Skills = () => {
  return (
    <section className="w-full py-16 md:px-28 bg-[#1e1e1e] text-white text-center">
      <h2 className="text-4xl font-bold ">My Skills</h2>
      <p className="text-m py-12">I am a skilled and passionate full-stack web developer with experience in building responsive, user-friendly, and visually engaging websites. I have strong expertise in HTML, CSS, JavaScript, React, WordPress, and MongoDB, and I focus on delivering high-quality digital experiences through clean, efficient code. </p>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-amber-400 hover:scale-105 duration-300 flex flex-col items-center justify-center"
          >
            <div className="text-5xl mb-4">{skill.icon}</div>
            <p className="text-xl">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
