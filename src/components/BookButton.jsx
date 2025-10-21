import React from 'react';

export default function BookButton({ name, onClick, backgroundColor }) {
  return (
    <button
      onClick={onClick}
      className={`${backgroundColor} cursor-pointer hover:bg-cyan-500 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition duration-200`}
    >
      {' '}
      Book {name}{' '}
    </button>
  );
}
