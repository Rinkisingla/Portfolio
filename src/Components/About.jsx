import React, { useState, useRef } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const aboutSections = [
  {
    title: 'Education',
    content: (
      <>
        <p><strong>MCA</strong> — Panjab University (2021–2024), 78.2%</p>
        <p><strong>BCA</strong> — MCM DAV College (2018–2021), 79.4%</p>
      </>
    )
  },
  {
    title: 'Experience',
    content: (
      <>
        <p><strong>Software Developer</strong> at Cybertron Technologies (Feb 2024 – Present)</p>
        <ul className="list-disc ml-6">
          <li>Developed Drugmaker Tracker & Expert Directory</li>
          <li>Enhanced UX for “Ability Clinic” platform</li>
        </ul>
        <p className="mt-2"><strong>Frontend/WordPress Developer</strong> — 1 year</p>
      </>
    )
  },
  {
    title: 'Certifications',
    content: (
      <>
        <p>✅ SQL Programming Essentials – Udemy</p>
        <p>✅ OOPs in C++ – Great Learning</p>
      </>
    )
  },
  {
    title: 'Early Life',
    content: (
      <>
        <p>Started building projects in college; secured 2nd place in a Website Development competition at Panjab University.</p>
      </>
    )
  }
];

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-1 space-y-6">
          <h2 className="flex items-center justify-center text-4xl  font-bold  text-white">About Me</h2>
          <p className="text-md">
            I’m a passionate Software Developer skilled in DSA and full-stack development. I love solving real-world problems with efficient, scalable, and user-focused applications.
          </p> 
          <div className="relative flex justify-center items-center h-40 mt-12">
            <button className="w-32 h-32 rounded-full bg-amber-400 text-white font-semibold shadow-lg hover:bg-amber-500 transition-all z-10 absolute left-1/2 transform -translate-x-[80%] flex items-center justify-center text-center leading-tight px-2">
              Contact<br/> Me
            </button>
            <button className="w-32 h-32 rounded-full bg-gray-600 text-white font-semibold shadow-xl hover:bg-gray-500 transition-all z-20 absolute left-1/2 transform -translate-x-[20%] flex items-center justify-center text-center leading-tight px-2">
              Hire Me
            </button>
          </div>
        </div>       
        <div className="md:col-span-2 relative" ref={containerRef}>
          <div className="w-1 bg-amber-300 absolute top-4 bottom-0 left-3 z-0"></div>
          <div className="space-y-10 relative z-10">
            {aboutSections.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="flex relative">
                  <div className="flex flex-col items-center w-6 relative mr-6" style={{ minWidth: '1.5rem' }}>
                    <div
                      className="w-4 h-4 rounded-full bg-white border-4 border-amber-500"
                      style={{ position: 'relative', left: '43%', transform: 'translateX(-50%)' }}
                    />
                  </div>
                  <div className="flex-1 border border-gray-300 rounded-md shadow">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex justify-between items-center px-5 py-3 font-semibold bg-gray-800 text-white hover:bg-gray-600"
                    >
                      <span>{item.title}</span>
                      <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{ maxHeight: isOpen ? '1000px' : 0 }}
                    >
                      <div className="p-4 bg-white text-gray-700">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
