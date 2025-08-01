import express from 'express'
import {  bookSeats, cancelBooking, getAllAttendees, getMyBookings } from '../controllers/booking.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/bookEvent/:eventId',authMiddleware,bookSeats);
router.get('/myBookings',authMiddleware,getMyBookings);
router.delete('/:bookingId',authMiddleware,cancelBooking);
router.get('/allBookings/:eventId',authMiddleware,getAllAttendees);


export default router;