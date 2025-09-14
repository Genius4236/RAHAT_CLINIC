import express from "express";
import { processPayment } from "../controller/ProductController.js";
import { getKey } from "../controller/ProductController.js";

const router = express.Router();


router.route('/payment/process').post(processPayment);
router.route('/payment/key').get(getKey);
export default router;