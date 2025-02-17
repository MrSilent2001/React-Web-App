import React from "react";
import { Button } from "../ui/button";

//Defaul button componets
const DefaultButton = ({ handleClick, className = '', btnLabel = '',Icon }) => {
  return (
    <Button 
      onClick={handleClick} 
      variant="default" 
      size="default" 
      className={`bg-gradient-to-r from-purple-500 to-purple-960  
        text-white font-inter font-semibold py-2 px-4 rounded hover:bg-gradient-to-r
         hover:from-purple-700 hover:to-purple-500 ${className}`}
    >
      {btnLabel} 
      {Icon}
    </Button>
  );
};

export default DefaultButton;
