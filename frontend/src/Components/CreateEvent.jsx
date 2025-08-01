import React, { useState } from 'react';
import { IoCreateSharp } from "react-icons/io5";
import useEventStore from '../store/eventStore.js';
import toast from 'react-hot-toast';

const CreateEvent = () => {
  const { createEvent } = useEventStore();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    capacity: '',
    location: '',
    category: '',
    date: ''
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
      await createEvent(formData);
      document.getElementById('create_event_modal').close();
      setFormData({
        name: '',
        description: '',
        capacity: '',
        location: '',
        category: '',
        date: ''
      });
      toast.success("Event created successfully!");
    } catch (error) {
      console.log("Error creating event:", error.message);
      toast.error("Failed to create event.");
    }
  };

  return (
    <>
      <button
        className='ml-44 w-fit border-2 border-white mx-18 px-96 rounded-md flex items-center justify-center gap-2 cursor-pointer'
        onClick={() => document.getElementById('create_event_modal').showModal()}
      >
        <IoCreateSharp />
        <h3>Create Event</h3>
      </button>

      {/* Modal */}
      <dialog id="create_event_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl mb-4">Create New Event</h3>

          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>

          <form onSubmit={handleSubmit} method="dialog" className="flex flex-col gap-4">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Event Name"
              className="input input-bordered focus:outline-none w-full"
              required
            />

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Event Description"
              className="textarea textarea-bordered focus:outline-none w-full"
              required
            ></textarea>

            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              placeholder="Event Capacity"
              className="input input-bordered focus:outline-none w-full"
              required
            />

            {/* LOCATION DROPDOWN */}
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="select select-bordered focus:outline-none w-full"
              required
            >
              <option value="">Select Location</option>
              <option value="Online">Online</option>
              <option value="In-Person">In-Person</option>
            </select>

            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Event Category"
              className="input input-bordered focus:outline-none w-full"
              required
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="input input-bordered focus:outline-none w-full"
              required
            />

            <div className="modal-action">
              <button className="btn border-slate-700 bg-base-200 w-full">Create</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default CreateEvent;
