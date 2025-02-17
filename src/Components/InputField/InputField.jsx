import React from "react";
//InpuField Component
const InputField = ({
  id,
  type,
  placeholder,
  icon,
  value = "",
  onChange,
  width = "w-full",
  ariaLabel,
  ...rest
}) => {
  return (
    <div className="relative flex items-center">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`block ${width} py-2 pl-3 pr-10 text-sm  text-black 
        border-2 rounded-md font-inter border-gray_text focus:outline-none focus:ring-2
         focus:ring-purple-500 focus:border-purple-500`}
        aria-label={ariaLabel || placeholder}
        {...rest}
      />

      {icon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray_text">
          {icon}
        </div>
      )}
    </div>
  );
};

export default InputField;
