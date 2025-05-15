import { Router } from "express";
import { createService, getServices, getServiceById, getServiceByName, editService, deleteService } from "./service.controller.js";
import { createServiceValidator, editServiceValidator, deleteteServiceValidator } from "../middlewares/service-validators.js";

const router = Router();

router.post('/createService', createServiceValidator, createService);

router.get('/', getServices);

router.get('/getserviceId/:id', getServiceById);

router.get('/getserviceName/:name', getServiceByName);

router.put('/editservice/:id', editServiceValidator, editService);

router.delete('/deleteservice/:id', deleteteServiceValidator, deleteService);

export default router
