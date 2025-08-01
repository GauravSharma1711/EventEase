import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

import useEventStore from '../store/eventStore.js';
import   useBookingStore from '../store/bookingStore.js'
import   useAuthStore from '../store/authStore.js'
import UpdateEvent from '../Components/UpdateEvent.jsx';

const Event = () => {

    const {authUser} = useAuthStore();

    const {eventId} = useParams();

    const {fetchAllBookings,allBookings} = useBookingStore();


    const {updateEventStatus,getEventById,event,eventStatus} = useEventStore();
  
  
    useEffect(() => {
   updateEventStatus(eventId)
    }, [updateEventStatus,eventId])

    useEffect(() => {
   getEventById(eventId)
    }, [eventId,getEventById])
    
    useEffect(() => {
    fetchAllBookings(eventId)
    }, [fetchAllBookings,eventId])
    



  return (
    <div className=' flex flex-col gap-4 bg-base-300 w-full  h-[540px] overflow-y-scroll ' >


  <div className=' flex border rounded-2xl justify-between px-8 py-4 m-4' >
    <div className=' flex flex-col gap-2'>
    <h1 className=' font-bold text-3xl' >{event?.name}</h1>
    <p className=' font-light text-2xl' >{event?.description}</p>
    </div>
    <div className=' flex  items-center gap-2'>
     {event && (
   <UpdateEvent eventId={eventId} />
)}
       <div className="badge badge-success">{eventStatus}</div>
    </div>
   </div>


{/* event attendees */}

{authUser.role==="admin" && (
<div className='flex flex-col px-4 border-2 m-4 rounded-2xl '>
     <h1 className=' p-4 text-3xl' >Event Attendees</h1>
{allBookings.map(attendee => (
  <div
    key={attendee._id}
    className="w-full bg-base-200 border  rounded-xl shadow-sm p-4 my-2"
  >
    <div className="flex justify-between  items-center mb-2">
      <div>
         <p><span className="font-medium">Booked By:</span> {attendee.bookedBy.fullName}</p>
      <p><span className="font-medium">Email:</span> {attendee.bookedBy.email}</p>
      <p><span className="font-medium">Seats Booked:</span> {attendee.seats}</p>
      </div>
      <span className="badge badge-success capitalize">{attendee.status}</span>
    </div>
  </div>
))}



















    

    </div>

)
}
        </div>
  )
}

export default Event