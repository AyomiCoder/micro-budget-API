// src/routes/accountRoutes.ts

import express from 'express';
import { createAccount, getAccountById, updateAccount, deleteAccount } from '../controllers/accountController';

const router = express.Router();

// Create a new account
router.post('/', createAccount);

// Get account details by ID
router.get('/:id', getAccountById);

// Update account balance or details
router.patch('/:id', updateAccount);

// Delete an account by ID
router.delete('/:id', deleteAccount);

export default router;
