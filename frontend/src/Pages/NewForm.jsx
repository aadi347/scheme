import React, { useEffect, useState } from "react";
import RightBar from "./RightBar.JSX";
import { motion } from "framer-motion"; 
import { GrFormNext, GrFormPrevious,GrFormNextLink } from "react-icons/gr";
import Loader from "../components/Loader";
import events from "inquirer/lib/utils/events";


const NewForm = ({setFormOpen}) => {

  const biharDistricts = [
    "Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", 
    "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", 
    "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", 
    "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", 
    "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", 
    "Siwan", "Supaul", "Vaishali", "West Champaran"
  ];



  
  const [isRightBarActive, setIsRightBarActive] = useState(false);
  const [isLoadingPopOpen, setIsLoadingPopOpen] = useState(false);
  
  // const [step, setStep] = useState(1); 
  const [formData , setFormData] = useState({
    schemeCategory: "",
    name : "",
    age: "",
    phone: "",
    email: "",
    gender: "",
    category: "",
    martialStatus: "",
    rationCard: "",
    rationCardType: "",
    state: "",
    district: "",
    block: "",
  })

  
  const [selectedOptions, setSelectedOptions] = useState({
    step1: null,
    step2: null,
    step3: null,
  });

  const handleSubmitClick = (e) => {
    e.preventDefault();
    setIsLoadingPopOpen(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRightBarActive(true); 
  };

  const handleClose = () => {
    setFormOpen(false);
  };


  const handleSelection = (stepKey, option) => {
    setSelectedOptions({ ...selectedOptions, [stepKey]: option });
  };

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    console.log("Form Data:", formData); 
    alert(`Captured Data: ${JSON.stringify(formData, null, 2)}`); 
  };


       

  
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css"
      />

      <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
        <motion.div
          className="bg-white border  text-gray-500 rounded-3xl w-full overflow-hidden ${isRightBarActive "
          style={{ maxWidth: "1000px" }}
          initial={{ opacity: 0, y: -20, x: 0 }}
          animate={{ opacity: 1, y: 0, x: isRightBarActive ? -150 : 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={[
            { duration: 0.4, ease: "easeInOut" }, 
            { type: "spring", stiffness: 100, damping: 30 } // For x movement
          ]}
        >
          <div className="md:flex w-full">
            {/* Form Content */}
            <div className="w-full md:w-full py-10 px-5 md:px-10">
              <h2 className="text-2xl font-bold text-left  border-gray-300 py-3">
                Fill The Form
              </h2>
              <p className="text-xs border-b mb-5 py-2.5 font-semibold text-gray-400 text-left">Choose Your Scheme Category Choose Your Scheme Category Choose Your Scheme Category Choose Your Scheme Category</p>
              <form >
              <div>


           
        <div>
          <label className="text-xs font-semibold px-1 mb-2 block">
            Choose Your Scheme Category
          </label>

          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-city text-gray-400 text-lg"></i>
            </div>

            <select
              value={formData.schemeCategory}
              onChange={handleChange}
              name="schemeCategory"
              className="w-full -ml-10 pl-10  pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            >
              <option value="">Select Scheme Category</option>
              <option value="Business">Business</option>
              <option value="HealthCare">HealthCare</option>
              <option value="Social Welfare">Social Welfare</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Education">Education</option>
              <option value="Others">Others</option>
            </select>
          </div>

                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Enter Your name</label>
                            <div className="flex">
                                <div className="w-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input value={formData.name} onChange={handleChange} name="name" type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Aditya" />
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Enter Your Age</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-calendar text-gray-400 text-lg"></i></div>
                                <input value={formData.age} onChange={handleChange} name="age" type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="ex: 10,20" />
                            </div>
                        </div>
                        <div className="flex justify-between gap-4">
                       
                      </div>
                    </div>
                
                    {/* phone number and email id  */}
                    
                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Enter Your Phone Number</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-phone text-gray-400 text-lg"></i></div>
                                <input value={formData.phone} onChange={handleChange} name="phone" type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="+91 1111 222 333" />
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Enter Your Email (optional)</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input value={formData.email} onChange={handleChange} name="email" type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="example@gmail.com" />
                            </div>
                        </div>
                       
                    </div>
                   

                  
                    
                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Select Your Gender</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-human-male-female text-gray-400 text-lg"></i></div>
                                <select value={formData.gender} onChange={handleChange} name="gender" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" >
                                <option value="Select">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                
                                </select>
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Select Your Martial Status</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-heart text-gray-400 text-lg"></i></div>
                                <select value={formData.martialStatus} onChange={handleChange} name="martialStatus" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" >
                                <option value="">Marital Status</option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="widow">Widow</option>
                                <option value="widower">Widower</option>
                                
                                </select>
                            </div>
                        </div>
                       
                    </div>
                

                
                    <div className="flex -mx-3">

                    <div className="w-1/2 px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Select Your Category</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-view-grid-outline text-gray-400 text-lg"></i></div>
                                <select value={formData.category} onChange={handleChange} name="category" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" >
                                <option value="">Select Category</option>
                                <option value="obc">OBC</option>
                                <option value="scst">SC/ST</option>
                                <option value="general">General</option>
                                </select>
                            </div>
                        </div>

                         
                        <div className="w-1/2 px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Select Your Ration Card Status</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-card-bulleted-outline text-gray-400 text-lg"></i></div>
                                <select value={formData.rationCard} onChange={handleChange} name="rationCard" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" >
                                <option value="">Select Ration Card</option>
                                <option value="obc">APL</option>
                                <option value="scst">BPL</option>
                                
                                </select>
                            </div>
                        </div>    
                       
                    </div>

                

                 

                    <div className="flex -mx-3">

                    <div className="w-1/2 px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Select Your Ration Card Type</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-card-text-outline text-gray-400 text-lg"></i></div>
                                <select value={formData.rationCardType} onChange={handleChange} name="rationCardType" type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" >
                                <option value="">Select Category</option>
                                <option value="obc">Red Card</option>
                                <option value="scst">Brown Card</option>
                                <option value="general">White Card</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-1/2 px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Select Your State</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-city text-gray-400 text-lg"></i></div>
                                <select value={formData.state} onChange={handleChange} name="state" type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" >
                                <option value="">Select State</option>
                                <option value="obc">Bihar</option>
                                
                                </select>
                            </div>
                        </div>
                      
                    </div>

            

                   
                    <div className="flex -mx-3">
                    <div className="w-1/2 px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Choose Your District</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-map-marker text-gray-400 text-lg"></i></div>
                                <select value={formData.district} onChange={handleChange} name="district" type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" >
                                <option value="">Select District</option>
                                {biharDistricts.map((district, index) => (
                                <option key={index} value={district.toLowerCase().replace(/\s+/g, "_")}>
                                {district}
                                </option>
                                ))}
                                
                                </select>
                            </div>
                        </div>

                         <div className="w-1/2 px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Select Your Block</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-domain text-gray-400 text-lg"></i></div>
                                <select value={formData.block} onChange={handleChange} name="block" type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" >
                                <option value="">Select Block</option>
                                <option value="obc">Bihar</option>
                                
                                </select>
                            </div>
                        </div>         
                        
                          
                    </div>
                

                    
                </div>
               
                </div>
               
         
                <button
                onClick={handleSubmitClick}
                className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
                >
                 Submit
                  <span
                    className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                  ></span>
                  <span
                    className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                  ></span>
                  <span
                  className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
                  ></span>
                  <span
                    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                    >Submit</span
                  >
                </button>
                
              
                {isLoadingPopOpen && (
                <Loader />


      )}
              


              </form>
              
            </div>
            
          </div>
        </motion.div>

        <RightBar isActive={isRightBarActive} />

        {/* Show data dynamically on the screen */}
      {formData.name && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="text-lg font-bold">Captured Data:</h3>
          <p><strong>SchemeCategory:</strong> {formData.schemeCategory}</p>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>age:</strong> {formData.age}</p>
          <p><strong>gender:</strong> {formData.gender}</p>
          <p><strong>category:</strong> {formData.category}</p>
          <p><strong>martialStatus:</strong> {formData.martialStatus}</p>
          <p><strong>rationCard:</strong> {formData.rationCard}</p>
          <p><strong>rationCardType:</strong> {formData.rationCardType}</p>
          <p><strong>state:</strong> {formData.state}</p>
          <p><strong>district:</strong> {formData.district}</p>
          <p><strong>block:</strong> {formData.block}</p>
        </div>
      )}
      </div>
    </>
  );
};

export default NewForm;
