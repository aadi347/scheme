import React from "react";
import { useNavigate } from "react-router-dom";
import schemes from "./SchemeData"; // Import the data

const SchemesTable = ({ onClose }) => {
    const navigate = useNavigate();

    const handleApplyButtonClick = (scheme) => {
        localStorage.setItem("selectedScheme", JSON.stringify(scheme)); // Store in localStorage
        navigate("/schemeDetails", { state: { scheme } }); // Navigate to details page
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
            <button
                className="absolute top-4 right-4 text-white hover:text-gray-700"
                onClick={onClose}
            >
                ✖
            </button>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md overflow-hidden rounded-2xl">
                    <thead className="bg-gradient-to-r from-[#23C4F8] to-[#275EFE] hover:from-[#1FA2F8] text-white">
                        <tr>
                            <th className="py-2 px-4 text-left">No.</th>
                            <th className="py-2 px-4 text-left">Scheme Name</th>
                            <th className="py-2 px-4 text-left">Category</th>
                            {/* <th className="py-2 px-4 text-left">Eligibility</th> */}
                            <th className="py-2 px-4 text-left">Apply</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schemes.map((scheme) => (
                            <tr key={scheme.id} className="border-b hover:bg-gray-100">
                                <td className="py-2 px-4 text-xs">{scheme.id}</td>
                                <td className="py-2 px-4 font-semibold text-sm">{scheme.name}</td>
                                <td className="py-2 px-4 text-blue-600 font-medium text-sm">{scheme.category}</td>
                                {/* <td className="py-2 px-4 text-xs">
                                    {scheme.eligibility} */}
                                    {/* <span
                                        className={`px-2 py-1 rounded-full text-xs text-white ${
                                            scheme.eligibility === "Yes" ? "bg-emerald-500" : "bg-red-500"
                                        }`}
                                    >
                                        {scheme.eligibility}
                                    </span> */}
                                {/* </td> */}
                                <td>
                                    <button
                                        onClick={() => handleApplyButtonClick(scheme)}
                                        className="text-indigo-500 px-4 text-xs font-semibold border bg-gray-200 border-gray-400 py-1 rounded-full"
                                    >
                                        Apply
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SchemesTable;
