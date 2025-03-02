import React, { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1); // Track the current step
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Move to the next step
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  // Move to the previous step
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  // Submit form data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Step {step} of 3</h2>

      {/* Step 1: Personal Information */}
      {step === 1 && (
        <div>
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            placeholder="Enter your name"
          />

          <label className="block mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            placeholder="Enter your email"
          />

          <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">
            Next
          </button>
        </div>
      )}

      {/* Step 2: Contact Details */}
      {step === 2 && (
        <div>
          <label className="block mb-2">Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            placeholder="Enter your phone number"
          />

          <label className="block mb-2">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            placeholder="Enter your address"
          />

          <div className="flex justify-between">
            <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded">
              Previous
            </button>
            <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Location Information */}
      {step === 3 && (
        <div>
          <label className="block mb-2">City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            placeholder="Enter your city"
          />

          <div className="flex justify-between">
            <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded">
              Previous
            </button>
            <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
