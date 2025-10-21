import React from 'react';

export default function BookButton({
  name,
  onClick,
  backgroundColor,
  hoverColor,
}) {
  return (
    <button
      onClick={onClick}
      className={`${backgroundColor} cursor-pointer ${hoverColor} text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition duration-200`}
    >
      {' '}
      Book {name}{' '}
    </button>
  );
}
