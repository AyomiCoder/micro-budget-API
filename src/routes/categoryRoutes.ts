// src/routes/categoryRoutes.ts

import express from 'express';
import { createCategory, getCategoryById, updateCategory, deleteCategory } from '../controllers/categoryController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

// Create a new category
router.post('/', authenticate, createCategory);

// Get category details by ID
router.get('/:id', authenticate, getCategoryById);

// Update category details
router.patch('/:id', authenticate, updateCategory);

// Delete a category by ID
router.delete('/:id', authenticate, deleteCategory);

export default router;
