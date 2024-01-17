import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./routes/users.js"
import videoRouter from "./routes/viedo.js"
import comentRouter from "./routes/comment.js"
import authenRouter from "./routes/authe.js"
import cookieParser from "cookie-parser"
const app = express()
dotenv.config()
const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("db has conected succesfuly")
    } catch(error){
        console.log(error.message)
        process.exit(1)

    }
}
app.use(cookieParser())
app.use(express.json())
app.use("/api/users",userRouter)
app.use("/api/video",videoRouter)
app.use("/api/coment",comentRouter)
app.use("/api/authen",authenRouter)
app.listen(3001,()=>{
    connect()
    console.log("port is app and runinnigs in 3001")
})