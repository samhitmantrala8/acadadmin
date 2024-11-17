// checkbox.jsx
import React from "react";

export const Checkbox = ({ checked, onCheckedChange }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      className="form-checkbox h-5 w-5 text-blue-600"
    />
  );
};
