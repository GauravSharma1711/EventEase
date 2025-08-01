import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({

 name:{
    type:String,
    required:true,
    trim: true
 },
 description:{
  type:String,
    required:true,
 },
 capacity:{
    type:Number,  
    required:true,
    min: 1
   },
    bookedSeats: {
    type: Number,
    default: 0
  },
   location:{
    type:String,
    enum:["Online","In-Person"],
    default:"Online"
   },
   category: {
   type:String,
   required:true,
},
status:{
   type:"String",
   enum:["Upcoming","Ongoing","Completed"],
   default:"Upcoming"
},
date: {
  type: Date,
  required: true
},
 eventId: {
    type: String,
    unique: true
  },






},{timestamps:true})

const Event = mongoose.model("Event",eventSchema);

export default Event;