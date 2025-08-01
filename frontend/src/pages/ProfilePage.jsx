import React from 'react'

import useAuthStore from '../store/authStore.js'
import { useEffect } from 'react';
import useBookingStore from '../store/bookingStore.js'
import formatDate from '../utils/formstDate.js';

const ProfilePage = () => {

  const {authUser,getCurrentUser} = useAuthStore();

  const {myBookings,fetchMyBookings,cancelBooking} = useBookingStore();

  console.log(myBookings);
  
  

  useEffect(() => {
   getCurrentUser();   
    }, [getCurrentUser,authUser])
  
      useEffect(() => {
   fetchMyBookings();   
    }, [fetchMyBookings])


    const handelCancelBooking = (e,bookingId)=>{
      try {
        e.preventDefault();
        cancelBooking(bookingId)
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className='bg-black min-h-screen w-full text-white font-sans'>
<>
      <div className='border-b-2 border-white py-2 px-2 flex items-center lg:items-start justify-between rounded-b-lg'>
        <div className=' flex flex-col justify-start' >
        <h1 className='font-bold text-4xl mb-2'>My Profile</h1>
       
        </div>
       
      </div>
</>
      <div className='grid grid-cols-1 place-items-center  lg:grid-cols-2 gap-6 p-8'>

     
    
        <div className='card bg-base-200 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <div className="card-body flex flex-col items-center justify-center p-6">
            <h2 className="card-title text-xl font-semibold text-blue-400 mb-2">username</h2>
            <span className='font-bold text-2xl text-white'>{authUser?.username}</span>
          </div>
        </div>

        
        <div className='card bg-base-200 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <div className="card-body flex flex-col items-center justify-center p-6">
            <h2 className="card-title text-xl font-semibold text-green-400 mb-2">email</h2>
            <span className='font-bold text-2xl text-white'>{authUser?.email}</span>
          </div>
        </div>

      
        <div className='card bg-base-200 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <div className="card-body flex flex-col items-center justify-center p-6">
            <h2 className="card-title text-xl font-semibold text-red-400 mb-2">fullname</h2>
            <span className='font-bold text-2xl text-white'>{authUser?.fullName}</span>
          </div>
        </div>

       
        <div className='card bg-base-200 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <div className="card-body flex flex-col items-center justify-center p-6">
            <h2 className="card-title text-xl font-semibold text-yellow-400 mb-2">role</h2>
            <span className='font-bold text-2xl text-white'>{authUser?.role}</span>
          </div>
        </div>

      


      </div>


<div className='px-6 mt-4'>
  <h2 className='text-3xl font-bold mb-4'>My Bookings</h2>

  {
    myBookings.map((booking) => (
      <div
        key={booking._id}
        className=' relative bg-base-200 border border-gray-700 rounded-lg p-4 mb-4 shadow-md'
      >
        <h3 className='text-2xl font-semibold text-white mb-2'>
          {booking.event?.name}
        </h3>
        <p className='text-gray-300'>
          <span className='font-medium text-white'>Description:</span> {booking.event?.description}
        </p>
        <p className='text-gray-300'>
          <span className='font-medium text-white'>Date:</span> {formatDate(booking.event?.date)}
        </p>
        <p className='text-gray-300'>
          <span className='font-medium text-white'>Location:</span> {booking.event?.location}
        </p>
        <p className='text-gray-300'>
          <span className='font-medium text-white'>Seats Booked:</span> {booking?.seats}
        </p>
        <p className='text-gray-300'>
          <span className='font-medium text-white'>Status:</span> 
          <span className='ml-2 badge badge-success'>{booking?.status}</span>
        </p>

<button
onClick={(e)=>handelCancelBooking(e,booking._id)}
className='absolute btn btn-error right-4 top-4 font-bold text-[18px] ' >CancelBooking</button>

      </div>
    ))
  }
</div>









    </div>
  
  )
}

export default ProfilePage