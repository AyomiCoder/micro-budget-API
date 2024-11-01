// src/routes/transactionRoutes.ts

import express from 'express';
import { recordTransaction, getTransactionById, getTransactionsByAccountId } from '../controllers/transactionController';

const router = express.Router();

// Record a new transaction
router.post('/', recordTransaction);

// Get transaction details by ID
router.get('/:id', getTransactionById);

// Get all transactions for an account
router.get('/account/:accountId', getTransactionsByAccountId);

export default router;
