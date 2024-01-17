import express from "express"
import {update,delate,subscribe,unsubscribe,like,dislike,geateuser} from "../controllers/user.js"
import { varifyToken } from "../varifyToken.js"

const router = express.Router()
//ubdate user 
router.put("/:id",varifyToken,update)
//delate user
router.delete("/:id",delate)
//geat a user
router.get("/finde/:id",geateuser)
//subscribe user
router.put("/sub/:id",subscribe)
//un subscribe user
router.put("/unsub/:id",unsubscribe)
//like a video
router.put("/like/:videoId",like)
//dislike a video
router.put("/dislike/:videoId",dislike)



export default router