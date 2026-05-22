import express from "express"
import { addBanner, getBanners, deleteBanner } from "../controller/bannerController.js"
import { LoginCheck } from "../middleware/auth.middleware.js"

const router = express.Router()

router.post("/", addBanner)
router.get("/", getBanners)

router.delete("/:id", deleteBanner)

export default router