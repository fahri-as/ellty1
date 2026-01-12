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
        // State 6: Checked pressed / State 8: Indeterminate pressed
        return "bg-[#1E5AD8] border-[#1E5AD8]";
      }
      // State 4/5: Checked default/hover, State 7: Indeterminate default
      return "bg-[#2469F6] border-[#2469F6] group-hover:bg-[#5087F8] group-hover:border-[#5087F8]";
    } else {
      // Unchecked states
      if (isPressed) {
        // State 3: Unchecked pressed
        return "bg-[#F5F5F5] border-[#ADADAD]";
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
        <svg className="text-white" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5L5.5 9.5L14 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}

      {/* Indeterminate state - dash */}
      {indeterminate && !checked && <div className="w-[11px] h-[2px] bg-white rounded-[1px]"></div>}

      {/* Hover state - show outline checkmark when not checked and not indeterminate */}
      {!checked && !indeterminate && (
        <svg
          className="text-[#CDCDCD] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          width="15"
          height="11"
          viewBox="0 0 15 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5L5.5 9.5L14 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
};

export default Checkbox;
