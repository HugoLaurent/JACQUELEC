import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // Si le modal n'est pas ouvert, rien ne s'affiche

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-md w-11/12 max-w-lg"
        onClick={(e) => e.stopPropagation()} // Empêche de fermer le modal en cliquant à l'intérieur
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-xl font-bold"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}
