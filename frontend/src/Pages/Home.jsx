import React, { useState } from 'react';
import Forms from "./Forms.jsx";

const Home = () => {

    const[isFormOpen, setFormOpen] = useState(false)

   const handleButtonClick = () => {
        setFormOpen(true)
    }

  return (
    <div>
      
     
     <div className="mt-10 grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2s  gap-4 px-10 ">
        {/* left hand side div */}
        <div className=" rounded-lg">
  <div className='text-left p-6'>
    <h2 className="text-2xl text-left px-10 font-semibold  mb-4 pb-4">Welcome to the Scheme details website</h2>
    <p className='px-10'>
      Welcome to the official government scheme information portal. Our platform is designed to provide citizens with accurate and up-to-date details about various welfare programs. Explore eligibility criteria, benefits, and application processes—all in one place. Empowering every citizen with the right information, effortlessly.
    </p>
    
    {/* New Explore Button */}
    <div className='text-left px-10'>

  <div className='mt-10'> 
  <div className="relative group">
    <button
      onClick={handleButtonClick} className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600"
    >
      <span
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      ></span>
      <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
        <div className="relative z-10 flex items-center space-x-3">
          <span
            className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
            >Fill Form</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
          >
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            ></path>
          </svg>
        </div>
      </span>
    </button>
  </div>
  </div> 


    </div>
  </div>
</div>

        {/* right hand side div */}
        <div className="rounded-lg">
            <img 
            src="https://img.freepik.com/free-vector/hr-manager-with-employee-interview-business-flow-chart-employee-assessment-software-hr-company-system-employee-check-programme-concept_335657-403.jpg?t=st=1740053432~exp=1740057032~hmac=a915d30ec31b2bcf04a68ffab6d650765b4b4d4291eb3055993dcb7c480f5679&w=1800"
            alt="Government Schemes"
            className="h-96 w-full object-cover rounded-lg"
            />
        </div>
     </div>
    
    {isFormOpen && <Forms />}
    </div>
  );
}

export default Home;