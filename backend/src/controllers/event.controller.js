

import Event from '../models/event.model.js'
import User from '../models/user.model.js';
import generateEventId from '../utils/generateEventId.js'

export const createEvent = async(req,res)=>{
    try {
        
 const {name,description,capacity,location,category,date} = req.body;

 if(!name || !description || !capacity || !location || !category || !date){
    return res.status(400).json({error:"All fields are required"});
 }
 
 const loggedInUserId = req.user.id;
 const loggedInUser = await User.findById(loggedInUserId);

    if(loggedInUser.role!=="admin"){
        return res.status(403).json({error:"not authorized to create event"});
    }

   const eventId =  generateEventId();

    const event  = await Event.create({
         name,
         description,
         capacity,
         location,
         category,
         date,
         createdBy: loggedInUser._id,
         eventId:eventId
    })

    return res.status(201).json({event,message:"event created successfully"});

    } catch (error) {
           console.log("error in create event controller",error);
           return res.status(500).json({error:"Internal server error"});
    }
}


export const updateEvent = async(req,res)=>{
    try {
        

         const { eventId } = req.params; 
    const { name, description, capacity, location, category,date } = req.body;

    const loggedInUser = await User.findById(req.user.id);
    if (!loggedInUser || loggedInUser.role !== 'admin') {
      return res.status(403).json({ error: 'Not authorized to update event' });
    }

    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    
    if (name) event.name = name;
    if (description) event.description = description;
    if (capacity) event.capacity = capacity;
    if (location) event.location = location;
    if (category) event.category = category;
    if (date) event.date = new Date(date);

    await event.save();

    return res.status(200).json({
      message: 'Event updated successfully',
      event,
    });




    } catch (error) {
        console.log("error in update event controller",error);
        return res.status(500).json({error:"Internal server error"});
        
    }
}


export const deleteEvent = async(req,res)=>{
    try {
    
         const { eventId } = req.params; 
   

    const loggedInUser = await User.findById(req.user.id);
    if (!loggedInUser || loggedInUser.role !== 'admin') {
      return res.status(403).json({ error: 'Not authorized to delete event' });
    }

    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }


       await Event.findByIdAndDelete(eventId);

    return res.status(200).json({ message: 'Event deleted successfully' });


    } catch (error) {
           console.log("error in delete event controller",error);
        return res.status(500).json({error:"Internal server error"});
    }
}


export const getAllEvents = async (req,res)=>{
    try {
        const events = await Event.find({});
    

          if (events.length === 0) {
      return res.status(404).json({ error: "No events found yet" });
    }

        return res.status(200).json({events,message:"All Events fetched successfullly"});

    } catch (error) {
          console.log("error in  getAllEvent controller",error);
        return res.status(500).json({error:"Internal server error"});
    }
}


export const updateEventStatus = async (req, res) => {
  try {
    const eventId = req.params.eventId;

    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    
    const today = new Date();
    

    
    const eventDate = new Date(event.date);
    

    if (eventDate > today) {
      event.status = "Upcoming";
    } else if (eventDate < today) {
      event.status = "Completed";
    } else {
      event.status = "Ongoing";
    }

    await event.save();

    return res.status(200).json({
      message: "Event status updated",
      status: event.status,
    });

  } catch (error) {
    console.error("Error in updateEventStatus controller:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};