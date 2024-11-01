// src/routes/userRoutes.ts

import express from 'express';
import { registerUser, loginUser, getUserById } from '../controllers/userController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

// Register a new user
router.post('/', registerUser);

// User login
router.post('/login', loginUser);

// Get user details by ID
router.get('/:id', authenticate, getUserById);

export default router;
