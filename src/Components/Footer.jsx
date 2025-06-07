import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";
const Footer = () => {
  return (
  <footer className="bg-black text-white py-12 relative">
  <div className="text-center">
    <h4 className="text-2xl font-bold mb-2">Let’s Connect!</h4>
    <p className="text-gray-400 text-sm mb-6">Feel free to reach out for collaborations or just a friendly hello 👋</p>
    <div className="flex justify-center gap-6 text-xl">
      <a href="https://www.linkedin.com/in/rinki-singla-887566201/" className="hover:text-blue-400"><FaLinkedin /></a>
      <a href="Singlarinki13@gmail.com" className="hover:text-pink-400"><CiMail /></a>
      <a href="https://github.com/Rinkisingla" className="hover:text-cyan-400"><FaSquareGithub /></a>
    </div>
    <p className="text-xs text-gray-500 mt-8">© {new Date().getFullYear()} Rinki Singla • Crafted with ❤️</p>
  </div>
</footer>



  )
}

export default Footer