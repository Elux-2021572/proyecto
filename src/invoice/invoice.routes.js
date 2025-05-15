import { Router } from "express";
import {generateInvoicePDF, generateInvoiceAdmin, ListInvoicesByHotelId, InvoicesByUserId, InvoicesForHotelAdmin, UserInvoicesForHotelAdmin} from "./invoice.controller.js";
import { invoiceValidator, invoiceAdminsValidator, invoiceListHotelValidator, invoiceListUserValidator } from "../middlewares/invoice-validators.js";

const router = Router();

router.get('/generate/:reservationId',invoiceValidator,generateInvoicePDF);
router.get('/generateAdmin/:reservationId', invoiceAdminsValidator, generateInvoiceAdmin);
router.get('/hotel/:hotelId', invoiceListHotelValidator, ListInvoicesByHotelId);
router.get('/user/:userId', invoiceListUserValidator, InvoicesByUserId);
router.get('/hotelAdmin/:hotelId', invoiceListHotelValidator, InvoicesForHotelAdmin);
router.get('/userHotelAdmin/:userUid', invoiceListUserValidator, UserInvoicesForHotelAdmin);


export default router
