import React from 'react'
// import { a } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { motion } from 'framer-motion'

const NavBar=(props)=>{
    return <>
 <header className="body-font text-white">
  <div className="container mx-auto flex flex-wrap py-8 pl-11 flex-col md:flex-row items-center">
    <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className='drop-shadow-md text-slate-200 text-shadow font-extrabold text-4xl '>Portfolio</span>
    </a>


    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <motion.div whileHover={{ scale: 1.2 }} >
      <a href="/#" className="mr-9 font-bold hover:text-[#2940D3]">Home</a>
      </motion.div>
    <motion.div whileHover={{ scale: 1.2 }} >
      <a href="/#about" className="mr-9 font-bold hover:text-[#2940D3]">About Me</a>
      </motion.div>
    <motion.div whileHover={{ scale: 1.2 }} >
      <a href="/#portfolio" className="mr-9 font-bold hover:text-[#2940D3]">Work</a>
      </motion.div>
    <motion.div whileHover={{ scale: 1.2 }} >
      <a href="/#resume" className="mr-9 font-bold hover:text-[#2940D3]">Resume</a>
      </motion.div>
    </nav>
    <motion.div
  whileHover={{ scale: 1.2, rotate: 90 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}
>
    <a href="/#contact" className="hidden md:inline-flex items-center drop-shadow-md bg-[#2940D3] border-0 py-2 px-3 focus:outline-none hover:bg-[#111d67] rounded text-base mt-4 md:mt-0 font-bold">Hire Me
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
      </motion.div>
  </div>
</header>

    </>
}

export default NavBar;