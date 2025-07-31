import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"})) // json se data aya toh kya karna hai uska middleware (.use middlewares ke liye hei use hota hai)

app.use(express.urlencoded({extended: true, limit: "16kb"})) // url se data aya toh uske liye middleware

app.use(express.static("public")) // kuch file jaise image/pdf ho joh khudke pass store rakhna hai khudke server par toh public folder bana dete hai store karne ke liye

app.use(cookieParser()) // user ke browser ki cookies access and set kar pao so kuch ways se secure cookies store kar sakte hai aur sirf hei unko access kar sakta hai and server hei unko remove kar sakta hai

export default app;