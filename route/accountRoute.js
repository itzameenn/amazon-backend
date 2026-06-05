import express from "express"
import { getUsers, registerUser, loginUser } from "../controller/accountController.js"
import { LoginCheck } from "../middleware/auth.middleware.js"
import { isAdmin } from "../middleware/isAdmin.js"

const router = express.Router()

router.get("/", LoginCheck, isAdmin, getUsers)

router.post("/login", loginUser)   
router.post("/", registerUser)     

export default router