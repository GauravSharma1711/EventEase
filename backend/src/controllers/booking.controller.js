
import Booking from "../models/booking.model.js"
import Event from "../models/event.model.js"
import User from "../models/user.model.js";

import logBooking from "../utils/logger.js";

export const bookSeats = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const userId = req.user.id;
    const { seats } = req.body;

    const user = await User.findById(userId);

    if (!seats || seats < 1 || seats > 2) {
      return res.status(400).json({ error: "You can book 1 or 2 seats only." });
    }

    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ error: "No event found" });
    }

   
    const existingBooking = await Booking.findOne({
      event: eventId,
      bookedBy: userId,
    });

    if (existingBooking) {
      return res.status(400).json({ error: "You have already booked this event." });
    }

    
    const updatedEvent = await Event.findOneAndUpdate(
      { _id: eventId, bookedSeats: { $lte: event.capacity - seats } },
      { $inc: { bookedSeats: seats } },
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(400).json({ error: "Not enough seats available." });
    }

    const booking = await Booking.create({
      event: eventId,
      bookedBy: userId,
      seats,
    });

    logBooking(user, eventId);

    return res.status(201).json({
      message: "Booking successful",
      booking,
      event: updatedEvent, 
    });
    
  } catch (error) {
    console.error("Error in bookSeats controller:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};




export const  getMyBookings = async(req,res)=>{
    try {
        const userId = req.user.id;
        const myBookings  = await Booking.find({bookedBy:userId}).populate("event")

        if(myBookings.length===0){
            return res.status(404).json({error:"no booking found yet"})
        }

        return res.status(200).json({myBookings});

    } catch (error) {
           console.log("error in getMyBookings controller",error)
        return res.status(500).json({error:"Internal server errror"});
    }
}


export const  cancelBooking = async(req,res)=>{
    try {
            const userId = req.user.id;
            const bookingId = req.params.bookingId;

            const booking  = await Booking.findById(bookingId);
               if(!booking){
                return res.status(404).json({error:"booking not found"});
               }

               if(booking.bookedBy.toString() !== userId.toString()){
                return res.status(403).json({error:"not authorized to cancel this booking"})
               }

               const event = await Event.findById(booking.event);

               if(!event){
  return res.status(400).json({error:"event not found"});
               }

              if (new Date(event.date) <= new Date()) {
    return res.status(400).json({ error: "You cannot cancel the event now" });
}
 
                event.bookedSeats-= booking.seats;
                 await event.save();
               
            await Booking.findByIdAndDelete(bookingId);

              return res.status(200).json({ message: "Booking cancelled successfully" });

    } catch (error) {
           console.log("error in cancelBooking controller",error)
        return res.status(500).json({error:"Internal server errror"});
    }
}


export const getAllAttendees = async(req,res)=>{
    try {
        const userId = req.user.id;
        const eventId =  req.params.eventId

        const event = await Event.findById(eventId);
        if(!event){
            return res.status(404).json({error:"no event found"});
        }

        const user  = await User.findById(userId);
        if(user.role!=="admin"){
            return res.status(403).json({error:"not authorized to see attendee"});
        }

        const bookings = await Booking.find({
            event:eventId,
        }).populate("bookedBy","-password")
       

        return res.status(200).json({ attendees: bookings });


    } catch (error) {
           console.log("error in getAll Attendees controller",error)
        return res.status(500).json({error:"Internal server errror"});
    }
}