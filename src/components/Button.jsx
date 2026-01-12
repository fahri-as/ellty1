import React, { useState } from "react";

const Button = ({ children, onClick, className = "" }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleMouseLeave = () => {
    setIsPressed(false);
  };

  // Button states:
  // State 1: Default - #FFCE22
  // State 2: Hover - #FFD84D
  // State 3: Pressed - #FFBD00
  const getBackgroundStyle = () => {
    if (isPressed) {
      return "bg-[#FFBD00]";
    }
    return "bg-[#FFCE22] hover:bg-[#FFD84D]";
  };

  return (
    <button
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      className={`w-[340px] h-[40px] py-[10px] px-[20px] ${getBackgroundStyle()} active:bg-[#FFBD00] font-['Montserrat'] text-[14px] font-medium leading-[130%] text-[#1F2128] rounded-[4px] transition-colors duration-200 cursor-pointer flex items-center justify-center ${className}`}>
      {children}
    </button>
  );
};

export default Button;
