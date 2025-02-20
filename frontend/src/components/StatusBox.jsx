import React from 'react';

const StatusBox = ({ message, status, onOk }) => {
  return (
    <div className="fixed top-20 right-4 p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out bg-white border">
      {/* Status Message */}
      <p className={`text-lg font-semibold ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
        {message}
      </p>

      {/* Buttons */}
      <div className="mt-3 flex gap-2">
        <button
          className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition"
          onClick={onOk} // ✅ Closes the status box
        >
          OK
        </button>
        <button
          className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition"
          onClick={onOk} // ✅ Closes the status box
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default StatusBox;
