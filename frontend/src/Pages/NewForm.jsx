import React, { useEffect, useState } from "react";
import RightBar from "./RightBar.JSX";
import { motion } from "framer-motion"; 

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRightBarActive(true); 
  };

  const handleClose = () => {
    setFormOpen(false);
  };


       

  useEffect(() => {

    const alpineScript = document.createElement("script");
    alpineScript.src = "https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js";
    alpineScript.defer = true;
    document.body.appendChild(alpineScript);

    const zxcvbnScript = document.createElement("script");
    zxcvbnScript.src = "https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js";
    document.body.appendChild(zxcvbnScript);

    return () => {
      document.body.removeChild(alpineScript);
      document.body.removeChild(zxcvbnScript);
    };
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css"
      />

      <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
        <motion.div
          className="bg-slate-50  text-gray-500 rounded-3xl w-full overflow-hidden ${isRightBarActive "
          style={{ maxWidth: "1000px" }}
          initial={{ opacity: 0, y: -20, x: 0 }}
          animate={{ opacity: 1, y: 0, x: isRightBarActive ? -150 : 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={[
            { duration: 0.4, ease: "easeInOut" }, // For fade-in & y movement
            { type: "spring", stiffness: 100, damping: 30 } // For x movement
          ]}
        >
          <div className="md:flex w-full">
            {/* Form Content */}
            <div className="w-full md:w-full py-10 px-5 md:px-10">
              <h2 className="text-2xl font-bold mb-5 text-left border-b border-gray-300 py-3">
                Fill The Form
              </h2>
              <form>
              <div>
                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Enter Your name</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Aditya" />
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Enter Your Age</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-calendar text-gray-400 text-lg"></i></div>
                                <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="ex: 10,20" />
                            </div>
                        </div>
                    </div>

                    {/* phone number and email id  */}

                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Enter Your Phone Number</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-phone text-gray-400 text-lg"></i></div>
                                <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="+91 1111 222 333" />
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Enter Your Email (optional)</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="example@gmail.com" />
                            </div>
                        </div>
                    </div>

                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Select Your Gender</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-human-male-female text-gray-400 text-lg"></i></div>
                                <select type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" >
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
                                <select type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" >
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
                                <select type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" >
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
                                <select type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" >
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
                                <select type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" >
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
                                <select type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" >
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
                                <select type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" >
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
                                <select type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" >
                                <option value="">Select Block</option>
                                <option value="obc">Bihar</option>
                                
                                </select>
                            </div>
                        </div>         

                    </div>


                    {/* <div className="flex -mx-3">
                        <div className="w-full px-3 mb-12">
                            <label for="" className="text-xs font-semibold px-1">Password</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                            </div>
                        </div>
                    </div> */}
                    <div className="flex -mx- text-left">
                        <div className="w-full mb-5 ">
                        <button
                        onClick={handleSubmit}
                        className="flex items-center justify-center w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg py-3 font-semibold gap-2"
                        >
                        SUBMIT NOW
                        <i className="mdi mdi-send-outline text-lg"></i>
                        </button>

                        
                        </div>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
        <RightBar isActive={isRightBarActive} />
      </div>
    </>
  );
};

export default NewForm;
