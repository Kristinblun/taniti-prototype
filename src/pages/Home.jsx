import React from 'react';
import { Link } from 'react-router-dom';

import beachFeature from '../assets/beach-unsplash.jpg';
import hotel from '../assets/hotel.jpg';
import plane from '../assets/plane.jpg';
import cruise from '../assets/cruise.jpg';

export default function Home() {
  return (
    <div className="mt-8">
      <div className="relative">
        <img
          src={beachFeature}
          className="w-full h-128 object-cover shadow-md"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
            The Taniti people invite you to a tropical paradise
          </h1>
        </div>
      </div>

      <div className="bg-yellow-50 py-10 text-center my-8 shadow-md">
        <div className="text-2xl font-medium text-gray-800 max-w-3xl mx-auto leading-relaxed space-y-6">
          <p>
            Relax on golden warm beaches and snorkel in crystal-clear waters.
          </p>
          <p>
            Hike a volcano, zipline through lush rainforests — fun for the whole
            family!
          </p>
        </div>
      </div>

      <Link to="/booking">
        <div className=" relative flex h-60 shadow-md">
          <h2 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold bg-black/30">
            {' '}
            Book your trip now!
          </h2>
          <img src={cruise} className="w-1/3" />
          <img src={plane} className="w-1/3" />
          <img src={hotel} className="w-1/3" />
        </div>
      </Link>
    </div>
  );
}
