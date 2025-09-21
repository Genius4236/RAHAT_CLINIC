import express from "express";
import { processPayment } from "../controller/ProductController.js";
import { getKey } from "../controller/ProductController.js";

const router = express.Router();

router.post('/payment/process',processPayment);
router.get('/payment/key',getKey);
export default router;