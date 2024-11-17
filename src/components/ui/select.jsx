import React, { useState } from "react";

// Main Select Component
export const Select = ({ children, onValueChange, placeholder }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    onValueChange(value);
  };

  return (
    <div className="relative inline-block w-full">
      <select
        value={selectedValue}
        onChange={handleChange}
        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="" disabled>
          {placeholder || "Select an option"}
        </option>
        {children}
      </select>
    </div>
  );
};

// SelectTrigger for wrapping the Select and SelectValue
export const SelectTrigger = ({ children }) => (
  <div className="relative inline-block">{children}</div>
);

// The dropdown content itself
export const SelectContent = ({ children }) => (
  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg">
    {children}
  </div>
);

// SelectItem remains unchanged, acts as individual <option> for the Select
export const SelectItem = ({ value, children }) => (
  <option value={value} className="px-4 py-2 hover:bg-gray-200">
    {children}
  </option>
);

// SelectValue added to display placeholder or selected value
export const SelectValue = ({ placeholder, selectedValue }) => (
  <div className="text-gray-500">{selectedValue || placeholder}</div>
);
