import React, { useState } from 'react';
import NewForm from './NewForm'
import RightBar from './RightBar.JSX';

const Home = () => {

  
  const[isFormOpen, setFormOpen] = useState(false)
  
     const handleButtonClick = () => {
          setFormOpen(true)
      }

  return (
 
<div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
  

    <div className="flex justify-center py-3">
    <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Seal_of_Bihar.svg/1200px-Seal_of_Bihar.svg.png"
            alt="Logo"
            className="h-16 w-16 object-contain border rounded-full border-gray-400 py-2 px-2" 
        />
    </div>

  <div className="flex justify-center">
      <a className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-600 dark:focus:border-neutral-600" href="#">
        New Scheme - Get Started
        <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-neutral-700 dark:text-neutral-400">
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </span>
      </a>
    </div>



    <div className="mt-5 max-w-2xl text-center mx-auto">
      <h1 className="block font-bold text-gray-500 text-4xl md:text-5xl lg:text-6xl ">
      Welcome to the Scheme details 
        <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"> website</span>
      </h1>
    </div>


    <div className="mt-5 max-w-3xl text-center mx-auto">
      <p className="text-lg text-gray-600 dark:text-neutral-400">Welcome to the official government scheme information portal. Our platform is designed to provide citizens with accurate and up-to-date details about various welfare programs.</p>
    </div>


    <div className="mt-8 gap-3 flex justify-center">
      <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:from-violet-600 focus:to-blue-600 py-3 px-4" href="#">
        Get started
        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </a>
      <button onClick={handleButtonClick} type="button" className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
        Fill Form
        <span className="flex justify-center items-center bg-gray-200 rounded-md size-7 dark:bg-neutral-700 dark:text-neutral-400">
          <svg className="shrink-0 size-4 group-hover:rotate-9 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
        </span>
      </button>
    </div>


    <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
      

     
      
    </div>
  </div>
  {isFormOpen && <NewForm setFormOpen={setFormOpen} />}
</div>

  )
}

export default Home