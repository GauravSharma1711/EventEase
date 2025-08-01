

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../store/authStore.js';
import useEventStore from '../store/eventStore.js';
import { MdDelete } from "react-icons/md";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const Events = () => {

const navigate = useNavigate();

    const {authUser} = useAuthStore();
   
    
    const {events,fetchAllEvents} = useEventStore();


    useEffect(() => {
       fetchAllEvents();
    }, [events,fetchAllEvents])
    

    const handleBookingClick = (e)=>{
        try {
             e.preventDefault();
          e.stopPropagation();
            if(!authUser){
                toast.error("login first")
                navigate('/login')
            }
        } catch (error) {
            toast.error("Something went wrong");
          console.error(error);
        }
    }

    const handleDeleteEvent = (e)=>{
          try {
      e.preventDefault();
          e.stopPropagation();
            if(!authUser || authUser.role!=="admin"){
                toast.error("Not authorized to delete Event")
            }
        } catch (error) {
       toast.error("Something went wrong");
          console.error(error);
       }
    }

  return (
  
    <div className='bg-black min-h-screen w-full text-white font-sans'>

      <div className='border-b-2 border-white py-8 px-4 flex flex-col items-center lg:items-start justify-center rounded-b-lg'>
        <h1 className='font-bold text-4xl mb-2'>Events</h1>
        <p className='text-lg text-gray-300'>All Events are listed below</p>
      </div>

      <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-6 p-8'>
  {events.map(event => (
    <Link
      key={event._id}
      to={`/event/${event._id}`}
      className='relative card bg-base-200 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'
    >
      <span className='absolute top-2 right-2 cursor-pointer'>
        <MdDelete 
        
        onClick={handleDeleteEvent}
        size={22} />
      </span>
      <div className="card-body flex flex-col items-center justify-center p-6">
        <h2 className="card-title text-xl font-semibold text-blue-400 mb-2">
          {event.name}
        </h2>
        <span className='font-light text-[16px] text-white'>
          {event.description}
        </span>
        <button 
        onClick={handleBookingClick}
        className=' bg-slate-600 rounded-4xl px-24 py-2' >Book Event</button>
      </div>
    </Link>
  ))}
      </div>
      
    </div>
  );
};

export default Events;