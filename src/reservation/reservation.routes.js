import { Router } from "express";
import { reserveRoom, cancelReservation, MyReservations, ReservationAdmin,UserReservationsAdminHotel } from "./reservation.controller.js";
import { reservationValidator, cancelReservationValidator, UserReservationValidator, ManagerReservationValidator, AdminReservationValidator } from "../middlewares/reservation-validators.js";

const router = Router();

router.post('/Reserve', reservationValidator, reserveRoom);

router.put('/Cancel/:reservationId', cancelReservationValidator, cancelReservation);

router.get('/my-reservations', UserReservationValidator, MyReservations);

router.get('/user-reservations/:identifier', AdminReservationValidator, ReservationAdmin);

router.get('/admin/hotel-reservations/:identifier', ManagerReservationValidator, UserReservationsAdminHotel);


export default router
