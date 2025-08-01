import React, { useState } from 'react';
import useEventStore from '../store/eventStore.js';


const UpdateEvent = ({eventId}) => {

    
    
  const { updateEvent } = useEventStore();

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
      await updateEvent(eventId,formData);
      document.getElementById('update_event_modal').close();
      setFormData({
        name: '',
        description: '',
        capacity: '',
        location: '',
        category: '',
        date: ''
      });
    } catch (error) {
      console.log("Error updating event:", error.message);
     
    }
  };

  return (
    <>
      <button
         className='bg-slate-600 rounded-md px-4 py-2'
        onClick={() => document.getElementById('update_event_modal').showModal()}
      >
        
        <h3>Update Event</h3>
      </button>

      {/* Modal */}
      <dialog id="update_event_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl mb-4">Update Event</h3>

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
              
            />

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Event Description"
              className="textarea textarea-bordered focus:outline-none w-full"
              
            ></textarea>

            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              placeholder="Event Capacity"
              className="input input-bordered focus:outline-none w-full"
              
            />

            {/* LOCATION DROPDOWN */}
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="select select-bordered focus:outline-none w-full"
             
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
             
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="input input-bordered focus:outline-none w-full"
           
            />

            <div className="modal-action">
              <button className="btn border-slate-700 bg-base-200 w-full">Update</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default UpdateEvent;
