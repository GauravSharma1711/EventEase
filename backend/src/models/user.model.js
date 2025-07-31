import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username:{
           type: String,
      required: true,
      unique: true, 
      trim: true
    },
    email:{
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    fullName:{
       type: String,
       required: true,
       trim: true
    },
    password:{
     type: String,
      required: true,
       minlength: 6
    },

    role:{
   type:String,
   enum:["admin","user"],
   default:"user"
    },
    bookings:[{
         type:mongoose.Schema.Types.ObjectId,
         ref:"Booking"
    }]


},{timestamps:true})

const User = mongoose.model("User",userSchema);

export default User;