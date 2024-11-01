// src/routes/budgetRoutes.ts

import express from 'express';
import { createBudget, getBudgetById, updateBudget, deleteBudget } from '../controllers/budgetController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

// Create a new budget
router.post('/', authenticate, createBudget);

// Get budget details by ID
router.get('/:id', authenticate, getBudgetById);

// Update budget details
router.patch('/:id', authenticate, updateBudget);

// Delete a budget by ID
router.delete('/:id', authenticate, deleteBudget);

export default router;
