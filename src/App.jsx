import React,{useEffect} from 'react'
import FollowPointer from './components/FollowPointer'
import NavBar from './components/NavBar'
import BioData from './components/BioData'
import OurWork from  './components/OurWork'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './libraries/ParticleJS/particle_Background'
import {motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import Typewriter from 'typewriter-effect';
import { useLottie } from 'lottie-react'
import MainLottie from './libraries/robo.json'
import {variables} from './constant'
// import Scroll from 'react-scroll'
const App=(props)=>{
  const control = useAnimation();
  const [ref, inView] = useInView();

  const options = {
    animationData: MainLottie,
    loop: true
  };

  const { View } = useLottie(options);

  useEffect(() => {
    if (inView) {
      control.start("hidden");
    } else {
      control.start("visible");
    }
  }, [control, inView]);
  useEffect(()=>{
    const prevTitle = document.title;
    document.title = prevTitle + "- My Portfolio"
    return ()=>{document.title = prevTitle}
  },[])

  const boxVariant={
    visible:{opacity:0}
    ,hidden:{opacity:1}
  }
  const ImgVariant={
    visible:{opacity:0,y:'-90vh'},
    hidden:{opacity:1,y:0}
  }
  
    return<>
     {/* <FollowPointer /> */}
        {/* <ParticleBackground />  */}
        <NavBar />
        <motion.div 
    transition={{duration:1}}
    ref={ref}
    initial="hidden"
      variants={boxVariant}
     animate={control}
     >
        <div className="">
        <section className="text-white body-font">
            <div className="container md:w-[80%] w-[90%] px-5 mx-auto flex lg:py-20 md:py-20 sm:py-4 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <p className="mb-4 text-[#2940D3] drop-shadow-sm leading-relaxed">Hello World</p>
                <h1 className="text-shadow-lg title-font xl:text-6xl text-5xl md:text-5xl mb-8 font-bold text-white">
                <Typewriter
  options={{
    strings: `I am Harish Kullenthran`,
    autoStart: true,
    loop: true,
  }}
/>
</h1>
                
             <p className="mb-12 leading-relaxed text-base">
             {variables.description}
                </p>
                    <div className="flex justify-center">
                    <motion.div whileHover={{ scale: 1.2 }} >
                    <a href="/#contact" className="inline-flex hover:bg-gradient-to-l bg-gradient-to-r from-[#2940D3] to-[#1e38e1] border-0 py-2 px-6 focus:outline-none hover:bg-[#0d2cf8] text-lg">Contact Me</a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} >
                    <a href={variables.cvLink} target="_blank" rel='noreferrer' className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-r from-slate-300 text-lg">DOWNLOAD CV</a>
                    </motion.div>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"> 
            <motion.div
    transition={{type:'spring',stiffness:120,default: { duration: 1 }}}
    ref={ref}
    variants={ImgVariant}
    initial="hidden"
     animate={control}
     >      
                <img src='/hero.png' className='object-cover' />
                </motion.div>
            </div>
            </div>
        </section>
</div>
        </motion.div>
        <BioData />
<OurWork />
        
{/* CTA Section */}
<section className="bg-white dark:bg-gray-900">
    <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            An  <span className="text-blue-500">Ambitious Developer</span> Eager to Learn, Grow and Innovate
        </h2>

        <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
        As an eager Junior Developer, my passion lies in harnessing the power of latest technologies to build creative, efficient, and impactful solutions. My mission is to utilise and hone my skills in a thriving organisation, contributing to its growth while furthering my own professional development.
        </p>

        <div className="inline-flex w-full mt-6 sm:w-auto">
            <a href="/#contact" className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Contact Me
            </a>
        </div>
    </div>
</section>
 

        {/* Resume */}
        <section className="text-white body-font" id="resume">
  <div className="container md:w-[80%] w-[90%] px-5 py-24 mx-auto items-start flex flex-wrap">
    <div className="lg:w-1/2 w-full mb-20 lg:mb-0 rounded-lg overflow-hidden top-10 sticky">
      <img alt="feature" className="object-contain object-center h-full w-full" src='/images/resume.svg' />
    </div>
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
    <div className="flex flex-col w-full mb-5">
      <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-white">
        Resume
      </h1>
      <div className=" w-24 sm:h-1 md:h-2  my-2 rounded-full sm:mt-0 inline-flex bg-gradient-to-r from-[#2940D3] to-[#0920b8] text-white relative z-10 title-font font-medium text-sm ">
      </div>
      <h1 className="sm:text-2xl text-4xl font-medium title-font mb-2 text-slate-200">
        My Work Experience
      </h1>
    </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        
        <div className="flex-grow">
          <h2 className="text-slate-200 text-lg title-font font-medium mb-3">Software Developer</h2>
          <h3 className="text-slate-200 text-md title-font font-medium mb-3">Capita, UK (May 2023 - Present)</h3>
          <ul className="leading-relaxed text-base">
          <li> My role as a Software Developer Intern allowed me to enhance my technical skills and cultivate a team-oriented mindset. Here are some key accomplishments: </li>

           <li>• Frontend Development: Using React, Angular, and TypeScript, I developed interactive and user-friendly interfaces for various web applications, enhancing user experience. </li>

          <li>• Backend Integration: Collaborating with the backend team, I integrated frontend applications with server-side components, employing Node.js and Express.js, focusing on RESTful APIs and MVC patterns, creating efficient, scalable systems. </li>

          <li>• Database Management: I gained expertise in database management using SQL and MongoDB, designing database schemas, managing data entities, and optimising data retrieval. </li>

          <li>• Cloud Services: I utilised AWS services for application hosting and data storage, understanding the power of cloud technologies. </li>

          <li>• Server-side Development: I developed server-side applications using .NET and ASP.NET, employing MVC patterns and RESTful APIs, streamlining development and ensuring high-performance web applications. </li>

          <li>• Client-side Programming: I used JavaScript, React, and Angular, along with CSS, to create intuitive and appealing interfaces. </li>

          <li>• Test-Driven Development: I consistently applied TDD principles throughout the software development lifecycle, ensuring code reliability.</li>

          <li>• Team Collaboration: I collaborated effectively in a dynamic team, fostering a culture of shared problem-solving, decision-making, and respect for diverse ideas..</li>
        
</ul>
          <hr/>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        
        <div className="flex-grow">
          <h2 className="text-slate-200 text-lg title-font font-medium mb-3">Computer Science Teacher</h2>
          <h3 className="text-slate-200 text-md title-font font-medium mb-3">Just Learn (June 2021 - Present, London)</h3>
          <ul className="leading-relaxed text-base">
          <li>• Developed and maintained custom websites for clients in a variety of industries . Utilised HTML, CSS, PHP JavaScript to create visually appealing and user-friendly designs.</li>
          <li> • Collaborated with clients to understand their needs and goals for their websites . Implemented and troubleshot various plugins and themes . SEO Optimising the website.</li>
          <li>• Utilised diverse teaching approaches, such as visual aids and interactive activities, to cater to different learning styles and enhance engagement. </li> 
          <li> • Tracked progress and provided regular feedback to parents and guardians on their child's academic achievements and areas for development</li>
</ul>
          <hr/>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        
        <div className="flex-grow">
          <h2 className="text-slate-200 text-lg title-font font-medium mb-3">Freelance Web Developer</h2>
          <h3 className="text-slate-200 text-md title-font font-medium mb-3">Upwork (Nov 2021 - June 2023, London)</h3>
          <ul className="leading-relaxed text-base">
          <li>• Developed and maintained custom websites for clients. Utilised HTML, CSS, PHP JavaScript to create visually appealing and user-friendly designs.</li>
          <li> • Collaborated with clients to understand their needs and goals for their websites . Implemented and troubleshot various plugins and themes . SEO Optimising the website.</li>
<li>• Worked with many CMS such as: wordpress, wix, squarespace and readymag to meet the clients needs. </li> 
</ul>
          <hr/>
        </div>
      </div>
      
     
      <div className="flex flex-col w-full mb-5">
      <h1 className="sm:text-2xl text-4xl font-medium title-font mb-2 text-slate-200">
        Education
      </h1>
    </div>
    <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-slate-200 text-lg title-font font-medium mb-3">University Of Coventry (2017-2020), UK </h2>
          <p className="leading-relaxed text-base">
          Digital Technology & Solutions (HND)
          </p>
          <hr/>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-slate-200 text-lg title-font font-medium mb-3">Watford Grammar School for Boys (2011-2017) </h2>
          <p className="leading-relaxed text-base">
           GCSE (A-C) , A-level (Maths,Computing and Psychology)
          </p>
          <hr/>
        </div>
      </div>
    </div>
  </div>
</section>

       
        <Contact />
<Footer />
    </>
}

export default App;