// src/routes/categoryRoutes.ts

import express from 'express';
import { createCategory, getCategoryById, updateCategory, deleteCategory } from '../controllers/categoryController';

const router = express.Router();

// Create a new category
router.post('/', createCategory);

// Get category details by ID
router.get('/:id', getCategoryById);

// Update category details
router.patch('/:id', updateCategory);

// Delete a category by ID
router.delete('/:id', deleteCategory);

export default router;
