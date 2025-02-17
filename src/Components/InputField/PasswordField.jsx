import React, { useState } from 'react';
import { Button } from '@/Components/ui/button'; // Import shadcn Button component
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

const PasswordField = ({
  id,
  type = 'text',
  placeholder,
  icon,
  value = '',
  onChange,
  width = 'w-full',
  ariaLabel,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="relative flex items-center">
      {/* Input field */}
      <input
        id={id}
        type={type === 'password' && isPasswordVisible ? 'text' : type} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`block ${width} py-2 pl-3 pr-10 text-sm bg-gray-100 shadow-sm
          focus:bg-white text-black border-2 rounded-md font-inter
          border-gray_text focus:outline-none focus:ring-2 focus:ring-purple-500
          focus:border-purple-500 transition-all`}
        aria-label={ariaLabel || placeholder}
        {...rest}
      />

      {/* Password visibility toggle button */}
      {type === 'password' && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <Button
            type="button" 
            variant="ghost" 
            onClick={togglePasswordVisibility} 
            className="text-gray-500 bg-transparent border-none shadow-none pointer-events-auto"
          >
            {isPasswordVisible ? <GoEye /> : <GoEyeClosed />} 
          </Button>
        </div>
      )}

      
      {icon && type !== 'password' && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 pointer-events-none">
          {icon}
        </div>
      )}
    </div>
  );
};

export default PasswordField;
