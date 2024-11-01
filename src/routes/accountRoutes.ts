// src/routes/accountRoutes.ts

import express from 'express';
import { createAccount, getAccountById, updateAccount, deleteAccount } from '../controllers/accountController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

// Create a new account
router.post('/', authenticate, createAccount);

// Get account details by ID
router.get('/:id', authenticate, getAccountById);

// Update account balance or details
router.patch('/:id', authenticate, updateAccount);

// Delete an account by ID
router.delete('/:id', authenticate, deleteAccount);

export default router;
