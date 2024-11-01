// src/controllers/transactionController.ts

import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Transactions } from '../entities/Transactions';

export const recordTransaction = async (req: Request, res: Response) => {
    const { account_id, category_id, description, amount } = req.body;

    const transactionRepository = getRepository(Transactions);
    const newTransaction = transactionRepository.create({
        account_id,
        category_id,
        description,
        amount,
    });

    await transactionRepository.save(newTransaction);
    res.status(201).json(newTransaction);
};

export const getTransactionById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const transactionRepository = getRepository(Transactions);
    const transaction = await transactionRepository.findOne(id);

    if (!transaction) {
        return res.status(404).json({ message: 'Transaction not found' });
    }

    res.status(200).json(transaction);
};

export const getTransactionsByAccountId = async (req: Request, res: Response) => {
    const { accountId } = req.params;

    const transactionRepository = getRepository(Transactions);
    const transactions = await transactionRepository.find({ where: { account_id: accountId } });

    res.status(200).json(transactions);
};
