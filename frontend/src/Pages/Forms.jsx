import React, { useState } from 'react';
import { FaMale, FaFemale } from "react-icons/fa";
import SubmitButton from '../components/SubmitButton';
import StatusBox from '../components/StatusBox';


const Forms = () => {
    const [gender, setGender] = useState('');
    const [category, setCategory] = useState('');
    const [bpl, setBpl] = useState('');
    const [status, setStatus] = useState(false);

    

    const handleSubmitButton = () => {
        setStatus(true);
    }
  return (
    <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 px-10 py-10'>
        <div className='p-6 border rounded-2xl bg-slate-50 border-gray-200 py-10 min-h-[100px]'>
          <div className='bg-gray-200 border border-gray-100 px-4 py-4 rounded-xl'>

          <h2 className="text-xl text-left font-semibold  border-gray-300 ">Form Section</h2>
          
        
          </div>


          <form className="grid grid-cols-1 gap-4 py-3">
          <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-2">
                <div>
                    <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Enter Your Name</label>
                     <input type="text" placeholder="Name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                </div>

                <div>
                <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Select Your age</label>
                    <input type="number" placeholder="Age" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                </div>
         </div>
            
            {/* <select className="p-2 border rounded-lg w-full" onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select> */}

<label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Select Your Gender</label>
              

            
            {gender && (
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="">Select Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="widow">Widow</option>
                <option value="widower">Widower</option>
              </select>
            )}

            <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-2">
            <div className="flex items-center gap-2">
            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select Category</option>
              <option value="obc">OBC</option>
              <option value="scst">SC/ST</option>
              <option value="general">General</option>
            </select>
            </div>
            
            {category === "general" && (
              <input type="text" value="EWS" readOnly className="p-2 border rounded-lg w-full bg-gray-100" />
            )}
            <div className="flex items-center gap-2">
            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-purple-500 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" onChange={(e) => setBpl(e.target.value)}>
              <option value="">BPL/APL</option>
              <option value="bpl">BPL</option>
              <option value="apl">APL</option>
            </select>
            </div>
            </div>
            
            {bpl === "bpl" && (
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="">Select BPL Card Type</option>
                <option value="red">Red Card</option>
                <option value="white">White Card</option>
                <option value="brown">Brown Card</option>
              </select>
            )}
            
            <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-2">
              <div className='flex items-center gap-2'>
              <SubmitButton onClick={handleSubmitButton}  text="Submit" />
              </div>

              
            </div>
          </form>
        </div>
        
        {status && (
        <StatusBox
          message="Form Submitted Successfully"
          status="success"
          onOk={() => setStatus(false)} // ✅ Corrected to hide the status box
        />
      )}
       
      </div>
  )
}

export default Forms