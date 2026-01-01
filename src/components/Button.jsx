import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-3 px-4 bg-[#FFCA28] hover:bg-[#FFB300] text-gray-800 font-medium rounded-lg transition-colors duration-200 cursor-pointer ${className}`}>
      {children}
    </button>
  );
};

export default Button;
