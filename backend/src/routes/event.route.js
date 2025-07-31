import express from 'express'
import { createEvent, deleteEvent, getAllEvents, updateEvent,updateEventStatus } from '../controllers/event.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/create',authMiddleware,createEvent);
router.put('/update/:eventId',authMiddleware,updateEvent);
router.delete('/delete/:eventId',authMiddleware,deleteEvent);
router.get('/all',authMiddleware,getAllEvents);
router.put('/updateStatus/:eventId',authMiddleware,updateEventStatus);


export default router;
