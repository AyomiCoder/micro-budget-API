// src/routes/budgetRoutes.ts

import express from 'express';
import { createBudget, getBudgetById, updateBudget, deleteBudget } from '../controllers/budgetController';

const router = express.Router();

// Create a new budget
router.post('/', createBudget);

// Get budget details by ID
router.get('/:id', getBudgetById);

// Update budget details
router.patch('/:id', updateBudget);

// Delete a budget by ID
router.delete('/:id', deleteBudget);

export default router;
