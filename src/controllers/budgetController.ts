// src/controllers/budgetController.ts

import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Budget } from '../entities/Budget';

export const createBudget = async (req: Request, res: Response) => {
    const { user_id, total_amount, start_date, end_date } = req.body;

    const budgetRepository = getRepository(Budget);
    const newBudget = budgetRepository.create({
        user_id,
        total_amount,
        start_date,
        end_date,
    });

    await budgetRepository.save(newBudget);
    res.status(201).json(newBudget);
};

export const getBudgetById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const budgetRepository = getRepository(Budget);
    const budget = await budgetRepository.findOne(id);

    if (!budget) {
        return res.status(404).json({ message: 'Budget not found' });
    }

    res.status(200).json(budget);
};

export const updateBudget = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { total_amount, start_date, end_date } = req.body;

    const budgetRepository = getRepository(Budget);
    const budget = await budgetRepository.findOne(id);

    if (!budget) {
        return res.status(404).json({ message: 'Budget not found' });
    }

    budget.total_amount = total_amount !== undefined ? total_amount : budget.total_amount;
    budget.start_date = start_date || budget.start_date;
    budget.end_date = end_date || budget.end_date;

    await budgetRepository.save(budget);
    res.status(200).json(budget);
};

export const deleteBudget = async (req: Request, res: Response) => {
    const { id } = req.params;

    const budgetRepository = getRepository(Budget);
    const result = await budgetRepository.delete(id);

    if (result.affected === 0) {
        return res.status(404).json({ message: 'Budget not found' });
    }

    res.status(200).json({ message: 'Budget deleted successfully' });
};
