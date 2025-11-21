import React from "react";
import Button from "./Button";
export default function Modal({ open, title, children, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-6 relative">
        {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}
        {children}
        <Button className="w-full mt-4" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
}