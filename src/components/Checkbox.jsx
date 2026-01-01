import React from "react";

const Checkbox = ({ checked, onChange, indeterminate = false }) => {
  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <div
      onClick={handleClick}
      className={`w-5 h-5 rounded border-2 flex items-center justify-center cursor-pointer transition-all duration-200 group
        ${checked || indeterminate ? "bg-[#2196F3] border-[#2196F3]" : "bg-white border-gray-300 hover:border-gray-400"}`}>
      {/* Checked state - solid checkmark */}
      {checked && (
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      )}

      {/* Indeterminate state */}
      {indeterminate && !checked && <div className="w-2.5 h-0.5 bg-white rounded"></div>}

      {/* Hover state - show outline checkmark when not checked */}
      {!checked && !indeterminate && (
        <svg
          className="w-3 h-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      )}
    </div>
  );
};

export default Checkbox;
