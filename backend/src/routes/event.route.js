import express from 'express'
import { createEvent, deleteEvent, getAllEvents,getEventById ,updateEvent,updateEventStatus } from '../controllers/event.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/create',authMiddleware,createEvent);
router.put('/update/:eventId',authMiddleware,updateEvent);
router.delete('/delete/:eventId',authMiddleware,deleteEvent);
router.get('/all',getAllEvents);
router.put('/updateStatus/:eventId',authMiddleware,updateEventStatus);

router.get('/:eventId',authMiddleware,getEventById);


export default router;
