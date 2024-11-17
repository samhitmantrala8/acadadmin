// button.jsx
import React from "react";

// Change the export to default
const Button = ({ children, onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 ${className}`}
    >
      {children}
    </button>
  );
};

// Export Button as default
export default Button;
