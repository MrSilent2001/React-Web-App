import React, { useState } from "react";
import { Button } from "../ui/button";
import { RiDeleteBin6Line } from "react-icons/ri";

//Delete Popup
const DeleteConfirm = ({ onDelete, onCancel }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleCancel = () => {
    setIsVisible(false);
  };

  const handleClose = onCancel || handleCancel;

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md p-6 text-center bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-red-100 rounded-full">
            <RiDeleteBin6Line className="w-16 h-12 text-red-400" />
          </div>
        </div>

        <h4 className="mb-4 font-semibold text-md">Are you want to delete ?</h4>

        <div className="flex justify-center space-x-4">
          <Button
            variant="outline"
            size="default"
            onClick={handleClose}
            className="w-1/3 px-4 py-2 font-semibold text-black duration-150 rounded-lg bg-[#fafafa] transbition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Cancel
          </Button>
          <Button
            variant="outline"
            size="default"
            onClick={onDelete}
            className="w-1/3 px-4 py-2 font-semibold text-white transition duration-150 rounded-lg bg-red_btn hover:bg-red_light focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirm;
