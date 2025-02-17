import React from 'react';
import { RiCheckLine } from "react-icons/ri";  

const SuccessConfirm = ({ message, onConfirm }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md p-6 text-center bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-purple-200 rounded-full">
            <RiCheckLine className="w-16 h-12 text-purple-600" />
          </div>
        </div>
        <h4 className="mb-4 font-semibold text-md">{message || "Action was successful!"}</h4>
        <div className="flex justify-center">
          <button
            onClick={onConfirm}
            className="w-1/3 px-4 py-2 font-semibold bg-purple-700 rounded-lg text-purple-50 hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessConfirm;
