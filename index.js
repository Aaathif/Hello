import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";

import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import productsRoute from "./routes/products.js";
import MenuListsRoute from "./routes/menuLists.js";


import cookieParser from "cookie-parser";
import cors from "cors";

const app = express()
dotenv.config()


//mongoose connection method

app.use(cookieParser())

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB....");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!...");
});

mongoose.connection.on("connected", () => {
    console.log("mongoDB Connected!!!");
});

// app.get("/users", (req,res) => {
//     res.send("Hello frist resquest")
// })


//middleware
app.use(cors())
app.use(cookieParser()) 
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/product", productsRoute);
app.use("/api/menuList", MenuListsRoute);

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(8000, ()=> {
    connect()
    console.log("hello world Connected to backend.!")
})

