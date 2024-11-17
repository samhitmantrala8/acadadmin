// src/components/ui/input.js
import React from 'react';

const Input = ({ className, ...props }) => {
  return (
    <input
      className={`border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
};

export default Input;
