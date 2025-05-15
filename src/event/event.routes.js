import { Router } from 'express';
import { createEvent, updateEvent, deleteEvent, getEventsByHotel } from './event.controller.js';
import { createEventValidator, editDeleteEventValidator, DeleteEventValidator } from '../middlewares/event-validators.js';

const router = Router();

router.post('/create', createEventValidator, createEvent);
router.put('/edit/:hotelId/:eventId', editDeleteEventValidator, updateEvent);
router.delete('/delete/:hotelId/:eventId', DeleteEventValidator, deleteEvent);
router.get('/hotel/:hotelId', getEventsByHotel);

export default router;