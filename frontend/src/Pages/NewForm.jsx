import React, { useEffect, useState } from "react";
import RightBar from "./RightBar.JSX";
import { motion } from "framer-motion"; 
import { GrFormNext, GrFormPrevious,GrFormNextLink } from "react-icons/gr";


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
  const [step, setStep] = useState(1); 
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


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRightBarActive(true); 
  };

  const handleClose = () => {
    setFormOpen(false);
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  // Move to the previous step
  const prevStep = () => {
    setStep((prev) => prev - 1);
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
            { duration: 0.4, ease: "easeInOut" }, 
            { type: "spring", stiffness: 100, damping: 30 } // For x movement
          ]}
        >
          <div className="md:flex w-full">
            {/* Form Content */}
            <div className="w-full md:w-full py-10 px-5 md:px-10">
              <h2 className="text-2xl font-bold mb-5 text-left border-b border-gray-300 py-3">
                Fill The Form
              </h2>
              <form onSubmit={handleFormSubmit}>
              <div>


              {step === 1 && (
        <div>
          <label className="text-xs font-semibold px-1 mb-2 block">
            Choose Your Scheme Category
          </label>

          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-city text-gray-400 text-lg"></i>
            </div>

            {/* ✅ Fix: Added correct state binding & handleChange */}
            <select
              value={formData.schemeCategory}
              onChange={handleChange}
              name="schemeCategory"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
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

          {/* ✅ Fix: Disable "Next" button based on formData.schemeCategory */}
          <button
            onClick={(e) => {
              e.preventDefault();
              nextStep();
            }}
            disabled={!formData.schemeCategory} // ✅ Disable until category is selected
            className={`mt-4 px-4 py-2 rounded flex items-center justify-center gap-2 ${
              formData.schemeCategory
                ? "bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Next
            <GrFormNextLink className="text-xl" />
          </button>
        </div>
      )}

      {/* ✅ Step 2: Show selected category */}
      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold">Step 2</h2>
          <p className="mt-2">You selected: {formData.schemeCategory}</p>
        </div>
      )}



                {step === 2 && (
                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Enter Your name</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
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
                        <button
                        onClick={prevStep}
                        className="flex items-center px-2 py-2 rounded-lg bg-gray-500 text-white shadow-md hover:bg-gray-600 transition-all"
                          >
                          <GrFormPrevious className="text-lg" />
    Previous
  </button>

  <button
    onClick={nextStep}
    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white shadow-md hover:bg-blue-600 transition-all"
  >
    Next
    <GrFormNext className="text-lg" />
  </button>
</div>
                    </div>
                    )}
                    {/* phone number and email id  */}
                    {step === 3 && (
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
                        <div className="flex justify-between gap-4">
  <button
    onClick={prevStep}
    className="flex items-center px-2 py-2 rounded-lg bg-gray-500 text-white shadow-md hover:bg-gray-600 transition-all"
  >
    <GrFormPrevious className="text-lg" />
    Previous
  </button>

  <button
    onClick={nextStep}
    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white shadow-md hover:bg-blue-600 transition-all"
  >
    Next
    <GrFormNext className="text-lg" />
  </button>
</div>
                    </div>
                    )}

                    {step === 4 && (

                    
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
                        <div className="flex justify-between gap-4">
  <button
    onClick={prevStep}
    className="flex items-center px-2 py-2 rounded-lg bg-gray-500 text-white shadow-md hover:bg-gray-600 transition-all"
  >
    <GrFormPrevious className="text-lg" />
    Previous
  </button>

  <button
    onClick={nextStep}
    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white shadow-md hover:bg-blue-600 transition-all"
  >
    Next
    <GrFormNext className="text-lg" />
  </button>
</div>
                    </div>
                      )}

                      {step === 5 && (
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
                        <div className="flex justify-between gap-4">
  <button
    onClick={prevStep}
    className="flex items-center px-2 py-2 rounded-lg bg-gray-500 text-white shadow-md hover:bg-gray-600 transition-all"
  >
    <GrFormPrevious className="text-lg" />
    Previous
  </button>

  <button
    onClick={nextStep}
    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white shadow-md hover:bg-blue-600 transition-all"
  >
    Next
    <GrFormNext className="text-lg" />
  </button>
</div>
                    </div>

                    )}

                    {step === 6 && (

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
                        <div className="flex justify-between gap-4">
  <button
    onClick={prevStep}
    className="flex items-center px-2 py-2 rounded-lg bg-gray-500 text-white shadow-md hover:bg-gray-600 transition-all"
  >
    <GrFormPrevious className="text-lg" />
    Previous
  </button>

  <button
    onClick={nextStep}
    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white shadow-md hover:bg-blue-600 transition-all"
  >
    Next
    <GrFormNext className="text-lg" />
  </button>
</div>
                    </div>

                    )}

                    {step === 7 && (
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
                  )}

                    
                </div>
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
