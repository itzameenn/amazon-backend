import express from "express"
import { createPaymentOrder } from "../controller/paymentController.js"

const router = express.Router()

router.post("/create-order", createPaymentOrder)

export default router