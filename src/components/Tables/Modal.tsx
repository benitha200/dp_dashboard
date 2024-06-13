// components/Modal.js

import React from 'react';

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2">
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Entity Details</h2>
        <div>
          {Object.keys(data).map((key) => (
            <div key={key} className="mb-2">
              <label className="block font-bold">{key.replace(/([A-Z])/g, ' $1')}:</label>
              <input
                type="text"
                value={String(data[key] ?? '')}
                readOnly
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
