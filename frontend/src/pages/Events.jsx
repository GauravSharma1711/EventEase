

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../store/authStore.js';
import useEventStore from '../store/eventStore.js';
import { MdDelete } from "react-icons/md";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import CreateEvent from '../Components/CreateEvent.jsx';
import BookEvent from '../Components/BookEvent.jsx';



const Events = () => {

const navigate = useNavigate();

    const {authUser,logout} = useAuthStore();
   
    
    const {events,fetchAllEvents,deleteEvent} = useEventStore();


    useEffect(() => {
       fetchAllEvents();
    }, [events,fetchAllEvents])
    

   
  

    const handleDeleteEvent = async(e,eventId)=>{
          try {
      e.preventDefault();
          e.stopPropagation();
            if(!authUser || authUser.role!=="admin"){
                toast.error("Not authorized to delete Event")
            }
            await deleteEvent(eventId)
        } catch (error) {
       toast.error("Something went wrong");
          console.error(error);
       }
    }

    const handleLogout = async(e)=>{
    try {
        e.preventDefault();
        if(!authUser){
          toast.error("Login First")
          navigate('/login')
          return;
        }
         await logout();
         navigate('/')
    } catch (error) {
      console.log(error);
      
    }
    }

  return (
  
    <div className='bg-black min-h-screen w-full text-white font-sans'>

   <div className='border-b-2 border-white py-8 px-4 flex flex-col lg:flex-row items-center justify-between rounded-b-lg'>
  <div className='text-center lg:text-left'>
    <h1 className='font-bold text-4xl mb-2'>Events</h1>
    <p className='text-lg text-gray-300'>All Events are listed below</p>
  </div>

  <div className='mt-4 lg:mt-0 flex gap-4'>
    <button 
    onClick={handleLogout}
    className='bg-white text-black px-4 py-2 cursor-pointer rounded-lg'>Logout</button>
    <button
    onClick={()=> {
    if (!authUser) {
      toast.error("Login First");
      navigate('/login');
      return;
    }
    navigate('/profile');
  }}
    className='bg-slate-600 text-white px-4 cursor-pointer py-2 rounded-lg'>Profile</button>
  </div>
</div>


      <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-6 p-8'>
  {events.map(event => (
    <div
      key={event._id}
      to={`/event/${event._id}`}
      className='relative card bg-base-200 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'
    >
      <span className='absolute top-2 right-2 cursor-pointer'>
        <MdDelete 
        
        onClick={(e)=>handleDeleteEvent(e,event._id)}
        size={22} />
      </span>
      <div className="card-body flex flex-col items-center justify-center p-6">
        <Link to={`/event/${event._id}`} >
        <h2 className="card-title text-xl font-semibold text-blue-400 mb-2">
          {event.name}
        </h2>
        </Link>
        <span className='font-light text-[16px] text-white'>
          {event.description}
        </span>
        {
          authUser && <BookEvent eventId={event._id} />
        }
        
      </div>
    </div>
  ))}
      </div>

{
  authUser?.role === "admin" && <CreateEvent />
}

    
      
    </div>
  );
};

export default Events;