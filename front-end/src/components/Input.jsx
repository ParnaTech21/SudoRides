import React from "react";
export default function Input({ className="", ...props }) {
  return (
    <input
      className={`w-full border border-gray-300 rounded px-3 py-2 focus:border-yellow-500 focus:ring focus:ring-yellow-200 outline-none transition ${className}`}
      {...props}
    />
  );
}