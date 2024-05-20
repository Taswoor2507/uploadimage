import express from "express";
import dotenv from 'dotenv';
import path from 'path'
const app = express()

//dotenv config
dotenv.config({
    path:'./config/.env'
})

//express middlewares
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({limit:"16kb" , extended:true}))
app.use(express.static("./public"))

import router from "./routes/user.route.js";
app.use("/api/v1" , router)

export default app;