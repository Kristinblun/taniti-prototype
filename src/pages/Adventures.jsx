import React from 'react';

import relaxBeach from '../assets/releaxbeach.avif';
import snorkel from '../assets/snorkel.jpg';
import volcano from '../assets/volcanohike.jpg';
import zipline from '../assets/ziplineforest.jpg';

export default function Adventures() {
  return (
    <div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-400 text-center my-8">
        {' '}
        Adventures in Taniti{' '}
      </h1>
      <div className="flex items-center flex-row-reverse">
        <div className="w-1/2 p-2">
          <img
            src={relaxBeach}
            className="rounded-lg shadow-lg object-cover h-96 w-full"
          />
        </div>

        <h2 className="w-1/2 text-orange-400 font-extrabold text-xl md:text-3xl p-4 ">
          {' '}
          Relax on the beach{' '}
        </h2>
      </div>

      <div className="flex items-center">
        <div className="w-1/2 p-2">
          <img
            src={snorkel}
            className="rounded-lg shadow-lg object-cover h-96 w-full"
          />
        </div>

        <h2 className="w-1/2 text-orange-400 font-extrabold text-xl md:text-3xl p-4">
          {' '}
          Snorkel with tropical fishes{' '}
        </h2>
      </div>

      <div className="flex items-center flex-row-reverse">
        <div className="w-1/2 p-2">
          <img
            src={volcano}
            className="rounded-lg shadow-lg object-cover h-96 w-full"
          />
        </div>

        <h2 className="w-1/2 text-orange-400 font-extrabold text-xl md:text-3xl p-4">
          {' '}
          Explore a volcano{' '}
        </h2>
      </div>

      <div className="flex items-center">
        <div className="w-1/2 p-2">
          <img
            src={zipline}
            className="rounded-lg shadow-lg object-cover h-96 w-full"
          />
        </div>

        <h2 className="w-1/2 text-orange-400 font-extrabold text-xl md:text-3xl p-4">
          {' '}
          Zipline through lush rainforest{' '}
        </h2>
      </div>
    </div>
  );
}
