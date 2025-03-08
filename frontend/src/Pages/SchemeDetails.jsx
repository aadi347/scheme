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

    return (
        <div className="grid grid-cols-12 gap-4 p-6">
            {/* Left Sidebar - Fixed */}
            <div className="col-span-3 bg-gray-100 rounded-l-lg p-4 h-screen sticky top-0">
                <h2 className="text-lg font-bold">Left Sidebar</h2>
                <p className="text-sm text-gray-600">You can add links, filters, or other information here.</p>
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
                    <p className="mt- bg-slate-50 py-4 rounded-2xl px-2 text-gray-600">
                        <strong>Details<br /></strong>
                        <span className="text-sm">{scheme.details}</span>
                    </p>
                </div>

                <p className="mt-4 bg-slate-50 py-4 rounded-2xl px-2 text-gray-600">
                    <strong>Eligibility</strong>
                    <ul className="list-disc list-inside mt-2 text-sm">
                        {scheme.eligibility
                            .split(".")
                            .filter(sentence => sentence.trim() !== "")
                            .map((sentence, index) => (
                                <li key={index}>{sentence.trim()}.</li>
                            ))}
                    </ul>
                </p>

                <p className="mt-2 bg-slate-50 py-4 rounded-2xl px-2 text-gray-600">
                    <strong>Benefits <br /></strong>
                    <span className="text-sm">{scheme.Benefits}</span>
                </p>

                <button
                    onClick={() => navigate(-1)}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Go Back
                </button>
            </div>

            {/* Right Sidebar - Fixed */}
            <div className="col-span-3 sticky top-0 border border-gray-200 rounded-r-lg">
                <FeedBack />
                <NewsLetter />

                <div className="py-7 px-5">
                <Share />
                </div>

            </div>
        </div>
    );
};

export default SchemeDetails;
