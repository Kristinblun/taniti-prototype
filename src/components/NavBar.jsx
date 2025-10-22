import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-yellow-50 shadow-md shadow-cyan-400/20 flex justify-between items-center px-8 py-4 sticky top-0 z-50 text-cyan-700">
      <Link to="/">
        <div className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-orange-300 bg-clip-text text-transparent">
          {' '}
          Taniti{' '}
        </div>
      </Link>
      <ul className="flex space-x-6">
        <li>
          <Link
            to="/"
            className="text-lg tracking-wide hover:text-cyan-500 transition"
          >
            {' '}
            Home{' '}
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-lg tracking-wide hover:text-cyan-500 transition"
          >
            {' '}
            About
          </Link>
        </li>
        <li>
          <Link
            to="/adventures"
            className="text-lg tracking-wide hover:text-cyan-500 transition"
          >
            {' '}
            Adventures{' '}
          </Link>
        </li>
        <li>
          <Link
            to="/foodandculture"
            className=" text-lg tracking-wide hover:text-cyan-500 transition"
          >
            {' '}
            Food & Culture{' '}
          </Link>
        </li>
        <li>
          <Link
            to="/booking"
            className=" text-lg bg-cyan-400 text-white font-semibold px-5 py-2 rounded-2xl hover:bg-cyan-500 shadow-md transition"
          >
            {' '}
            Book Trip{' '}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
