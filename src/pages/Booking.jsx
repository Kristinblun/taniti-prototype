import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmModal from '../components/ConfirmModal';

import plane from '../assets/plane.jpg';
import cruise from '../assets/cruise.jpg';
import hotel from '../assets/hotel.jpg';

import snorkel from '../assets/snorkel.jpg';
import volcano from '../assets/volcanohike.jpg';
import zipline from '../assets/ziplineforest.jpg';
import artGallery from '../assets/artgallery.jpg';
import dance from '../assets/dance.jpg';
import museum from '../assets/museum.jpg';

export default function Booking() {
  const bookingOptions = [
    { name: 'Cruise', image: cruise },
    { name: 'Flight', image: plane },
    { name: 'Accomodation', image: hotel, link: '/bookingaccomodation' },
  ];
  const activities = [
    { name: 'Snorkeling', image: snorkel },
    { name: 'Volcano Exploration', image: volcano },
    { name: 'Rainforest Ziplining', image: zipline },
    { name: 'Art Gallery', image: artGallery },
    { name: 'Traditional Dance', image: dance },
    { name: 'Museum', image: museum },
  ];

  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    setShowModal(false);
    setSelected(null);
    toast.success(`You've successfully booked your ${selected.name}`);
  };

  return (
    <div>
      <section>
        <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-400 text-center my-8">
          {' '}
          Book Your Tahini Adventure{' '}
        </h1>
        <div className="flex gap-6">
          {bookingOptions.map((option) => {
            const content = (
              <>
                <img
                  src={option.image}
                  className="object-cover w-full h-full rounded-2xl shadow-lg cursor-pointer  hover:ring-4 ring-teal-400"
                />
                <h3 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold bg-black/10 rounded-2xl shadow-lg">
                  {option.name}
                </h3>
              </>
            );

            return (
              <div
                onClick={() => {
                  if (option.link) {
                    return;
                  }
                  setSelected(option);
                  setShowModal(true);
                }}
                className="w-1/3 relative flex cursor-pointer rounded-2xl  hover:ring-4 ring-teal-400"
              >
                {option.link ? (
                  <Link to={option.link}> {content} </Link>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <h2 className='"text-2xl md:text-4xl font-extrabold text-orange-400 text-center my-8'>
          {' '}
          Book Activities{' '}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer">
          {activities.map((activity) => (
            <div
              className="flex relative rounded-2xl hover:ring-4 ring-orange-400"
              onClick={() => {
                setSelected(activity);
                setShowModal(true);
              }}
            >
              <img
                src={activity.image}
                className="w-full h-full rounded-2xl shadow-lg"
              />
              <h3 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold bg-black/10 rounded-2xl shadow-lg">
                {' '}
                {activity.name}
              </h3>
            </div>
          ))}
        </div>
      </section>
      <ConfirmModal
        show={showModal}
        title={'Confirm Booking'}
        message={`Are you sure you want to book the ${selected?.name}`}
        onCancel={() => setShowModal(false)}
        onConfirm={handleConfirm}
      />
    </div>
  );
}
