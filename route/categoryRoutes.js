import express from "express"
import { updateCategory, deleteCategory ,CreateCategory, getCategoryById, getCategories} from "../controller/categoryController.js"

const router = express.Router()

router.get("/", getCategories)
router.get("/:id", getCategoryById)

router.post("/",CreateCategory)

router.patch("/:id", updateCategory)
router.delete("/:id", deleteCategory)

export default router