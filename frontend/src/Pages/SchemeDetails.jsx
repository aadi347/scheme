import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FeedBack from "../components/FeedBack";
import Share from "../components/Share";
import NewsLetter from "../components/NewsLetter"

const SchemeDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [scheme, setScheme] = useState(location.state?.scheme || null);

    useEffect(() => {
        if (!scheme) {
            const storedScheme = localStorage.getItem("selectedScheme");
            if (storedScheme) {
                setScheme(JSON.parse(storedScheme));
            }
        }
    }, [scheme]);

    if (!scheme) {
        return <p className="text-center text-lg mt-10">No Scheme Selected</p>;
    }
    // onClick={() => navigate(-1)}
    return (
        <div className="grid grid-cols-12 gap-4 p-6 bg-slate-50">
            {/* Left Sidebar - Fixed */}
            <div className="col-span-3 border bg-white border-gray-200 rounded-l-lg p-4 h-screen sticky top-0">
      
    <button onClick={() => navigate(-1)} className="cursor-pointer duration-200 py-4 hover:scale-125 active:scale-100" title="Go Back">
        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-blue-300 border rounded-full border-gray-200">
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
        </svg>
    </button>

   <p className="border border-gray-200"></p>

    {/* Button Grid */}
    <div className="grid grid-cols-2 gap-4 mt-4 py-3">
        <button className="bg-white border border-gray-200 transform duration-300 hover:scale-105 text-gray-600 font-semibold text-xs py-2 px-4 rounded-lg hover:bg-gray-300">Details</button>
        <button className="bg-white border border-gray-200 transform duration-300 hover:scale-105 text-gray-600 font-semibold text-xs py-2 px-4 rounded-lg hover:bg-gray-300">Benefits</button>
        <button className="bg-white border border-gray-200 transform duration-300 hover:scale-105 text-gray-600 font-semibold text-xs py-2 px-4 rounded-lg hover:bg-gray-300">Eligibility</button>
        <button className="bg-white border border-gray-200 transform duration-300 hover:scale-105 text-gray-600 font-semibold text-xs py-2 px-4 rounded-lg hover:bg-gray-300">Documents Required</button>
        <button className="bg-white border border-gray-200 transform duration-300 hover:scale-105 text-gray-600 font-semibold text-xs py-2 px-4 rounded-lg hover:bg-gray-300 col-span-2">Application Process</button>
    </div>

</div>


            {/* Center Content */}
            <div className="col-span-6 p-8 bg-white border border-gray-200 rounded-lg">
                <h1 className="text-2xl font-bold text-blue-600">{scheme.name}</h1>
                <div className="border-b border-gray-200">
                    <p className="mt-2 py-4 rounded-2xl text-gray-600">
                        <span className="text-xs px-2 py-1 hover:bg-emerald-500 hover:text-white border border-gray-200 text-black rounded-full">
                            {scheme.category}
                        </span>
                    </p>
                </div>
                <div className="py-3">
                    <p className="mt- bg-slate-50 py-4 rounded-2xl px-2 text-gray-600 border border-gray-200 transform duration-300 hover:scale-95">
                        <strong>Details<br /></strong>
                        <span className="text-sm">{scheme.details}</span>
                    </p>
                </div>

                <p className="mt-2 bg-slate-50 py-4 rounded-2xl px-2 text-gray-600 border border-gray-200 transform duration-300 hover:scale-95">
                    <strong>Benefits <br /></strong>
                    <p className="text-xs py-2">The eligible students will get the following benefits under this scheme:-</p>
                    <ul className="list-disc list-inside text-sm mt-1">
                    {scheme.Benefits.map((doc, index) => (
                    <li key={index}>{doc}</li>
                    ))}
                </ul>
                </p>

                <p className="mt-2 bg-slate-50 py-4 rounded-2xl px-2 text-gray-600 border border-gray-200 transform duration-300 hover:scale-95">
                <strong>Eligibility</strong>
                <ul className="list-disc list-inside text-sm mt-1">
                {scheme.eligibility.map((doc, index) => (
                <li key={index}>{doc}</li>
                ))}
                </ul>
                </p>
            
                <p className="mt-2 bg-slate-50 py-4 rounded-2xl px-2 text-gray-600 border border-gray-200 transform duration-300 hover:scale-95">
                <strong>Documents Required</strong>
                <ul className="list-disc list-inside text-sm mt-1">
                {scheme.documentsRequired.map((doc, index) => (
                <li key={index}>{doc}</li>
                ))}
                </ul>
                </p>

                <p className="mt-2 bg-slate-50 py-4 rounded-2xl px-2 text-gray-600 border border-gray-200 transform duration-300 hover:scale-95">
                <strong>Application Process</strong>
                 <ul className="list-decimal list-inside text-sm mt-1">
                {scheme.applicationProcess.map((step, index) => (
                <li 
                key={index} 
                className={step.includes("https://www.7nishchay-yuvaupmission.bihar.gov.in/") ? "text-blue-600 font-semibold" : ""}
                >
                {step}
                </li>
                ))}
                </ul>
                </p>



            </div>

            {/* Right Sidebar - Fixed */}
            <div className="col-span-3 sticky top-0 border bg-white border-gray-200 rounded-r-lg">
                <FeedBack />
                <NewsLetter />

                <div className="py-7 px-7">
                <Share />
                </div>

            </div>
        </div>
    );
};

export default SchemeDetails;
