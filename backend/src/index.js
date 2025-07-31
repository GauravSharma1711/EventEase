import express from 'express'

import connectDB from './db/db.js'
import  dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoutes from './routes/auth.route.js'



const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))



app.use('/api/v1/auth',authRoutes);


app.listen(PORT,()=>{
    connectDB();
    console.log(`server listning at ${PORT}`);
    
})