import React from "react";

const RightBar = ({ isActive }) => {
    
  return (
    <div
      className={`fixed right-0 top-0 h-full w-64 bg-gray-500 text-white shadow-lg transition-transform duration-500 ${
        isActive ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-5 rounded-lg">
  <h2 className="text-xl font-bold mb-4">Available Schemes</h2>
  

  {[
    { name: "Startup Growth Plan", description: "Funding for new startups.", id: 1 },
    { name: "Tech Innovation Grant", description: "Support for tech-based startups.", id: 2 },
    { name: "Women Entrepreneurs Scheme", description: "Empowering women-led businesses.", id: 3 },
    { name: "Young Leaders Fund", description: "For entrepreneurs under 30.", id: 4 },
    { name: "Green Energy Initiative", description: "Support for sustainable energy startups.", id: 5 },
  ].map((scheme, index) => (
    <div key={scheme.id} className="mb-4">
      <h3 className="text-lg font-semibold flex justify-between items-center">
        {scheme.name}
        <button className="text-indigo-300 hover:text-indigo-700 flex items-center">
          Apply <span className="mdi mdi-arrow-right ml-2"></span>
        </button>
      </h3>
      <p className="text-sm text-gray-600">{scheme.description}</p>
      {index < 4 && <hr className="my-3 border-gray-300" />} 
    </div>
  ))}
</div>

    </div>
  );
};

export default RightBar;
