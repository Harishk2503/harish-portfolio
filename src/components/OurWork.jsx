import React,{useState} from 'react'
import '../App.css'
import { work } from '../constant';

const container = {
  hidden: {  scale: 0,skewX:'10deg' },
  visible: {
    scale: 1,
    skewX:'0deg',
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const OurWork=()=>{
  const [isOpen,setOpen] = useState(false)
  const [filter, setFilter] = useState([]);
  
  
  const TriggerModal = (e,id)=>{
    // console.log(id)
    const item = work.filter(e=>e.id==id);
    setFilter(item)
    // console.log(filter) 
    setOpen(true)
  }

  
    return<>
        <section id='portfolio' className="text-white body-font">
  <div className="container md:w-[80%] w-[90%] px-5 lg:py-24 py-8 mx-auto">
    <div className="flex flex-col w-full mb-10">
      <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-white">
        Latest Work
      </h1>
      <div className=" w-24 sm:h-1 md:h-2  my-2 rounded-full sm:mt-0 inline-flex bg-gradient-to-r from-[#2940D3] to-[#0c25c8] text-white relative z-10 title-font font-medium text-sm ">
      </div>
      <p className="lg:w-2/3 leading-relaxed text-base">There is some of my latest work that I have worked on </p>
    </div>
    <section className="text-white">
  <div className="container px-6 py-1 mx-auto">
    <div className="mt-8 xl:mt-16 lg:flex lg:-mx-16">
     
      <div className="flex-1 mt-2 lg:mx-12 lg:mt-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
        {work.map((item,index)=>{

          return <div key={index} className="cursor-pointer border px-2 py-5 rounded" onClick={(e)=>{TriggerModal(e,item.id)}}>
            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">{item.shortTitle}</h2>
            {item.skill == '' ? '': (
            <p className="mt-2 text-lg tracking-wider text-gray-200 uppercase dark:text-blue-400 "><span className="text-white">Skill: </span>{item.skill}</p>
            )}
          </div>
        })}
          
        </div>
      </div>
    </div>
  </div>
</section>
    
    {/* <WorkImages filter={filter} container={container} item={item} /> */}

  </div>
</section>


{/* Modal For Project */}

{isOpen && 
<div className="relative flex justify-center">

  <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
      <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full sm:p-6">
        <div>
          <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
          </div>
          <div className="mt-2 text-center">
          <p className="my-2 text-sm text-gray-500 dark:text-gray-400">
            {filter[0]?.institute}
            </p>
            <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">{filter[0]?.title}</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {filter[0]?.date}
            </p>
            
            <p className="mt-2 text-sm leading-6 text-gray-300 dark:text-white">
            {filter[0]?.detail}
            </p>
            {filter[0]?.skill == '' ? '': (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="text-white text-bold">Skill: </span>
            {filter[0]?.skill} 
            </p>
            )}
          </div>
        </div>
        <div className="mt-5 sm:flex sm:items-center sm:justify-center">
          <div className="sm:flex sm:items-center ">
            <button onClick={()=>setOpen(false)} className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
              Okay
            </button>
            {filter[0]?.project == '' ? '': (
            <a href={filter[0]?.project} className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
              Show Project
            </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
}
    </>
}


export default OurWork;
