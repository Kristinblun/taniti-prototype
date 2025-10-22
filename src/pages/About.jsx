import React from 'react';
import island from '../assets/island.jpg';

export default function About() {
  return (
    <div className="mt-8">
      <div className="relative">
        <img src={island} className="w-full h-128" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center ">
            About island
          </h1>
        </div>
      </div>

      <section className=" px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-700">
          Discover Taniti
        </h2>
        <p className="leading-relaxed text-lg text-gray-800">
          Taniti is a small tropical island in the Pacific, blessed with golden
          beaches, lush rainforests, and a mountainous interior that includes a
          scenic active volcano. Home to about 20,000 residents, Taniti blends a
          rich indigenous culture with a growing tourism scene, offering
          visitors both adventure and relaxation.
        </p>
      </section>
      <div className="flex gap-5">
        <section className="bg-yellow-100 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-700"> FAQ </h2>
          <ul className="list-decimal list-inside text-left space-y-4 text-gray-700 leading-relaxed">
            <li>
              Power outlets are 120 volts (the same as in the United States).
            </li>
            <li>
              Alcohol is not allowed to be served or sold between the hours of
              midnight and 9:00 a.m.
            </li>
            <li>
              The drinking age on Taniti is 18 and the drinking age is not
              strictly enforced.
            </li>
            <li>
              Many younger Tanitians speak fluent English. Very little English
              is spoken in rural areas, especially by the older residents.
            </li>
            <li>
              There is one hospital and several clinics. The hospital has many
              multilingual employees.
            </li>
            <li>
              Violent crime is very rare on Taniti, but as tourism increases,
              there are more reports of pickpocketing and other petty crimes.
            </li>
            <li>
              Taniti enjoys a large number of national holidays, and many
              tourist attractions and restaurants will be closed on holidays, so
              visitors should plan accordingly.
            </li>
            <li>
              Taniti uses the U.S. dollar as its currency, but many businesses
              will also accept euros and yen. Several banks facilitate currency
              exchange, and many businesses accept major credit cards.
            </li>
          </ul>
        </section>

        <section className="bg-cyan-100 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-700">
            {' '}
            Transportation{' '}
          </h2>
          <ul className="list-none space-y-4 text-gray-700 leading-relaxed">
            <li>
              <strong>Air Travel:</strong> Most visitors arrive by air. Taniti’s
              small airport accommodates small jets and propeller planes, with
              plans to expand for larger aircraft in the coming years.
            </li>
            <li>
              <strong>Cruise Ship:</strong> A small cruise ship docks in Yellow
              Leaf Bay once per week, staying overnight.
            </li>
            <li>
              <strong>Public Transit:</strong> Buses in Taniti City operate from
              5 a.m. to 11 p.m. daily, with private buses serving other areas.
            </li>
            <li>
              <strong>Taxis and Rentals:</strong> Taxis are available in Taniti
              City, and rental cars can be obtained near the airport.
            </li>
            <li>
              <strong>Biking & Walking:</strong> Bikes and helmets are available
              for rent from several vendors. Taniti City is flat and very
              walkable, especially around Merriton Landing.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
