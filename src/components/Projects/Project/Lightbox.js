// Lightbox.js
import React from "react";

const Lightbox = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <img src={imageUrl} alt="Full Screen" className="max-h-full max-w-full" />
      <button
        className="btn btn-circle absolute top-8 right-10"
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Lightbox;
