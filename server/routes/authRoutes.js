import express from "express"
import authRoutes from "../controller/authController/index.js"

const router = express.Router()

router.post("/register",authRoutes.register)
router.post("/login" , authRoutes.login)
router.post("/forgetPassword" , authRoutes.forgetPassword)
router.post("/updatePassword" , authRoutes.updatePassword)
router.post("/isValidAuthtoken" , authRoutes.isValidAuthtoken)





export default router;