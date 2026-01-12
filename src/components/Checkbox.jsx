import React, { useState } from "react";

const Checkbox = ({ checked, onChange, indeterminate = false }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    onChange(!checked);
  };

  const handleMouseDown = (e) => {
    e.stopPropagation();
    setIsPressed(true);
  };

  const handleMouseUp = (e) => {
    e.stopPropagation();
    setIsPressed(false);
  };

  const handleMouseLeave = () => {
    setIsPressed(false);
  };

  // Determine background and border colors based on state
  const getStyles = () => {
    if (checked || indeterminate) {
      // Checked/Indeterminate states
      if (isPressed) {
        // State 6/7: Checked pressed (Same color as default, thicker border per Figma)
        return "bg-[#2469F6] border-[#2469F6] border-[3px]";
      }
      // State 4/5: Checked default/hover, State 7: Indeterminate default
      return "bg-[#2469F6] border-[#2469F6] group-hover:bg-[#5087F8] group-hover:border-[#5087F8]";
    } else {
      // Unchecked states
      if (isPressed) {
        // State 3: Unchecked pressed (no bg change, just border)
        return "bg-white border-[#ADADAD]";
      }
      // State 1/2: Unchecked default/hover
      return "bg-white border-[#CDCDCD] group-hover:border-[#BDBDBD]";
    }
  };

  return (
    <div
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      className={`w-[25px] h-[25px] rounded-[6px] border flex items-center justify-center cursor-pointer transition-all duration-200 ${getStyles()}`}>
      {/* Checked state - solid checkmark */}
      {checked && (
        <svg className="text-white" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 6L6 11L16 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}

      {/* Hover/Pressed state - show outline checkmark when not checked */}
      {!checked && (
        <svg
          className={`transition-opacity duration-200 ${
            isPressed ? "text-[#878787] opacity-100" : "text-[#E3E3E3] opacity-0 group-hover:opacity-100"
          }`}
          width="17"
          height="12"
          viewBox="0 0 17 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1 6L6 11L16 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
};

export default Checkbox;
