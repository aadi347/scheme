import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PopupDialog = ({ isOpen, onClose, heading, phoneNumber }) => {
  const [uniqueId, setUniqueId] = useState("");


  useEffect(() => {
    if (isOpen) {
      const randomId = Math.floor(10000 + Math.random() * 90000);
      setUniqueId(randomId);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>

      <div className="fixed inset-0 bg-gray-200 bg-opacity-50 backdrop-blur-md z-40"></div>


      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-96">
   
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            {heading}
          </h2>


          <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-3">
            <i className="mdi mdi-phone text-blue-500 text-lg mr-2"></i>
            <span className="text-gray-700 dark:text-gray-300">{phoneNumber}</span>
          </div>

          <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-3">
            <i className="mdi mdi-identifier text-green-500 text-lg mr-2"></i>
            <span className="text-gray-700 dark:text-gray-300">{uniqueId}</span>
          </div>


          <div className="flex justify-end space-x-2 mt-4">
            <button
              className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => alert("Confirmed!")}
            >
              Confirm
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PopupDialog;
