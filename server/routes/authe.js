import express from "express"
import {signin, signup} from "../controllers/authen.js"

const router = express.Router()

//create user 
router.post("/signup",signup)
//sinIn
router.post("/signin",signin)
//google authentication
router.post("/google",)

export default router