import React, { useState } from 'react';

import useBookingStore from '../store/bookingStore.js'; 


const BookEvent = ({ eventId }) => {

   

  const { bookSeats } = useBookingStore();

  const [formData, setFormData] = useState({
    seats: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await bookSeats(eventId, formData);
      document.getElementById(`book_modal_${eventId}`).close();
     
      setFormData({ seats: '' });
    } catch (error) {
      console.log("Error booking seats:", error.message);
    }
  };

  const handleBtnClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); // FIXED SPELLING
    document.getElementById(`book_modal_${eventId}`).showModal();
  };

  return (
    <>
      <button
        className='bg-slate-600 rounded-4xl px-14 py-2'
        onClick={handleBtnClick}
      >
        <h3>Book Seats</h3>
      </button>

      {/* UNIQUE Modal per event */}
      <dialog id={`book_modal_${eventId}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl mb-4">Book Seats</h3>

          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>

          <form onSubmit={handleSubmit} method="dialog" className="flex flex-col gap-4">
            <input
              type="number"
              name="seats"
              value={formData.seats}
              onChange={handleChange}
              placeholder="Number of Seats"
              className="input input-bordered focus:outline-none w-full"
              required
            />

            <div className="modal-action">
              <button className="btn border-slate-700 bg-base-200 w-full">Book</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default BookEvent;
