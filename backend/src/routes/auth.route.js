import express from 'express'
import { login, logout, signup,getCurrentUser } from '../controllers/auth.controller.js';
import {authMiddleware} from '../middlewares/auth.middleware.js'
const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.delete('/logout',logout);
router.get('/currentUser',authMiddleware,getCurrentUser);

export default router;
