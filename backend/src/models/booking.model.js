import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true
  },
  bookedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  seats: {
    type: Number,
    enum: [1, 2], 
    default: 1,
    required: true
  },
  status: {
  type: String,
  enum: ['confirmed', 'cancelled', 'pending'],
  default: 'confirmed'
}

}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
