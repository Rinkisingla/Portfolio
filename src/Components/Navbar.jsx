import React, { useState } from 'react';
import logo from '/assets/logo.png';
import { NavLink } from 'react-router-dom';
import { FiAlignJustify, FiX } from 'react-icons/fi';
import { RiDownload2Line } from 'react-icons/ri';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'My_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClass = ({ isActive }) =>
    `hover:pb-1.5 hover:border-b-[3px] hover:border-yellow-500 ${
      isActive ? 'text-yellow-400 font-semibold' : ''
    }`;

  return (
    <nav className="h-24 bg-black text-white  w-full z-50 shadow-md sticky top-0 ">
      <div className="w-full flex justify-between items-center md:px-28 px-6 h-full">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-14 w-14 rounded-3xl" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/About" className={navLinkClass}>About</NavLink></li>
          <li><NavLink to="/Projects" className={navLinkClass}>Projects</NavLink></li>
          <li><NavLink to="/Contact" className={navLinkClass}>Contact</NavLink></li>
        </ul>

        {/* Resume Button */}
        <div className="hidden md:flex">
          <button
            onClick={handleDownload}
            className="flex items-center gap-1 bg-white text-black px-3 py-2 rounded-lg hover:bg-yellow-300 transition"
          >
            <RiDownload2Line className="text-xl" />
            Download Resume
          </button>
        </div>

        {/* Hamburger */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiAlignJustify />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4 text-sm font-medium flex flex-col items-center justify-center">
          <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/About" className={navLinkClass} onClick={toggleMenu}>About</NavLink>
          <NavLink to="/Projects" className={navLinkClass} onClick={toggleMenu}>Projects</NavLink>
          <NavLink to="/Contact" className={navLinkClass} onClick={toggleMenu}>Contact</NavLink>
          <button
            onClick={() => {
              handleDownload();
              toggleMenu();
            }}
            className="flex items-center gap-1 bg-white text-black px-3 py-2 rounded-lg hover:bg-yellow-300 transition w-full justify-center"
          >
            <RiDownload2Line className="text-xl" />
            Download Resume
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
