// src/routes/transactionRoutes.ts

import express from 'express';
import { recordTransaction, getTransactionById, getTransactionsByAccountId } from '../controllers/transactionController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

// Record a new transaction
router.post('/', authenticate, recordTransaction);

// Get transaction details by ID
router.get('/:id', authenticate, getTransactionById);

// Get all transactions for an account
router.get('/account/:accountId', authenticate, getTransactionsByAccountId);

export default router;
