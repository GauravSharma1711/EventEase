import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

    const navigate = useNavigate();

  return (
     <div className=' bg-black min-h-screen w-full flex flex-col ' >

<Navbar/>


 <main className=' flex-grow'>

  <div className=' flex flex-col items-center justify-center gap-4 mt-8 px-12 py-6'>
    <h1 className=' font-bold text-5xl p-2'>Welcome to EventEase</h1>
    <p className=' font-light text-md text-2xl '>Event Booking Platform </p>
  </div>

    
    <div className=' flex items-center justify-center mx-4 my-4 p-8' >
<button 
onClick={()=>navigate('/events')}
className='text-2xl border-2 border-white px-16 py-2 rounded-4xl cursor-pointer'  >Browse Events</button>
    </div>




<div>
  <h2 className=' flex items-center justify-center text-3xl'>Our Features</h2>
</div>
  <div className=' grid  grid-cols-1 md:grid-cols-2 sm:justify-items-center xl:place-items-start lg:grid-cols-4 ' >

   <div className="card bg-base-200 text-neutral-content m-8 lg:w-56 w-66  ">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Book Events</h2>
    <p>Book 2 seats per event</p>
  </div>
</div>



 <div className="card bg-base-200 text-neutral-content m-8 lg:w-56 w-66">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Browse Events</h2>
    <p>Browse All Events without register</p>
  </div>
</div>
  

   <div className="card bg-base-200 text-neutral-content m-8 lg:w-56 w-66">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Event Filtering</h2>
    <p>Filter Events base on category, Location ans Date</p>
  </div>
</div>
  

 <div className="card bg-base-200 text-neutral-content m-8 lg:w-56 w-66">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Cancel Event</h2>
    <p>Cancel event before start date</p>
  </div>
</div>


  </div>
</main>


<Footer/>

    </div>
  )
}

export default HomePage