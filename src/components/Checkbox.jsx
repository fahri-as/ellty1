import React from "react";

const Checkbox = ({ checked, onChange, indeterminate = false }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onChange(!checked);
  };

  return (
    <div
      onClick={handleClick}
      className={`w-[23px] h-[23px] rounded-[6px] border flex items-center justify-center cursor-pointer transition-all duration-200
        ${
          checked || indeterminate
            ? "bg-[#2469F6] border-[#2469F6] group-hover:bg-[#5087F8] group-hover:border-[#5087F8]"
            : "bg-white border-[#CDCDCD] group-hover:border-[#BDBDBD]"
        }`}>
      {/* Checked state - solid checkmark */}
      {checked && (
        <svg className="text-white" width="15.64" height="11.04" viewBox="0 0 16 12" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M1 6l5 5L15 1" />
        </svg>
      )}

      {/* Indeterminate state */}
      {indeterminate && !checked && <div className="w-2.5 h-0.5 bg-white rounded"></div>}

      {/* Hover state - show outline checkmark when not checked */}
      {!checked && !indeterminate && (
        <svg
          className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          width="15.64"
          height="11.04"
          viewBox="0 0 16 12"
          fill="none"
          stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M1 6l5 5L15 1" />
        </svg>
      )}
    </div>
  );
};

export default Checkbox;
