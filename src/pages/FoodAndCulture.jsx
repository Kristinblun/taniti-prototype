import React from 'react';
import { useState } from 'react';

import seafood from '../assets/seafood.jpg';
import american from '../assets/american.jpg';
import panasian from '../assets/pan-asian.jpg';

import artGallery from '../assets/artgallery.jpg';
import dance from '../assets/dance.jpg';
import museum from '../assets/museum.jpg';

import fish1 from '../assets/fishrestaurant1.jpg';
import fish2 from '../assets/fishrestaurant2.jpg';
import fish3 from '../assets/fishrestaurant3.jpg';
import fish4 from '../assets/fishrestaurant4.jpg';
import fish5 from '../assets/fishrestaurant5.jpg';

import american1 from '../assets/american1.jpg';
import american2 from '../assets/american2.jpg';
import american3 from '../assets/american3.jpg';

import panasian1 from '../assets/panasian1.jpg';
import panasian2 from '../assets/panasian2.jpg';

export default function FoodAndCulture() {
  const cuisines = [
    {
      name: 'Local Fish',
      image: seafood,
      restaurants: [
        {
          name: 'Ocean Breeze Grill',
          image: fish1,
          rating: 4,
          priceRange: '$$',
        },
        { name: 'Taniti Tides', image: fish2, rating: 5, priceRange: '$$$' },
        { name: "Reef's Kitchen", image: fish3, rating: 4, priceRange: '$' },
        {
          name: "The Fisherman's Table",
          image: fish4,
          rating: 4,
          priceRange: '$$',
        },
        { name: 'Sand Cafe', image: fish5, rating: 3, priceRange: '$' },
      ],
    },
    {
      name: 'American',
      image: american,
      restaurants: [
        { name: 'Taniti Diner', image: american1, rating: 4, priceRange: '$' },
        {
          name: 'Volcano Burger',
          image: american2,
          rating: 5,
          priceRange: '$$',
        },
        {
          name: 'Adventure Cafe',
          image: american3,
          rating: 4,
          priceRange: '$$$',
        },
      ],
    },

    {
      name: 'Pan-asian',
      image: panasian,
      restaurants: [
        {
          name: 'Golden Lotus',
          image: panasian1,
          rating: 5,
          priceRange: '$$$',
        },
        {
          name: 'Bamboo Garden',
          image: panasian2,
          rating: 4,
          priceRange: '$$',
        },
      ],
    },
  ];

  const [selectedCuisine, setSelectedCuisine] = useState(cuisines[0]);
  return (
    <div>
      <section>
        <h1 className="text-4xl md:text-6xl font-extrabold text-orange-400 text-center my-8">
          {' '}
          Taste Taniti
        </h1>
        <div className="flex gap-3">
          {cuisines.map((cuisine) => (
            <div
              className={`relative cursor-pointer rounded-2xl ${
                selectedCuisine.name === cuisine.name
                  ? 'ring-4 ring-orange-400'
                  : ''
              } hover:scale-101`}
              onClick={() => setSelectedCuisine(cuisine)}
            >
              <img src={cuisine.image} className="w-full h-full rounded-2xl" />
              <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
                <h3 className="text-white/80 text-2xl md:text-3xl lg:text-4xl font-semibold text-center px-4">
                  {cuisine.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 ">
          {selectedCuisine.restaurants.map((restaurant) => (
            <div className=" flex bg-yellow-100 rounded-2xl shadow-md p-6 ">
              <img
                src={restaurant.image}
                className="object-cover w-1/2 h-36 md:h-48"
              />
              <div className="flex flex-col justify-center w-1/2 p-4 text-gray-700">
                <h3 className="text-1xl md:text-2xl font-semibold mb-2">
                  {' '}
                  {restaurant.name}
                </h3>
                <p className="md:text-2xl"> {'⭐'.repeat(restaurant.rating)}</p>
                <p className="md:text-2xl font-semibold ">
                  {' '}
                  {restaurant.priceRange}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h1 className="text-4xl md:text-6xl font-extrabold text-orange-400 text-center my-8">
          {' '}
          Experience Culture
        </h1>
        <div className="flex items-center">
          <div className=" w-1/2 p-2">
            <img
              src={museum}
              className="rounded-lg shadow-lg object-cover w-full h-96"
            />
          </div>
          <h2 className="w-1/2 text-cyan-400 font-extrabold text-xl md:text-3xl p-4">
            {' '}
            Explore Taniti's history at the museum
          </h2>
        </div>

        <div className="flex items-center flex-row-reverse">
          <div className="w-1/2 p-2">
            <img
              src={artGallery}
              className="rounded-lg shadow-lg object-cover w-full h-96"
            />
          </div>
          <h2 className="w-1/2 text-cyan-400 font-extrabold text-xl md:text-3xl p-4">
            {' '}
            Admire local artwork at the gallery
          </h2>
        </div>

        <div className="flex items-center">
          <div className="w-1/2 p-2">
            <img
              src={dance}
              className="rounded-lg shadow-lg object-cover w-full h-96"
            />
          </div>
          <h2 className="w-1/2 text-cyan-400 font-extrabold text-xl md:text-3xl p-4">
            Experience vibrant culture through traditional dance
          </h2>
        </div>
      </section>
    </div>
  );
}
