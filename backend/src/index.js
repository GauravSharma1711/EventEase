import express from 'express'

import connectDB from './db/db.js'
import  dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoutes from './routes/auth.route.js'
import eventRoutes from './routes/event.route.js'
import bookingRoutes from './routes/booking.route.js'


import path from "path"


const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());

if(process.env.NODE_ENV.trim() !== "production"){

app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))

}

app.use(express.urlencoded({extended:true}))

const __dirname = path.resolve();

app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/event',eventRoutes);
app.use('/api/v1/booking',bookingRoutes);



if(process.env.NODE_ENV.trim() === "production"){
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "../frontend", "dist" , "index.html"));
  })
}


app.listen(PORT,()=>{
    connectDB();
    console.log(`server listning at ${PORT}`);
    
})