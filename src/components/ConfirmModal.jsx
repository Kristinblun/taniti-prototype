import React from 'react';

export default function ConfirmModal({
  show,
  title,
  message,
  onConfirm,
  onCancel,
}) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2"> {title} </h3>
        <p className="text-gray-600 mb-6"> {message} </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-500 transition"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
