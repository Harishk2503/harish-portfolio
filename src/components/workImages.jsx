import React,{Suspense} from 'react'
import { motion } from 'framer-motion'


const WorkImages = ({filter,container,item}) => {
  return (
    <motion.div
    className="container"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    <div className="flex flex-wrap -m-4 text-center mt-2">
    {filter.work.map((e)=>{
      return (

      <div className="p-4 md:w-1/4 sm:w-1/2 w-full item flex flex-wrap" key={e.id} variants={item} >
          <div className="py-4">
      <div className="shadow-lg group container rounded-lg max-w-sm flex justify-center items-center mx-auto content-div">
      
          <div className="w-full hover:backdrop-blur-md rounded-md shadow-xl max-h-[500px] overflow-hidden">
          <Suspense fallback={<div className='text-xl text-center'>Loading...</div>}>
            <img src={e.img} alt={e.alt} className="group-hover:blur-sm group-hover:scale-150 group-hover:transition group-hover:ease-in group-hover:duration-300" />
          </Suspense>
          </div>
          <div className="absolute z-10 hidden group-hover:block group-hover:transition group-hover:ease-in group-hover:duration-300">
        <div className="flex flex-wrap w-64">
          <span className={`${e.id===3 ? 'text-white':'group-hover:bg-gradient-to-r from-black to-black text-transparent' } md:text-xl text-md  bg-clip-text text-shadow-xl text-center font-bold tracking-wider leading-relaxed`}>{e.name}</span> 
        </div>

          <motion.div 
          whileHover={{ scale: 1.2, rotate: 10 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}
          className="pt-8 text-center w-64 flex justify-center">
            <a href={e.url} className=" text-center text-md p-4 shadow-sm shadow-yellow-300 rounded-sm bg-slate-100 text-black font-bold flex space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' className='w-4' viewBox="0 0 512 512">{/*! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M177.8 63.2l10 17.4c2.8 4.8 4.2 10.3 4.2 15.9v41.4c0 3.9 1.6 7.7 4.3 10.4c6.2 6.2 16.5 5.7 22-1.2l13.6-17c4.7-5.9 12.9-7.7 19.6-4.3l15.2 7.6c3.4 1.7 7.2 2.6 11 2.6c6.5 0 12.8-2.6 17.4-7.2l3.9-3.9c2.9-2.9 7.3-3.6 11-1.8l29.2 14.6c7.8 3.9 12.6 11.8 12.6 20.5c0 10.5-7.1 19.6-17.3 22.2l-35.4 8.8c-7.4 1.8-15.1 1.5-22.3-.9l-32-10.7c-3.3-1.1-6.7-1.7-10.2-1.7c-7 0-13.8 2.3-19.4 6.5L176 212c-10.1 7.6-16 19.4-16 32v28c0 26.5 21.5 48 48 48h32c8.8 0 16 7.2 16 16v48c0 17.7 14.3 32 32 32c10.1 0 19.6-4.7 25.6-12.8l25.6-34.1c8.3-11.1 12.8-24.6 12.8-38.4V318.6c0-3.9 2.6-7.3 6.4-8.2l5.3-1.3c11.9-3 20.3-13.7 20.3-26c0-7.1-2.8-13.9-7.8-18.9l-33.5-33.5c-3.7-3.7-3.7-9.7 0-13.4c5.7-5.7 14.1-7.7 21.8-5.1l14.1 4.7c12.3 4.1 25.7-1.5 31.5-13c3.5-7 11.2-10.8 18.9-9.2l27.4 5.5C432 112.4 351.5 48 256 48c-27.7 0-54 5.4-78.2 15.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>

           <span> Open To Browser</span></a>
          </motion.div>
        </div>
      

      </div>
       
    </div>
      </div>
      )
    })}
    </div>
    </motion.div>
  )
}

export default WorkImages