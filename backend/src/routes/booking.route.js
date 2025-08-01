import express from 'express'
import {  bookSeats, cancelBooking, getAllAttendees, getMyBookings } from '../controllers/booking.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/bookEvent',authMiddleware,bookSeats);
router.get('/myBookings',getMyBookings);
router.delete('/:bookingId',cancelBooking);
router.get('/allBookings/:eventId',getAllAttendees);


export default router;