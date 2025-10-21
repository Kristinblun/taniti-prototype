import React, { useState } from 'react';
import toast from 'react-hot-toast';

import ConfirmModal from '../components/ConfirmModal';

import hotel from '../assets/hotelroom.jpg';
import bedAndBreakfast from '../assets/bedandbreakfast.jpg';
import beachHouse from '../assets/beachHouse.jpg';
import privateCondo from '../assets/privatecondo.jpg';
import privateHome from '../assets/privatehome.jpg';
import hostel from '../assets/hostel.jpg';

export default function BookingAccomodation() {
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const accomodations = [
    { name: 'Hotel', image: hotel },
    { name: ' Bed and Breakfast', image: bedAndBreakfast },
    { name: 'Beach Home', image: beachHouse },
    { name: 'Private Condo', image: privateCondo },
    { name: 'Private Home', image: privateHome },
    { name: 'Hostel', image: hostel },
  ];

  const handleConfirm = () => {
    setShowModal(false);
    toast.success(`You've successfully booked your stay at ${selected.name}`);
    setSelected(null);
  };
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-extrabold text-cyan-400 text-center mt-8 mb-4">
        Book Your Ideal Stay
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {accomodations.map((accomodation) => (
          <div
            key={accomodation.name}
            onClick={() => {
              setSelected(accomodation);
              setShowModal(true);
            }}
            className="relative shadow-lg rounded-2xl cursor-pointer hover:ring-4 ring-teal-400"
          >
            <img
              src={accomodation.image}
              className="object-cover w-full h-full rounded-2xl"
            />
            <h3 className="absolute inset-0 justify-center flex items-center text-white text-3xl font-bold bg-black/20 rounded-2xl">
              {accomodation.name}{' '}
            </h3>
          </div>
        ))}
      </div>

      <ConfirmModal
        show={showModal}
        title={'Confirm Booking'}
        message={`Are you sure you want to book a ${selected?.name}?`}
        onCancel={() => setShowModal(false)}
        onConfirm={handleConfirm}
      />
    </div>
  );
}
