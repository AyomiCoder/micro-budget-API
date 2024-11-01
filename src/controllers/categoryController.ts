// src/controllers/categoryController.ts

import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Category } from '../entities/Category';

export const createCategory = async (req: Request, res: Response) => {
    const { userId, name, amount_allocated } = req.body;

    const categoryRepository = getRepository(Category);
    const newCategory = categoryRepository.create({
        user_id: userId,
        name,
        amount_allocated,
    });

    await categoryRepository.save(newCategory);
    res.status(201).json(newCategory);
};

export const getCategoryById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const categoryRepository = getRepository(Category);
    const category = await categoryRepository.findOne(id);

    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json(category);
};

export const updateCategory = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, amount_allocated } = req.body;

    const categoryRepository = getRepository(Category);
    const category = await categoryRepository.findOne(id);

    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }

    category.name = name || category.name;
    category.amount_allocated = amount_allocated !== undefined ? amount_allocated : category.amount_allocated;

    await categoryRepository.save(category);
    res.status(200).json(category);
};

export const deleteCategory = async (req: Request, res: Response) => {
    const { id } = req.params;

    const categoryRepository = getRepository(Category);
    const result = await categoryRepository.delete(id);

    if (result.affected === 0) {
        return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json({ message: 'Category deleted successfully' });
};
