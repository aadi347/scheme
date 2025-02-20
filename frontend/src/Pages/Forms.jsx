import React, { useState } from 'react';

const Forms = () => {
    const [gender, setGender] = useState('');
    const [category, setCategory] = useState('');
    const [bpl, setBpl] = useState('');
  return (
    <div className='mt-10 grid grid-cols-1 md:grid-cols-1 gap-4 px-4'>
        <div className='border p-6 rounded-lg min-h-[300px]'>
          <h2 className="text-xl font-semibold text-center mb-4 border-b pb-4">Form Section</h2>
          <form className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Name" className="p-2 border rounded-lg w-full" />
            <input type="number" placeholder="Age" className="p-2 border rounded-lg w-full" />
            
            <select className="p-2 border rounded-lg w-full" onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            
            {gender && (
              <select className="p-2 border rounded-lg w-full">
                <option value="">Select Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="widow">Widow</option>
                <option value="widower">Widower</option>
              </select>
            )}

            <select className="p-2 border rounded-lg w-full" onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select Category</option>
              <option value="obc">OBC</option>
              <option value="scst">SC/ST</option>
              <option value="general">General</option>
            </select>
            
            {category === "general" && (
              <input type="text" value="EWS" readOnly className="p-2 border rounded-lg w-full bg-gray-100" />
            )}
            
            <select className="p-2 border rounded-lg w-full" onChange={(e) => setBpl(e.target.value)}>
              <option value="">BPL/APL</option>
              <option value="bpl">BPL</option>
              <option value="apl">APL</option>
            </select>
            
            {bpl === "bpl" && (
              <select className="p-2 border rounded-lg w-full">
                <option value="">Select BPL Card Type</option>
                <option value="red">Red Card</option>
                <option value="white">White Card</option>
                <option value="brown">Brown Card</option>
              </select>
            )}
            
            <div className="flex justify-between mt-4">
              <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Submit</button>
            </div>
          </form>
        </div>
        
        <div className='p-4 rounded-lg flex justify-center items-center'>
          <img 
            src="https://iamanentrepreneur.in/wp-content/uploads/3-.jpg" 
            alt="Government Schemes" 
            className='object-cover rounded-lg' 
            loading="lazy"
          />
        </div>
      </div>
  )
}

export default Forms