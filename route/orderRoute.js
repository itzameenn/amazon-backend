import express from "express"
import { createOrder, getOrders, updateOrderStatus } from "../controller/orderController.js"

const router = express.Router()

router.post("/", createOrder)
router.get("/", getOrders)
router.put("/:id", updateOrderStatus)

export default router