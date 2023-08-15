import React,{useEffect} from 'react'
import {useMediaQuery} from 'react-responsive'
import bioImage from '../assets/images/bio-data.png'
import {motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import { useLottie } from 'lottie-react'
import BioLottie from '../libraries/robotics.json'
import { variables } from '../constant'




const BioData = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    const options = {
      animationData: BioLottie,
      loop: true
    };
  
    const { View } = useLottie(options);

    const isMobile = useMediaQuery({
        query: '(min-width: 768px)'
      })

      const BioVariant={
        visible:{opacity:1,x:0},
        hidden:{opacity:0,x:'-90px'}
      }

      useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
      }, [control, inView]);
  return (
    <>
     {/*===========Bio Data Section==========*/}
     <section className="text-white body-font" id='about'>
  <div className="container mx-auto md:w-[80%] w-[90%] flex px-5 sm:py-16 py-8 md:flex-row flex-col items-center">
  {isMobile?(
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0 sticky top-0">
    <motion.div
    transition={{type:'spring',stiffness:120,default: { duration: 2 }}}
    ref={ref}
    variants={BioVariant}
    initial="hidden"
     animate={control}
     > 
    {View}
    </motion.div>
    </div>
  ):("")}
    
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font text-5xl mb-4 font-bold text-white">
      About Me
      </h1>
      <div className="w-24 sm:h-1 md:h-2  my-4 rounded-full sm:mt-0 inline-flex bg-gradient-to-r from-[#2940D3] to-[#132edf] text-white relative z-10 title-font font-medium text-sm ">
      </div>
      <p className="mb-8 leading-relaxed lg:px-0 md:px-0"> 

      
      Welcome to my professional portfolio. As a full stack developer, I bring comprehensive expertise spanning frontend frameworks like React and Angular, backend technologies including Node.js and Express.js, database management with SQL and MongoDB, and .NET and ASP.NET for server-side development. I also utilise AWS for cloud-based solutions. Beyond crafting appealing interfaces, my goal is to build efficient, robust systems that meet end-users' needs. My work is underpinned by Test-Driven Development (TDD) principles, ensuring code reliability and maintainability. Besides technical skills, I value team collaboration and shared problem-solving, and these fuel my passion for technology. Beyond my professional life, I enjoy reading and exploring, which contribute to my creative problem-solving skills. In my career, I'm not just seeking a job, but opportunities for growth, engagement, and making a significant impact.
       </p>
  <div className='md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center'>
  <h1 className="title-font text-2xl mb-4 font-bold text-white">
      Skill/Experience
      </h1>
      {variables.skill.map((item) => {
  return (

    <div key={item.title} className="mb-4">
      <span className="text-blue-500"><h2 className="mt-2 relative lg:w-[32rem] w-[20rem] overflow-hidden pt-2 font-bold text-lg font-semibold">{item.title}</h2> </span>
      <p className="font-bold text-base mt-1">{item.desc}</p>
    </div>
  )
      })}
  
            
            <motion.div whileHover={{ scale: 1.2 }} >

        <a href="https://drive.google.com/file/d/1Hpo33hJwGM1ri9E4728wbUzDB9ejfj6z/view?usp=drive_link" target="_blank" rel='noreferrer' className="inline-flex hover:bg-gradient-to-l bg-gradient-to-r from-[#2940D3] to-[#0e29dc] border-0 py-2 mt-8 px-6 focus:outline-none hover:bg-indigo-600 text-lg">Download CV</a>
        </motion.div>
      </div>

      
    </div>
    {!isMobile?(
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
    {View}
    </div>
  ):("")}
  </div>
</section>
    </>
  )
}

export default BioData