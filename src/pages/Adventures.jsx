import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';

import BookButton from '../components/BookButton';
import ConfirmModal from '../components/ConfirmModal';

import relaxBeach from '../assets/releaxbeach.avif';
import snorkel from '../assets/snorkel.jpg';
import volcano from '../assets/volcanohike.jpg';
import zipline from '../assets/ziplineforest.jpg';

export default function Adventures() {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);

  const activities = [
    {
      name: 'beach',
      caption: 'Relax on the beach',
      image: relaxBeach,
      reverse: true,
      bookable: false,
    },
    {
      name: 'snorkeling',
      caption: 'Snorkel with tropical fishes',
      image: snorkel,
      reverse: false,
      bookable: true,
    },
    {
      name: 'volcano',
      caption: 'Explore a volcano',
      image: volcano,
      reverse: true,
      bookable: true,
    },
    {
      name: 'ziplining',
      caption: 'Zipline Through lush rainforest',
      image: zipline,
      reverse: false,
      bookable: true,
    },
  ];

  const handleConfirm = () => {
    setShowModal(false);
    toast.success(`Your ${selected} adventure is booked!`);
  };
  return (
    <div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-400 text-center my-8">
        {' '}
        Adventures in Taniti{' '}
      </h1>

      {activities.map((activity) => (
        <div
          key={activity.name}
          className={`flex items-center ${
            activity.reverse ? 'flex-row-reverse' : ''
          }`}
        >
          <div className="w-1/2 p-2">
            <img
              src={activity.image}
              className="rounded-lg shadow-lg object-cover h-96 w-full"
            />{' '}
          </div>
          <div className="w-1/2">
            <h2 className="text-orange-400 font-extrabold text-xl md:text-3xl p-4 ">
              {activity.caption}
            </h2>
            {activity.bookable && (
              <BookButton
                name={activity.name}
                onClick={() => {
                  setSelected(activity.name);
                  setShowModal(true);
                }}
                backgroundColor="bg-cyan-400"
                hoverColor="hover:bg-cyan-500"
              />
            )}
          </div>
        </div>
      ))}

      <ConfirmModal
        show={showModal}
        title="Confirm Booking"
        message={`Are you sure you want to book ${selected}?`}
        onCancel={() => setShowModal(false)}
        onConfirm={handleConfirm}
      />
    </div>
  );
}
