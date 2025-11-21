import React from "react";
export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded transition-colors focus:outline-none focus:ring focus:ring-yellow-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}