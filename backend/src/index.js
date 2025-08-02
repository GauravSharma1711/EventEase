import express from 'express';
import connectDB from './db/db.js';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/auth.route.js';
import eventRoutes from './routes/event.route.js';
import bookingRoutes from './routes/booking.route.js';

import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 8000;


const __dirname = path.dirname(fileURLToPath(import.meta.url));
const frontendPath = path.resolve(__dirname, "../../../frontend/dist");


// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// CORS only in development
if (process.env.NODE_ENV.trim() !== 'production') {
  app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:5173',
    })
  );
}

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/event', eventRoutes);
app.use('/api/v1/booking', bookingRoutes);

// Serve static files from frontend in production
if (process.env.NODE_ENV.trim() === 'production') {
app.use(express.static(frontendPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});
}

// Start server
app.listen(PORT, () => {
  connectDB();
  console.log(`server listening at ${PORT}`);
});
