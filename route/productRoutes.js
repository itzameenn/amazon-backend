import express from "express"
import { updateProduct, deleteProduct, getAllProducts, getSingleProduct, searchProducts, getProductsByCategory, addProduct } from "../controller/productController.js"

const router = express.Router()

router.get("/", getAllProducts)
router.get("/search", searchProducts)
router.get("/category/:id", getProductsByCategory)
router.get("/:id", getSingleProduct)

router.post("/", addProduct)
router.patch("/:id", updateProduct)
router.delete("/:id", deleteProduct)

export default router