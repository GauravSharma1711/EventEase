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
   location:{
    type:String,
    enum:["Online","In-Person"],
    default:"Online"
   },
   category: {
   type:String,
   required:true,
}




},{timestamps:true})

const Event = mongoose.model("Event",eventSchema);

export default Event;