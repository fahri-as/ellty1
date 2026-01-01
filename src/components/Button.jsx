import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[340px] h-[40px] py-[10px] px-[20px] bg-[#FFCE22] hover:bg-[#FFD84D] font-['Montserrat'] text-[14px] font-normal leading-[130%] text-gray-800 rounded-[4px] transition-colors duration-200 cursor-pointer flex items-center justify-center ${className}`}>
      {children}
    </button>
  );
};

export default Button;
